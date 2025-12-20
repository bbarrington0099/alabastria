import { auth } from "@lib/auth";
import Link from "next/link";
import styles from "./page.module.scss";

const publicQuickLinks = [
    { href: "/world", label: "Explore the World", icon: "🌍", description: "Discover continents, kingdoms, and their histories" },
    { href: "/races", label: "Browse Races", icon: "👥", description: "Learn about the diverse peoples of Alabastria" },
    { href: "/classes", label: "View Classes", icon: "⚔️", description: "Study the paths of warriors, mages, and more" },
    { href: "/pantheon", label: "Gods & Deities", icon: "🏛️", description: "Explore the pantheons and their divine domains" },
    { href: "/guilds", label: "Guild Halls", icon: "🛡️", description: "Discover the guilds that shape the land" },
    { href: "/npc-generator", label: "NPC Generator", icon: "🎲", description: "Create random NPCs for your adventures" },
];

export default async function HomePage() {
    const session = await auth();
    const user = session?.user;
    const isLoggedIn = !!user;
    const isAdmin = user?.role === "ADMIN";
    const isDM = user?.role === "DM" || user?.role === "ADMIN";

    return (
        <div className={styles.dashboard}>
            {/* Welcome Section */}
            <section className={styles.welcome}>
                <h1 className={styles.title}>
                    {isLoggedIn ? (
                        <>Welcome back, <span className={styles.userName}>{user?.name || "Adventurer"}</span></>
                    ) : (
                        <>Welcome to <span className={styles.userName}>Alabastria</span></>
                    )}
                </h1>
                <p className={styles.subtitle}>
                    {isLoggedIn
                        ? "What knowledge do you seek today?"
                        : "Explore the lore and legends of this vast world"
                    }
                </p>
                {!isLoggedIn && (
                    <div className={styles.ctaButtons}>
                        <Link href="/login" className={styles.loginCta}>
                            Sign In to Manage Content
                        </Link>
                    </div>
                )}
            </section>

            {/* Quick Links Grid */}
            <section className={styles.quickLinks}>
                <h2 className={styles.sectionTitle}>Explore</h2>
                <div className={styles.grid}>
                    {publicQuickLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.card}>
                            <span className={styles.cardIcon}>{link.icon}</span>
                            <h3 className={styles.cardTitle}>{link.label}</h3>
                            <p className={styles.cardDescription}>{link.description}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Admin Section - only for logged in admins */}
            {isAdmin && (
                <section className={styles.adminSection}>
                    <h2 className={styles.sectionTitle}>Administration</h2>
                    <div className={styles.adminGrid}>
                        <Link href="/admin/users" className={styles.adminCard}>
                            <span className={styles.adminIcon}>👤</span>
                            <span>Manage Users</span>
                        </Link>
                        <Link href="/admin/world" className={styles.adminCard}>
                            <span className={styles.adminIcon}>🗺️</span>
                            <span>Edit World Data</span>
                        </Link>
                        <Link href="/admin/factions" className={styles.adminCard}>
                            <span className={styles.adminIcon}>⚔️</span>
                            <span>Manage Factions</span>
                        </Link>
                        <Link href="/admin/npcs" className={styles.adminCard}>
                            <span className={styles.adminIcon}>🧙</span>
                            <span>Manage NPCs</span>
                        </Link>
                    </div>
                </section>
            )}

            {/* DM Section - for DMs and Admins */}
            {isDM && (
                <section className={styles.dmSection}>
                    <h2 className={styles.sectionTitle}>DM Tools</h2>
                    <div className={styles.adminGrid}>
                        <Link href="/dm/guilds" className={styles.dmCard}>
                            <span className={styles.adminIcon}>🛡️</span>
                            <span>Manage My Guilds</span>
                        </Link>
                        <Link href="/dm/quests" className={styles.dmCard}>
                            <span className={styles.adminIcon}>📜</span>
                            <span>Quest Management</span>
                        </Link>
                        <Link href="/dm/members" className={styles.dmCard}>
                            <span className={styles.adminIcon}>👥</span>
                            <span>Guild Members</span>
                        </Link>
                    </div>
                </section>
            )}

            {/* User Section - for logged in guild members */}
            {isLoggedIn && !isDM && (
                <section className={styles.userSection}>
                    <h2 className={styles.sectionTitle}>My Characters</h2>
                    <div className={styles.adminGrid}>
                        <Link href="/characters" className={styles.userCard}>
                            <span className={styles.adminIcon}>🧝</span>
                            <span>My Characters</span>
                        </Link>
                        <Link href="/characters/new" className={styles.userCard}>
                            <span className={styles.adminIcon}>➕</span>
                            <span>Create Character</span>
                        </Link>
                    </div>
                </section>
            )}
        </div>
    );
}
