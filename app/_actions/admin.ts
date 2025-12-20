"use server";

/**
 * Admin Server Actions
 * 
 * Handles admin-only operations like user management
 */

import { requireAdmin, requireDMOrAdmin } from "@lib/auth";
import { prisma } from "@lib/prisma";
import { CACHE_TAGS, CACHE_LIFE } from "@lib/constants";
import bcrypt from "bcrypt";
import { revalidateTag } from "next/cache";
import type { UserRole } from "@prismagen/client";

// ============================================================================
// TYPES
// ============================================================================

export type AdminResult<T = void> = {
    success: boolean;
    error?: string;
    data?: T;
};

// ============================================================================
// USER MANAGEMENT
// ============================================================================

/**
 * Create a new user (admin only)
 * User will be required to change password on first login
 */
export async function createUser(formData: FormData): Promise<AdminResult<{ id: string }>> {
    try {
        await requireAdmin();

        const email = formData.get("email") as string;
        const name = formData.get("name") as string;
        const password = formData.get("password") as string;
        const role = (formData.get("role") as UserRole) || "GUILD_MEMBER";

        if (!email || !password) {
            return { success: false, error: "Email and password are required" };
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return { success: false, error: "A user with this email already exists" };
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                name,
                passwordHash,
                role,
                mustChangePassword: true,
            },
        });

        revalidateTag(CACHE_TAGS.USERS, CACHE_LIFE.OFFICIAL);

        return { success: true, data: { id: user.id } };
    } catch (error) {
        console.error("Create user error:", error);
        return { success: false, error: "Failed to create user" };
    }
}

/**
 * Update a user's role (admin only)
 */
export async function updateUserRole(
    userId: string,
    role: UserRole
): Promise<AdminResult> {
    try {
        await requireAdmin();

        await prisma.user.update({
            where: { id: userId },
            data: { role },
        });

        revalidateTag(CACHE_TAGS.USERS, CACHE_LIFE.OFFICIAL);

        return { success: true };
    } catch (error) {
        console.error("Update user role error:", error);
        return { success: false, error: "Failed to update user role" };
    }
}

/**
 * Delete a user (admin only)
 */
export async function deleteUser(userId: string): Promise<AdminResult> {
    try {
        const session = await requireAdmin();

        // Prevent self-deletion
        if (session.user.id === userId) {
            return { success: false, error: "You cannot delete your own account" };
        }

        await prisma.user.delete({
            where: { id: userId },
        });

        revalidateTag(CACHE_TAGS.USERS, CACHE_LIFE.OFFICIAL);

        return { success: true };
    } catch (error) {
        console.error("Delete user error:", error);
        return { success: false, error: "Failed to delete user" };
    }
}

/**
 * Reset a user's password (admin only)
 * Sets a new temporary password and requires change on next login
 */
export async function resetUserPassword(
    userId: string,
    newPassword: string
): Promise<AdminResult> {
    try {
        await requireAdmin();

        if (newPassword.length < 8) {
            return { success: false, error: "Password must be at least 8 characters" };
        }

        const passwordHash = await bcrypt.hash(newPassword, 10);

        await prisma.user.update({
            where: { id: userId },
            data: {
                passwordHash,
                mustChangePassword: true,
            },
        });

        return { success: true };
    } catch (error) {
        console.error("Reset password error:", error);
        return { success: false, error: "Failed to reset password" };
    }
}

/**
 * Get all users (admin only)
 */
export async function getAllUsers(): Promise<AdminResult<Array<{
    id: string;
    email: string;
    name: string | null;
    role: UserRole;
    createdAt: Date;
}>>> {
    try {
        await requireAdmin();

        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                createdAt: true,
            },
            orderBy: { createdAt: "desc" },
        });

        return { success: true, data: users };
    } catch (error) {
        console.error("Get users error:", error);
        return { success: false, error: "Failed to fetch users" };
    }
}

// ============================================================================
// GUILD DM MANAGEMENT
// ============================================================================

/**
 * Assign a user as DM for a guild (admin only)
 */
export async function assignGuildDM(
    userId: string,
    guildId: string
): Promise<AdminResult> {
    try {
        await requireAdmin();

        // Check if already assigned
        const existing = await prisma.guildDM.findUnique({
            where: {
                userId_guildId: { userId, guildId },
            },
        });

        if (existing) {
            return { success: false, error: "User is already a DM for this guild" };
        }

        await prisma.guildDM.create({
            data: { userId, guildId },
        });

        revalidateTag(CACHE_TAGS.GUILDS, CACHE_LIFE.OFFICIAL);

        return { success: true };
    } catch (error) {
        console.error("Assign guild DM error:", error);
        return { success: false, error: "Failed to assign DM" };
    }
}

/**
 * Revoke DM access from a guild (admin only)
 */
export async function revokeGuildDM(
    userId: string,
    guildId: string
): Promise<AdminResult> {
    try {
        await requireAdmin();

        await prisma.guildDM.delete({
            where: {
                userId_guildId: { userId, guildId },
            },
        });

        revalidateTag(CACHE_TAGS.GUILDS, CACHE_LIFE.OFFICIAL);

        return { success: true };
    } catch (error) {
        console.error("Revoke guild DM error:", error);
        return { success: false, error: "Failed to revoke DM access" };
    }
}

// ============================================================================
// GUILD MEMBERSHIP MANAGEMENT
// ============================================================================

/**
 * Add a user to a guild (admin only)
 */
export async function assignGuildMembership(
    userId: string,
    guildId: string
): Promise<AdminResult> {
    try {
        await requireAdmin();

        // Check if already a member
        const existing = await prisma.guildMembership.findUnique({
            where: {
                userId_guildId: { userId, guildId },
            },
        });

        if (existing) {
            return { success: false, error: "User is already a member of this guild" };
        }

        await prisma.guildMembership.create({
            data: { userId, guildId },
        });

        revalidateTag(CACHE_TAGS.GUILDS, CACHE_LIFE.OFFICIAL);
        revalidateTag(CACHE_TAGS.GUILD_MEMBERS, CACHE_LIFE.OFFICIAL);

        return { success: true };
    } catch (error) {
        console.error("Assign guild membership error:", error);
        return { success: false, error: "Failed to assign membership" };
    }
}

/**
 * Remove a user from a guild (admin only)
 */
export async function revokeGuildMembership(
    userId: string,
    guildId: string
): Promise<AdminResult> {
    try {
        await requireAdmin();

        await prisma.guildMembership.delete({
            where: {
                userId_guildId: { userId, guildId },
            },
        });

        revalidateTag(CACHE_TAGS.GUILDS, CACHE_LIFE.OFFICIAL);
        revalidateTag(CACHE_TAGS.GUILD_MEMBERS, CACHE_LIFE.OFFICIAL);

        return { success: true };
    } catch (error) {
        console.error("Revoke guild membership error:", error);
        return { success: false, error: "Failed to revoke membership" };
    }
}

/**
 * Get guilds where a user is DM (admin or self)
 */
export async function getUserDMGuilds(userId: string): Promise<AdminResult<Array<{
    id: string;
    name: string;
}>>> {
    try {
        await requireDMOrAdmin();

        const dmRelations = await prisma.guildDM.findMany({
            where: { userId },
            include: {
                guild: {
                    select: { id: true, name: true },
                },
            },
        });

        return {
            success: true,
            data: dmRelations.map((r) => r.guild),
        };
    } catch (error) {
        console.error("Get user DM guilds error:", error);
        return { success: false, error: "Failed to fetch DM guilds" };
    }
}

