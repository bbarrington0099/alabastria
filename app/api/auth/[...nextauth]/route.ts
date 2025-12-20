/**
 * Auth.js Route Handler
 * 
 * Handles all authentication routes:
 * - GET /api/auth/signin
 * - GET /api/auth/signout
 * - GET /api/auth/session
 * - POST /api/auth/signin/credentials
 * - etc.
 */

import { handlers } from "@lib/auth";

export const { GET, POST } = handlers;

