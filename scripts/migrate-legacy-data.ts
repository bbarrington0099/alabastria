/**
 * Legacy Data Migration Script
 * 
 * Reads JSON files from the old AlabastriaCharacterAssistant app
 * and seeds them into the new database.
 * 
 * Usage: npx tsx scripts/migrate-legacy-data.ts
 */

import { prisma } from "../lib/prisma";
import * as dbSeed from "../lib/db-seed";
import * as Prisma from "@prismagen/client";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// ES module compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to legacy JSON files
const LEGACY_PATH = path.join(__dirname, "./json/");

// Helper to read JSON files
function readJSON<T>(filename: string): T {
    const filepath = path.join(LEGACY_PATH, filename);
    const content = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(content) as T;
}

// Helper to create slugs
function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

// ============================================================================
// WORLD HISTORY DATA (embedded in script.js)
// ============================================================================
const worldHistoryData = [
    {
        period: "0-100 Cycles",
        title: "The Bringing & First Settlements",
        summary: "The mysterious arrival of races from different realms and the desperate struggle for survival in a new world.",
        startCycle: 0,
        endCycle: 100,
        events: [
            { name: "The Bringing", description: "An unknown force or event simultaneously transported diverse races from their home realms to Alabastria. No records exist of what caused this phenomenon, leaving it as the greatest mystery of the world.", cycle: 0 },
            { name: "Initial Settlements", description: "Races scattered across the continents, settling where they could survive.", cycle: 10 },
            { name: "Plains Rebellion", description: "The first recorded major conflict, as humans and halflings in Skratonia united to defend their fertile lands.", cycle: 50 },
            { name: "The Great Confusion", description: "Many races initially attempted to return to their homelands, not understanding that The Bringing was permanent.", cycle: 25 },
        ]
    },
    {
        period: "100-300 Cycles",
        title: "Kingdom Formation & Early Wars",
        summary: "The rise of the first kingdoms and the conflicts that would shape continental politics for generations.",
        startCycle: 100,
        endCycle: 300,
        events: [
            { name: "Formation of the Skratonian Alliance", description: "Multiple city-states across Skratonia's plains formed a council-based alliance.", cycle: 120 },
            { name: "Rise of the Icebound Confederacy", description: "The harsh conditions of Bulsania forged its inhabitants into a militarized confederation.", cycle: 150 },
            { name: "First Continental War", description: "A major conflict between Skratonia and Bulsania over control of northern trade routes.", cycle: 100 },
            { name: "Kuriguer Forest Clashes", description: "Multiple attempts by human settlers to claim Kuriguer's interior forests were repelled.", cycle: 180 },
            { name: "The Kamalatman Unification", description: "The three regions of Kamalatman were unified under a single kingdom.", cycle: 250 },
        ]
    },
    {
        period: "300-600 Cycles",
        title: "The Wyvern Wars",
        summary: "Three centuries of conflict against devastating wyvern migrations that threatened all civilizations.",
        startCycle: 300,
        endCycle: 600,
        events: [
            { name: "First Wyvern Migration", description: "Massive swarms of wyverns began descending from Kantra and unknown northern regions.", cycle: 300 },
            { name: "The Great Alliance", description: "All major kingdoms united for the first time against the common threat.", cycle: 350 },
            { name: "Kuriguer's Magical Defense", description: "Elven mages created the Living Barrier, a magical forest that defends itself.", cycle: 400 },
            { name: "The Wyvern Queen's Fall", description: "The final great battle that ended the wyvern threat.", cycle: 600 },
        ]
    },
    {
        period: "600-755 Cycles",
        title: "The Golden Age",
        summary: "A period of prosperity, trade expansion, and cultural flourishing after the wyvern threat was ended.",
        startCycle: 600,
        endCycle: 755,
        events: [
            { name: "Trade Route Expansion", description: "With wyverns gone, safe trade routes were established between all continents.", cycle: 620 },
            { name: "The Great Mining Era", description: "Maltman's mining operations expanded dramatically, bringing wealth to Kamalatman.", cycle: 650 },
            { name: "Cultural Renaissance", description: "Art, music, and scholarship flourished across all civilizations.", cycle: 700 },
        ]
    },
    {
        period: "755-800 Cycles",
        title: "The Age of Guilds",
        summary: "The founding of the Huntbound Order and the rise of professional monster hunting guilds.",
        startCycle: 755,
        endCycle: 800,
        events: [
            { name: "The Huntbound Order Founded", description: "Tharos Raggenthraw founded the guild after slaying the Terror Wyvern of Skratonia.", cycle: 755 },
            { name: "Monster Hunter Professionalization", description: "Other guilds followed the Huntbound Order's model.", cycle: 770 },
            { name: "Current Era", description: "The present day, with the Huntbound Order as the premier monster hunting guild.", cycle: 800 },
        ]
    }
];

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface LegacyContinent {
    world?: string;
    description: string;
    circumference_mi?: number;
    diameter_mi?: number;
    age_cycles?: number;
    surface_area_sq_mi?: number | bigint;
    continent?: string;
    length_mi?: number;
    width_mi?: number;
    height_mi?: number;
    voyage?: Array<{ to: string; distance_mi: number; travel_days: number; travel_hours: number; travel_minutes: number }>;
    colors?: string[];
    flag_symbol?: string;
    flag_description?: string;
    capital?: {
        name: string;
        location: string;
        description: string;
        ruler: {
            name: string;
            race: string;
            title: string;
            personality: string;
            ruling_style: string;
            background: string;
            appearance: string;
            deity?: string;
            deity_reasoning?: string;
        };
    };
    kingdom?: string;
    languages?: {
        primary: string[];
        secondary: string[];
        rare: string[];
        description: string;
    };
    politics?: {
        kingdoms: string[];
        settlements: string[];
        dominant_races: string[];
        notes: string;
        political_climate: string;
    };
    wars_conflicts?: {
        current: Array<{ name: string; description: string; status: string; participants: string[] }>;
        historical: Array<{ name: string; description: string; outcome: string }>;
    };
    treaties_alliances?: Array<{ name: string; description: string; partners: string[]; type: string; status: string }>;
    trade_routes?: Array<{ name: string; description: string; type: string; goods: string[]; frequency: string }>;
    creature_types?: {
        primary: Array<{ type: string; reasoning: string }>;
        secondary: Array<{ type: string; reasoning: string }>;
    };
}

interface LegacyRace {
    race: string;
    description: string;
    size: string;
    speed: string;
    ability_score_increase: Record<string, number>;
    age: string;
    alignment: string;
    languages: string[];
    height_weight: {
        height_range: string;
        weight_range: string;
    };
    traits: Array<{ name: string; description: string }>;
    alabastria_lore: string;
    playstyle: string;
    recommended_classes: string[];
    subraces: Array<{
        name: string;
        description: string;
        ability_score_increase?: Record<string, number>;
        height_weight?: { height_range: string; weight_range: string };
        traits?: Array<{ name: string; description: string }>;
        alabastria_context?: string;
        playstyle?: string;
    }>;
    names?: {
        male_names: string[];
        female_names: string[];
        last_names: string[];
    };
}

interface LegacyClass {
    class: string;
    description: string;
    role: string;
    primary_ability: string;
    hit_die: string;
    saving_throws: string[];
    armor_proficiency: string;
    weapon_proficiency: string;
    tool_proficiency: string;
    key_features: Array<{ name: string; level: number; description: string }>;
    alabastria_lore: string;
    playstyle: string;
    subclasses: Array<{
        name: string;
        description: string;
        key_features: Array<{ name: string; level: number; description: string }>;
        alabastria_context: string;
        playstyle: string;
    }>;
}

interface LegacyDeity {
    name: string;
    title?: string;
    domains: string[];
    alignment: string;
    symbol: string;
    description: string;
    alabastria_context?: string;
    followers?: string[];
    holy_days?: string[];
    temples?: string;
    allies?: string[];
    conflicts?: string[];
    symbols?: string[];
    colors?: string[];
    history_800_years?: Record<string, string>;
}

interface LegacyPantheon {
    pantheon: string;
    description: string;
    symbol: string;
    deities: LegacyDeity[];
}

interface LegacyGuildStaff {
    name: string;
    race: string;
    class: string;
    guild_role: string;
    rank: string;
    image?: string;
    appearance: string;
    personality: string;
    faith: string;
    background: string;
}

interface LegacyGuildMember {
    name: string;
    rank: string;
    level: number;
    class: string;
    race: string;
    managed_by?: string;
    image?: string;
    status: string;
    specialization?: string;
    tags?: string[];
    notable_achievements?: string[];
    background_summary?: string;
    deity?: string;
    deity_reasoning?: string;
    subclass?: string;
}

interface LegacyQuestReport {
    quest_name: string;
    quest_summary: string;
    party_members: Array<{ name: string; rank_at_time: string; role: string }>;
    quest_rank: string;
    commissioned_by: string;
    enemies: Array<{ name: string; type: string; threat_level: string; description: string }>;
    special_awards_promotions?: Array<{ recipient: string; award: string; description: string }>;
    notable_loot_decor?: Array<{ item: string; description: string; significance: string }>;
    member_reports?: Array<{ member_name: string; report: string }>;
    fallen_members?: string[];
    extra_notes?: string;
    date: string;
    location: string;
    duration: string;
    outcome: string;
}

interface MonsterSlayersGuide {
    author: string;
    title: string;
    description: string;
    creature_types: Record<string, {
        description: string;
        habits: string;
        tactics: string;
        weaknesses: string;
        continents: Array<{ name: string; reasoning: string }>;
    }>;
    legendary_creatures?: Array<{
        name: string;
        type: string;
        description: string;
        threat_level?: string;
        quest_potential?: string;
        continent?: string;
        is_past?: boolean;
        defeated_by?: string;
        defeated_by_title?: string;
        defeat_story?: string;
        legacy?: string;
    }>;
}

interface PlaystyleGuide {
    playstyle_categories: Array<{
        name: string;
        description: string;
        recommended_classes: Array<{
            class: string;
            subclass?: string;
            reason: string;
        }>;
    }>;
    ability_score_priorities: Record<string, {
        description: string;
        best_classes: string[];
        important_for: string[];
    }>;
    role_descriptions: Record<string, {
        description: string;
        key_abilities: string[];
        best_classes: string[];
    }>;
    complexity_levels: Record<string, {
        description: string;
        classes: Array<{ class: string; subclass?: string }>;
    }>;
}

// Rank mapping
const rankMap: Record<string, "COAL" | "COPPER" | "IRON" | "SILVER" | "GOLD" | "PLATINUM" | "MITHRAL"> = {
    "Coal": "COAL",
    "Copper": "COPPER",
    "Iron": "IRON",
    "Silver": "SILVER",
    "Gold": "GOLD",
    "Platinum": "PLATINUM",
    "Mithral": "MITHRAL"
};

const statusMap: Record<string, "ACTIVE" | "INACTIVE" | "RETIRED" | "DECEASED" | "MISSING" | "HIATUS" | "EXPELLED" | "ABROAD"> = {
    "Active": "ACTIVE",
    "Inactive": "INACTIVE",
    "Retired": "RETIRED",
    "Deceased": "DECEASED",
    "Missing": "MISSING",
    "Hiatus": "HIATUS",
    "Expelled": "EXPELLED",
    "Abroad": "ABROAD"
};

// ============================================================================
// MAIN MIGRATION FUNCTION
// ============================================================================

export async function migrateLegacyData() {
    console.log("🚀 Starting legacy data migration...\n");

    // ========================================================================
    // WORLD & CONTINENTS
    // ========================================================================
    console.log("🌍 Migrating world and continents...");

    const continentData = readJSON<LegacyContinent[]>("continent_data.json");

    // Find world entry
    const worldEntry = continentData.find(c => c.world);
    if (!worldEntry) throw new Error("No world entry found in continent_data.json");

    const world = await dbSeed.createWorld({
        name: worldEntry.world!,
        description: worldEntry.description,
        circumferenceMi: worldEntry.circumference_mi,
        diameterMi: worldEntry.diameter_mi,
        ageCycles: worldEntry.age_cycles,
        surfaceAreaSqMi: worldEntry.surface_area_sq_mi ? BigInt(worldEntry.surface_area_sq_mi) : undefined,
    });
    console.log(`   ✓ Created world: ${world.name}`);

    // Create continents
    const continents = continentData.filter(c => c.continent && !c.continent.includes("Kingdom of"));
    const continentMap = new Map<string, string>(); // name -> id

    for (const cont of continents) {
        const continent = await dbSeed.createContinent({
            worldId: world.id,
            name: cont.continent!,
            description: cont.description,
            lengthMi: cont.length_mi,
            widthMi: cont.width_mi,
            heightMi: cont.height_mi,
            surfaceAreaSqMi: cont.surface_area_sq_mi as number | undefined,
            primaryColor: cont.colors?.[0],
            secondaryColor: cont.colors?.[1],
            flagSymbol: cont.flag_symbol,
            flagDescription: cont.flag_description,
        });
        continentMap.set(cont.continent!, continent.id);

        // Create capital if exists
        if (cont.capital) {
            const capital = await dbSeed.createCapital({
                continentId: continent.id,
                name: cont.capital.name,
                location: cont.capital.location,
                description: cont.capital.description,
            });

            // Create ruler (now as Character linked to continent)
            if (cont.capital.ruler) {
                // Look up race ID if race name is provided
                let raceId: string | undefined;
                if (cont.capital.ruler.race) {
                    const race = await prisma.race.findUnique({
                        where: { name: cont.capital.ruler.race },
                    });
                    raceId = race?.id;
                }

                // Look up deity ID if deity name is provided
                let deityId: string | undefined;
                if (cont.capital.ruler.deity) {
                    const deity = await prisma.deity.findUnique({
                        where: { name: cont.capital.ruler.deity },
                    });
                    deityId = deity?.id;
                }

                await dbSeed.createRuler({
                    continentId: continent.id,
                    name: cont.capital.ruler.name,
                    raceId,
                    title: cont.capital.ruler.title,
                    personality: cont.capital.ruler.personality,
                    rulingStyle: cont.capital.ruler.ruling_style,
                    background: cont.capital.ruler.background,
                    appearance: cont.capital.ruler.appearance,
                    deityId,
                    deityReasoning: cont.capital.ruler.deity_reasoning,
                });
            }
        }

        // Create languages
        if (cont.languages) {
            for (const lang of cont.languages.primary) {
                await prisma.continentLanguage.upsert({
                    where: { continentId_languageName: { continentId: continent.id, languageName: lang } },
                    update: { prevalence: "Common" },
                    create: { continentId: continent.id, languageName: lang, prevalence: "Common" },
                });
            }
            for (const lang of cont.languages.secondary) {
                await prisma.continentLanguage.upsert({
                    where: { continentId_languageName: { continentId: continent.id, languageName: lang } },
                    update: { prevalence: "Uncommon" },
                    create: { continentId: continent.id, languageName: lang, prevalence: "Uncommon" },
                });
            }
            for (const lang of cont.languages.rare) {
                await prisma.continentLanguage.upsert({
                    where: { continentId_languageName: { continentId: continent.id, languageName: lang } },
                    update: { prevalence: "Rare" },
                    create: { continentId: continent.id, languageName: lang, prevalence: "Rare" },
                });
            }
        }

        // Create trade routes (continent-level)
        if (cont.trade_routes) {
            for (const route of cont.trade_routes) {
                // Check if route already exists
                const existing = await prisma.tradeRouteContinent.findFirst({
                    where: {
                        continentId: continent.id,
                        name: route.name,
                    },
                });

                if (existing) {
                    await prisma.tradeRouteContinent.update({
                        where: { id: existing.id },
                        data: {
                            description: route.description,
                            goods: route.goods?.join(", "),
                        },
                    });
                } else {
                    await prisma.tradeRouteContinent.create({
                        data: {
                            continentId: continent.id,
                            name: route.name,
                            description: route.description,
                            goods: route.goods?.join(", "),
                        },
                    });
                }
            }
        }

        console.log(`   ✓ Created continent: ${continent.name}`);
    }

    console.log(`   Total: ${continents.length} continents\n`);

    // ========================================================================
    // HISTORICAL PERIODS & EVENTS
    // ========================================================================
    console.log("📜 Migrating world history...");

    for (let i = 0; i < worldHistoryData.length; i++) {
        const periodData = worldHistoryData[i];
        const period = await dbSeed.createHistoricalPeriod({
            name: periodData.title,
            startCycle: periodData.startCycle,
            endCycle: periodData.endCycle,
            description: periodData.summary,
            sortOrder: i + 1,
        });

        for (let j = 0; j < periodData.events.length; j++) {
            const eventData = periodData.events[j];
            await dbSeed.createHistoricalEvent({
                periodId: period.id,
                name: eventData.name,
                cycle: eventData.cycle,
                description: eventData.description,
                sortOrder: j + 1,
            });
        }
    }

    console.log(`   ✓ Created ${worldHistoryData.length} historical periods\n`);

    // ========================================================================
    // RACES
    // ========================================================================
    console.log("👥 Migrating races...");

    const raceData = readJSON<LegacyRace[]>("race_information.json");
    const raceMap = new Map<string, string>(); // name -> id
    const subraceMap = new Map<string, string>(); // "raceName-subraceName" -> id
    const guildRoleMap = new Map<string, string>(); // guild_role -> id

    for (const r of raceData) {
        const race = await dbSeed.createRace({
            name: r.race,
            description: r.description,
            size: r.size,
            speed: r.speed,
            age: r.age,
            alignment: r.alignment,
            heightRange: r.height_weight?.height_range,
            weightRange: r.height_weight?.weight_range,
            alabastriaLore: r.alabastria_lore,
            playstyle: r.playstyle,
        });
        raceMap.set(r.race, race.id);

        // Create ability score increases
        if (r.ability_score_increase) {
            for (const [ability, modifier] of Object.entries(r.ability_score_increase)) {
                await prisma.raceAbilityScore.create({
                    data: { raceId: race.id, ability: ability.toUpperCase().replaceAll(" ", "_") as Prisma.RaceAbilityScores, modifier }
                });
            }
        }

        // Create languages
        if (r.languages) {
            for (const lang of r.languages) {
                await prisma.raceLanguage.create({
                    data: { raceId: race.id, languageName: lang }
                });
            }
        }

        // Create traits
        if (r.traits) {
            for (const trait of r.traits) {
                await prisma.raceTrait.create({
                    data: { raceId: race.id, name: trait.name, description: trait.description }
                });
            }
        }

        // Create names
        if (r.names) {
            for (const name of r.names.male_names || []) {
                await prisma.raceName.create({
                    data: { raceId: race.id, name, gender: "male" }
                });
            }
            for (const name of r.names.female_names || []) {
                await prisma.raceName.create({
                    data: { raceId: race.id, name, gender: "female" }
                });
            }
            for (const name of r.names.last_names || []) {
                await prisma.raceName.create({
                    data: { raceId: race.id, name, gender: "surname" }
                });
            }
        }

        // Create subraces
        if (r.subraces && r.subraces.length > 0) {
            for (const sr of r.subraces) {
                const subrace = await dbSeed.createSubrace({
                    raceId: race.id,
                    name: sr.name,
                    description: sr.description,
                    heightRange: sr.height_weight?.height_range,
                    weightRange: sr.height_weight?.weight_range,
                    alabastriaContext: sr.alabastria_context,
                    playstyle: sr.playstyle,
                });
                subraceMap.set(`${r.race}-${sr.name}`, subrace.id);

                // Subrace ability scores
                if (sr.ability_score_increase) {
                    for (const [ability, modifier] of Object.entries(sr.ability_score_increase)) {
                        await prisma.subraceAbilityScore.create({
                            data: { subraceId: subrace.id, ability, modifier }
                        });
                    }
                }

                // Subrace traits
                if (sr.traits) {
                    for (const trait of sr.traits) {
                        await prisma.subraceTrait.create({
                            data: { subraceId: subrace.id, name: trait.name, description: trait.description }
                        });
                    }
                }
            }
        }
    }

    console.log(`   ✓ Created ${raceData.length} races\n`);

    // ========================================================================
    // CLASSES
    // ========================================================================
    console.log("🛡️ Migrating classes...");

    const classData = readJSON<LegacyClass[]>("class_information.json");
    const classMap = new Map<string, string>(); // name -> id
    const subclassMap = new Map<string, string>(); // "className-subclassName" -> id

    for (const c of classData) {
        const cls = await dbSeed.createClass({
            name: c.class,
            description: c.description,
            role: c.role,
            primaryAbility: c.primary_ability,
            hitDie: c.hit_die,
            armorProficiency: c.armor_proficiency,
            weaponProficiency: c.weapon_proficiency,
            toolProficiency: c.tool_proficiency,
            alabastriaLore: c.alabastria_lore,
            playstyle: c.playstyle,
        });
        classMap.set(c.class, cls.id);

        // Create saving throws
        if (c.saving_throws) {
            for (const ability of c.saving_throws) {
                await prisma.classSavingThrow.create({
                    data: { classId: cls.id, ability }
                });
            }
        }

        // Create key features
        if (c.key_features) {
            for (const feat of c.key_features) {
                await prisma.classFeature.create({
                    data: { classId: cls.id, name: feat.name, level: feat.level, description: feat.description }
                });
            }
        }

        // Create subclasses
        if (c.subclasses) {
            for (const sc of c.subclasses) {
                const subclass = await dbSeed.createSubclass({
                    classId: cls.id,
                    name: sc.name,
                    description: sc.description,
                    alabastriaContext: sc.alabastria_context,
                    playstyle: sc.playstyle,
                });
                subclassMap.set(`${c.class}-${sc.name}`, subclass.id);

                // Subclass features
                if (sc.key_features) {
                    for (const feat of sc.key_features) {
                        await prisma.subclassFeature.create({
                            data: { subclassId: subclass.id, name: feat.name, level: feat.level, description: feat.description }
                        });
                    }
                }
            }
        }
    }

    console.log(`   ✓ Created ${classData.length} classes\n`);

    // ========================================================================
    // PANTHEONS & DEITIES
    // ========================================================================
    console.log("🏛️ Migrating pantheons and deities...");

    // Read all pantheon data files
    const pantheonFiles = ["pantheon_data.json", "pantheon_data_part2.json", "pantheon_data_part3.json", "pantheon_data_part4.json"];
    const allPantheons: LegacyPantheon[] = [];

    for (const file of pantheonFiles) {
        try {
            const data = readJSON<LegacyPantheon[]>(file);
            allPantheons.push(...data);
        } catch (e) {
            console.log(`   ⚠️ Could not read ${file}, skipping...`);
        }
    }

    const deityMap = new Map<string, string>(); // name -> id

    for (const p of allPantheons) {
        const pantheon = await dbSeed.createPantheon({
            name: p.pantheon,
            description: p.description,
            symbol: p.symbol,
        });

        // Create deities
        for (const d of p.deities) {
            const deity = await dbSeed.createDeity({
                pantheonId: pantheon.id,
                name: d.name,
                title: d.title,
                alignment: d.alignment,
                symbol: d.symbol,
                description: d.description,
                alabastriaContext: d.alabastria_context,
                temples: d.temples,
            });
            deityMap.set(d.name, deity.id);

            // Create domains
            if (d.domains) {
                for (const domain of d.domains) {
                    await prisma.deityDomain.create({
                        data: { deityId: deity.id, domain }
                    });
                }
            }

            // Create followers
            if (d.followers) {
                for (const follower of d.followers) {
                    await prisma.deityFollower.create({
                        data: { deityId: deity.id, followerType: follower }
                    });
                }
            }

            // Create holy days
            if (d.holy_days) {
                for (const day of d.holy_days) {
                    await prisma.deityHolyDay.create({
                        data: { deityId: deity.id, name: day }
                    });
                }
            }

            // Create symbols
            if (d.symbols) {
                for (const symbol of d.symbols) {
                    await prisma.deitySymbol.create({
                        data: { deityId: deity.id, symbol }
                    });
                }
            }

            // Create colors
            if (d.colors) {
                for (const color of d.colors) {
                    await prisma.deityColor.create({
                        data: { deityId: deity.id, color }
                    });
                }
            }

            // Create history
            if (d.history_800_years) {
                for (const [era, description] of Object.entries(d.history_800_years)) {
                    await prisma.deityHistory.create({
                        data: { deityId: deity.id, era, description }
                    });
                }
            }
        }
    }

    console.log(`   ✓ Created ${allPantheons.length} pantheons with deities\n`);

    // ========================================================================
    // DEITY RELATIONSHIPS
    // ========================================================================
    console.log("🤝 Creating deity relationships...");

    // Create relationships from deity allies/conflicts
    for (const p of allPantheons) {
        for (const d of p.deities) {
            const deityId = deityMap.get(d.name);
            if (!deityId) continue;

            // Create ally relationships
            if (d.allies) {
                for (const allyName of d.allies) {
                    const allyId = deityMap.get(allyName);
                    if (allyId) {
                        try {
                            await dbSeed.createDeityRelationship({
                                deityId,
                                relatedDeityId: allyId,
                                type: "ALLY",
                            });
                        } catch (e) {
                            // Skip duplicates
                        }
                    }
                }
            }

            // Create conflict relationships
            if (d.conflicts) {
                for (const conflictName of d.conflicts) {
                    const conflictId = deityMap.get(conflictName);
                    if (conflictId) {
                        try {
                            await dbSeed.createDeityRelationship({
                                deityId,
                                relatedDeityId: conflictId,
                                type: "CONFLICT",
                            });
                        } catch (e) {
                            // Skip duplicates
                        }
                    }
                }
            }
        }
    }

    console.log(`   ✓ Deity relationships created\n`);

    // ========================================================================
    // GUILD
    // ========================================================================
    console.log("⚔️ Migrating guild data...");

    // Find Skratonia continent for guild location
    const skratoniaId = continentMap.get("Skratonia");

    const guild = await dbSeed.createGuild({
        name: "The Huntbound Order",
        description: "A prestigious monster hunting guild founded by Tharos Raggenthraw after he slayed the Terror Wyvern of Skratonia. The guild welcomes hunters of all stripes - soldiers and sellswords, druids and rangers, rogues and mages - united by the common purpose of protecting the innocent from monstrous threats.",
        foundedCycle: 755,
        continentId: skratoniaId,
    });

    console.log(`   ✓ Created guild: ${guild.name}`);

    // ========================================================================
    // GUILD STAFF
    // ========================================================================
    console.log("👔 Migrating guild staff...");

    const guildStaffData = readJSON<LegacyGuildStaff[]>("guild_staff.json");

    for (const staff of guildStaffData) {
        // Look up race - handle compound names like "Half Wood Elf", "Protector Aasimar"
        let raceId = raceMap.get(staff.race);
        if (!raceId) {
            // Try the last word as race (e.g., "Protector Aasimar" -> "Aasimar")
            const raceWords = staff.race.split(" ");
            const baseRace = raceWords[raceWords.length - 1];
            raceId = raceMap.get(baseRace);
        }

        // Extract base class from full class name
        const classNameParts = staff.class.split(" ");
        const baseClassName = classNameParts[classNameParts.length - 1];
        const classId = classMap.get(baseClassName);

        // Extract deity name from faith text (e.g., "Devoted to Tempus, the Lord of Battles" -> "Tempus")
        let deityId: string | undefined;
        if (staff.faith) {
            // Try to find a deity name mentioned in the faith text
            for (const [deityName, id] of deityMap.entries()) {
                if (staff.faith.includes(deityName)) {
                    deityId = id;
                    break;
                }
            }
        }

        // Create the Character first
        const character = await prisma.character.create({
            data: {
                name: staff.name,
                appearance: staff.appearance,
                personality: staff.personality,
                backgroundSummary: staff.background,
                imagePath: staff.image,
                raceId,
                classId,
                deityId,
            },
        });

        const guildRole = await dbSeed.createGuildRole({
            name: staff.guild_role,
            description: staff.guild_role
        });
        guildRoleMap.set(staff.guild_role, guildRole.id);

        await dbSeed.createGuildStaff({
            guildId: guild.id,
            guildRoleId: guildRoleMap.get(staff.guild_role) || "",
            rank: rankMap[staff.rank] || "COAL",
            characterId: character.id,
        });
    }

    console.log(`   ✓ Created ${guildStaffData.length} guild staff members\n`);

    // ========================================================================
    // GUILD MEMBERS
    // ========================================================================
    console.log("🎯 Migrating guild members...");

    const guildMembersData = readJSON<LegacyGuildMember[]>("guild_members.json");
    const memberMap = new Map<string, string>(); // name -> id

    for (const member of guildMembersData) {
        // Look up race - handle compound names like "Half Wood Elf", "Protector Aasimar"
        let raceId = raceMap.get(member.race);
        let subraceId: string | undefined;
        if (!raceId) {
            // Try the last word as race (e.g., "Protector Aasimar" -> "Aasimar")
            const raceWords = member.race.split(" ");
            const baseRace = raceWords[raceWords.length - 1];
            raceId = raceMap.get(baseRace);

            // Try to find subrace from the prefix (e.g., "Protector Aasimar" -> "Protector")
            if (raceId && raceWords.length > 1) {
                const subraceName = raceWords.slice(0, -1).join(" ");
                subraceId = subraceMap.get(`${baseRace}-${subraceName}`);
            }
        }

        // Extract base class from full class name (e.g., "Path of the Berserker Barbarian" -> "Barbarian")
        const classNameParts = member.class.split(" ");
        const baseClassName = classNameParts[classNameParts.length - 1];
        const classId = classMap.get(baseClassName);
        const deityId = member.deity ? deityMap.get(member.deity) : undefined;

        // Find subclass if specified
        let subclassId: string | undefined;
        if (member.class.includes(" ") && classId) {
            // Try to find subclass from class name (e.g., "Path of the Berserker Barbarian")
            const subclassName = member.class.replace(` ${baseClassName}`, "").replace("Path of the ", "").replace("Path of ", "");
            subclassId = subclassMap.get(`${baseClassName}-${subclassName}`);
        }

        // Create the Character first
        const character = await prisma.character.create({
            data: {
                name: member.name,
                level: member.level || 1,
                backgroundSummary: member.background_summary,
                imagePath: member.image,
                raceId,
                subraceId,
                classId,
                subclassId,
                deityId,
            },
        });

        const createdMember = await dbSeed.createGuildMember({
            guildId: guild.id,
            rank: rankMap[member.rank] || "COAL",
            status: statusMap[member.status] || "ACTIVE",
            specialization: member.specialization,
            characterId: character.id,
        });
        memberMap.set(member.name, createdMember.id);

        // Create tags
        if (member.tags) {
            for (const tag of member.tags) {
                await prisma.guildMemberTag.create({
                    data: { memberId: createdMember.id, tag }
                });
            }
        }

        // Create achievements
        if (member.notable_achievements) {
            for (const achievement of member.notable_achievements) {
                await prisma.guildMemberAchievement.create({
                    data: { memberId: createdMember.id, name: achievement }
                });
            }
        }
    }

    console.log(`   ✓ Created ${guildMembersData.length} guild members\n`);

    // ========================================================================
    // QUEST REPORTS
    // ========================================================================
    console.log("📋 Migrating quest reports...");

    const questReportsData = readJSON<LegacyQuestReport[]>("quest_reports.json");

    for (const quest of questReportsData) {
        const questReport = await dbSeed.createQuestReport({
            guildId: guild.id,
            name: quest.quest_name,
            summary: quest.quest_summary,
            rank: rankMap[quest.quest_rank] || "COAL",
            commissionedBy: quest.commissioned_by,
            date: quest.date,
            location: quest.location,
            duration: quest.duration,
            outcome: quest.outcome,
            extraNotes: quest.extra_notes,
        });

        // Create participants
        for (const participant of quest.party_members) {
            const memberId = memberMap.get(participant.name);
            if (memberId) {
                // Parse rank from rank_at_time (e.g., "Copper" -> "COPPER")
                let participantRank: "COAL" | "COPPER" | "IRON" | "SILVER" | "GOLD" | "PLATINUM" | "MITHRAL" = "COAL";
                const rankMatch = participant.rank_at_time.match(/Coal|Copper|Iron|Silver|Gold|Platinum|Mithral/i);
                if (rankMatch) {
                    participantRank = rankMap[rankMatch[0]] || "COAL";
                }

                await prisma.questParticipant.create({
                    data: {
                        questId: questReport.id,
                        memberId,
                        rankAtTime: participantRank,
                        role: participant.role,
                    }
                });
            }
        }

        // Create enemies
        for (const enemy of quest.enemies) {
            await prisma.questEnemy.create({
                data: {
                    questId: questReport.id,
                    name: enemy.name,
                    description: `${enemy.type} - ${enemy.threat_level}: ${enemy.description}`,
                }
            });
        }

        // Create awards
        if (quest.special_awards_promotions) {
            for (const award of quest.special_awards_promotions) {
                await prisma.questAward.create({
                    data: {
                        questId: questReport.id,
                        name: `${award.recipient}: ${award.award}`,
                        description: award.description,
                    }
                });
            }
        }

        // Create loot
        if (quest.notable_loot_decor) {
            for (const loot of quest.notable_loot_decor) {
                await prisma.questLoot.create({
                    data: {
                        questId: questReport.id,
                        name: loot.item,
                        description: `${loot.description}\n\nSignificance: ${loot.significance}`,
                    }
                });
            }
        }

        // Create member reports
        if (quest.member_reports) {
            for (const report of quest.member_reports) {
                await prisma.questMemberReport.create({
                    data: {
                        questId: questReport.id,
                        memberName: report.member_name,
                        report: report.report,
                    }
                });
            }
        }

        // Create fallen members
        if (quest.fallen_members) {
            for (const fallen of quest.fallen_members) {
                await prisma.questFallenMember.create({
                    data: {
                        questId: questReport.id,
                        memberName: fallen,
                    }
                });
            }
        }
    }

    console.log(`   ✓ Created ${questReportsData.length} quest reports\n`);

    // ========================================================================
    // CREATURE TYPES (Monster Slayers Guide)
    // ========================================================================
    console.log("🐉 Migrating creature types...");

    const monsterGuide = readJSON<MonsterSlayersGuide>("monster_slayers_guide.json");

    for (const [typeName, typeData] of Object.entries(monsterGuide.creature_types)) {
        const creatureType = await dbSeed.createCreatureType({
            name: typeName,
            description: typeData.description,
            habits: typeData.habits,
            tactics: typeData.tactics,
            weaknesses: typeData.weaknesses,
        });

        // Create continent reasons
        for (const cont of typeData.continents) {
            const continentId = continentMap.get(cont.name);
            if (continentId) {
                await prisma.continentCreatureType.create({
                    data: {
                        continentId,
                        creatureTypeId: creatureType.id,
                        reason: cont.reasoning,
                    }
                });
            }
        }
    }

    console.log(`   ✓ Created creature types from Monster Slayers Guide\n`);

    // ========================================================================
    // PLAYSTYLE GUIDE
    // ========================================================================
    console.log("🎯 Migrating playstyle guide...");

    const playstyleGuide = readJSON<PlaystyleGuide>("playstyle_guide.json");

    // Create playstyle categories
    for (const cat of playstyleGuide.playstyle_categories) {
        const category = await dbSeed.createPlaystyleCategory({
            name: cat.name,
            description: cat.description,
        });

        // Create recommendations (use upsert since same class may appear with different subclasses)
        for (const rec of cat.recommended_classes) {
            const classId = classMap.get(rec.class);

            if (classId) {
                await prisma.playstyleClassRecommendation.upsert({
                    where: { playstyleId_classId: { playstyleId: category.id, classId } },
                    update: { reasoning: rec.reason },
                    create: { playstyleId: category.id, classId, reasoning: rec.reason },
                });
            }
        }
    }

    // Create ability score priorities
    for (const [ability, data] of Object.entries(playstyleGuide.ability_score_priorities)) {
        await prisma.abilityScorePriority.upsert({
            where: { ability },
            update: { description: data.description },
            create: { ability, description: data.description, seeded: true }
        });
    }

    // Create role descriptions
    for (const [roleName, data] of Object.entries(playstyleGuide.role_descriptions)) {
        await dbSeed.createRoleDescription({
            name: roleName,
            description: data.description,
        });
    }

    // Create complexity levels
    for (const [level, data] of Object.entries(playstyleGuide.complexity_levels)) {
        await dbSeed.createComplexityLevel({
            level,
            description: data.description,
        });
    }

    console.log(`   ✓ Created playstyle guide data\n`);

    // ========================================================================
    // COMPLETE
    // ========================================================================
    console.log("✨ Legacy data migration complete!\n");
    console.log("Summary:");
    console.log(`   • 1 World`);
    console.log(`   • ${continents.length} Continents`);
    console.log(`   • ${worldHistoryData.length} Historical Periods`);
    console.log(`   • ${raceData.length} Races`);
    console.log(`   • ${classData.length} Classes`);
    console.log(`   • ${allPantheons.length} Pantheons`);
    console.log(`   • 1 Guild with ${guildStaffData.length} staff and ${guildMembersData.length} members`);
    console.log(`   • ${questReportsData.length} Quest Reports`);
}