import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@lib/prisma";
import styles from "./page.module.scss";

interface ClassPageProps {
    params: Promise<{ slug: string }>;
}

async function getClass(slug: string) {
    return prisma.class.findUnique({
        where: { slug },
        include: {
            savingThrows: true,
            keyFeatures: true,
            subclasses: {
                include: {
                    keyFeatures: true,
                },
                orderBy: { name: "asc" },
            },
            recommendedRaces: {
                include: {
                    race: { select: { name: true, slug: true } },
                },
            },
            deityRecommendations: {
                include: {
                    deity: {
                        select: { name: true, slug: true, pantheon: { select: { slug: true } } },
                    },
                },
            },
            playstyleCategories: {
                include: {
                    playstyle: { select: { name: true } },
                },
            },
        },
    });
}

export default async function ClassPage({ params }: ClassPageProps) {
    const { slug } = await params;
    const cls = await getClass(slug);

    if (!cls) {
        notFound();
    }

    return (
        <div className={styles.page}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb}>
                <Link href="/classes">Classes</Link>
                <span className={styles.separator}>›</span>
                <span>{cls.name}</span>
            </nav>

            {/* Hero Section */}
            <header className={styles.hero}>
                <h1 className={styles.title}>{cls.name}</h1>
                <div className={styles.quickStats}>
                    {cls.role && (
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Role</span>
                            <span className={styles.statValue}>{cls.role}</span>
                        </div>
                    )}
                    {cls.hitDie && (
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Hit Die</span>
                            <span className={styles.statValue}>{cls.hitDie}</span>
                        </div>
                    )}
                    {cls.primaryAbility && (
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Primary Ability</span>
                            <span className={styles.statValue}>{cls.primaryAbility}</span>
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
                        <p className={styles.description}>{cls.description}</p>
                    </section>

                    {/* Alabastria Lore */}
                    {cls.alabastriaLore && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>In Alabastria</h2>
                            <p className={styles.lore}>{cls.alabastriaLore}</p>
                        </section>
                    )}

                    {/* Key Features */}
                    {cls.keyFeatures.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Key Features</h2>
                            <div className={styles.featuresList}>
                                {cls.keyFeatures.map((feature) => (
                                    <div key={feature.id} className={styles.feature}>
                                        <h3 className={styles.featureName}>
                                            {feature.name}
                                            {feature.level && (
                                                <span className={styles.featureLevel}>Lvl {feature.level}</span>
                                            )}
                                        </h3>
                                        {feature.description && (
                                            <p className={styles.featureDescription}>{feature.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Subclasses */}
                    {cls.subclasses.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Subclasses</h2>
                            <div className={styles.subclassGrid}>
                                {cls.subclasses.map((subclass) => (
                                    <div key={subclass.id} className={styles.subclassCard}>
                                        <h3 className={styles.subclassName}>{subclass.name}</h3>
                                        <p className={styles.subclassDescription}>{subclass.description}</p>

                                        {subclass.keyFeatures.length > 0 && (
                                            <div className={styles.subclassFeatures}>
                                                <span className={styles.featuresLabel}>Key Features:</span>
                                                <ul className={styles.subclassFeaturesList}>
                                                    {subclass.keyFeatures.slice(0, 3).map((f) => (
                                                        <li key={f.id}>{f.name}</li>
                                                    ))}
                                                    {subclass.keyFeatures.length > 3 && (
                                                        <li className={styles.moreFeatures}>
                                                            +{subclass.keyFeatures.length - 3} more
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        )}

                                        {subclass.alabastriaContext && (
                                            <p className={styles.subclassContext}>{subclass.alabastriaContext}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Playstyle */}
                    {cls.playstyle && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Playstyle Notes</h2>
                            <p className={styles.playstyle}>{cls.playstyle}</p>
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    {/* Proficiencies */}
                    <div className={styles.sidebarCard}>
                        <h3 className={styles.sidebarTitle}>Proficiencies</h3>
                        <dl className={styles.detailsList}>
                            {cls.armorProficiency && (
                                <>
                                    <dt>Armor</dt>
                                    <dd>{cls.armorProficiency}</dd>
                                </>
                            )}
                            {cls.weaponProficiency && (
                                <>
                                    <dt>Weapons</dt>
                                    <dd>{cls.weaponProficiency}</dd>
                                </>
                            )}
                            {cls.toolProficiency && (
                                <>
                                    <dt>Tools</dt>
                                    <dd>{cls.toolProficiency}</dd>
                                </>
                            )}
                        </dl>
                    </div>

                    {/* Saving Throws */}
                    {cls.savingThrows.length > 0 && (
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>Saving Throws</h3>
                            <div className={styles.tagList}>
                                {cls.savingThrows.map((st) => (
                                    <span key={st.id} className={styles.tag}>
                                        {st.ability}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Recommended Races */}
                    {cls.recommendedRaces.length > 0 && (
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>Recommended Races</h3>
                            <div className={styles.recommendationList}>
                                {cls.recommendedRaces.map((rec) => (
                                    <Link
                                        key={rec.id}
                                        href={`/races/${rec.race.slug}`}
                                        className={styles.recommendationLink}
                                    >
                                        {rec.race.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Deity Recommendations */}
                    {cls.deityRecommendations.length > 0 && (
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>Common Deities</h3>
                            <div className={styles.recommendationList}>
                                {cls.deityRecommendations.map((rec) => (
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

                    {/* Playstyle Categories */}
                    {cls.playstyleCategories.length > 0 && (
                        <div className={styles.sidebarCard}>
                            <h3 className={styles.sidebarTitle}>Playstyle Categories</h3>
                            <div className={styles.recommendationList}>
                                {cls.playstyleCategories.map((rec) => (
                                    <span key={rec.id} className={styles.playstyleTag}>
                                        {rec.playstyle.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>

            {/* Back Link */}
            <div className={styles.backLink}>
                <Link href="/classes">← Back to all classes</Link>
            </div>
        </div>
    );
}

export async function generateMetadata({ params }: ClassPageProps) {
    const { slug } = await params;
    const cls = await getClass(slug);

    if (!cls) {
        return { title: "Class Not Found | Alabastria" };
    }

    return {
        title: `${cls.name} | Classes | Alabastria`,
        description: cls.description.slice(0, 160),
    };
}
