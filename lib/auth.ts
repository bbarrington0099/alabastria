/**
 * Auth.js (NextAuth v5) Configuration
 * 
 * Uses Credentials provider for email/password authentication
 * with Prisma adapter for database sessions.
 */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import bcrypt from "bcrypt";
import type { UserRole } from "@prismagen/client";

// Extend the session and user types
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            name?: string | null;
            image?: string | null;
            role: UserRole;
            mustChangePassword: boolean;
        };
    }

    interface User {
        role: UserRole;
        mustChangePassword: boolean;
    }
}

declare module "@auth/core/adapters" {
    interface AdapterUser {
        role: UserRole;
        mustChangePassword: boolean;
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt", // Use JWT for sessions since we're using credentials
    },
    pages: {
        signIn: "/login",
        error: "/login",
    },
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const email = credentials.email as string;
                const password = credentials.password as string;

                // Find user by email
                const user = await prisma.user.findUnique({
                    where: { email },
                });

                if (!user || !user.passwordHash) {
                    return null;
                }

                // Verify password
                const isValidPassword = await bcrypt.compare(password, user.passwordHash);

                if (!isValidPassword) {
                    return null;
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    role: user.role,
                    mustChangePassword: user.mustChangePassword,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            // Initial sign in
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.mustChangePassword = user.mustChangePassword;
            }

            // Handle session update (e.g., after password change)
            if (trigger === "update" && session) {
                token.mustChangePassword = session.mustChangePassword ?? token.mustChangePassword;
            }

            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string;
                session.user.role = token.role as UserRole;
                session.user.mustChangePassword = token.mustChangePassword as boolean;
            }
            return session;
        },
    },
});

/**
 * Helper to get the current session on the server
 */
export async function getSession() {
    return await auth();
}

/**
 * Helper to require authentication
 * Throws if not authenticated
 */
export async function requireAuth() {
    const session = await auth();
    if (!session?.user) {
        throw new Error("Unauthorized");
    }
    return session;
}

/**
 * Helper to require a specific role
 */
export async function requireRole(allowedRoles: UserRole[]) {
    const session = await requireAuth();
    if (!allowedRoles.includes(session.user.role)) {
        throw new Error("Forbidden");
    }
    return session;
}

/**
 * Helper to require admin role
 */
export async function requireAdmin() {
    return requireRole(["ADMIN"]);
}

/**
 * Helper to require DM or Admin role
 */
export async function requireDMOrAdmin() {
    return requireRole(["ADMIN", "DM"]);
}

