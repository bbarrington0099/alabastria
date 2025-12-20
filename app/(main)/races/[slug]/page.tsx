import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@lib/prisma";
import styles from "./page.module.scss";

interface RacePageProps {
    params: Promise<{ slug: string }>;
}

async function getRace(slug: string) {
    return prisma.race.findUnique({
        where: { slug },
        include: {
            abilityScoreIncreases: true,
            languages: true,
            traits: true,
            subraces: {
                include: {
                    abilityScoreIncreases: true,
                    traits: true,
                },
                orderBy: { name: "asc" },
            },
            recommendedClasses: {
                include: {
                    class: { select: { name: true, slug: true } },
                },
            },
            continentLocations: {
                include: {
                    continent: { select: { name: true, slug: true } },
                },
            },
            deityRecommendations: {
                include: {
                    deity: {
                        select: { name: true, slug: true, pantheon: { select: { slug: true } } },
                    },
                },
            },
        },
    });
}

export default async function RacePage({ params }: RacePageProps) {
    const { slug } = await params;
    const race = await getRace(slug);

    if (!race) {
        notFound();
    }

    return (
        <div className={styles.page}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb}>
                <Link href="/races">Races</Link>
                <span className={styles.separator}>›</span>
                <span>{race.name}</span>
            </nav>

            {/* Hero Section */}
            <header className={styles.hero}>
                <h1 className={styles.title}>{race.name}</h1>
                <div className={styles.quickStats}>
                    {race.size && (
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Size</span>
                            <span className={styles.statValue}>{race.size}</span>
                        </div>
                    )}
                    {race.speed && (
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Speed</span>
                            <span className={styles.statValue}>{race.speed}</span>
                        </div>
                    )}
                    {race.abilityScoreIncreases.length > 0 && (
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Ability Scores</span>
                            <span className={styles.statValue}>
                                {race.abilityScoreIncreases.map((a) =>
                                    `${a.ability} ${a.modifier > 0 ? "+" : ""}${a.modifier}`
                                ).join(", ")}
                            </span>
                        </div>
                    )}
                </div>
            </header>

            <div className={styles.content}>
                {/* Main Column */}
                <div className={styles.mainColumn}>
                    {/* Description */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p className={styles.description}>{race.description}</p>
                    </section>

                    {/* Alabastria Lore */}
                    {race.alabastriaLore && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>In Alabastria</h2>
                            <p className={styles.lore}>{race.alabastriaLore}</p>
                        </section>
                    )}

                    {/* Traits */}
                    {race.traits.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Racial Traits</h2>
                            <div className={styles.traitsList}>
                                {race.traits.map((trait) => (
                                    <div key={trait.id} className={styles.trait}>
                                        <h3 className={styles.traitName}>{trait.name}</h3>
                                        {trait.description && (
                                            <p className={styles.traitDescription}>{trait.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Subraces */}
                    {race.subraces.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Subraces</h2>
                            <div className={styles.subraceGrid}>
                                {race.subraces.map((subrace) => (
                                    <div key={subrace.id} className={styles.subraceCard}>
                                        <h3 className={styles.subraceName}>{subrace.name}</h3>

                                        {subrace.abilityScoreIncreases.length > 0 && (
                                            <div className={styles.subraceAbilities}>
                                                {subrace.abilityScoreIncreases.map((a) => (
                                                    <span key={a.id} className={styles.abilityTag}>
                                                        {a.ability.slice(0, 3).toUpperCase()} {a.modifier > 0 ? "+" : ""}{a.modifier}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <p className={styles.subraceDescription}>{subrace.description}</p>

                                        {subrace.traits.length > 0 && (
                                            <div className={styles.subraceTraits}>
                                                <span className={styles.subraceTraitsLabel}>Traits:</span>
                                                {subrace.traits.map((t) => (
                                                    <span key={t.id} className={styles.subraceTraitName}>
                                                        {t.name}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {subrace.alabastriaContext && (
                                            <p className={styles.subraceContext}>{subrace.alabastriaContext}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Playstyle */}
                    {race.playstyle && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Playstyle Notes</h2>
                            <p className={styles.playstyle}>{race.playstyle}</p>
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    {/* Physical Traits */}
                    {(race.age || race.alignment || race.heightRange || race.weightRange) && (
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>Physical Traits</h3>
                            <dl className={styles.detailsList}>
                                {race.age && (
                                    <>
                                        <dt>Age</dt>
                                        <dd>{race.age}</dd>
                                    </>
                                )}
                                {race.alignment && (
                                    <>
                                        <dt>Alignment</dt>
                                        <dd>{race.alignment}</dd>
                                    </>
                                )}
                                {race.heightRange && (
                                    <>
                                        <dt>Height</dt>
                                        <dd>{race.heightRange}</dd>
                                    </>
                                )}
                                {race.weightRange && (
                                    <>
                                        <dt>Weight</dt>
                                        <dd>{race.weightRange}</dd>
                                    </>
                                )}
                            </dl>
                        </div>
                    )}

                    {/* Languages */}
                    {race.languages.length > 0 && (
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>Languages</h3>
                            <div className={styles.tagList}>
                                {race.languages.map((lang) => (
                                    <span key={lang.id} className={styles.tag}>
                                        {lang.languageName}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Recommended Classes */}
                    {race.recommendedClasses.length > 0 && (
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>Recommended Classes</h3>
                            <div className={styles.recommendationList}>
                                {race.recommendedClasses.map((rec) => (
                                    <Link
                                        key={rec.id}
                                        href={`/classes/${rec.class.slug}`}
                                        className={styles.recommendationLink}
                                    >
                                        {rec.class.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Deity Recommendations */}
                    {race.deityRecommendations.length > 0 && (
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>Common Deities</h3>
                            <div className={styles.recommendationList}>
                                {race.deityRecommendations.map((rec) => (
                                    <Link
                                        key={rec.id}
                                        href={`/pantheon/${rec.deity.pantheon.slug}/${rec.deity.slug}`}
                                        className={styles.recommendationLink}
                                    >
                                        {rec.deity.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Continent Locations */}
                    {race.continentLocations.length > 0 && (
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>Found In</h3>
                            <div className={styles.recommendationList}>
                                {race.continentLocations.map((loc) => (
                                    <Link
                                        key={loc.id}
                                        href={`/world/${loc.continent.slug}`}
                                        className={styles.recommendationLink}
                                    >
                                        {loc.continent.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>

            {/* Back Link */}
            <div className={styles.backLink}>
                <Link href="/races">← Back to all races</Link>
            </div>
        </div>
    );
}

export async function generateMetadata({ params }: RacePageProps) {
    const { slug } = await params;
    const race = await getRace(slug);

    if (!race) {
        return { title: "Race Not Found | Alabastria" };
    }

    return {
        title: `${race.name} | Races | Alabastria`,
        description: race.description.slice(0, 160),
    };
}

