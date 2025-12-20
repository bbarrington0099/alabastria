"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOutUser } from "@actions/auth";
import styles from "./Header.module.scss";

interface HeaderProps {
    user: {
        id: string;
        name?: string | null;
        email: string;
        role: "ADMIN" | "DM" | "GUILD_MEMBER";
    } | null;
}

const navLinks = [
    { href: "/world", label: "World", icon: "🌍" },
    { href: "/races", label: "Races", icon: "👥" },
    { href: "/classes", label: "Classes", icon: "⚔️" },
    { href: "/pantheon", label: "Pantheon", icon: "🏛️" },
    { href: "/guilds", label: "Guilds", icon: "🛡️" },
    { href: "/bestiary", label: "Bestiary", icon: "🐉" },
    { href: "/npc-generator", label: "NPC Gen", icon: "🎲" },
];

const adminLinks = [
    { href: "/admin", label: "Admin", icon: "⚙️" },
];

const dmLinks = [
    { href: "/dm", label: "DM Tools", icon: "📋" },
];

export function Header({ user }: HeaderProps) {
    const pathname = usePathname();

    const handleSignOut = async () => {
        await signOutUser();
    };

    const isLoggedIn = !!user;
    const isAdmin = user?.role === "ADMIN";
    const isDM = user?.role === "DM" || user?.role === "ADMIN";

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>⚔️</span>
                    <span className={styles.logoText}>Alabastria</span>
                </Link>

                {/* Main Navigation - visible to all */}
                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${pathname.startsWith(link.href) ? styles.active : ""}`}
                        >
                            <span className={styles.navIcon}>{link.icon}</span>
                            <span className={styles.navLabel}>{link.label}</span>
                        </Link>
                    ))}

                    {/* DM Links - only for logged in DMs/Admins */}
                    {isDM && dmLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${styles.dmLink} ${pathname.startsWith(link.href) ? styles.active : ""}`}
                        >
                            <span className={styles.navIcon}>{link.icon}</span>
                            <span className={styles.navLabel}>{link.label}</span>
                        </Link>
                    ))}

                    {/* Admin Links - only for logged in Admins */}
                    {isAdmin && adminLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${styles.adminLink} ${pathname.startsWith(link.href) ? styles.active : ""}`}
                        >
                            <span className={styles.navIcon}>{link.icon}</span>
                            <span className={styles.navLabel}>{link.label}</span>
                        </Link>
                    ))}
                </nav>

                {/* User Menu / Login */}
                {isLoggedIn ? (
                    <div className={styles.userMenu}>
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>{user.name || user.email}</span>
                            <span className={styles.userRole}>{user.role.replace("_", " ")}</span>
                        </div>
                        <button onClick={handleSignOut} className={styles.signOutBtn}>
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className={styles.authLinks}>
                        <Link href="/login" className={styles.loginBtn}>
                            Sign In
                        </Link>
                    </div>
                )}

                {/* Mobile Menu Toggle */}
                <button className={styles.mobileToggle} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
