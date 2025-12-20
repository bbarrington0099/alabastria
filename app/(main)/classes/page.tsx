import { Suspense } from "react";
import Link from "next/link";
import { prisma } from "@lib/prisma";
import { Skeleton } from "@components/common";
import styles from "./page.module.scss";

async function getClasses() {
    return prisma.class.findMany({
        include: {
            subclasses: {
                select: { id: true, name: true, slug: true },
            },
            _count: {
                select: { subclasses: true },
            },
        },
        orderBy: { name: "asc" },
    });
}

function ClassesSkeleton() {
    return (
        <div className={styles.grid}>
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className={styles.card}>
                    <Skeleton variant="text" width="50%" height="1.5rem" />
                    <Skeleton variant="text" width="30%" height="1rem" className={styles.skeletonSpacing} />
                    <Skeleton variant="text" width="100%" height="3rem" className={styles.skeletonSpacing} />
                    <div className={styles.stats}>
                        <Skeleton variant="text" width="45%" height="1rem" />
                        <Skeleton variant="text" width="45%" height="1rem" />
                    </div>
                </div>
            ))}
        </div>
    );
}

const roleIcons: Record<string, string> = {
    "Tank": "🛡️",
    "Healer": "💚",
    "Damage": "⚔️",
    "Support": "✨",
    "Controller": "🎯",
    "Striker": "🗡️",
    "Defender": "🔰",
};

async function ClassesGrid() {
    const classes = await getClasses();

    if (classes.length === 0) {
        return (
            <div className={styles.empty}>
                <p>No classes found. Check back later!</p>
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            {classes.map((cls) => (
                <Link key={cls.id} href={`/classes/${cls.slug}`} className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2 className={styles.className}>{cls.name}</h2>
                        {cls.role && (
                            <span className={styles.role}>
                                {roleIcons[cls.role] || "⭐"} {cls.role}
                            </span>
                        )}
                    </div>

                    <div className={styles.quickInfo}>
                        {cls.hitDie && (
                            <span className={styles.hitDie}>
                                <span className={styles.label}>Hit Die:</span> {cls.hitDie}
                            </span>
                        )}
                        {cls.primaryAbility && (
                            <span className={styles.primaryAbility}>
                                <span className={styles.label}>Primary:</span> {cls.primaryAbility}
                            </span>
                        )}
                    </div>

                    <p className={styles.description}>
                        {cls.description.length > 160
                            ? cls.description.slice(0, 160) + "..."
                            : cls.description}
                    </p>

                    {cls.subclasses.length > 0 && (
                        <div className={styles.subclasses}>
                            <span className={styles.subclassesLabel}>
                                {cls.subclasses.length} Subclass{cls.subclasses.length !== 1 ? "es" : ""}
                            </span>
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
}

export default function ClassesPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.title}>Classes of Alabastria</h1>
                <p className={styles.subtitle}>
                    Choose your path and master the skills that will define your legend.
                    From stalwart fighters to enigmatic sorcerers, find the class that calls to you.
                </p>
            </header>

            <Suspense fallback={<ClassesSkeleton />}>
                <ClassesGrid />
            </Suspense>
        </div>
    );
}

export const metadata = {
    title: "Classes | Alabastria",
    description: "Explore the character classes of Alabastria - fighters, wizards, rogues, and more.",
};

