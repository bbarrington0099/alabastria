import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Subclasses, Continents } from "../index";

type SubclassContinentPayload = Prisma.SubclassContinentGetPayload<{}>
export interface SubclassesContinents {
	alchemist_kuriguer_relation: SubclassContinentPayload;
	alchemist_alatman_relation: SubclassContinentPayload;
	armorer_maltman_relation: SubclassContinentPayload;
	armorer_alatman_relation: SubclassContinentPayload;
	artillerist_kuriguer_relation: SubclassContinentPayload;
	artillerist_bulsania_relation: SubclassContinentPayload;
	battle_smith_alatman_relation: SubclassContinentPayload;
	battle_smith_kuriguer_relation: SubclassContinentPayload;
	ancestral_guardian_bulsania_relation: SubclassContinentPayload;
	ancestral_guardian_katman_relation: SubclassContinentPayload;
	beast_kuriguer_relation: SubclassContinentPayload;
	berserker_katman_relation: SubclassContinentPayload;
	berserker_bulsania_relation: SubclassContinentPayload;
	storm_herald_bulsania_relation: SubclassContinentPayload;
	storm_herald_kuriguer_relation: SubclassContinentPayload;
	totem_warrior_bulsania_relation: SubclassContinentPayload;
	totem_warrior_kuriguer_relation: SubclassContinentPayload;
	wild_magic_kuriguer_relation: SubclassContinentPayload;
	zealot_bulsania_relation: SubclassContinentPayload;
	battlerager_bulsania_relation: SubclassContinentPayload;
	giant_bulsania_relation: SubclassContinentPayload;
	giant_maltman_relation: SubclassContinentPayload;
	wild_magic_skratonia_relation: SubclassContinentPayload;
	college_of_creation_kuriguer_relation: SubclassContinentPayload;
	college_of_eloquence_skratonia_relation: SubclassContinentPayload;
	college_of_glamour_kuriguer_relation: SubclassContinentPayload;
	college_of_lore_skratonia_relation: SubclassContinentPayload;
	college_of_spirits_kuriguer_relation: SubclassContinentPayload;
	college_of_swords_skratonia_relation: SubclassContinentPayload;
	college_of_valor_skratonia_relation: SubclassContinentPayload;
	college_of_valor_bulsania_relation: SubclassContinentPayload;
	college_of_whispers_kuriguer_relation: SubclassContinentPayload;
	college_of_whispers_skratonia_relation: SubclassContinentPayload;
	arcana_domain_kuriguer_relation: SubclassContinentPayload;
	death_domain_kuriguer_relation: SubclassContinentPayload;
	forge_domain_maltman_relation: SubclassContinentPayload;
	forge_domain_alatman_relation: SubclassContinentPayload;
	grave_domain_skratonia_relation: SubclassContinentPayload;
	knowledge_domain_skratonia_relation: SubclassContinentPayload;
	knowledge_domain_kuriguer_relation: SubclassContinentPayload;
	life_domain_skratonia_relation: SubclassContinentPayload;
	light_domain_skratonia_relation: SubclassContinentPayload;
	nature_domain_kuriguer_relation: SubclassContinentPayload;
	order_domain_skratonia_relation: SubclassContinentPayload;
	peace_domain_skratonia_relation: SubclassContinentPayload;
	tempest_domain_kuriguer_relation: SubclassContinentPayload;
	tempest_domain_bulsania_relation: SubclassContinentPayload;
	trickery_domain_kuriguer_relation: SubclassContinentPayload;
	trickery_domain_skratonia_relation: SubclassContinentPayload;
	twilight_domain_kuriguer_relation: SubclassContinentPayload;
	war_domain_bulsania_relation: SubclassContinentPayload;
	war_domain_katman_relation: SubclassContinentPayload;
	circle_of_dreams_kuriguer_relation: SubclassContinentPayload;
	circle_of_the_land_kuriguer_relation: SubclassContinentPayload;
	circle_of_the_land_skratonia_relation: SubclassContinentPayload;
	circle_of_the_moon_kuriguer_relation: SubclassContinentPayload;
	circle_of_the_shepherd_kuriguer_relation: SubclassContinentPayload;
	circle_of_spores_kuriguer_relation: SubclassContinentPayload;
	circle_of_stars_bulsania_relation: SubclassContinentPayload;
	circle_of_wildfire_kuriguer_relation: SubclassContinentPayload;
	arcane_archer_kuriguer_relation: SubclassContinentPayload;
	battle_master_skratonia_relation: SubclassContinentPayload;
	battle_master_bulsania_relation: SubclassContinentPayload;
	cavalier_skratonia_relation: SubclassContinentPayload;
	champion_skratonia_relation: SubclassContinentPayload;
	champion_bulsania_relation: SubclassContinentPayload;
	echo_knight_kuriguer_relation: SubclassContinentPayload;
	eldritch_knight_kuriguer_relation: SubclassContinentPayload;
	psi_warrior_kuriguer_relation: SubclassContinentPayload;
	rune_knight_maltman_relation: SubclassContinentPayload;
	rune_knight_bulsania_relation: SubclassContinentPayload;
	samurai_skratonia_relation: SubclassContinentPayload;
	samurai_bulsania_relation: SubclassContinentPayload;
	way_of_the_astral_self_skratonia_relation: SubclassContinentPayload;
	way_of_the_ascendant_dragon_bulsania_relation: SubclassContinentPayload;
	way_of_the_drunken_master_skratonia_relation: SubclassContinentPayload;
	way_of_the_four_elements_kuriguer_relation: SubclassContinentPayload;
	way_of_the_kensei_skratonia_relation: SubclassContinentPayload;
	way_of_the_long_death_kuriguer_relation: SubclassContinentPayload;
	way_of_mercy_skratonia_relation: SubclassContinentPayload;
	way_of_the_open_hand_skratonia_relation: SubclassContinentPayload;
	way_of_shadow_kuriguer_relation: SubclassContinentPayload;
	way_of_the_sun_soul_skratonia_relation: SubclassContinentPayload;
	oath_of_the_ancients_kuriguer_relation: SubclassContinentPayload;
	oath_of_conquest_bulsania_relation: SubclassContinentPayload;
	oath_of_conquest_katman_relation: SubclassContinentPayload;
	oath_of_devotion_skratonia_relation: SubclassContinentPayload;
	oath_of_glory_skratonia_relation: SubclassContinentPayload;
	oath_of_glory_bulsania_relation: SubclassContinentPayload;
	oath_of_redemption_skratonia_relation: SubclassContinentPayload;
	oath_of_vengeance_skratonia_relation: SubclassContinentPayload;
	oath_of_the_watchers_kuriguer_relation: SubclassContinentPayload;
	oath_of_the_crown_skratonia_relation: SubclassContinentPayload;
	oath_of_the_crown_katman_relation: SubclassContinentPayload;
	oath_of_the_crown_bulsania_relation: SubclassContinentPayload;
	beast_master_kuriguer_relation: SubclassContinentPayload;
	beast_master_bulsania_relation: SubclassContinentPayload;
	drakewarden_bulsania_relation: SubclassContinentPayload;
	fey_wanderer_kuriguer_relation: SubclassContinentPayload;
	gloom_stalker_kuriguer_relation: SubclassContinentPayload;
	gloom_stalker_maltman_relation: SubclassContinentPayload;
	horizon_walker_kuriguer_relation: SubclassContinentPayload;
	hunter_skratonia_relation: SubclassContinentPayload;
	hunter_kuriguer_relation: SubclassContinentPayload;
	monster_slayer_skratonia_relation: SubclassContinentPayload;
	monster_slayer_bulsania_relation: SubclassContinentPayload;
	swarmkeeper_kuriguer_relation: SubclassContinentPayload;
	arcane_trickster_kuriguer_relation: SubclassContinentPayload;
	arcane_trickster_skratonia_relation: SubclassContinentPayload;
	assassin_kuriguer_relation: SubclassContinentPayload;
	assassin_skratonia_relation: SubclassContinentPayload;
	inquisitive_skratonia_relation: SubclassContinentPayload;
	mastermind_skratonia_relation: SubclassContinentPayload;
	mastermind_kuriguer_relation: SubclassContinentPayload;
	phantom_kuriguer_relation: SubclassContinentPayload;
	scout_skratonia_relation: SubclassContinentPayload;
	scout_kuriguer_relation: SubclassContinentPayload;
	soulknife_skratonia_relation: SubclassContinentPayload;
	soulknife_kuriguer_relation: SubclassContinentPayload;
	swashbuckler_skratonia_relation: SubclassContinentPayload;
	thief_skratonia_relation: SubclassContinentPayload;
	thief_kuriguer_relation: SubclassContinentPayload;
	aberrant_mind_skratonia_relation: SubclassContinentPayload;
	aberrant_mind_kuriguer_relation: SubclassContinentPayload;
	clockwork_soul_alatman_relation: SubclassContinentPayload;
	divine_soul_skratonia_relation: SubclassContinentPayload;
	draconic_bloodline_bulsania_relation: SubclassContinentPayload;
	lunar_sorcery_kuriguer_relation: SubclassContinentPayload;
	shadow_magic_kuriguer_relation: SubclassContinentPayload;
	shadow_magic_maltman_relation: SubclassContinentPayload;
	storm_sorcery_kuriguer_relation: SubclassContinentPayload;
	storm_sorcery_bulsania_relation: SubclassContinentPayload;
	the_archfey_kuriguer_relation: SubclassContinentPayload;
	the_celestial_skratonia_relation: SubclassContinentPayload;
	the_fathomless_kuriguer_relation: SubclassContinentPayload;
	the_fiend_skratonia_relation: SubclassContinentPayload;
	the_fiend_katman_relation: SubclassContinentPayload;
	the_genie_kuriguer_relation: SubclassContinentPayload;
	the_great_old_one_skratonia_relation: SubclassContinentPayload;
	the_great_old_one_kuriguer_relation: SubclassContinentPayload;
	the_hexblade_kuriguer_relation: SubclassContinentPayload;
	the_hexblade_skratonia_relation: SubclassContinentPayload;
	the_undead_alatman_relation: SubclassContinentPayload;
	the_undead_kuriguer_relation: SubclassContinentPayload;
	the_undying_katman_relation: SubclassContinentPayload;
	school_of_abjuration_maltman_relation: SubclassContinentPayload;
	school_of_abjuration_kuriguer_relation: SubclassContinentPayload;
	school_of_bladesinging_kuriguer_relation: SubclassContinentPayload;
	school_of_chronurgy_kuriguer_relation: SubclassContinentPayload;
	school_of_conjuration_kuriguer_relation: SubclassContinentPayload;
	school_of_divination_kuriguer_relation: SubclassContinentPayload;
	school_of_divination_skratonia_relation: SubclassContinentPayload;
	school_of_enchantment_kuriguer_relation: SubclassContinentPayload;
	school_of_evocation_kuriguer_relation: SubclassContinentPayload;
	school_of_evocation_bulsania_relation: SubclassContinentPayload;
	school_of_graviturgy_kuriguer_relation: SubclassContinentPayload;
	school_of_illusion_kuriguer_relation: SubclassContinentPayload;
	school_of_necromancy_kuriguer_relation: SubclassContinentPayload;
	school_of_necromancy_katman_relation: SubclassContinentPayload;
	order_of_scribes_skratonia_relation: SubclassContinentPayload;
	order_of_scribes_kuriguer_relation: SubclassContinentPayload;
	school_of_transmutation_kuriguer_relation: SubclassContinentPayload;
	war_magic_bulsania_relation: SubclassContinentPayload;
	war_magic_skratonia_relation: SubclassContinentPayload;
	grandmaster_skratonia_relation: SubclassContinentPayload;
	grandmaster_alatman_relation: SubclassContinentPayload;
	mentalist_kuriguer_relation: SubclassContinentPayload;
	mentalist_skratonia_relation: SubclassContinentPayload;
	scholar_kuriguer_relation: SubclassContinentPayload;
	scholar_skratonia_relation: SubclassContinentPayload;
	war_mind_bulsania_relation: SubclassContinentPayload;
	war_mind_maltman_relation: SubclassContinentPayload;
}

interface SubclassesContinentsParams {
	subclasses: Subclasses;
	continents: Continents;
}
export async function setSubclassesContinents(params: SubclassesContinentsParams): Promise<SubclassesContinents> {
	const { subclasses, continents } = params;
	return {
		alchemist_kuriguer_relation: await db.createSubclassContinent({
			id: "alchemist-kuriguer-relation",
			subclassId: subclasses.artificer_alchemist.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Experimentation And Innovation Hubs`,
		}),
		alchemist_alatman_relation: await db.createSubclassContinent({
			id: "alchemist-alatman-relation",
			subclassId: subclasses.artificer_alchemist.id,
			continentId: continents.alatman.id,
			reasoning: `Resource-rich Workshops Support Alchemical Research`,
		}),
		armorer_maltman_relation: await db.createSubclassContinent({
			id: "armorer-maltman-relation",
			subclassId: subclasses.artificer_armorer.id,
			continentId: continents.maltman.id,
			reasoning: `Mining Operations Provide Raw Materials For Armor Crafting`,
		}),
		armorer_alatman_relation: await db.createSubclassContinent({
			id: "armorer-alatman-relation",
			subclassId: subclasses.artificer_armorer.id,
			continentId: continents.alatman.id,
			reasoning: `Forge Technology And Construct Creation Expertise`,
		}),
		artillerist_kuriguer_relation: await db.createSubclassContinent({
			id: "artillerist-kuriguer-relation",
			subclassId: subclasses.artificer_artillerist.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Innovation Meets Technological Advancement`,
		}),
		artillerist_bulsania_relation: await db.createSubclassContinent({
			id: "artillerist-bulsania-relation",
			subclassId: subclasses.artificer_artillerist.id,
			continentId: continents.bulsania.id,
			reasoning: `Militarized Societies Demand Siege Weaponry`,
		}),
		battle_smith_alatman_relation: await db.createSubclassContinent({
			id: "battle-smith-alatman-relation",
			subclassId: subclasses.artificer_battle_smith.id,
			continentId: continents.alatman.id,
			reasoning: `Construct Technology And Battle Automation`,
		}),
		battle_smith_kuriguer_relation: await db.createSubclassContinent({
			id: "battle-smith-kuriguer-relation",
			subclassId: subclasses.artificer_battle_smith.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Crafting Meets Combat Innovation`,
		}),
		ancestral_guardian_bulsania_relation: await db.createSubclassContinent({
			id: "ancestral-guardian-bulsania-relation",
			subclassId: subclasses.barbarian_path_of_the_ancestral_guardian.id,
			continentId: continents.bulsania.id,
			reasoning: `Mountain Tribes With Strong Ancestral Traditions`,
		}),
		ancestral_guardian_katman_relation: await db.createSubclassContinent({
			id: "ancestral-guardian-katman-relation",
			subclassId: subclasses.barbarian_path_of_the_ancestral_guardian.id,
			continentId: continents.katman.id,
			reasoning: `Swamp Cultures Emphasize Spiritual Guidance From Ancestors`,
		}),
		beast_kuriguer_relation: await db.createSubclassContinent({
			id: "beast-kuriguer-relation",
			subclassId: subclasses.barbarian_path_of_the_beast.id,
			continentId: continents.kuriguer.id,
			reasoning: `Wild Magic Enhances Primal Beast Connections`,
		}),
		berserker_katman_relation: await db.createSubclassContinent({
			id: "berserker-katman-relation",
			subclassId: subclasses.barbarian_path_of_the_berserker.id,
			continentId: continents.katman.id,
			reasoning: `Swamp Warfare Breeds Relentless Fighters`,
		}),
		berserker_bulsania_relation: await db.createSubclassContinent({
			id: "berserker-bulsania-relation",
			subclassId: subclasses.barbarian_path_of_the_berserker.id,
			continentId: continents.bulsania.id,
			reasoning: `Harsh Conditions Forge Unbreakable Warriors`,
		}),
		storm_herald_bulsania_relation: await db.createSubclassContinent({
			id: "storm-herald-bulsania-relation",
			subclassId: subclasses.barbarian_path_of_the_storm_herald.id,
			continentId: continents.bulsania.id,
			reasoning: `Mountain Storms And Harsh Weather Forge Storm Warriors`,
		}),
		storm_herald_kuriguer_relation: await db.createSubclassContinent({
			id: "storm-herald-kuriguer-relation",
			subclassId: subclasses.barbarian_path_of_the_storm_herald.id,
			continentId: continents.kuriguer.id,
			reasoning: `Coastal Storms And Elemental Forces`,
		}),
		totem_warrior_bulsania_relation: await db.createSubclassContinent({
			id: "totem-warrior-bulsania-relation",
			subclassId: subclasses.barbarian_path_of_the_totem_warrior.id,
			continentId: continents.bulsania.id,
			reasoning: `Mountain Spirits And Totemic Traditions`,
		}),
		totem_warrior_kuriguer_relation: await db.createSubclassContinent({
			id: "totem-warrior-kuriguer-relation",
			subclassId: subclasses.barbarian_path_of_the_totem_warrior.id,
			continentId: continents.kuriguer.id,
			reasoning: `Wild Magic Enhances Spirit Animal Bonds`,
		}),
		wild_magic_kuriguer_relation: await db.createSubclassContinent({
			id: "wild-magic-kuriguer-relation",
			subclassId: subclasses.barbarian_path_of_wild_magic.id,
			continentId: continents.kuriguer.id,
			reasoning: `Wild Magic Zones Create Unpredictable Surges`,
		}),
		zealot_bulsania_relation: await db.createSubclassContinent({
			id: "zealot-bulsania-relation",
			subclassId: subclasses.barbarian_path_of_the_zealot.id,
			continentId: continents.bulsania.id,
			reasoning: `Harsh Conditions Breed Fanatical Devotion`,
		}),
		battlerager_bulsania_relation: await db.createSubclassContinent({
			id: "battlerager-bulsania-relation",
			subclassId: subclasses.barbarian_path_of_the_battlerager.id,
			continentId: continents.bulsania.id,
			reasoning: `Militarized Society Values Aggressive Combat Tactics`,
		}),
		giant_bulsania_relation: await db.createSubclassContinent({
			id: "giant-bulsania-relation",
			subclassId: subclasses.barbarian_path_of_the_giant.id,
			continentId: continents.bulsania.id,
			reasoning: `Mountain Regions Where Giants Once Roamed`,
		}),
		giant_maltman_relation: await db.createSubclassContinent({
			id: "giant-maltman-relation",
			subclassId: subclasses.barbarian_path_of_the_giant.id,
			continentId: continents.maltman.id,
			reasoning: `Mountain Peaks And Ancient Giant Territories`,
		}),
		wild_magic_skratonia_relation: await db.createSubclassContinent({
			id: "wild-magic-skratonia-relation",
			subclassId: subclasses.barbarian_path_of_wild_magic.id,
			continentId: continents.skratonia.id,
			reasoning: `Diverse Magical Influences Create Chaotic Effects`,
		}),
		college_of_creation_kuriguer_relation: await db.createSubclassContinent({
			id: "college-of-creation-kuriguer-relation",
			subclassId: subclasses.bard_college_of_creation.id,
			continentId: continents.kuriguer.id,
			reasoning: `Fey Magic Enhances Creative Expression`,
		}),
		college_of_eloquence_skratonia_relation: await db.createSubclassContinent({
			id: "college-of-eloquence-skratonia-relation",
			subclassId: subclasses.bard_college_of_eloquence.id,
			continentId: continents.skratonia.id,
			reasoning: `Diverse City-states Require Skilled Diplomats And Orators`,
		}),
		college_of_glamour_kuriguer_relation: await db.createSubclassContinent({
			id: "college-of-glamour-kuriguer-relation",
			subclassId: subclasses.bard_college_of_glamour.id,
			continentId: continents.kuriguer.id,
			reasoning: `Fey Influence Creates Natural Glamour Magic`,
		}),
		college_of_lore_skratonia_relation: await db.createSubclassContinent({
			id: "college-of-lore-skratonia-relation",
			subclassId: subclasses.bard_college_of_lore.id,
			continentId: continents.skratonia.id,
			reasoning: `Diverse Populations And Scholarly Institutions Preserve Vast Knowledge`,
		}),
		college_of_spirits_kuriguer_relation: await db.createSubclassContinent({
			id: "college-of-spirits-kuriguer-relation",
			subclassId: subclasses.bard_college_of_spirits.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Harbor Many Spirits And Ghostly Presences`,
		}),
		college_of_swords_skratonia_relation: await db.createSubclassContinent({
			id: "college-of-swords-skratonia-relation",
			subclassId: subclasses.bard_college_of_swords.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Centers Foster Dueling Arts And Performance Combat`,
		}),
		college_of_valor_skratonia_relation: await db.createSubclassContinent({
			id: "college-of-valor-skratonia-relation",
			subclassId: subclasses.bard_college_of_valor.id,
			continentId: continents.skratonia.id,
			reasoning: `Militarized Societies Value Warrior-poets`,
		}),
		college_of_valor_bulsania_relation: await db.createSubclassContinent({
			id: "college-of-valor-bulsania-relation",
			subclassId: subclasses.bard_college_of_valor.id,
			continentId: continents.bulsania.id,
			reasoning: `Harsh Frontier Breeds Heroic Tales`,
		}),
		college_of_whispers_kuriguer_relation: await db.createSubclassContinent({
			id: "college-of-whispers-kuriguer-relation",
			subclassId: subclasses.bard_college_of_whispers.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Ports And Diverse Populations Breed Intrigue`,
		}),
		college_of_whispers_skratonia_relation: await db.createSubclassContinent({
			id: "college-of-whispers-skratonia-relation",
			subclassId: subclasses.bard_college_of_whispers.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Politics Require Masters Of Secrets`,
		}),
		arcana_domain_kuriguer_relation: await db.createSubclassContinent({
			id: "arcana-domain-kuriguer-relation",
			subclassId: subclasses.cleric_arcana_domain.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Saturation Creates Divine-arcane Synthesis`,
		}),
		death_domain_kuriguer_relation: await db.createSubclassContinent({
			id: "death-domain-kuriguer-relation",
			subclassId: subclasses.cleric_death_domain.id,
			continentId: continents.kuriguer.id,
			reasoning: `Shadow Magic And Death Mysteries`,
		}),
		forge_domain_maltman_relation: await db.createSubclassContinent({
			id: "forge-domain-maltman-relation",
			subclassId: subclasses.cleric_forge_domain.id,
			continentId: continents.maltman.id,
			reasoning: `Mining And Smithing Culture Dominates`,
		}),
		forge_domain_alatman_relation: await db.createSubclassContinent({
			id: "forge-domain-alatman-relation",
			subclassId: subclasses.cleric_forge_domain.id,
			continentId: continents.alatman.id,
			reasoning: `Volcanic Forges And Construct Creation`,
		}),
		grave_domain_skratonia_relation: await db.createSubclassContinent({
			id: "grave-domain-skratonia-relation",
			subclassId: subclasses.cleric_grave_domain.id,
			continentId: continents.skratonia.id,
			reasoning: `Large Populations Require Death Rites And Grave Tending`,
		}),
		knowledge_domain_skratonia_relation: await db.createSubclassContinent({
			id: "knowledge-domain-skratonia-relation",
			subclassId: subclasses.cleric_knowledge_domain.id,
			continentId: continents.skratonia.id,
			reasoning: `Scholarly Cities And Diverse Knowledge Centers`,
		}),
		knowledge_domain_kuriguer_relation: await db.createSubclassContinent({
			id: "knowledge-domain-kuriguer-relation",
			subclassId: subclasses.cleric_knowledge_domain.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Research And Ancient Elven Libraries`,
		}),
		life_domain_skratonia_relation: await db.createSubclassContinent({
			id: "life-domain-skratonia-relation",
			subclassId: subclasses.cleric_life_domain.id,
			continentId: continents.skratonia.id,
			reasoning: `Large Populations Require Dedicated Healers`,
		}),
		light_domain_skratonia_relation: await db.createSubclassContinent({
			id: "light-domain-skratonia-relation",
			subclassId: subclasses.cleric_light_domain.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Centers Need Light Against Darkness`,
		}),
		nature_domain_kuriguer_relation: await db.createSubclassContinent({
			id: "nature-domain-kuriguer-relation",
			subclassId: subclasses.cleric_nature_domain.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Are Centers Of Nature Worship`,
		}),
		order_domain_skratonia_relation: await db.createSubclassContinent({
			id: "order-domain-skratonia-relation",
			subclassId: subclasses.cleric_order_domain.id,
			continentId: continents.skratonia.id,
			reasoning: `Organized City-states Require Order And Law`,
		}),
		peace_domain_skratonia_relation: await db.createSubclassContinent({
			id: "peace-domain-skratonia-relation",
			subclassId: subclasses.cleric_peace_domain.id,
			continentId: continents.skratonia.id,
			reasoning: `Diverse Populations Benefit From Peaceful Mediation`,
		}),
		tempest_domain_kuriguer_relation: await db.createSubclassContinent({
			id: "tempest-domain-kuriguer-relation",
			subclassId: subclasses.cleric_tempest_domain.id,
			continentId: continents.kuriguer.id,
			reasoning: `Coastal Storms And Elemental Tempests`,
		}),
		tempest_domain_bulsania_relation: await db.createSubclassContinent({
			id: "tempest-domain-bulsania-relation",
			subclassId: subclasses.cleric_tempest_domain.id,
			continentId: continents.bulsania.id,
			reasoning: `Mountain Storms And Harsh Weather`,
		}),
		trickery_domain_kuriguer_relation: await db.createSubclassContinent({
			id: "trickery-domain-kuriguer-relation",
			subclassId: subclasses.cleric_trickery_domain.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Chaos And Trickster Traditions`,
		}),
		trickery_domain_skratonia_relation: await db.createSubclassContinent({
			id: "trickery-domain-skratonia-relation",
			subclassId: subclasses.cleric_trickery_domain.id,
			continentId: continents.skratonia.id,
			reasoning: `Diverse Populations Harbor Trickster Cults`,
		}),
		twilight_domain_kuriguer_relation: await db.createSubclassContinent({
			id: "twilight-domain-kuriguer-relation",
			subclassId: subclasses.cleric_twilight_domain.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Create Perpetual Twilight Zones`,
		}),
		war_domain_bulsania_relation: await db.createSubclassContinent({
			id: "war-domain-bulsania-relation",
			subclassId: subclasses.cleric_war_domain.id,
			continentId: continents.bulsania.id,
			reasoning: `Militarized Frontier Societies Worship War Gods`,
		}),
		war_domain_katman_relation: await db.createSubclassContinent({
			id: "war-domain-katman-relation",
			subclassId: subclasses.cleric_war_domain.id,
			continentId: continents.katman.id,
			reasoning: `Tribal Warfare And Conflict Zones`,
		}),
		circle_of_dreams_kuriguer_relation: await db.createSubclassContinent({
			id: "circle-of-dreams-kuriguer-relation",
			subclassId: subclasses.druid_circle_of_dreams.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Connect To Dream Realms`,
		}),
		circle_of_the_land_kuriguer_relation: await db.createSubclassContinent({
			id: "circle-of-the-land-kuriguer-relation",
			subclassId: subclasses.druid_circle_of_the_land.id,
			continentId: continents.kuriguer.id,
			reasoning: `Ancient Magical Forests Hold Deep Land Connections`,
		}),
		circle_of_the_land_skratonia_relation: await db.createSubclassContinent({
			id: "circle-of-the-land-skratonia-relation",
			subclassId: subclasses.druid_circle_of_the_land.id,
			continentId: continents.skratonia.id,
			reasoning: `Fertile Plains And Agricultural Lands`,
		}),
		circle_of_the_moon_kuriguer_relation: await db.createSubclassContinent({
			id: "circle-of-the-moon-kuriguer-relation",
			subclassId: subclasses.druid_circle_of_the_moon.id,
			continentId: continents.kuriguer.id,
			reasoning: `Wild Magic Enhances Shapeshifting Abilities`,
		}),
		circle_of_the_shepherd_kuriguer_relation: await db.createSubclassContinent({
			id: "circle-of-the-shepherd-kuriguer-relation",
			subclassId: subclasses.druid_circle_of_the_shepherd.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Teem With Creatures Needing Protection`,
		}),
		circle_of_spores_kuriguer_relation: await db.createSubclassContinent({
			id: "circle-of-spores-kuriguer-relation",
			subclassId: subclasses.druid_circle_of_spores.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Have Complex Decay And Growth Cycles`,
		}),
		circle_of_stars_bulsania_relation: await db.createSubclassContinent({
			id: "circle-of-stars-bulsania-relation",
			subclassId: subclasses.druid_circle_of_stars.id,
			continentId: continents.bulsania.id,
			reasoning: `Clear Mountain Skies Perfect For Stellar Observation`,
		}),
		circle_of_wildfire_kuriguer_relation: await db.createSubclassContinent({
			id: "circle-of-wildfire-kuriguer-relation",
			subclassId: subclasses.druid_circle_of_wildfire.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Fire Nodes And Elemental Hotspots`,
		}),
		arcane_archer_kuriguer_relation: await db.createSubclassContinent({
			id: "arcane-archer-kuriguer-relation",
			subclassId: subclasses.fighter_arcane_archer.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Archery Traditions And Elven Expertise`,
		}),
		battle_master_skratonia_relation: await db.createSubclassContinent({
			id: "battle-master-skratonia-relation",
			subclassId: subclasses.fighter_battle_master.id,
			continentId: continents.skratonia.id,
			reasoning: `Organized Military Training And Tactical Schools`,
		}),
		battle_master_bulsania_relation: await db.createSubclassContinent({
			id: "battle-master-bulsania-relation",
			subclassId: subclasses.fighter_battle_master.id,
			continentId: continents.bulsania.id,
			reasoning: `Militarized Societies Emphasize Tactical Combat`,
		}),
		cavalier_skratonia_relation: await db.createSubclassContinent({
			id: "cavalier-skratonia-relation",
			subclassId: subclasses.fighter_cavalier.id,
			continentId: continents.skratonia.id,
			reasoning: `Open Plains Perfect For Cavalry Warfare`,
		}),
		champion_skratonia_relation: await db.createSubclassContinent({
			id: "champion-skratonia-relation",
			subclassId: subclasses.fighter_champion.id,
			continentId: continents.skratonia.id,
			reasoning: `Diverse Populations And Athletic Competitions`,
		}),
		champion_bulsania_relation: await db.createSubclassContinent({
			id: "champion-bulsania-relation",
			subclassId: subclasses.fighter_champion.id,
			continentId: continents.bulsania.id,
			reasoning: `Harsh Conditions Breed Physical Excellence`,
		}),
		echo_knight_kuriguer_relation: await db.createSubclassContinent({
			id: "echo-knight-kuriguer-relation",
			subclassId: subclasses.fighter_echo_knight.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Instability Creates Planar Echoes`,
		}),
		eldritch_knight_kuriguer_relation: await db.createSubclassContinent({
			id: "eldritch-knight-kuriguer-relation",
			subclassId: subclasses.fighter_eldritch_knight.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Saturation Enables Warrior-mage Training`,
		}),
		psi_warrior_kuriguer_relation: await db.createSubclassContinent({
			id: "psi-warrior-kuriguer-relation",
			subclassId: subclasses.fighter_psi_warrior.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Instability Enhances Psionic Abilities`,
		}),
		rune_knight_maltman_relation: await db.createSubclassContinent({
			id: "rune-knight-maltman-relation",
			subclassId: subclasses.fighter_rune_knight.id,
			continentId: continents.maltman.id,
			reasoning: `Mountain Stone Carving Preserves Ancient Runes`,
		}),
		rune_knight_bulsania_relation: await db.createSubclassContinent({
			id: "rune-knight-bulsania-relation",
			subclassId: subclasses.fighter_rune_knight.id,
			continentId: continents.bulsania.id,
			reasoning: `Giant Heritage And Runic Traditions`,
		}),
		samurai_skratonia_relation: await db.createSubclassContinent({
			id: "samurai-skratonia-relation",
			subclassId: subclasses.fighter_samurai.id,
			continentId: continents.skratonia.id,
			reasoning: `Honor-based Warrior Cultures In Organized Societies`,
		}),
		samurai_bulsania_relation: await db.createSubclassContinent({
			id: "samurai-bulsania-relation",
			subclassId: subclasses.fighter_samurai.id,
			continentId: continents.bulsania.id,
			reasoning: `Militarized Honor Codes And Discipline`,
		}),
		way_of_the_astral_self_skratonia_relation: await db.createSubclassContinent({
			id: "way-of-the-astral-self-skratonia-relation",
			subclassId: subclasses.monk_way_of_the_astral_self.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Monasteries Develop Astral Projection Techniques`,
		}),
		way_of_the_ascendant_dragon_bulsania_relation: await db.createSubclassContinent({
			id: "way-of-the-ascendant-dragon-bulsania-relation",
			subclassId: subclasses.monk_way_of_the_ascendant_dragon.id,
			continentId: continents.bulsania.id,
			reasoning: `Draconic Heritage And Dragon-worship Traditions`,
		}),
		way_of_the_drunken_master_skratonia_relation: await db.createSubclassContinent({
			id: "way-of-the-drunken-master-skratonia-relation",
			subclassId: subclasses.monk_way_of_the_drunken_master.id,
			continentId: continents.skratonia.id,
			reasoning: `Tavern Culture And Festival Traditions`,
		}),
		way_of_the_four_elements_kuriguer_relation: await db.createSubclassContinent({
			id: "way-of-the-four-elements-kuriguer-relation",
			subclassId: subclasses.monk_way_of_the_four_elements.id,
			continentId: continents.kuriguer.id,
			reasoning: `Elemental Nodes And Magical Saturation`,
		}),
		way_of_the_kensei_skratonia_relation: await db.createSubclassContinent({
			id: "way-of-the-kensei-skratonia-relation",
			subclassId: subclasses.monk_way_of_the_kensei.id,
			continentId: continents.skratonia.id,
			reasoning: `Diverse Weapon Traditions And Martial Schools`,
		}),
		way_of_the_long_death_kuriguer_relation: await db.createSubclassContinent({
			id: "way-of-the-long-death-kuriguer-relation",
			subclassId: subclasses.monk_way_of_the_long_death.id,
			continentId: continents.kuriguer.id,
			reasoning: `Shadow Magic And Death Mysteries`,
		}),
		way_of_mercy_skratonia_relation: await db.createSubclassContinent({
			id: "way-of-mercy-skratonia-relation",
			subclassId: subclasses.monk_way_of_mercy.id,
			continentId: continents.skratonia.id,
			reasoning: `Large Populations Benefit From Healing Monasteries`,
		}),
		way_of_the_open_hand_skratonia_relation: await db.createSubclassContinent({
			id: "way-of-the-open-hand-skratonia-relation",
			subclassId: subclasses.monk_way_of_the_open_hand.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Monasteries And Martial Arts Schools`,
		}),
		way_of_shadow_kuriguer_relation: await db.createSubclassContinent({
			id: "way-of-shadow-kuriguer-relation",
			subclassId: subclasses.monk_way_of_shadow.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Shadows And Stealth Traditions`,
		}),
		way_of_the_sun_soul_skratonia_relation: await db.createSubclassContinent({
			id: "way-of-the-sun-soul-skratonia-relation",
			subclassId: subclasses.monk_way_of_the_sun_soul.id,
			continentId: continents.skratonia.id,
			reasoning: `Sun Worship And Radiant Energy Traditions`,
		}),
		oath_of_the_ancients_kuriguer_relation: await db.createSubclassContinent({
			id: "oath-of-the-ancients-kuriguer-relation",
			subclassId: subclasses.paladin_oath_of_the_ancients.id,
			continentId: continents.kuriguer.id,
			reasoning: `Ancient Magical Forests Require Sworn Protectors`,
		}),
		oath_of_conquest_bulsania_relation: await db.createSubclassContinent({
			id: "oath-of-conquest-bulsania-relation",
			subclassId: subclasses.paladin_oath_of_conquest.id,
			continentId: continents.bulsania.id,
			reasoning: `Militarized Frontier Societies Embrace Conquest`,
		}),
		oath_of_conquest_katman_relation: await db.createSubclassContinent({
			id: "oath-of-conquest-katman-relation",
			subclassId: subclasses.paladin_oath_of_conquest.id,
			continentId: continents.katman.id,
			reasoning: `Tribal Warfare And Territorial Expansion`,
		}),
		oath_of_devotion_skratonia_relation: await db.createSubclassContinent({
			id: "oath-of-devotion-skratonia-relation",
			subclassId: subclasses.paladin_oath_of_devotion.id,
			continentId: continents.skratonia.id,
			reasoning: `Organized Religions And Temple Hierarchies`,
		}),
		oath_of_glory_skratonia_relation: await db.createSubclassContinent({
			id: "oath-of-glory-skratonia-relation",
			subclassId: subclasses.paladin_oath_of_glory.id,
			continentId: continents.skratonia.id,
			reasoning: `Tournament Culture And Heroic Traditions`,
		}),
		oath_of_glory_bulsania_relation: await db.createSubclassContinent({
			id: "oath-of-glory-bulsania-relation",
			subclassId: subclasses.paladin_oath_of_glory.id,
			continentId: continents.bulsania.id,
			reasoning: `Harsh Frontier Breeds Glory-seeking Warriors`,
		}),
		oath_of_redemption_skratonia_relation: await db.createSubclassContinent({
			id: "oath-of-redemption-skratonia-relation",
			subclassId: subclasses.paladin_oath_of_redemption.id,
			continentId: continents.skratonia.id,
			reasoning: `Diverse Populations Offer Paths To Redemption`,
		}),
		oath_of_vengeance_skratonia_relation: await db.createSubclassContinent({
			id: "oath-of-vengeance-skratonia-relation",
			subclassId: subclasses.paladin_oath_of_vengeance.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Injustices Breed Vengeance Seekers`,
		}),
		oath_of_the_watchers_kuriguer_relation: await db.createSubclassContinent({
			id: "oath-of-the-watchers-kuriguer-relation",
			subclassId: subclasses.paladin_oath_of_the_watchers.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Instability Attracts Planar Threats`,
		}),
		oath_of_the_crown_skratonia_relation: await db.createSubclassContinent({
			id: "oath-of-the-crown-skratonia-relation",
			subclassId: subclasses.paladin_oath_of_the_crown.id,
			continentId: continents.skratonia.id,
			reasoning: `City-states Require Civic Protectors And Law Enforcers`,
		}),
		oath_of_the_crown_katman_relation: await db.createSubclassContinent({
			id: "oath-of-the-crown-katman-relation",
			subclassId: subclasses.paladin_oath_of_the_crown.id,
			continentId: continents.katman.id,
			reasoning: `Unified Kingdom Needs Loyal Defenders Of The Crown`,
		}),
		oath_of_the_crown_bulsania_relation: await db.createSubclassContinent({
			id: "oath-of-the-crown-bulsania-relation",
			subclassId: subclasses.paladin_oath_of_the_crown.id,
			continentId: continents.bulsania.id,
			reasoning: `Militarized Society Values Loyalty And Hierarchy`,
		}),
		beast_master_kuriguer_relation: await db.createSubclassContinent({
			id: "beast-master-kuriguer-relation",
			subclassId: subclasses.ranger_beast_master.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Teem With Potential Animal Companions`,
		}),
		beast_master_bulsania_relation: await db.createSubclassContinent({
			id: "beast-master-bulsania-relation",
			subclassId: subclasses.ranger_beast_master.id,
			continentId: continents.bulsania.id,
			reasoning: `Mountain Terrain Requires Aerial Reconnaissance`,
		}),
		drakewarden_bulsania_relation: await db.createSubclassContinent({
			id: "drakewarden-bulsania-relation",
			subclassId: subclasses.ranger_drakewarden.id,
			continentId: continents.bulsania.id,
			reasoning: `Draconic Heritage And Dragon Presence`,
		}),
		fey_wanderer_kuriguer_relation: await db.createSubclassContinent({
			id: "fey-wanderer-kuriguer-relation",
			subclassId: subclasses.ranger_fey_wanderer.id,
			continentId: continents.kuriguer.id,
			reasoning: `Fey Presence And Magical Forest Wandering`,
		}),
		gloom_stalker_kuriguer_relation: await db.createSubclassContinent({
			id: "gloom-stalker-kuriguer-relation",
			subclassId: subclasses.ranger_gloom_stalker.id,
			continentId: continents.kuriguer.id,
			reasoning: `Dangerous Magical Forests Require Skilled Stalkers`,
		}),
		gloom_stalker_maltman_relation: await db.createSubclassContinent({
			id: "gloom-stalker-maltman-relation",
			subclassId: subclasses.ranger_gloom_stalker.id,
			continentId: continents.maltman.id,
			reasoning: `Underground Environments Favor Darkness Specialists`,
		}),
		horizon_walker_kuriguer_relation: await db.createSubclassContinent({
			id: "horizon-walker-kuriguer-relation",
			subclassId: subclasses.ranger_horizon_walker.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Instability Creates Planar Boundaries`,
		}),
		hunter_skratonia_relation: await db.createSubclassContinent({
			id: "hunter-skratonia-relation",
			subclassId: subclasses.ranger_hunter.id,
			continentId: continents.skratonia.id,
			reasoning: `Diverse Hunting Grounds And Prey`,
		}),
		hunter_kuriguer_relation: await db.createSubclassContinent({
			id: "hunter-kuriguer-relation",
			subclassId: subclasses.ranger_hunter.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Require Skilled Hunters`,
		}),
		monster_slayer_skratonia_relation: await db.createSubclassContinent({
			id: "monster-slayer-skratonia-relation",
			subclassId: subclasses.ranger_monster_slayer.id,
			continentId: continents.skratonia.id,
			reasoning: `Populated Areas Need Monster Protection`,
		}),
		monster_slayer_bulsania_relation: await db.createSubclassContinent({
			id: "monster-slayer-bulsania-relation",
			subclassId: subclasses.ranger_monster_slayer.id,
			continentId: continents.bulsania.id,
			reasoning: `Harsh Wilderness Harbors Dangerous Monsters`,
		}),
		swarmkeeper_kuriguer_relation: await db.createSubclassContinent({
			id: "swarmkeeper-kuriguer-relation",
			subclassId: subclasses.ranger_swarmkeeper.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Harbor Diverse Swarms And Creatures`,
		}),
		arcane_trickster_kuriguer_relation: await db.createSubclassContinent({
			id: "arcane-trickster-kuriguer-relation",
			subclassId: subclasses.rogue_arcane_trickster.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Saturation Enables Arcane Thievery`,
		}),
		arcane_trickster_skratonia_relation: await db.createSubclassContinent({
			id: "arcane-trickster-skratonia-relation",
			subclassId: subclasses.rogue_arcane_trickster.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Environments Provide Targets And Training`,
		}),
		assassin_kuriguer_relation: await db.createSubclassContinent({
			id: "assassin-kuriguer-relation",
			subclassId: subclasses.rogue_assassin.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Ports And Diverse Populations Enable Infiltration`,
		}),
		assassin_skratonia_relation: await db.createSubclassContinent({
			id: "assassin-skratonia-relation",
			subclassId: subclasses.rogue_assassin.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Politics Breed Professional Killers`,
		}),
		inquisitive_skratonia_relation: await db.createSubclassContinent({
			id: "inquisitive-skratonia-relation",
			subclassId: subclasses.rogue_inquisitive.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Mysteries And Complex Investigations`,
		}),
		mastermind_skratonia_relation: await db.createSubclassContinent({
			id: "mastermind-skratonia-relation",
			subclassId: subclasses.rogue_mastermind.id,
			continentId: continents.skratonia.id,
			reasoning: `Complex Urban Politics Require Masterminds`,
		}),
		mastermind_kuriguer_relation: await db.createSubclassContinent({
			id: "mastermind-kuriguer-relation",
			subclassId: subclasses.rogue_mastermind.id,
			continentId: continents.kuriguer.id,
			reasoning: `Diverse Magical Populations Breed Intrigue`,
		}),
		phantom_kuriguer_relation: await db.createSubclassContinent({
			id: "phantom-kuriguer-relation",
			subclassId: subclasses.rogue_phantom.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Harbor Spirits And Ghostly Presences`,
		}),
		scout_skratonia_relation: await db.createSubclassContinent({
			id: "scout-skratonia-relation",
			subclassId: subclasses.rogue_scout.id,
			continentId: continents.skratonia.id,
			reasoning: `Open Plains Require Mobile Scouts`,
		}),
		scout_kuriguer_relation: await db.createSubclassContinent({
			id: "scout-kuriguer-relation",
			subclassId: subclasses.rogue_scout.id,
			continentId: continents.kuriguer.id,
			reasoning: `Dangerous Forests Need Skilled Pathfinders`,
		}),
		soulknife_skratonia_relation: await db.createSubclassContinent({
			id: "soulknife-skratonia-relation",
			subclassId: subclasses.rogue_soulknife.id,
			continentId: continents.skratonia.id,
			reasoning: `Psionic Communities Develop Mental Blade Techniques`,
		}),
		soulknife_kuriguer_relation: await db.createSubclassContinent({
			id: "soulknife-kuriguer-relation",
			subclassId: subclasses.rogue_soulknife.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Instability Enhances Psionic Abilities`,
		}),
		swashbuckler_skratonia_relation: await db.createSubclassContinent({
			id: "swashbuckler-skratonia-relation",
			subclassId: subclasses.rogue_swashbuckler.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Dueling Culture And Social Combat`,
		}),
		thief_skratonia_relation: await db.createSubclassContinent({
			id: "thief-skratonia-relation",
			subclassId: subclasses.rogue_thief.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Centers Provide Theft Opportunities`,
		}),
		thief_kuriguer_relation: await db.createSubclassContinent({
			id: "thief-kuriguer-relation",
			subclassId: subclasses.rogue_thief.id,
			continentId: continents.kuriguer.id,
			reasoning: `Busy Ports And Diverse Populations`,
		}),
		aberrant_mind_skratonia_relation: await db.createSubclassContinent({
			id: "aberrant-mind-skratonia-relation",
			subclassId: subclasses.sorcerer_aberrant_mind.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Populations Exposed To Aberrant Influences`,
		}),
		aberrant_mind_kuriguer_relation: await db.createSubclassContinent({
			id: "aberrant-mind-kuriguer-relation",
			subclassId: subclasses.sorcerer_aberrant_mind.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Instability Attracts Aberrant Entities`,
		}),
		clockwork_soul_alatman_relation: await db.createSubclassContinent({
			id: "clockwork-soul-alatman-relation",
			subclassId: subclasses.sorcerer_clockwork_soul.id,
			continentId: continents.alatman.id,
			reasoning: `Mechanical Workshops And Construct Creation`,
		}),
		divine_soul_skratonia_relation: await db.createSubclassContinent({
			id: "divine-soul-skratonia-relation",
			subclassId: subclasses.sorcerer_divine_soul.id,
			continentId: continents.skratonia.id,
			reasoning: `Diverse Religious Traditions And Divine Exposure`,
		}),
		draconic_bloodline_bulsania_relation: await db.createSubclassContinent({
			id: "draconic-bloodline-bulsania-relation",
			subclassId: subclasses.sorcerer_draconic_bloodline.id,
			continentId: continents.bulsania.id,
			reasoning: `Draconic Heritage And Dragon Presence`,
		}),
		lunar_sorcery_kuriguer_relation: await db.createSubclassContinent({
			id: "lunar-sorcery-kuriguer-relation",
			subclassId: subclasses.sorcerer_lunar_sorcery.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Enhance Lunar Connections`,
		}),
		shadow_magic_kuriguer_relation: await db.createSubclassContinent({
			id: "shadow-magic-kuriguer-relation",
			subclassId: subclasses.sorcerer_shadow_magic.id,
			continentId: continents.kuriguer.id,
			reasoning: `Shadow Magic Nodes And Dark Enchantments`,
		}),
		shadow_magic_maltman_relation: await db.createSubclassContinent({
			id: "shadow-magic-maltman-relation",
			subclassId: subclasses.sorcerer_shadow_magic.id,
			continentId: continents.maltman.id,
			reasoning: `Underground Darkness Traditions`,
		}),
		storm_sorcery_kuriguer_relation: await db.createSubclassContinent({
			id: "storm-sorcery-kuriguer-relation",
			subclassId: subclasses.sorcerer_storm_sorcery.id,
			continentId: continents.kuriguer.id,
			reasoning: `Coastal Storms And Elemental Forces`,
		}),
		storm_sorcery_bulsania_relation: await db.createSubclassContinent({
			id: "storm-sorcery-bulsania-relation",
			subclassId: subclasses.sorcerer_storm_sorcery.id,
			continentId: continents.bulsania.id,
			reasoning: `Mountain Storms And Harsh Weather`,
		}),
		the_archfey_kuriguer_relation: await db.createSubclassContinent({
			id: "the-archfey-kuriguer-relation",
			subclassId: subclasses.warlock_the_archfey.id,
			continentId: continents.kuriguer.id,
			reasoning: `Fey Courts And Archfey Presence In Magical Forests`,
		}),
		the_celestial_skratonia_relation: await db.createSubclassContinent({
			id: "the-celestial-skratonia-relation",
			subclassId: subclasses.warlock_the_celestial.id,
			continentId: continents.skratonia.id,
			reasoning: `Celestial Influence In Populated Areas`,
		}),
		the_fathomless_kuriguer_relation: await db.createSubclassContinent({
			id: "the-fathomless-kuriguer-relation",
			subclassId: subclasses.warlock_the_fathomless.id,
			continentId: continents.kuriguer.id,
			reasoning: `Coastal Waters And Deep Sea Mysteries`,
		}),
		the_fiend_skratonia_relation: await db.createSubclassContinent({
			id: "the-fiend-skratonia-relation",
			subclassId: subclasses.warlock_the_fiend.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Desperation And Infernal Temptations`,
		}),
		the_fiend_katman_relation: await db.createSubclassContinent({
			id: "the-fiend-katman-relation",
			subclassId: subclasses.warlock_the_fiend.id,
			continentId: continents.katman.id,
			reasoning: `Swamp Darkness Harbors Fiendish Entities`,
		}),
		the_genie_kuriguer_relation: await db.createSubclassContinent({
			id: "the-genie-kuriguer-relation",
			subclassId: subclasses.warlock_the_genie.id,
			continentId: continents.kuriguer.id,
			reasoning: `Elemental Nodes Attract Genie Attention`,
		}),
		the_great_old_one_skratonia_relation: await db.createSubclassContinent({
			id: "the-great-old-one-skratonia-relation",
			subclassId: subclasses.warlock_the_great_old_one.id,
			continentId: continents.skratonia.id,
			reasoning: `Scholarly Pursuits Uncover Forbidden Knowledge`,
		}),
		the_great_old_one_kuriguer_relation: await db.createSubclassContinent({
			id: "the-great-old-one-kuriguer-relation",
			subclassId: subclasses.warlock_the_great_old_one.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Instability Attracts Ancient Entities`,
		}),
		the_hexblade_kuriguer_relation: await db.createSubclassContinent({
			id: "the-hexblade-kuriguer-relation",
			subclassId: subclasses.warlock_the_hexblade.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Weapons And Shadow Blade Spirits`,
		}),
		the_hexblade_skratonia_relation: await db.createSubclassContinent({
			id: "the-hexblade-skratonia-relation",
			subclassId: subclasses.warlock_the_hexblade.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Warriors Seeking Magical Advantages`,
		}),
		the_undead_alatman_relation: await db.createSubclassContinent({
			id: "the-undead-alatman-relation",
			subclassId: subclasses.warlock_the_undead.id,
			continentId: continents.alatman.id,
			reasoning: `Vampiric Legends And Undead Experiments`,
		}),
		the_undead_kuriguer_relation: await db.createSubclassContinent({
			id: "the-undead-kuriguer-relation",
			subclassId: subclasses.warlock_the_undead.id,
			continentId: continents.kuriguer.id,
			reasoning: `Shadow Magic And Death Mysteries`,
		}),
		the_undying_katman_relation: await db.createSubclassContinent({
			id: "the-undying-katman-relation",
			subclassId: subclasses.warlock_the_undying.id,
			continentId: continents.katman.id,
			reasoning: `Swamp Cults And Immortality Rituals`,
		}),
		school_of_abjuration_maltman_relation: await db.createSubclassContinent({
			id: "school-of-abjuration-maltman-relation",
			subclassId: subclasses.wizard_school_of_abjuration.id,
			continentId: continents.maltman.id,
			reasoning: `Mining Communities Need Protective Magic`,
		}),
		school_of_abjuration_kuriguer_relation: await db.createSubclassContinent({
			id: "school-of-abjuration-kuriguer-relation",
			subclassId: subclasses.wizard_school_of_abjuration.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Dangers Require Skilled Ward-crafters`,
		}),
		school_of_bladesinging_kuriguer_relation: await db.createSubclassContinent({
			id: "school-of-bladesinging-kuriguer-relation",
			subclassId: subclasses.wizard_school_of_bladesinging.id,
			continentId: continents.kuriguer.id,
			reasoning: `Elven Bladesinging Traditions And Magical Combat Schools`,
		}),
		school_of_chronurgy_kuriguer_relation: await db.createSubclassContinent({
			id: "school-of-chronurgy-kuriguer-relation",
			subclassId: subclasses.wizard_school_of_chronurgy.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Research And Temporal Experimentation`,
		}),
		school_of_conjuration_kuriguer_relation: await db.createSubclassContinent({
			id: "school-of-conjuration-kuriguer-relation",
			subclassId: subclasses.wizard_school_of_conjuration.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Instability Enables Planar Summoning`,
		}),
		school_of_divination_kuriguer_relation: await db.createSubclassContinent({
			id: "school-of-divination-kuriguer-relation",
			subclassId: subclasses.wizard_school_of_divination.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Enhance Divinatory Abilities`,
		}),
		school_of_divination_skratonia_relation: await db.createSubclassContinent({
			id: "school-of-divination-skratonia-relation",
			subclassId: subclasses.wizard_school_of_divination.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Centers Value Prophetic Guidance`,
		}),
		school_of_enchantment_kuriguer_relation: await db.createSubclassContinent({
			id: "school-of-enchantment-kuriguer-relation",
			subclassId: subclasses.wizard_school_of_enchantment.id,
			continentId: continents.kuriguer.id,
			reasoning: `Fey Influence And Enchantment Traditions`,
		}),
		school_of_evocation_kuriguer_relation: await db.createSubclassContinent({
			id: "school-of-evocation-kuriguer-relation",
			subclassId: subclasses.wizard_school_of_evocation.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Research And Evocation Experimentation`,
		}),
		school_of_evocation_bulsania_relation: await db.createSubclassContinent({
			id: "school-of-evocation-bulsania-relation",
			subclassId: subclasses.wizard_school_of_evocation.id,
			continentId: continents.bulsania.id,
			reasoning: `Militarized Societies Value Battle Magic`,
		}),
		school_of_graviturgy_kuriguer_relation: await db.createSubclassContinent({
			id: "school-of-graviturgy-kuriguer-relation",
			subclassId: subclasses.wizard_school_of_graviturgy.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Research And Exotic Arcana`,
		}),
		school_of_illusion_kuriguer_relation: await db.createSubclassContinent({
			id: "school-of-illusion-kuriguer-relation",
			subclassId: subclasses.wizard_school_of_illusion.id,
			continentId: continents.kuriguer.id,
			reasoning: `Fey Magic And Illusion Traditions`,
		}),
		school_of_necromancy_kuriguer_relation: await db.createSubclassContinent({
			id: "school-of-necromancy-kuriguer-relation",
			subclassId: subclasses.wizard_school_of_necromancy.id,
			continentId: continents.kuriguer.id,
			reasoning: `Shadow Magic And Necromantic Research`,
		}),
		school_of_necromancy_katman_relation: await db.createSubclassContinent({
			id: "school-of-necromancy-katman-relation",
			subclassId: subclasses.wizard_school_of_necromancy.id,
			continentId: continents.katman.id,
			reasoning: `Swamp Cults And Dark Magic Traditions`,
		}),
		order_of_scribes_skratonia_relation: await db.createSubclassContinent({
			id: "order-of-scribes-skratonia-relation",
			subclassId: subclasses.wizard_order_of_scribes.id,
			continentId: continents.skratonia.id,
			reasoning: `Urban Libraries And Scholarly Institutions`,
		}),
		order_of_scribes_kuriguer_relation: await db.createSubclassContinent({
			id: "order-of-scribes-kuriguer-relation",
			subclassId: subclasses.wizard_order_of_scribes.id,
			continentId: continents.kuriguer.id,
			reasoning: `Ancient Magical Archives And Research Centers`,
		}),
		school_of_transmutation_kuriguer_relation: await db.createSubclassContinent({
			id: "school-of-transmutation-kuriguer-relation",
			subclassId: subclasses.wizard_school_of_transmutation.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Transformation And Shapeshifting Traditions`,
		}),
		war_magic_bulsania_relation: await db.createSubclassContinent({
			id: "war-magic-bulsania-relation",
			subclassId: subclasses.wizard_war_magic.id,
			continentId: continents.bulsania.id,
			reasoning: `Militarized Societies Train Battle-mages`,
		}),
		war_magic_skratonia_relation: await db.createSubclassContinent({
			id: "war-magic-skratonia-relation",
			subclassId: subclasses.wizard_war_magic.id,
			continentId: continents.skratonia.id,
			reasoning: `Organized Armies Employ War Wizards`,
		}),
		grandmaster_skratonia_relation: await db.createSubclassContinent({
			id: "grandmaster-skratonia-relation",
			subclassId: subclasses.tactician_grandmaster.id,
			continentId: continents.skratonia.id,
			reasoning: `The Political Complexity And Diverse Populations Of Skratonia Require Master Strategists To Coordinate Between Different City-states And Manage International Diplomacy.`,
		}),
		grandmaster_alatman_relation: await db.createSubclassContinent({
			id: "grandmaster-alatman-relation",
			subclassId: subclasses.tactician_grandmaster.id,
			continentId: continents.alatman.id,
			reasoning: `The Ongoing Political Tensions And Resource Conflicts In Kamalatman Demand Strategic Minds To Navigate The Complex Web Of Rebellions And Negotiations.`,
		}),
		mentalist_kuriguer_relation: await db.createSubclassContinent({
			id: "mentalist-kuriguer-relation",
			subclassId: subclasses.tactician_mentalist.id,
			continentId: continents.kuriguer.id,
			reasoning: `The Magical Anomalies And Psionic Phenomena In Kuriguer's Forests Attract And Enhance Mentalist Abilities.`,
		}),
		mentalist_skratonia_relation: await db.createSubclassContinent({
			id: "mentalist-skratonia-relation",
			subclassId: subclasses.tactician_mentalist.id,
			continentId: continents.skratonia.id,
			reasoning: `The Diverse Populations And Complex Politics Of Skratonia Require Mentalists For Intelligence Gathering And Coordination.`,
		}),
		scholar_kuriguer_relation: await db.createSubclassContinent({
			id: "scholar-kuriguer-relation",
			subclassId: subclasses.tactician_scholar.id,
			continentId: continents.kuriguer.id,
			reasoning: `The Magical Academies And Research Institutions In Kuriguer Provide The Perfect Environment For Scholarly Tacticians To Study And Develop New Strategies.`,
		}),
		scholar_skratonia_relation: await db.createSubclassContinent({
			id: "scholar-skratonia-relation",
			subclassId: subclasses.tactician_scholar.id,
			continentId: continents.skratonia.id,
			reasoning: `The Central Location And Diverse Populations Of Skratonia Make It An Ideal Place For Scholars To Gather Information And Study Different Tactical Approaches.`,
		}),
		war_mind_bulsania_relation: await db.createSubclassContinent({
			id: "war-mind-bulsania-relation",
			subclassId: subclasses.tactician_war_mind.id,
			continentId: continents.bulsania.id,
			reasoning: `The Militarized Society And Harsh Conditions Of Bulsania Produce Natural War Minds Who Excel At Leading In Combat.`,
		}),
		war_mind_maltman_relation: await db.createSubclassContinent({
			id: "war-mind-maltman-relation",
			subclassId: subclasses.tactician_war_mind.id,
			continentId: continents.maltman.id,
			reasoning: `The Ongoing Conflicts And Dangerous Terrain Of Kamalatman Require War Minds To Lead Operations In Challenging Conditions.`,
		}),
	}
}