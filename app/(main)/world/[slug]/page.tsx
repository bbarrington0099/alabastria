import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getContinentBySlug, getContinents } from "@lib/db";
import { SkeletonDetailPage } from "@components/common/Skeleton";
import styles from "./page.module.scss";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const continent = await getContinentBySlug(slug);

    if (!continent) {
        return { title: "Continent Not Found | Alabastria" };
    }

    return {
        title: `${continent.name} | Alabastria`,
        description: continent.description.slice(0, 160),
    };
}

export async function generateStaticParams() {
    const continents = await getContinents();
    return continents.map((continent) => ({
        slug: continent.slug,
    }));
}

export default async function ContinentPage({ params }: Props) {
    const { slug } = await params;

    return (
        <div className={styles.page}>
            <Suspense fallback={<SkeletonDetailPage />}>
                <ContinentContent slug={slug} />
            </Suspense>
        </div>
    );
}

async function ContinentContent({ slug }: { slug: string }) {
    const continent = await getContinentBySlug(slug);

    if (!continent) {
        notFound();
    }

    return (
        <>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb}>
                <Link href="/world">World</Link>
                <span>/</span>
                <span>{continent.name}</span>
            </nav>

            {/* Header */}
            <header
                className={styles.header}
                style={{
                    "--primary-color": continent.primaryColor || "#c9a227",
                    "--secondary-color": continent.secondaryColor || "#1a1a2e",
                } as React.CSSProperties}
            >
                <div className={styles.headerContent}>
                    {continent.flagSymbol && (
                        <span className={styles.flagSymbol}>{continent.flagSymbol}</span>
                    )}
                    <h1 className={styles.title}>{continent.name}</h1>
                    {continent.kingdom && (
                        <p className={styles.kingdom}>Part of {continent.kingdom.name}</p>
                    )}
                </div>
                <div className={styles.headerAccent} />
            </header>

            {/* Main Content */}
            <div className={styles.content}>
                {/* Main Section */}
                <main className={styles.main}>
                    {/* Description */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p className={styles.description}>{continent.description}</p>

                        {continent.flagDescription && (
                            <div className={styles.flagInfo}>
                                <h3>Banner</h3>
                                <p>{continent.flagDescription}</p>
                            </div>
                        )}
                    </section>

                    {/* Capital */}
                    {continent.capital && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Capital: {continent.capital.name}</h2>
                            <p className={styles.description}>{continent.capital.description}</p>
                            {continent.capital.location && (
                                <p className={styles.location}>📍 {continent.capital.location}</p>
                            )}

                            {continent.capital.ruler && (
                                <div className={styles.ruler}>
                                    <h3>Ruler</h3>
                                    <div className={styles.rulerInfo}>
                                        <p className={styles.rulerName}>
                                            {continent.capital.ruler.title} {continent.capital.ruler.name}
                                        </p>
                                        {continent.capital.ruler.race && (
                                            <p className={styles.rulerDetail}>Race: {continent.capital.ruler.race}</p>
                                        )}
                                        {continent.capital.ruler.personality && (
                                            <p className={styles.rulerDetail}>{continent.capital.ruler.personality}</p>
                                        )}
                                        {continent.capital.ruler.rulingStyle && (
                                            <p className={styles.rulerDetail}>
                                                <strong>Ruling Style:</strong> {continent.capital.ruler.rulingStyle}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </section>
                    )}

                    {/* Languages */}
                    {continent.languages.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Languages</h2>
                            <div className={styles.languageGroups}>
                                {["Common", "Uncommon", "Rare"].map((prevalence) => {
                                    const langs = continent.languages.filter(l => l.prevalence === prevalence);
                                    if (langs.length === 0) return null;
                                    return (
                                        <div key={prevalence} className={styles.languageGroup}>
                                            <h3>{prevalence}</h3>
                                            <div className={styles.tags}>
                                                {langs.map((lang) => (
                                                    <span key={lang.id} className={styles.tag}>
                                                        {lang.languageName}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {/* Politics */}
                    {continent.politics && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Political Landscape</h2>
                            {continent.politics.governmentType && (
                                <p><strong>Government:</strong> {continent.politics.governmentType}</p>
                            )}
                            {continent.politics.majorPoliticalIssue && (
                                <p><strong>Major Issues:</strong> {continent.politics.majorPoliticalIssue}</p>
                            )}
                            {continent.politics.foreignRelations && (
                                <p><strong>Foreign Relations:</strong> {continent.politics.foreignRelations}</p>
                            )}
                        </section>
                    )}

                    {/* Creature Types */}
                    {continent.creatureTypes.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Native Creatures</h2>
                            <div className={styles.creatures}>
                                {continent.creatureTypes.map((ct) => (
                                    <div key={ct.id} className={styles.creature}>
                                        <h3>{ct.creatureType.name}</h3>
                                        {ct.reason && <p>{ct.reason}</p>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </main>

                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    {/* Stats Card */}
                    <div className={styles.statsCard}>
                        <h3>Geography</h3>
                        {continent.lengthMi && (
                            <div className={styles.statRow}>
                                <span>Length:</span>
                                <span>{continent.lengthMi.toLocaleString()} mi</span>
                            </div>
                        )}
                        {continent.widthMi && (
                            <div className={styles.statRow}>
                                <span>Width:</span>
                                <span>{continent.widthMi.toLocaleString()} mi</span>
                            </div>
                        )}
                        {continent.heightMi && (
                            <div className={styles.statRow}>
                                <span>Height:</span>
                                <span>{continent.heightMi.toLocaleString()} mi</span>
                            </div>
                        )}
                        {continent.surfaceAreaSqMi && (
                            <div className={styles.statRow}>
                                <span>Area:</span>
                                <span>{continent.surfaceAreaSqMi.toLocaleString()} sq mi</span>
                            </div>
                        )}
                    </div>

                    {/* Voyages */}
                    {continent.voyagesFrom.length > 0 && (
                        <div className={styles.voyagesCard}>
                            <h3>Travel Routes</h3>
                            <div className={styles.voyages}>
                                {continent.voyagesFrom.map((voyage) => (
                                    <Link
                                        key={voyage.id}
                                        href={`/world/${voyage.toContinent.slug}`}
                                        className={styles.voyage}
                                    >
                                        <span>To {voyage.toContinent.name}</span>
                                        <span className={styles.voyageDistance}>
                                            {voyage.distanceMi?.toLocaleString()} mi
                                            {voyage.travelDays && ` • ${voyage.travelDays}d`}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Towns */}
                    {continent.towns.length > 0 && (
                        <div className={styles.townsCard}>
                            <h3>Towns & Settlements</h3>
                            <div className={styles.towns}>
                                {continent.towns.map((town) => (
                                    <Link
                                        key={town.id}
                                        href={`/world/${continent.slug}/towns/${town.slug}`}
                                        className={styles.town}
                                    >
                                        <span>{town.name}</span>
                                        {town.leader && (
                                            <span className={styles.townLeader}>Led by {town.leader.name}</span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Factions */}
                    {continent.factionPresence.length > 0 && (
                        <div className={styles.factionsCard}>
                            <h3>Faction Presence</h3>
                            <div className={styles.factions}>
                                {continent.factionPresence.map((fp) => (
                                    <div key={fp.id} className={styles.faction}>
                                        <span>{fp.faction.name}</span>
                                        <span className={`${styles.influence} ${styles[fp.influenceLevel.toLowerCase()]}`}>
                                            {fp.influenceLevel}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </>
    );
}

