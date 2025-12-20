"use server";

/**
 * Authentication Server Actions
 * 
 * Handles auth-related operations like password changes
 */

import { auth, signIn, signOut } from "@lib/auth";
import { prisma } from "@lib/prisma";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// ============================================================================
// TYPES
// ============================================================================

export type AuthResult = {
    success: boolean;
    error?: string;
};

// ============================================================================
// SIGN IN / SIGN OUT
// ============================================================================

/**
 * Sign in with email and password
 */
export async function signInWithCredentials(
    formData: FormData
): Promise<AuthResult> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        return { success: false, error: "Email and password are required" };
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        return { success: true };
    } catch (error) {
        console.error("Sign in error:", error);
        return { success: false, error: "Invalid email or password" };
    }
}

/**
 * Sign out the current user
 */
export async function signOutUser(): Promise<void> {
    await signOut({ redirect: false });
    redirect("/login");
}

// ============================================================================
// PASSWORD MANAGEMENT
// ============================================================================

/**
 * Change password for the current user
 * Used for first-login password change and regular password updates
 */
export async function changePassword(
    formData: FormData
): Promise<AuthResult> {
    const session = await auth();

    if (!session?.user?.id) {
        return { success: false, error: "Not authenticated" };
    }

    const currentPassword = formData.get("currentPassword") as string;
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    // Validation
    if (!currentPassword || !newPassword || !confirmPassword) {
        return { success: false, error: "All fields are required" };
    }

    if (newPassword !== confirmPassword) {
        return { success: false, error: "New passwords do not match" };
    }

    if (newPassword.length < 8) {
        return { success: false, error: "Password must be at least 8 characters" };
    }

    // Get current user
    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
    });

    if (!user || !user.passwordHash) {
        return { success: false, error: "User not found" };
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(currentPassword, user.passwordHash);

    if (!isValidPassword) {
        return { success: false, error: "Current password is incorrect" };
    }

    // Hash new password and update
    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
        where: { id: session.user.id },
        data: {
            passwordHash: newPasswordHash,
            mustChangePassword: false,
        },
    });

    revalidatePath("/");

    return { success: true };
}

/**
 * Check if the current user must change their password
 */
export async function mustChangePassword(): Promise<boolean> {
    const session = await auth();
    return session?.user?.mustChangePassword ?? false;
}

// ============================================================================
// SESSION HELPERS
// ============================================================================

/**
 * Get the current user's session
 */
export async function getCurrentUser() {
    const session = await auth();
    return session?.user ?? null;
}

/**
 * Check if the current user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
    const session = await auth();
    return !!session?.user;
}

/**
 * Check if the current user has a specific role
 */
export async function hasRole(role: "ADMIN" | "DM" | "GUILD_MEMBER"): Promise<boolean> {
    const session = await auth();
    return session?.user?.role === role;
}

/**
 * Check if the current user is an admin
 */
export async function isAdmin(): Promise<boolean> {
    return hasRole("ADMIN");
}

/**
 * Check if the current user is a DM or admin
 */
export async function isDMOrAdmin(): Promise<boolean> {
    const session = await auth();
    return session?.user?.role === "ADMIN" || session?.user?.role === "DM";
}

