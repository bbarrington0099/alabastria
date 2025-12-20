import { Suspense } from "react";
import Link from "next/link";
import { prisma } from "@lib/prisma";
import { Skeleton } from "@components/common";
import styles from "./page.module.scss";

async function getRaces() {
    return prisma.race.findMany({
        include: {
            abilityScoreIncreases: true,
            subraces: {
                select: { id: true, name: true, slug: true },
            },
            _count: {
                select: { subraces: true },
            },
        },
        orderBy: { name: "asc" },
    });
}

function RacesSkeleton() {
    return (
        <div className={styles.grid}>
            {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={styles.card}>
                    <Skeleton variant="text" width="60%" height="1.5rem" />
                    <Skeleton variant="text" width="40%" height="1rem" className={styles.skeletonSpacing} />
                    <Skeleton variant="text" width="100%" height="3rem" className={styles.skeletonSpacing} />
                    <div className={styles.traits}>
                        <Skeleton variant="text" width="30%" height="1.5rem" />
                        <Skeleton variant="text" width="25%" height="1.5rem" />
                        <Skeleton variant="text" width="35%" height="1.5rem" />
                    </div>
                </div>
            ))}
        </div>
    );
}

async function RacesGrid() {
    const races = await getRaces();

    if (races.length === 0) {
        return (
            <div className={styles.empty}>
                <p>No races found. Check back later!</p>
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            {races.map((race) => (
                <Link key={race.id} href={`/races/${race.slug}`} className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2 className={styles.raceName}>{race.name}</h2>
                        {race.size && (
                            <span className={styles.size}>{race.size}</span>
                        )}
                    </div>

                    {race.abilityScoreIncreases.length > 0 && (
                        <div className={styles.abilities}>
                            {race.abilityScoreIncreases.map((score) => (
                                <span key={score.id} className={styles.abilityTag}>
                                    {score.ability.slice(0, 3).toUpperCase()} {score.modifier > 0 ? "+" : ""}{score.modifier}
                                </span>
                            ))}
                        </div>
                    )}

                    <p className={styles.description}>
                        {race.description.length > 180
                            ? race.description.slice(0, 180) + "..."
                            : race.description}
                    </p>

                    {race.subraces.length > 0 && (
                        <div className={styles.subraces}>
                            <span className={styles.subracesLabel}>
                                {race.subraces.length} Subrace{race.subraces.length !== 1 ? "s" : ""}:
                            </span>
                            <span className={styles.subracesList}>
                                {race.subraces.map((s) => s.name).join(", ")}
                            </span>
                        </div>
                    )}

                    {race.speed && (
                        <div className={styles.speed}>
                            <span className={styles.speedIcon}>🏃</span>
                            <span>{race.speed}</span>
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
}

export default function RacesPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.title}>Races of Alabastria</h1>
                <p className={styles.subtitle}>
                    Discover the diverse peoples who call this realm home, from the ancient elves
                    to the stalwart dwarves and beyond.
                </p>
            </header>

            <Suspense fallback={<RacesSkeleton />}>
                <RacesGrid />
            </Suspense>
        </div>
    );
}

export const metadata = {
    title: "Races | Alabastria",
    description: "Explore the diverse races of Alabastria - from elves to dwarves, humans to tieflings.",
};

