import { Suspense } from "react";
import Link from "next/link";
import { getWorld, getContinents } from "@lib/db";
import { SkeletonGrid, SkeletonPageHeader } from "@components/common/Skeleton";
import styles from "./page.module.scss";

export const metadata = {
    title: "World of Alabastria | Alabastria",
    description: "Explore the vast world of Alabastria and its continents.",
};

export default async function WorldPage() {
    return (
        <div className={styles.page}>
            <Suspense fallback={<WorldHeaderSkeleton />}>
                <WorldHeader />
            </Suspense>

            <Suspense fallback={<SkeletonGrid count={6} columns={3} />}>
                <ContinentsList />
            </Suspense>
        </div>
    );
}

function WorldHeaderSkeleton() {
    return (
        <div className={styles.headerSkeleton}>
            <SkeletonPageHeader />
        </div>
    );
}

async function WorldHeader() {
    const world = await getWorld();

    if (!world) {
        return (
            <div className={styles.header}>
                <h1 className={styles.title}>World Not Found</h1>
                <p className={styles.description}>The world data has not been loaded yet.</p>
            </div>
        );
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{world.name}</h1>
            <p className={styles.description}>{world.description}</p>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.statValue}>{world.ageCycles?.toLocaleString()}</span>
                    <span className={styles.statLabel}>Cycles of Age</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statValue}>{world.circumferenceMi?.toLocaleString()}</span>
                    <span className={styles.statLabel}>Miles Circumference</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statValue}>{world.continents.length}</span>
                    <span className={styles.statLabel}>Continents</span>
                </div>
            </div>
        </header>
    );
}

async function ContinentsList() {
    const continents = await getContinents();

    if (!continents.length) {
        return (
            <div className={styles.empty}>
                <p>No continents have been discovered yet.</p>
            </div>
        );
    }

    return (
        <section className={styles.continents}>
            <h2 className={styles.sectionTitle}>Continents</h2>
            <div className={styles.grid}>
                {continents.map((continent) => (
                    <Link
                        key={continent.id}
                        href={`/world/${continent.slug}`}
                        className={styles.card}
                        style={{
                            "--primary-color": continent.primaryColor || "#c9a227",
                            "--secondary-color": continent.secondaryColor || "#1a1a2e",
                        } as React.CSSProperties}
                    >
                        <div className={styles.cardHeader}>
                            {continent.flagSymbol && (
                                <span className={styles.cardIcon}>{continent.flagSymbol}</span>
                            )}
                            <h3 className={styles.cardTitle}>{continent.name}</h3>
                        </div>

                        <p className={styles.cardDescription}>
                            {continent.description.slice(0, 150)}
                            {continent.description.length > 150 ? "..." : ""}
                        </p>

                        <div className={styles.cardMeta}>
                            {continent.capital && (
                                <span className={styles.metaItem}>
                                    🏰 {continent.capital.name}
                                </span>
                            )}
                            {continent.surfaceAreaSqMi && (
                                <span className={styles.metaItem}>
                                    📐 {continent.surfaceAreaSqMi.toLocaleString()} sq mi
                                </span>
                            )}
                        </div>

                        <div className={styles.cardAccent} />
                    </Link>
                ))}
            </div>
        </section>
    );
}

