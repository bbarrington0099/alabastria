/**
 * Auth Layout
 * 
 * Simple layout for authentication pages (login, change-password)
 * No navigation or complex UI - just the form centered on screen
 */

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

