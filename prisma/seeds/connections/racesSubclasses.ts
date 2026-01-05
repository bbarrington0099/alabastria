import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Races, Subclasses } from "../index";

type RaceSubclassPayload = Prisma.RaceSubclassRecommendationGetPayload<{}>
export interface RacesSubclasses {
	gnome_alchemist_relation: RaceSubclassPayload;
	autognome_alchemist_relation: RaceSubclassPayload;
	human_alchemist_relation: RaceSubclassPayload;
	warforged_armorer_relation: RaceSubclassPayload;
	dwarf_armorer_relation: RaceSubclassPayload;
	hobgoblin_armorer_relation: RaceSubclassPayload;
	autognome_artillerist_relation: RaceSubclassPayload;
	hobgoblin_artillerist_relation: RaceSubclassPayload;
	warforged_battle_smith_relation: RaceSubclassPayload;
	gnome_battle_smith_relation: RaceSubclassPayload;
	human_battle_smith_relation: RaceSubclassPayload;
	goliath_ancestral_guardian_relation: RaceSubclassPayload;
	orc_ancestral_guardian_relation: RaceSubclassPayload;
	half_orc_ancestral_guardian_relation: RaceSubclassPayload;
	lizardfolk_ancestral_guardian_relation: RaceSubclassPayload;
	shifter_beast_relation: RaceSubclassPayload;
	tabaxi_beast_relation: RaceSubclassPayload;
	orc_berserker_relation: RaceSubclassPayload;
	half_orc_berserker_relation: RaceSubclassPayload;
	goliath_berserker_relation: RaceSubclassPayload;
	dragonborn_berserker_relation: RaceSubclassPayload;
	aarakocra_storm_herald_relation: RaceSubclassPayload;
	goliath_storm_herald_relation: RaceSubclassPayload;
	triton_storm_herald_relation: RaceSubclassPayload;
	goliath_totem_warrior_relation: RaceSubclassPayload;
	shifter_totem_warrior_relation: RaceSubclassPayload;
	lizardfolk_totem_warrior_relation: RaceSubclassPayload;
	centaur_totem_warrior_relation: RaceSubclassPayload;
	genasi_wild_magic_relation: RaceSubclassPayload;
	tiefling_wild_magic_relation: RaceSubclassPayload;
	halfling_wild_magic_relation: RaceSubclassPayload;
	aarakocra_zealot_relation: RaceSubclassPayload;
	aasimar_zealot_relation: RaceSubclassPayload;
	dragonborn_zealot_relation: RaceSubclassPayload;
	dwarf_battlerager_relation: RaceSubclassPayload;
	goliath_battlerager_relation: RaceSubclassPayload;
	orc_battlerager_relation: RaceSubclassPayload;
	goliath_giant_relation: RaceSubclassPayload;
	dwarf_giant_relation: RaceSubclassPayload;
	firbolg_giant_relation: RaceSubclassPayload;
	elf_wild_magic_relation: RaceSubclassPayload;
	human_wild_magic_relation: RaceSubclassPayload;
	satyr_college_of_creation_relation: RaceSubclassPayload;
	half_elf_college_of_creation_relation: RaceSubclassPayload;
	fairy_college_of_creation_relation: RaceSubclassPayload;
	half_elf_college_of_eloquence_relation: RaceSubclassPayload;
	aasimar_college_of_eloquence_relation: RaceSubclassPayload;
	human_college_of_eloquence_relation: RaceSubclassPayload;
	vedalken_college_of_eloquence_relation: RaceSubclassPayload;
	satyr_college_of_glamour_relation: RaceSubclassPayload;
	tiefling_college_of_glamour_relation: RaceSubclassPayload;
	human_college_of_lore_relation: RaceSubclassPayload;
	half_elf_college_of_lore_relation: RaceSubclassPayload;
	vedalken_college_of_lore_relation: RaceSubclassPayload;
	kalashtar_college_of_lore_relation: RaceSubclassPayload;
	reborn_college_of_spirits_relation: RaceSubclassPayload;
	hexblood_college_of_spirits_relation: RaceSubclassPayload;
	half_elf_college_of_swords_relation: RaceSubclassPayload;
	tabaxi_college_of_swords_relation: RaceSubclassPayload;
	human_college_of_swords_relation: RaceSubclassPayload;
	dragonborn_college_of_valor_relation: RaceSubclassPayload;
	human_college_of_valor_relation: RaceSubclassPayload;
	leonin_college_of_valor_relation: RaceSubclassPayload;
	changeling_college_of_whispers_relation: RaceSubclassPayload;
	kenku_college_of_whispers_relation: RaceSubclassPayload;
	tiefling_college_of_whispers_relation: RaceSubclassPayload;
	gnome_arcana_domain_relation: RaceSubclassPayload;
	vedalken_arcana_domain_relation: RaceSubclassPayload;
	dhampir_death_domain_relation: RaceSubclassPayload;
	reborn_death_domain_relation: RaceSubclassPayload;
	dwarf_forge_domain_relation: RaceSubclassPayload;
	warforged_forge_domain_relation: RaceSubclassPayload;
	aasimar_grave_domain_relation: RaceSubclassPayload;
	reborn_grave_domain_relation: RaceSubclassPayload;
	dhampir_grave_domain_relation: RaceSubclassPayload;
	vedalken_knowledge_domain_relation: RaceSubclassPayload;
	gnome_knowledge_domain_relation: RaceSubclassPayload;
	kalashtar_knowledge_domain_relation: RaceSubclassPayload;
	aasimar_life_domain_relation: RaceSubclassPayload;
	human_life_domain_relation: RaceSubclassPayload;
	halfling_life_domain_relation: RaceSubclassPayload;
	aasimar_light_domain_relation: RaceSubclassPayload;
	dragonborn_light_domain_relation: RaceSubclassPayload;
	firbolg_nature_domain_relation: RaceSubclassPayload;
	centaur_nature_domain_relation: RaceSubclassPayload;
	satyr_nature_domain_relation: RaceSubclassPayload;
	hobgoblin_order_domain_relation: RaceSubclassPayload;
	human_order_domain_relation: RaceSubclassPayload;
	vedalken_order_domain_relation: RaceSubclassPayload;
	aasimar_peace_domain_relation: RaceSubclassPayload;
	halfling_peace_domain_relation: RaceSubclassPayload;
	kalashtar_peace_domain_relation: RaceSubclassPayload;
	aarakocra_tempest_domain_relation: RaceSubclassPayload;
	triton_tempest_domain_relation: RaceSubclassPayload;
	kenku_trickery_domain_relation: RaceSubclassPayload;
	changeling_trickery_domain_relation: RaceSubclassPayload;
	goblin_trickery_domain_relation: RaceSubclassPayload;
	halfling_trickery_domain_relation: RaceSubclassPayload;
	owlin_twilight_domain_relation: RaceSubclassPayload;
	dragonborn_war_domain_relation: RaceSubclassPayload;
	hobgoblin_war_domain_relation: RaceSubclassPayload;
	orc_war_domain_relation: RaceSubclassPayload;
	leonin_war_domain_relation: RaceSubclassPayload;
	firbolg_circle_of_dreams_relation: RaceSubclassPayload;
	kalashtar_circle_of_dreams_relation: RaceSubclassPayload;
	firbolg_circle_of_the_land_relation: RaceSubclassPayload;
	centaur_circle_of_the_land_relation: RaceSubclassPayload;
	lizardfolk_circle_of_the_land_relation: RaceSubclassPayload;
	shifter_circle_of_the_moon_relation: RaceSubclassPayload;
	firbolg_circle_of_the_moon_relation: RaceSubclassPayload;
	firbolg_circle_of_the_shepherd_relation: RaceSubclassPayload;
	centaur_circle_of_the_shepherd_relation: RaceSubclassPayload;
	halfling_circle_of_the_shepherd_relation: RaceSubclassPayload;
	reborn_circle_of_spores_relation: RaceSubclassPayload;
	firbolg_circle_of_spores_relation: RaceSubclassPayload;
	aarakocra_circle_of_stars_relation: RaceSubclassPayload;
	kalashtar_circle_of_stars_relation: RaceSubclassPayload;
	aasimar_circle_of_stars_relation: RaceSubclassPayload;
	tiefling_circle_of_wildfire_relation: RaceSubclassPayload;
	dragonborn_circle_of_wildfire_relation: RaceSubclassPayload;
	half_elf_arcane_archer_relation: RaceSubclassPayload;
	hadozee_arcane_archer_relation: RaceSubclassPayload;
	human_battle_master_relation: RaceSubclassPayload;
	hobgoblin_battle_master_relation: RaceSubclassPayload;
	dragonborn_battle_master_relation: RaceSubclassPayload;
	dwarf_battle_master_relation: RaceSubclassPayload;
	hadozee_battle_master_relation: RaceSubclassPayload;
	centaur_cavalier_relation: RaceSubclassPayload;
	human_cavalier_relation: RaceSubclassPayload;
	leonin_cavalier_relation: RaceSubclassPayload;
	human_champion_relation: RaceSubclassPayload;
	goliath_champion_relation: RaceSubclassPayload;
	dragonborn_champion_relation: RaceSubclassPayload;
	orc_champion_relation: RaceSubclassPayload;
	kalashtar_echo_knight_relation: RaceSubclassPayload;
	half_elf_eldritch_knight_relation: RaceSubclassPayload;
	gnome_eldritch_knight_relation: RaceSubclassPayload;
	kalashtar_psi_warrior_relation: RaceSubclassPayload;
	dwarf_rune_knight_relation: RaceSubclassPayload;
	goliath_rune_knight_relation: RaceSubclassPayload;
	firbolg_rune_knight_relation: RaceSubclassPayload;
	human_samurai_relation: RaceSubclassPayload;
	dragonborn_samurai_relation: RaceSubclassPayload;
	hobgoblin_samurai_relation: RaceSubclassPayload;
	kalashtar_way_of_the_astral_self_relation: RaceSubclassPayload;
	aasimar_way_of_the_astral_self_relation: RaceSubclassPayload;
	dragonborn_way_of_the_ascendant_dragon_relation: RaceSubclassPayload;
	kobold_way_of_the_ascendant_dragon_relation: RaceSubclassPayload;
	halfling_way_of_the_drunken_master_relation: RaceSubclassPayload;
	satyr_way_of_the_drunken_master_relation: RaceSubclassPayload;
	human_way_of_the_drunken_master_relation: RaceSubclassPayload;
	genasi_way_of_the_four_elements_relation: RaceSubclassPayload;
	human_way_of_the_kensei_relation: RaceSubclassPayload;
	tabaxi_way_of_the_kensei_relation: RaceSubclassPayload;
	dhampir_way_of_the_long_death_relation: RaceSubclassPayload;
	reborn_way_of_the_long_death_relation: RaceSubclassPayload;
	aasimar_way_of_mercy_relation: RaceSubclassPayload;
	kalashtar_way_of_mercy_relation: RaceSubclassPayload;
	halfling_way_of_mercy_relation: RaceSubclassPayload;
	human_way_of_the_open_hand_relation: RaceSubclassPayload;
	aarakocra_way_of_the_open_hand_relation: RaceSubclassPayload;
	hadozee_way_of_the_open_hand_relation: RaceSubclassPayload;
	kenku_way_of_shadow_relation: RaceSubclassPayload;
	tabaxi_way_of_shadow_relation: RaceSubclassPayload;
	hadozee_way_of_shadow_relation: RaceSubclassPayload;
	aasimar_way_of_the_sun_soul_relation: RaceSubclassPayload;
	dragonborn_way_of_the_sun_soul_relation: RaceSubclassPayload;
	firbolg_oath_of_the_ancients_relation: RaceSubclassPayload;
	centaur_oath_of_the_ancients_relation: RaceSubclassPayload;
	satyr_oath_of_the_ancients_relation: RaceSubclassPayload;
	dragonborn_oath_of_conquest_relation: RaceSubclassPayload;
	hobgoblin_oath_of_conquest_relation: RaceSubclassPayload;
	tiefling_oath_of_conquest_relation: RaceSubclassPayload;
	orc_oath_of_conquest_relation: RaceSubclassPayload;
	aasimar_oath_of_devotion_relation: RaceSubclassPayload;
	human_oath_of_devotion_relation: RaceSubclassPayload;
	dragonborn_oath_of_devotion_relation: RaceSubclassPayload;
	dragonborn_oath_of_glory_relation: RaceSubclassPayload;
	aasimar_oath_of_glory_relation: RaceSubclassPayload;
	leonin_oath_of_glory_relation: RaceSubclassPayload;
	centaur_oath_of_glory_relation: RaceSubclassPayload;
	tiefling_oath_of_redemption_relation: RaceSubclassPayload;
	dhampir_oath_of_redemption_relation: RaceSubclassPayload;
	half_orc_oath_of_redemption_relation: RaceSubclassPayload;
	half_orc_oath_of_vengeance_relation: RaceSubclassPayload;
	tiefling_oath_of_vengeance_relation: RaceSubclassPayload;
	human_oath_of_vengeance_relation: RaceSubclassPayload;
	aarakocra_oath_of_the_watchers_relation: RaceSubclassPayload;
	aasimar_oath_of_the_watchers_relation: RaceSubclassPayload;
	human_oath_of_the_crown_relation: RaceSubclassPayload;
	dragonborn_oath_of_the_crown_relation: RaceSubclassPayload;
	dwarf_oath_of_the_crown_relation: RaceSubclassPayload;
	orc_oath_of_the_crown_relation: RaceSubclassPayload;
	aarakocra_beast_master_relation: RaceSubclassPayload;
	shifter_beast_master_relation: RaceSubclassPayload;
	halfling_beast_master_relation: RaceSubclassPayload;
	dragonborn_drakewarden_relation: RaceSubclassPayload;
	kobold_drakewarden_relation: RaceSubclassPayload;
	satyr_fey_wanderer_relation: RaceSubclassPayload;
	fairy_fey_wanderer_relation: RaceSubclassPayload;
	hexblood_fey_wanderer_relation: RaceSubclassPayload;
	aarakocra_gloom_stalker_relation: RaceSubclassPayload;
	tabaxi_gloom_stalker_relation: RaceSubclassPayload;
	hadozee_gloom_stalker_relation: RaceSubclassPayload;
	aarakocra_horizon_walker_relation: RaceSubclassPayload;
	hadozee_horizon_walker_relation: RaceSubclassPayload;
	human_hunter_relation: RaceSubclassPayload;
	tabaxi_hunter_relation: RaceSubclassPayload;
	halfling_hunter_relation: RaceSubclassPayload;
	human_monster_slayer_relation: RaceSubclassPayload;
	aarakocra_monster_slayer_relation: RaceSubclassPayload;
	half_orc_monster_slayer_relation: RaceSubclassPayload;
	fairy_swarmkeeper_relation: RaceSubclassPayload;
	gnome_swarmkeeper_relation: RaceSubclassPayload;
	firbolg_swarmkeeper_relation: RaceSubclassPayload;
	gnome_arcane_trickster_relation: RaceSubclassPayload;
	half_elf_arcane_trickster_relation: RaceSubclassPayload;
	halfling_arcane_trickster_relation: RaceSubclassPayload;
	kenku_assassin_relation: RaceSubclassPayload;
	tabaxi_assassin_relation: RaceSubclassPayload;
	changeling_assassin_relation: RaceSubclassPayload;
	human_inquisitive_relation: RaceSubclassPayload;
	halfling_inquisitive_relation: RaceSubclassPayload;
	vedalken_inquisitive_relation: RaceSubclassPayload;
	kalashtar_inquisitive_relation: RaceSubclassPayload;
	human_mastermind_relation: RaceSubclassPayload;
	changeling_mastermind_relation: RaceSubclassPayload;
	tiefling_mastermind_relation: RaceSubclassPayload;
	half_elf_mastermind_relation: RaceSubclassPayload;
	reborn_phantom_relation: RaceSubclassPayload;
	dhampir_phantom_relation: RaceSubclassPayload;
	hexblood_phantom_relation: RaceSubclassPayload;
	aarakocra_scout_relation: RaceSubclassPayload;
	tabaxi_scout_relation: RaceSubclassPayload;
	halfling_scout_relation: RaceSubclassPayload;
	hadozee_scout_relation: RaceSubclassPayload;
	kalashtar_soulknife_relation: RaceSubclassPayload;
	half_elf_swashbuckler_relation: RaceSubclassPayload;
	tabaxi_swashbuckler_relation: RaceSubclassPayload;
	human_swashbuckler_relation: RaceSubclassPayload;
	tiefling_swashbuckler_relation: RaceSubclassPayload;
	hadozee_swashbuckler_relation: RaceSubclassPayload;
	halfling_thief_relation: RaceSubclassPayload;
	goblin_thief_relation: RaceSubclassPayload;
	kenku_thief_relation: RaceSubclassPayload;
	human_thief_relation: RaceSubclassPayload;
	kalashtar_aberrant_mind_relation: RaceSubclassPayload;
	plasmoid_aberrant_mind_relation: RaceSubclassPayload;
	warforged_clockwork_soul_relation: RaceSubclassPayload;
	autognome_clockwork_soul_relation: RaceSubclassPayload;
	vedalken_clockwork_soul_relation: RaceSubclassPayload;
	aasimar_divine_soul_relation: RaceSubclassPayload;
	dragonborn_divine_soul_relation: RaceSubclassPayload;
	dragonborn_draconic_bloodline_relation: RaceSubclassPayload;
	kobold_draconic_bloodline_relation: RaceSubclassPayload;
	half_elf_draconic_bloodline_relation: RaceSubclassPayload;
	owlin_lunar_sorcery_relation: RaceSubclassPayload;
	tiefling_shadow_magic_relation: RaceSubclassPayload;
	aarakocra_storm_sorcery_relation: RaceSubclassPayload;
	triton_storm_sorcery_relation: RaceSubclassPayload;
	changeling_wild_magic_relation: RaceSubclassPayload;
	satyr_the_archfey_relation: RaceSubclassPayload;
	fairy_the_archfey_relation: RaceSubclassPayload;
	half_elf_the_archfey_relation: RaceSubclassPayload;
	aasimar_the_celestial_relation: RaceSubclassPayload;
	human_the_celestial_relation: RaceSubclassPayload;
	triton_the_fathomless_relation: RaceSubclassPayload;
	tiefling_the_fiend_relation: RaceSubclassPayload;
	human_the_fiend_relation: RaceSubclassPayload;
	half_orc_the_fiend_relation: RaceSubclassPayload;
	dhampir_the_fiend_relation: RaceSubclassPayload;
	genasi_the_genie_relation: RaceSubclassPayload;
	human_the_genie_relation: RaceSubclassPayload;
	kalashtar_the_great_old_one_relation: RaceSubclassPayload;
	human_the_great_old_one_relation: RaceSubclassPayload;
	human_the_hexblade_relation: RaceSubclassPayload;
	half_elf_the_hexblade_relation: RaceSubclassPayload;
	dhampir_the_undead_relation: RaceSubclassPayload;
	reborn_the_undead_relation: RaceSubclassPayload;
	yuan_ti_the_undying_relation: RaceSubclassPayload;
	human_the_undying_relation: RaceSubclassPayload;
	dwarf_school_of_abjuration_relation: RaceSubclassPayload;
	gnome_school_of_abjuration_relation: RaceSubclassPayload;
	warforged_school_of_abjuration_relation: RaceSubclassPayload;
	half_elf_school_of_bladesinging_relation: RaceSubclassPayload;
	gnome_school_of_chronurgy_relation: RaceSubclassPayload;
	vedalken_school_of_chronurgy_relation: RaceSubclassPayload;
	gnome_school_of_conjuration_relation: RaceSubclassPayload;
	kalashtar_school_of_divination_relation: RaceSubclassPayload;
	aasimar_school_of_divination_relation: RaceSubclassPayload;
	human_school_of_divination_relation: RaceSubclassPayload;
	half_elf_school_of_enchantment_relation: RaceSubclassPayload;
	changeling_school_of_enchantment_relation: RaceSubclassPayload;
	satyr_school_of_enchantment_relation: RaceSubclassPayload;
	dragonborn_school_of_evocation_relation: RaceSubclassPayload;
	tiefling_school_of_evocation_relation: RaceSubclassPayload;
	vedalken_school_of_graviturgy_relation: RaceSubclassPayload;
	gnome_school_of_illusion_relation: RaceSubclassPayload;
	changeling_school_of_illusion_relation: RaceSubclassPayload;
	kenku_school_of_illusion_relation: RaceSubclassPayload;
	fairy_school_of_illusion_relation: RaceSubclassPayload;
	dhampir_school_of_necromancy_relation: RaceSubclassPayload;
	yuan_ti_school_of_necromancy_relation: RaceSubclassPayload;
	reborn_school_of_necromancy_relation: RaceSubclassPayload;
	gnome_order_of_scribes_relation: RaceSubclassPayload;
	vedalken_order_of_scribes_relation: RaceSubclassPayload;
	human_order_of_scribes_relation: RaceSubclassPayload;
	changeling_school_of_transmutation_relation: RaceSubclassPayload;
	gnome_school_of_transmutation_relation: RaceSubclassPayload;
	shifter_school_of_transmutation_relation: RaceSubclassPayload;
	plasmoid_school_of_transmutation_relation: RaceSubclassPayload;
	hobgoblin_war_magic_relation: RaceSubclassPayload;
	human_war_magic_relation: RaceSubclassPayload;
	dragonborn_war_magic_relation: RaceSubclassPayload;
	human_grandmaster_relation: RaceSubclassPayload;
	elf_grandmaster_relation: RaceSubclassPayload;
	dwarf_grandmaster_relation: RaceSubclassPayload;
	halfling_grandmaster_relation: RaceSubclassPayload;
	kalashtar_mentalist_relation: RaceSubclassPayload;
	elf_mentalist_relation: RaceSubclassPayload;
	elf_scholar_relation: RaceSubclassPayload;
	human_scholar_relation: RaceSubclassPayload;
	gnome_scholar_relation: RaceSubclassPayload;
	dwarf_war_mind_relation: RaceSubclassPayload;
	orc_war_mind_relation: RaceSubclassPayload;
	goliath_war_mind_relation: RaceSubclassPayload;
	human_war_mind_relation: RaceSubclassPayload;
}

interface RacesSubclassesParams {
	races: Races;
	subclasses: Subclasses;
}
export async function setRacesSubclasses(params: RacesSubclassesParams): Promise<RacesSubclasses> {
	const { races, subclasses } = params;
	return {
		gnome_alchemist_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-alchemist-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.artificer_alchemist.id,
			reasoning: `Inventive Magic And Alchemical Curiosity`,
		}),
		autognome_alchemist_relation: await db.createRaceSubclassRecommendation({
			id: "autognome-alchemist-relation",
			raceId: races.autognome.id,
			subclassId: subclasses.artificer_alchemist.id,
			reasoning: `Mechanical Precision In Brewing`,
		}),
		human_alchemist_relation: await db.createRaceSubclassRecommendation({
			id: "human-alchemist-relation",
			raceId: races.human.id,
			subclassId: subclasses.artificer_alchemist.id,
			reasoning: `Adaptable Experimenters`,
		}),
		warforged_armorer_relation: await db.createRaceSubclassRecommendation({
			id: "warforged-armorer-relation",
			raceId: races.warforged.id,
			subclassId: subclasses.artificer_armorer.id,
			reasoning: `Living Armor With Innate Understanding`,
		}),
		dwarf_armorer_relation: await db.createRaceSubclassRecommendation({
			id: "dwarf-armorer-relation",
			raceId: races.dwarf.id,
			subclassId: subclasses.artificer_armorer.id,
			reasoning: `Master Smiths And Metalworkers`,
		}),
		hobgoblin_armorer_relation: await db.createRaceSubclassRecommendation({
			id: "hobgoblin-armorer-relation",
			raceId: races.hobgoblin.id,
			subclassId: subclasses.artificer_armorer.id,
			reasoning: `Military Engineering Expertise`,
		}),
		autognome_artillerist_relation: await db.createRaceSubclassRecommendation({
			id: "autognome-artillerist-relation",
			raceId: races.autognome.id,
			subclassId: subclasses.artificer_artillerist.id,
			reasoning: `Mechanical Precision In Siege Warfare`,
		}),
		hobgoblin_artillerist_relation: await db.createRaceSubclassRecommendation({
			id: "hobgoblin-artillerist-relation",
			raceId: races.hobgoblin.id,
			subclassId: subclasses.artificer_artillerist.id,
			reasoning: `Military Tactical Expertise`,
		}),
		warforged_battle_smith_relation: await db.createRaceSubclassRecommendation({
			id: "warforged-battle-smith-relation",
			raceId: races.warforged.id,
			subclassId: subclasses.artificer_battle_smith.id,
			reasoning: `Construct Expertise And Steel Defender Affinity`,
		}),
		gnome_battle_smith_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-battle-smith-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.artificer_battle_smith.id,
			reasoning: `Inventive Combat Engineering`,
		}),
		human_battle_smith_relation: await db.createRaceSubclassRecommendation({
			id: "human-battle-smith-relation",
			raceId: races.human.id,
			subclassId: subclasses.artificer_battle_smith.id,
			reasoning: `Versatile Warrior-inventors`,
		}),
		goliath_ancestral_guardian_relation: await db.createRaceSubclassRecommendation({
			id: "goliath-ancestral-guardian-relation",
			raceId: races.goliath.id,
			subclassId: subclasses.barbarian_path_of_the_ancestral_guardian.id,
			reasoning: `Mountain Spirit Heritage And Tribal Ancestors`,
		}),
		orc_ancestral_guardian_relation: await db.createRaceSubclassRecommendation({
			id: "orc-ancestral-guardian-relation",
			raceId: races.orc.id,
			subclassId: subclasses.barbarian_path_of_the_ancestral_guardian.id,
			reasoning: `Tribal Shamanic Traditions`,
		}),
		half_orc_ancestral_guardian_relation: await db.createRaceSubclassRecommendation({
			id: "half-orc-ancestral-guardian-relation",
			raceId: races.half_orc.id,
			subclassId: subclasses.barbarian_path_of_the_ancestral_guardian.id,
			reasoning: `Connection To Orcish Ancestral Spirits`,
		}),
		lizardfolk_ancestral_guardian_relation: await db.createRaceSubclassRecommendation({
			id: "lizardfolk-ancestral-guardian-relation",
			raceId: races.lizardfolk.id,
			subclassId: subclasses.barbarian_path_of_the_ancestral_guardian.id,
			reasoning: `Ancient Reptilian Ancestor Worship`,
		}),
		shifter_beast_relation: await db.createRaceSubclassRecommendation({
			id: "shifter-beast-relation",
			raceId: races.shifter.id,
			subclassId: subclasses.barbarian_path_of_the_beast.id,
			reasoning: `Natural Shapeshifting And Beast Connection`,
		}),
		tabaxi_beast_relation: await db.createRaceSubclassRecommendation({
			id: "tabaxi-beast-relation",
			raceId: races.tabaxi.id,
			subclassId: subclasses.barbarian_path_of_the_beast.id,
			reasoning: `Feline Agility And Predatory Instincts`,
		}),
		orc_berserker_relation: await db.createRaceSubclassRecommendation({
			id: "orc-berserker-relation",
			raceId: races.orc.id,
			subclassId: subclasses.barbarian_path_of_the_berserker.id,
			reasoning: `Natural Bloodthirsty Rage`,
		}),
		half_orc_berserker_relation: await db.createRaceSubclassRecommendation({
			id: "half-orc-berserker-relation",
			raceId: races.half_orc.id,
			subclassId: subclasses.barbarian_path_of_the_berserker.id,
			reasoning: `Inherited Orcish Fury`,
		}),
		goliath_berserker_relation: await db.createRaceSubclassRecommendation({
			id: "goliath-berserker-relation",
			raceId: races.goliath.id,
			subclassId: subclasses.barbarian_path_of_the_berserker.id,
			reasoning: `Mountain-bred Endurance And Strength`,
		}),
		dragonborn_berserker_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-berserker-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.barbarian_path_of_the_berserker.id,
			reasoning: `Draconic Pride And Fierce Temperament`,
		}),
		aarakocra_storm_herald_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-storm-herald-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.barbarian_path_of_the_storm_herald.id,
			reasoning: `Connection To Sky Storms And Wind`,
		}),
		goliath_storm_herald_relation: await db.createRaceSubclassRecommendation({
			id: "goliath-storm-herald-relation",
			raceId: races.goliath.id,
			subclassId: subclasses.barbarian_path_of_the_storm_herald.id,
			reasoning: `Mountain Storm Endurance`,
		}),
		triton_storm_herald_relation: await db.createRaceSubclassRecommendation({
			id: "triton-storm-herald-relation",
			raceId: races.triton.id,
			subclassId: subclasses.barbarian_path_of_the_storm_herald.id,
			reasoning: `Oceanic Tempest Mastery`,
		}),
		goliath_totem_warrior_relation: await db.createRaceSubclassRecommendation({
			id: "goliath-totem-warrior-relation",
			raceId: races.goliath.id,
			subclassId: subclasses.barbarian_path_of_the_totem_warrior.id,
			reasoning: `Mountain Totems And Giant Spirits`,
		}),
		shifter_totem_warrior_relation: await db.createRaceSubclassRecommendation({
			id: "shifter-totem-warrior-relation",
			raceId: races.shifter.id,
			subclassId: subclasses.barbarian_path_of_the_totem_warrior.id,
			reasoning: `Natural Beast Spirit Connection`,
		}),
		lizardfolk_totem_warrior_relation: await db.createRaceSubclassRecommendation({
			id: "lizardfolk-totem-warrior-relation",
			raceId: races.lizardfolk.id,
			subclassId: subclasses.barbarian_path_of_the_totem_warrior.id,
			reasoning: `Reptilian Totem Traditions`,
		}),
		centaur_totem_warrior_relation: await db.createRaceSubclassRecommendation({
			id: "centaur-totem-warrior-relation",
			raceId: races.centaur.id,
			subclassId: subclasses.barbarian_path_of_the_totem_warrior.id,
			reasoning: `Horse Spirit Totems And Plains Wisdom`,
		}),
		genasi_wild_magic_relation: await db.createRaceSubclassRecommendation({
			id: "genasi-wild-magic-relation",
			raceId: races.genasi.id,
			subclassId: subclasses.barbarian_path_of_wild_magic.id,
			reasoning: `Elemental Chaos And Unpredictable Magic`,
		}),
		tiefling_wild_magic_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-wild-magic-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.barbarian_path_of_wild_magic.id,
			reasoning: `Infernal Chaos Bleeding Through`,
		}),
		halfling_wild_magic_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-wild-magic-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.barbarian_path_of_wild_magic.id,
			reasoning: `Luck Interacting With Chaotic Magic`,
		}),
		aarakocra_zealot_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-zealot-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.barbarian_path_of_the_zealot.id,
			reasoning: `Sky God Devotion And Divine Fury`,
		}),
		aasimar_zealot_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-zealot-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.barbarian_path_of_the_zealot.id,
			reasoning: `Celestial Rage And Divine Purpose`,
		}),
		dragonborn_zealot_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-zealot-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.barbarian_path_of_the_zealot.id,
			reasoning: `Draconic Pride And Religious Fervor`,
		}),
		dwarf_battlerager_relation: await db.createRaceSubclassRecommendation({
			id: "dwarf-battlerager-relation",
			raceId: races.dwarf.id,
			subclassId: subclasses.barbarian_path_of_the_battlerager.id,
			reasoning: `Dwarven Tradition Of Spiked Armor And Aggressive Combat`,
		}),
		goliath_battlerager_relation: await db.createRaceSubclassRecommendation({
			id: "goliath-battlerager-relation",
			raceId: races.goliath.id,
			subclassId: subclasses.barbarian_path_of_the_battlerager.id,
			reasoning: `Mountain-bred Warriors Who Use Any Weapon Available`,
		}),
		orc_battlerager_relation: await db.createRaceSubclassRecommendation({
			id: "orc-battlerager-relation",
			raceId: races.orc.id,
			subclassId: subclasses.barbarian_path_of_the_battlerager.id,
			reasoning: `Aggressive Combat Style And Love Of Battle`,
		}),
		goliath_giant_relation: await db.createRaceSubclassRecommendation({
			id: "goliath-giant-relation",
			raceId: races.goliath.id,
			subclassId: subclasses.barbarian_path_of_the_giant.id,
			reasoning: `Giant Heritage And Natural Size Advantage`,
		}),
		dwarf_giant_relation: await db.createRaceSubclassRecommendation({
			id: "dwarf-giant-relation",
			raceId: races.dwarf.id,
			subclassId: subclasses.barbarian_path_of_the_giant.id,
			reasoning: `Connection To Mountain Giants And Stone Magic`,
		}),
		firbolg_giant_relation: await db.createRaceSubclassRecommendation({
			id: "firbolg-giant-relation",
			raceId: races.firbolg.id,
			subclassId: subclasses.barbarian_path_of_the_giant.id,
			reasoning: `Giant-kin Heritage And Natural Magic`,
		}),
		elf_wild_magic_relation: await db.createRaceSubclassRecommendation({
			id: "elf-wild-magic-relation",
			raceId: races.elf.id,
			subclassId: subclasses.barbarian_path_of_wild_magic.id,
			reasoning: `Fey Heritage And Connection To Wild Magic`,
		}),
		human_wild_magic_relation: await db.createRaceSubclassRecommendation({
			id: "human-wild-magic-relation",
			raceId: races.human.id,
			subclassId: subclasses.barbarian_path_of_wild_magic.id,
			reasoning: `Adaptability Allows Them To Channel Chaotic Magic`,
		}),
		satyr_college_of_creation_relation: await db.createRaceSubclassRecommendation({
			id: "satyr-college-of-creation-relation",
			raceId: races.satyr.id,
			subclassId: subclasses.bard_college_of_creation.id,
			reasoning: `Fey Creativity And Musical Inspiration`,
		}),
		half_elf_college_of_creation_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-college-of-creation-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.bard_college_of_creation.id,
			reasoning: `Versatile Artistic Expression`,
		}),
		fairy_college_of_creation_relation: await db.createRaceSubclassRecommendation({
			id: "fairy-college-of-creation-relation",
			raceId: races.fairy.id,
			subclassId: subclasses.bard_college_of_creation.id,
			reasoning: `Magical Creation And Fey Artistry`,
		}),
		half_elf_college_of_eloquence_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-college-of-eloquence-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.bard_college_of_eloquence.id,
			reasoning: `Natural Diplomacy And Persuasion`,
		}),
		aasimar_college_of_eloquence_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-college-of-eloquence-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.bard_college_of_eloquence.id,
			reasoning: `Celestial Wisdom And Inspiring Speech`,
		}),
		human_college_of_eloquence_relation: await db.createRaceSubclassRecommendation({
			id: "human-college-of-eloquence-relation",
			raceId: races.human.id,
			subclassId: subclasses.bard_college_of_eloquence.id,
			reasoning: `Adaptable Speakers And Leaders`,
		}),
		vedalken_college_of_eloquence_relation: await db.createRaceSubclassRecommendation({
			id: "vedalken-college-of-eloquence-relation",
			raceId: races.vedalken.id,
			subclassId: subclasses.bard_college_of_eloquence.id,
			reasoning: `Logical Rhetoric And Structured Argument`,
		}),
		satyr_college_of_glamour_relation: await db.createRaceSubclassRecommendation({
			id: "satyr-college-of-glamour-relation",
			raceId: races.satyr.id,
			subclassId: subclasses.bard_college_of_glamour.id,
			reasoning: `Enchanting Fey Charisma`,
		}),
		tiefling_college_of_glamour_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-college-of-glamour-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.bard_college_of_glamour.id,
			reasoning: `Infernal Allure And Dark Charisma`,
		}),
		human_college_of_lore_relation: await db.createRaceSubclassRecommendation({
			id: "human-college-of-lore-relation",
			raceId: races.human.id,
			subclassId: subclasses.bard_college_of_lore.id,
			reasoning: `Diverse Knowledge And Adaptable Learning`,
		}),
		half_elf_college_of_lore_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-college-of-lore-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.bard_college_of_lore.id,
			reasoning: `Cultural Bridge And Varied Experiences`,
		}),
		vedalken_college_of_lore_relation: await db.createRaceSubclassRecommendation({
			id: "vedalken-college-of-lore-relation",
			raceId: races.vedalken.id,
			subclassId: subclasses.bard_college_of_lore.id,
			reasoning: `Scholarly Pursuit Of Knowledge`,
		}),
		kalashtar_college_of_lore_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-college-of-lore-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.bard_college_of_lore.id,
			reasoning: `Dream Memories And Ancient Wisdom`,
		}),
		reborn_college_of_spirits_relation: await db.createRaceSubclassRecommendation({
			id: "reborn-college-of-spirits-relation",
			raceId: races.reborn.id,
			subclassId: subclasses.bard_college_of_spirits.id,
			reasoning: `Connection To Death And Lingering Spirits`,
		}),
		hexblood_college_of_spirits_relation: await db.createRaceSubclassRecommendation({
			id: "hexblood-college-of-spirits-relation",
			raceId: races.hexblood.id,
			subclassId: subclasses.bard_college_of_spirits.id,
			reasoning: `Hag Magic And Spirit Communication`,
		}),
		half_elf_college_of_swords_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-college-of-swords-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.bard_college_of_swords.id,
			reasoning: `Versatile Combat And Performance Skills`,
		}),
		tabaxi_college_of_swords_relation: await db.createRaceSubclassRecommendation({
			id: "tabaxi-college-of-swords-relation",
			raceId: races.tabaxi.id,
			subclassId: subclasses.bard_college_of_swords.id,
			reasoning: `Feline Agility In Blade Dancing`,
		}),
		human_college_of_swords_relation: await db.createRaceSubclassRecommendation({
			id: "human-college-of-swords-relation",
			raceId: races.human.id,
			subclassId: subclasses.bard_college_of_swords.id,
			reasoning: `Adaptable Warrior-performers`,
		}),
		dragonborn_college_of_valor_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-college-of-valor-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.bard_college_of_valor.id,
			reasoning: `Draconic Honor And Martial Prowess`,
		}),
		human_college_of_valor_relation: await db.createRaceSubclassRecommendation({
			id: "human-college-of-valor-relation",
			raceId: races.human.id,
			subclassId: subclasses.bard_college_of_valor.id,
			reasoning: `Heroic Leadership And Battlefield Inspiration`,
		}),
		leonin_college_of_valor_relation: await db.createRaceSubclassRecommendation({
			id: "leonin-college-of-valor-relation",
			raceId: races.leonin.id,
			subclassId: subclasses.bard_college_of_valor.id,
			reasoning: `Pride-based Warrior Culture`,
		}),
		changeling_college_of_whispers_relation: await db.createRaceSubclassRecommendation({
			id: "changeling-college-of-whispers-relation",
			raceId: races.changeling.id,
			subclassId: subclasses.bard_college_of_whispers.id,
			reasoning: `Natural Deception And Identity Manipulation`,
		}),
		kenku_college_of_whispers_relation: await db.createRaceSubclassRecommendation({
			id: "kenku-college-of-whispers-relation",
			raceId: races.kenku.id,
			subclassId: subclasses.bard_college_of_whispers.id,
			reasoning: `Mimicry And Information Gathering`,
		}),
		tiefling_college_of_whispers_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-college-of-whispers-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.bard_college_of_whispers.id,
			reasoning: `Infernal Cunning And Dark Secrets`,
		}),
		gnome_arcana_domain_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-arcana-domain-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.cleric_arcana_domain.id,
			reasoning: `Magical Innovation Meets Divine Study`,
		}),
		vedalken_arcana_domain_relation: await db.createRaceSubclassRecommendation({
			id: "vedalken-arcana-domain-relation",
			raceId: races.vedalken.id,
			subclassId: subclasses.cleric_arcana_domain.id,
			reasoning: `Logical Approach To Divine Arcana`,
		}),
		dhampir_death_domain_relation: await db.createRaceSubclassRecommendation({
			id: "dhampir-death-domain-relation",
			raceId: races.dhampir.id,
			subclassId: subclasses.cleric_death_domain.id,
			reasoning: `Undead Heritage And Death Affinity`,
		}),
		reborn_death_domain_relation: await db.createRaceSubclassRecommendation({
			id: "reborn-death-domain-relation",
			raceId: races.reborn.id,
			subclassId: subclasses.cleric_death_domain.id,
			reasoning: `Personal Experience With Death And Rebirth`,
		}),
		dwarf_forge_domain_relation: await db.createRaceSubclassRecommendation({
			id: "dwarf-forge-domain-relation",
			raceId: races.dwarf.id,
			subclassId: subclasses.cleric_forge_domain.id,
			reasoning: `Natural Smithing And Forge Mastery`,
		}),
		warforged_forge_domain_relation: await db.createRaceSubclassRecommendation({
			id: "warforged-forge-domain-relation",
			raceId: races.warforged.id,
			subclassId: subclasses.cleric_forge_domain.id,
			reasoning: `Living Embodiment Of Forge Craft`,
		}),
		aasimar_grave_domain_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-grave-domain-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.cleric_grave_domain.id,
			reasoning: `Celestial Guidance In Life-death Balance`,
		}),
		reborn_grave_domain_relation: await db.createRaceSubclassRecommendation({
			id: "reborn-grave-domain-relation",
			raceId: races.reborn.id,
			subclassId: subclasses.cleric_grave_domain.id,
			reasoning: `Personal Understanding Of Death's Boundary`,
		}),
		dhampir_grave_domain_relation: await db.createRaceSubclassRecommendation({
			id: "dhampir-grave-domain-relation",
			raceId: races.dhampir.id,
			subclassId: subclasses.cleric_grave_domain.id,
			reasoning: `Straddling Life And Undeath`,
		}),
		vedalken_knowledge_domain_relation: await db.createRaceSubclassRecommendation({
			id: "vedalken-knowledge-domain-relation",
			raceId: races.vedalken.id,
			subclassId: subclasses.cleric_knowledge_domain.id,
			reasoning: `Logical Pursuit Of Divine Knowledge`,
		}),
		gnome_knowledge_domain_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-knowledge-domain-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.cleric_knowledge_domain.id,
			reasoning: `Curious Researchers And Inventors`,
		}),
		kalashtar_knowledge_domain_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-knowledge-domain-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.cleric_knowledge_domain.id,
			reasoning: `Dream Memories And Ancient Wisdom`,
		}),
		aasimar_life_domain_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-life-domain-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.cleric_life_domain.id,
			reasoning: `Celestial Healing Powers`,
		}),
		human_life_domain_relation: await db.createRaceSubclassRecommendation({
			id: "human-life-domain-relation",
			raceId: races.human.id,
			subclassId: subclasses.cleric_life_domain.id,
			reasoning: `Compassionate Healers And Community Servants`,
		}),
		halfling_life_domain_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-life-domain-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.cleric_life_domain.id,
			reasoning: `Nurturing Nature And Community Care`,
		}),
		aasimar_light_domain_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-light-domain-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.cleric_light_domain.id,
			reasoning: `Radiant Celestial Heritage`,
		}),
		dragonborn_light_domain_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-light-domain-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.cleric_light_domain.id,
			reasoning: `Draconic Light And Fire Breath`,
		}),
		firbolg_nature_domain_relation: await db.createRaceSubclassRecommendation({
			id: "firbolg-nature-domain-relation",
			raceId: races.firbolg.id,
			subclassId: subclasses.cleric_nature_domain.id,
			reasoning: `Giant-kin Nature Guardians`,
		}),
		centaur_nature_domain_relation: await db.createRaceSubclassRecommendation({
			id: "centaur-nature-domain-relation",
			raceId: races.centaur.id,
			subclassId: subclasses.cleric_nature_domain.id,
			reasoning: `Plains Nature Worship`,
		}),
		satyr_nature_domain_relation: await db.createRaceSubclassRecommendation({
			id: "satyr-nature-domain-relation",
			raceId: races.satyr.id,
			subclassId: subclasses.cleric_nature_domain.id,
			reasoning: `Fey Nature Reverence`,
		}),
		hobgoblin_order_domain_relation: await db.createRaceSubclassRecommendation({
			id: "hobgoblin-order-domain-relation",
			raceId: races.hobgoblin.id,
			subclassId: subclasses.cleric_order_domain.id,
			reasoning: `Military Discipline And Hierarchical Order`,
		}),
		human_order_domain_relation: await db.createRaceSubclassRecommendation({
			id: "human-order-domain-relation",
			raceId: races.human.id,
			subclassId: subclasses.cleric_order_domain.id,
			reasoning: `Civic Duty And Law Enforcement`,
		}),
		vedalken_order_domain_relation: await db.createRaceSubclassRecommendation({
			id: "vedalken-order-domain-relation",
			raceId: races.vedalken.id,
			subclassId: subclasses.cleric_order_domain.id,
			reasoning: `Logical Order And Systematic Thinking`,
		}),
		aasimar_peace_domain_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-peace-domain-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.cleric_peace_domain.id,
			reasoning: `Celestial Peace And Harmony`,
		}),
		halfling_peace_domain_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-peace-domain-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.cleric_peace_domain.id,
			reasoning: `Peaceful Nature And Conflict Resolution`,
		}),
		kalashtar_peace_domain_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-peace-domain-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.cleric_peace_domain.id,
			reasoning: `Psychic Empathy And Understanding`,
		}),
		aarakocra_tempest_domain_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-tempest-domain-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.cleric_tempest_domain.id,
			reasoning: `Sky Storms And Wind Mastery`,
		}),
		triton_tempest_domain_relation: await db.createRaceSubclassRecommendation({
			id: "triton-tempest-domain-relation",
			raceId: races.triton.id,
			subclassId: subclasses.cleric_tempest_domain.id,
			reasoning: `Oceanic Tempests And Sea Storms`,
		}),
		kenku_trickery_domain_relation: await db.createRaceSubclassRecommendation({
			id: "kenku-trickery-domain-relation",
			raceId: races.kenku.id,
			subclassId: subclasses.cleric_trickery_domain.id,
			reasoning: `Mimicry And Deceptive Abilities`,
		}),
		changeling_trickery_domain_relation: await db.createRaceSubclassRecommendation({
			id: "changeling-trickery-domain-relation",
			raceId: races.changeling.id,
			subclassId: subclasses.cleric_trickery_domain.id,
			reasoning: `Natural Shapeshifting And Deception`,
		}),
		goblin_trickery_domain_relation: await db.createRaceSubclassRecommendation({
			id: "goblin-trickery-domain-relation",
			raceId: races.goblin.id,
			subclassId: subclasses.cleric_trickery_domain.id,
			reasoning: `Sneaky Nature And Mischievous Pranks`,
		}),
		halfling_trickery_domain_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-trickery-domain-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.cleric_trickery_domain.id,
			reasoning: `Luck And Small-folk Trickery`,
		}),
		owlin_twilight_domain_relation: await db.createRaceSubclassRecommendation({
			id: "owlin-twilight-domain-relation",
			raceId: races.owlin.id,
			subclassId: subclasses.cleric_twilight_domain.id,
			reasoning: `Nocturnal Wisdom And Twilight Hunting`,
		}),
		dragonborn_war_domain_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-war-domain-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.cleric_war_domain.id,
			reasoning: `Draconic Warrior Culture And Battle Prowess`,
		}),
		hobgoblin_war_domain_relation: await db.createRaceSubclassRecommendation({
			id: "hobgoblin-war-domain-relation",
			raceId: races.hobgoblin.id,
			subclassId: subclasses.cleric_war_domain.id,
			reasoning: `Military Discipline And Tactical Warfare`,
		}),
		orc_war_domain_relation: await db.createRaceSubclassRecommendation({
			id: "orc-war-domain-relation",
			raceId: races.orc.id,
			subclassId: subclasses.cleric_war_domain.id,
			reasoning: `Tribal Warfare And Battle Fury`,
		}),
		leonin_war_domain_relation: await db.createRaceSubclassRecommendation({
			id: "leonin-war-domain-relation",
			raceId: races.leonin.id,
			subclassId: subclasses.cleric_war_domain.id,
			reasoning: `Pride Warrior Traditions`,
		}),
		firbolg_circle_of_dreams_relation: await db.createRaceSubclassRecommendation({
			id: "firbolg-circle-of-dreams-relation",
			raceId: races.firbolg.id,
			subclassId: subclasses.druid_circle_of_dreams.id,
			reasoning: `Giant-kin Dream Magic And Forest Mysteries`,
		}),
		kalashtar_circle_of_dreams_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-circle-of-dreams-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.druid_circle_of_dreams.id,
			reasoning: `Dream Plane Mastery`,
		}),
		firbolg_circle_of_the_land_relation: await db.createRaceSubclassRecommendation({
			id: "firbolg-circle-of-the-land-relation",
			raceId: races.firbolg.id,
			subclassId: subclasses.druid_circle_of_the_land.id,
			reasoning: `Ancient Forest Guardianship`,
		}),
		centaur_circle_of_the_land_relation: await db.createRaceSubclassRecommendation({
			id: "centaur-circle-of-the-land-relation",
			raceId: races.centaur.id,
			subclassId: subclasses.druid_circle_of_the_land.id,
			reasoning: `Plains And Grassland Connection`,
		}),
		lizardfolk_circle_of_the_land_relation: await db.createRaceSubclassRecommendation({
			id: "lizardfolk-circle-of-the-land-relation",
			raceId: races.lizardfolk.id,
			subclassId: subclasses.druid_circle_of_the_land.id,
			reasoning: `Swamp And Wetland Mastery`,
		}),
		shifter_circle_of_the_moon_relation: await db.createRaceSubclassRecommendation({
			id: "shifter-circle-of-the-moon-relation",
			raceId: races.shifter.id,
			subclassId: subclasses.druid_circle_of_the_moon.id,
			reasoning: `Natural Shapeshifting Abilities`,
		}),
		firbolg_circle_of_the_moon_relation: await db.createRaceSubclassRecommendation({
			id: "firbolg-circle-of-the-moon-relation",
			raceId: races.firbolg.id,
			subclassId: subclasses.druid_circle_of_the_moon.id,
			reasoning: `Giant-kin Beast Mastery`,
		}),
		firbolg_circle_of_the_shepherd_relation: await db.createRaceSubclassRecommendation({
			id: "firbolg-circle-of-the-shepherd-relation",
			raceId: races.firbolg.id,
			subclassId: subclasses.druid_circle_of_the_shepherd.id,
			reasoning: `Natural Beast Communication And Protection`,
		}),
		centaur_circle_of_the_shepherd_relation: await db.createRaceSubclassRecommendation({
			id: "centaur-circle-of-the-shepherd-relation",
			raceId: races.centaur.id,
			subclassId: subclasses.druid_circle_of_the_shepherd.id,
			reasoning: `Herd Mentality And Animal Kinship`,
		}),
		halfling_circle_of_the_shepherd_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-circle-of-the-shepherd-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.druid_circle_of_the_shepherd.id,
			reasoning: `Pastoral Care And Animal Husbandry`,
		}),
		reborn_circle_of_spores_relation: await db.createRaceSubclassRecommendation({
			id: "reborn-circle-of-spores-relation",
			raceId: races.reborn.id,
			subclassId: subclasses.druid_circle_of_spores.id,
			reasoning: `Death And Decay Understanding`,
		}),
		firbolg_circle_of_spores_relation: await db.createRaceSubclassRecommendation({
			id: "firbolg-circle-of-spores-relation",
			raceId: races.firbolg.id,
			subclassId: subclasses.druid_circle_of_spores.id,
			reasoning: `Forest Decay Cycle Knowledge`,
		}),
		aarakocra_circle_of_stars_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-circle-of-stars-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.druid_circle_of_stars.id,
			reasoning: `Sky Connection And Stellar Navigation`,
		}),
		kalashtar_circle_of_stars_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-circle-of-stars-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.druid_circle_of_stars.id,
			reasoning: `Dream Plane Stellar Connection`,
		}),
		aasimar_circle_of_stars_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-circle-of-stars-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.druid_circle_of_stars.id,
			reasoning: `Celestial Guidance And Star Wisdom`,
		}),
		tiefling_circle_of_wildfire_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-circle-of-wildfire-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.druid_circle_of_wildfire.id,
			reasoning: `Infernal Fire Heritage`,
		}),
		dragonborn_circle_of_wildfire_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-circle-of-wildfire-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.druid_circle_of_wildfire.id,
			reasoning: `Draconic Fire Breath And Flame Affinity`,
		}),
		half_elf_arcane_archer_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-arcane-archer-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.fighter_arcane_archer.id,
			reasoning: `Versatile Magical Archery`,
		}),
		hadozee_arcane_archer_relation: await db.createRaceSubclassRecommendation({
			id: "hadozee-arcane-archer-relation",
			raceId: races.hadozee.id,
			subclassId: subclasses.fighter_arcane_archer.id,
			reasoning: `Ranged Attacks From High Vantage Points`,
		}),
		human_battle_master_relation: await db.createRaceSubclassRecommendation({
			id: "human-battle-master-relation",
			raceId: races.human.id,
			subclassId: subclasses.fighter_battle_master.id,
			reasoning: `Tactical Versatility And Adaptability`,
		}),
		hobgoblin_battle_master_relation: await db.createRaceSubclassRecommendation({
			id: "hobgoblin-battle-master-relation",
			raceId: races.hobgoblin.id,
			subclassId: subclasses.fighter_battle_master.id,
			reasoning: `Military Discipline And Tactical Training`,
		}),
		dragonborn_battle_master_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-battle-master-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.fighter_battle_master.id,
			reasoning: `Draconic Tactical Prowess`,
		}),
		dwarf_battle_master_relation: await db.createRaceSubclassRecommendation({
			id: "dwarf-battle-master-relation",
			raceId: races.dwarf.id,
			subclassId: subclasses.fighter_battle_master.id,
			reasoning: `Disciplined Mountain Warfare`,
		}),
		hadozee_battle_master_relation: await db.createRaceSubclassRecommendation({
			id: "hadozee-battle-master-relation",
			raceId: races.hadozee.id,
			subclassId: subclasses.fighter_battle_master.id,
			reasoning: `Strategic Combat With Superior Positioning`,
		}),
		centaur_cavalier_relation: await db.createRaceSubclassRecommendation({
			id: "centaur-cavalier-relation",
			raceId: races.centaur.id,
			subclassId: subclasses.fighter_cavalier.id,
			reasoning: `Natural Mounted Combat And Horse Kinship`,
		}),
		human_cavalier_relation: await db.createRaceSubclassRecommendation({
			id: "human-cavalier-relation",
			raceId: races.human.id,
			subclassId: subclasses.fighter_cavalier.id,
			reasoning: `Knightly Traditions And Mounted Warfare`,
		}),
		leonin_cavalier_relation: await db.createRaceSubclassRecommendation({
			id: "leonin-cavalier-relation",
			raceId: races.leonin.id,
			subclassId: subclasses.fighter_cavalier.id,
			reasoning: `Pride-based Protective Instincts`,
		}),
		human_champion_relation: await db.createRaceSubclassRecommendation({
			id: "human-champion-relation",
			raceId: races.human.id,
			subclassId: subclasses.fighter_champion.id,
			reasoning: `Versatile Athletic Excellence`,
		}),
		goliath_champion_relation: await db.createRaceSubclassRecommendation({
			id: "goliath-champion-relation",
			raceId: races.goliath.id,
			subclassId: subclasses.fighter_champion.id,
			reasoning: `Natural Athletic Superiority`,
		}),
		dragonborn_champion_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-champion-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.fighter_champion.id,
			reasoning: `Draconic Physical Excellence`,
		}),
		orc_champion_relation: await db.createRaceSubclassRecommendation({
			id: "orc-champion-relation",
			raceId: races.orc.id,
			subclassId: subclasses.fighter_champion.id,
			reasoning: `Raw Physical Power And Endurance`,
		}),
		kalashtar_echo_knight_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-echo-knight-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.fighter_echo_knight.id,
			reasoning: `Psychic Echo Creation`,
		}),
		half_elf_eldritch_knight_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-eldritch-knight-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.fighter_eldritch_knight.id,
			reasoning: `Versatile Magic-martial Combination`,
		}),
		gnome_eldritch_knight_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-eldritch-knight-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.fighter_eldritch_knight.id,
			reasoning: `Magical Innovation In Combat`,
		}),
		kalashtar_psi_warrior_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-psi-warrior-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.fighter_psi_warrior.id,
			reasoning: `Psychic Warrior Abilities`,
		}),
		dwarf_rune_knight_relation: await db.createRaceSubclassRecommendation({
			id: "dwarf-rune-knight-relation",
			raceId: races.dwarf.id,
			subclassId: subclasses.fighter_rune_knight.id,
			reasoning: `Ancient Runic Traditions`,
		}),
		goliath_rune_knight_relation: await db.createRaceSubclassRecommendation({
			id: "goliath-rune-knight-relation",
			raceId: races.goliath.id,
			subclassId: subclasses.fighter_rune_knight.id,
			reasoning: `Giant-kin Rune Heritage`,
		}),
		firbolg_rune_knight_relation: await db.createRaceSubclassRecommendation({
			id: "firbolg-rune-knight-relation",
			raceId: races.firbolg.id,
			subclassId: subclasses.fighter_rune_knight.id,
			reasoning: `Giant Rune Magic Knowledge`,
		}),
		human_samurai_relation: await db.createRaceSubclassRecommendation({
			id: "human-samurai-relation",
			raceId: races.human.id,
			subclassId: subclasses.fighter_samurai.id,
			reasoning: `Honorable Warrior Traditions`,
		}),
		dragonborn_samurai_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-samurai-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.fighter_samurai.id,
			reasoning: `Draconic Honor And Discipline`,
		}),
		hobgoblin_samurai_relation: await db.createRaceSubclassRecommendation({
			id: "hobgoblin-samurai-relation",
			raceId: races.hobgoblin.id,
			subclassId: subclasses.fighter_samurai.id,
			reasoning: `Military Honor And Tactical Discipline`,
		}),
		kalashtar_way_of_the_astral_self_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-way-of-the-astral-self-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.monk_way_of_the_astral_self.id,
			reasoning: `Psychic Projection And Dream Plane Connection`,
		}),
		aasimar_way_of_the_astral_self_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-way-of-the-astral-self-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.monk_way_of_the_astral_self.id,
			reasoning: `Celestial Astral Projection`,
		}),
		dragonborn_way_of_the_ascendant_dragon_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-way-of-the-ascendant-dragon-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.monk_way_of_the_ascendant_dragon.id,
			reasoning: `Natural Draconic Heritage And Breath Weapon`,
		}),
		kobold_way_of_the_ascendant_dragon_relation: await db.createRaceSubclassRecommendation({
			id: "kobold-way-of-the-ascendant-dragon-relation",
			raceId: races.kobold.id,
			subclassId: subclasses.monk_way_of_the_ascendant_dragon.id,
			reasoning: `Dragon Worship And Draconic Emulation`,
		}),
		halfling_way_of_the_drunken_master_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-way-of-the-drunken-master-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.monk_way_of_the_drunken_master.id,
			reasoning: `Festive Nature And Nimble Unpredictability`,
		}),
		satyr_way_of_the_drunken_master_relation: await db.createRaceSubclassRecommendation({
			id: "satyr-way-of-the-drunken-master-relation",
			raceId: races.satyr.id,
			subclassId: subclasses.monk_way_of_the_drunken_master.id,
			reasoning: `Revelry And Fey Drunken Fighting`,
		}),
		human_way_of_the_drunken_master_relation: await db.createRaceSubclassRecommendation({
			id: "human-way-of-the-drunken-master-relation",
			raceId: races.human.id,
			subclassId: subclasses.monk_way_of_the_drunken_master.id,
			reasoning: `Tavern Brawling And Unconventional Fighting`,
		}),
		genasi_way_of_the_four_elements_relation: await db.createRaceSubclassRecommendation({
			id: "genasi-way-of-the-four-elements-relation",
			raceId: races.genasi.id,
			subclassId: subclasses.monk_way_of_the_four_elements.id,
			reasoning: `Natural Elemental Affinity`,
		}),
		human_way_of_the_kensei_relation: await db.createRaceSubclassRecommendation({
			id: "human-way-of-the-kensei-relation",
			raceId: races.human.id,
			subclassId: subclasses.monk_way_of_the_kensei.id,
			reasoning: `Weapon Mastery And Martial Dedication`,
		}),
		tabaxi_way_of_the_kensei_relation: await db.createRaceSubclassRecommendation({
			id: "tabaxi-way-of-the-kensei-relation",
			raceId: races.tabaxi.id,
			subclassId: subclasses.monk_way_of_the_kensei.id,
			reasoning: `Feline Grace With Weapons`,
		}),
		dhampir_way_of_the_long_death_relation: await db.createRaceSubclassRecommendation({
			id: "dhampir-way-of-the-long-death-relation",
			raceId: races.dhampir.id,
			subclassId: subclasses.monk_way_of_the_long_death.id,
			reasoning: `Undead Nature And Death Resistance`,
		}),
		reborn_way_of_the_long_death_relation: await db.createRaceSubclassRecommendation({
			id: "reborn-way-of-the-long-death-relation",
			raceId: races.reborn.id,
			subclassId: subclasses.monk_way_of_the_long_death.id,
			reasoning: `Personal Death Experience`,
		}),
		aasimar_way_of_mercy_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-way-of-mercy-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.monk_way_of_mercy.id,
			reasoning: `Celestial Healing And Mercy`,
		}),
		kalashtar_way_of_mercy_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-way-of-mercy-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.monk_way_of_mercy.id,
			reasoning: `Empathic Healing And Understanding`,
		}),
		halfling_way_of_mercy_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-way-of-mercy-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.monk_way_of_mercy.id,
			reasoning: `Nurturing Nature And Community Healing`,
		}),
		human_way_of_the_open_hand_relation: await db.createRaceSubclassRecommendation({
			id: "human-way-of-the-open-hand-relation",
			raceId: races.human.id,
			subclassId: subclasses.monk_way_of_the_open_hand.id,
			reasoning: `Classic Martial Arts Mastery`,
		}),
		aarakocra_way_of_the_open_hand_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-way-of-the-open-hand-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.monk_way_of_the_open_hand.id,
			reasoning: `Aerial Martial Arts And Wind Techniques`,
		}),
		hadozee_way_of_the_open_hand_relation: await db.createRaceSubclassRecommendation({
			id: "hadozee-way-of-the-open-hand-relation",
			raceId: races.hadozee.id,
			subclassId: subclasses.monk_way_of_the_open_hand.id,
			reasoning: `Unarmed Combatants With Exceptional Mobility`,
		}),
		kenku_way_of_shadow_relation: await db.createRaceSubclassRecommendation({
			id: "kenku-way-of-shadow-relation",
			raceId: races.kenku.id,
			subclassId: subclasses.monk_way_of_shadow.id,
			reasoning: `Stealth And Mimicry For Infiltration`,
		}),
		tabaxi_way_of_shadow_relation: await db.createRaceSubclassRecommendation({
			id: "tabaxi-way-of-shadow-relation",
			raceId: races.tabaxi.id,
			subclassId: subclasses.monk_way_of_shadow.id,
			reasoning: `Feline Stealth And Shadow Dancing`,
		}),
		hadozee_way_of_shadow_relation: await db.createRaceSubclassRecommendation({
			id: "hadozee-way-of-shadow-relation",
			raceId: races.hadozee.id,
			subclassId: subclasses.monk_way_of_shadow.id,
			reasoning: `Stealthy Movement Combined With Gliding`,
		}),
		aasimar_way_of_the_sun_soul_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-way-of-the-sun-soul-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.monk_way_of_the_sun_soul.id,
			reasoning: `Radiant Celestial Energy`,
		}),
		dragonborn_way_of_the_sun_soul_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-way-of-the-sun-soul-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.monk_way_of_the_sun_soul.id,
			reasoning: `Draconic Fire And Radiant Breath`,
		}),
		firbolg_oath_of_the_ancients_relation: await db.createRaceSubclassRecommendation({
			id: "firbolg-oath-of-the-ancients-relation",
			raceId: races.firbolg.id,
			subclassId: subclasses.paladin_oath_of_the_ancients.id,
			reasoning: `Giant-kin Ancient Guardianship`,
		}),
		centaur_oath_of_the_ancients_relation: await db.createRaceSubclassRecommendation({
			id: "centaur-oath-of-the-ancients-relation",
			raceId: races.centaur.id,
			subclassId: subclasses.paladin_oath_of_the_ancients.id,
			reasoning: `Plains Protection And Natural Harmony`,
		}),
		satyr_oath_of_the_ancients_relation: await db.createRaceSubclassRecommendation({
			id: "satyr-oath-of-the-ancients-relation",
			raceId: races.satyr.id,
			subclassId: subclasses.paladin_oath_of_the_ancients.id,
			reasoning: `Fey Oaths And Natural Joy Protection`,
		}),
		dragonborn_oath_of_conquest_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-oath-of-conquest-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.paladin_oath_of_conquest.id,
			reasoning: `Draconic Dominance And Conquest Drive`,
		}),
		hobgoblin_oath_of_conquest_relation: await db.createRaceSubclassRecommendation({
			id: "hobgoblin-oath-of-conquest-relation",
			raceId: races.hobgoblin.id,
			subclassId: subclasses.paladin_oath_of_conquest.id,
			reasoning: `Military Conquest And Tactical Domination`,
		}),
		tiefling_oath_of_conquest_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-oath-of-conquest-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.paladin_oath_of_conquest.id,
			reasoning: `Infernal Ambition And Ruthless Pursuit`,
		}),
		orc_oath_of_conquest_relation: await db.createRaceSubclassRecommendation({
			id: "orc-oath-of-conquest-relation",
			raceId: races.orc.id,
			subclassId: subclasses.paladin_oath_of_conquest.id,
			reasoning: `Tribal Conquest And Domination`,
		}),
		aasimar_oath_of_devotion_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-oath-of-devotion-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.paladin_oath_of_devotion.id,
			reasoning: `Celestial Devotion And Divine Purpose`,
		}),
		human_oath_of_devotion_relation: await db.createRaceSubclassRecommendation({
			id: "human-oath-of-devotion-relation",
			raceId: races.human.id,
			subclassId: subclasses.paladin_oath_of_devotion.id,
			reasoning: `Pure Faith And Moral Dedication`,
		}),
		dragonborn_oath_of_devotion_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-oath-of-devotion-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.paladin_oath_of_devotion.id,
			reasoning: `Draconic Honor And Unwavering Loyalty`,
		}),
		dragonborn_oath_of_glory_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-oath-of-glory-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.paladin_oath_of_glory.id,
			reasoning: `Draconic Pride And Glory Seeking`,
		}),
		aasimar_oath_of_glory_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-oath-of-glory-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.paladin_oath_of_glory.id,
			reasoning: `Celestial Glory And Divine Radiance`,
		}),
		leonin_oath_of_glory_relation: await db.createRaceSubclassRecommendation({
			id: "leonin-oath-of-glory-relation",
			raceId: races.leonin.id,
			subclassId: subclasses.paladin_oath_of_glory.id,
			reasoning: `Pride Honor And Glorious Combat`,
		}),
		centaur_oath_of_glory_relation: await db.createRaceSubclassRecommendation({
			id: "centaur-oath-of-glory-relation",
			raceId: races.centaur.id,
			subclassId: subclasses.paladin_oath_of_glory.id,
			reasoning: `Heroic Charges And Plains Glory`,
		}),
		tiefling_oath_of_redemption_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-oath-of-redemption-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.paladin_oath_of_redemption.id,
			reasoning: `Seeking Redemption From Infernal Heritage`,
		}),
		dhampir_oath_of_redemption_relation: await db.createRaceSubclassRecommendation({
			id: "dhampir-oath-of-redemption-relation",
			raceId: races.dhampir.id,
			subclassId: subclasses.paladin_oath_of_redemption.id,
			reasoning: `Overcoming Vampiric Curse`,
		}),
		half_orc_oath_of_redemption_relation: await db.createRaceSubclassRecommendation({
			id: "half-orc-oath-of-redemption-relation",
			raceId: races.half_orc.id,
			subclassId: subclasses.paladin_oath_of_redemption.id,
			reasoning: `Overcoming Savage Heritage`,
		}),
		half_orc_oath_of_vengeance_relation: await db.createRaceSubclassRecommendation({
			id: "half-orc-oath-of-vengeance-relation",
			raceId: races.half_orc.id,
			subclassId: subclasses.paladin_oath_of_vengeance.id,
			reasoning: `Relentless Pursuit And Savage Justice`,
		}),
		tiefling_oath_of_vengeance_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-oath-of-vengeance-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.paladin_oath_of_vengeance.id,
			reasoning: `Infernal Wrath And Dark Justice`,
		}),
		human_oath_of_vengeance_relation: await db.createRaceSubclassRecommendation({
			id: "human-oath-of-vengeance-relation",
			raceId: races.human.id,
			subclassId: subclasses.paladin_oath_of_vengeance.id,
			reasoning: `Unwavering Pursuit Of Justice`,
		}),
		aarakocra_oath_of_the_watchers_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-oath-of-the-watchers-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.paladin_oath_of_the_watchers.id,
			reasoning: `Sky Watching And Aerial Vigilance`,
		}),
		aasimar_oath_of_the_watchers_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-oath-of-the-watchers-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.paladin_oath_of_the_watchers.id,
			reasoning: `Celestial Vigilance Against Corruption`,
		}),
		human_oath_of_the_crown_relation: await db.createRaceSubclassRecommendation({
			id: "human-oath-of-the-crown-relation",
			raceId: races.human.id,
			subclassId: subclasses.paladin_oath_of_the_crown.id,
			reasoning: `Civic Duty And Law Enforcement`,
		}),
		dragonborn_oath_of_the_crown_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-oath-of-the-crown-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.paladin_oath_of_the_crown.id,
			reasoning: `Draconic Honor And Royal Service`,
		}),
		dwarf_oath_of_the_crown_relation: await db.createRaceSubclassRecommendation({
			id: "dwarf-oath-of-the-crown-relation",
			raceId: races.dwarf.id,
			subclassId: subclasses.paladin_oath_of_the_crown.id,
			reasoning: `Traditional Loyalty And Mountain Stronghold Defense`,
		}),
		orc_oath_of_the_crown_relation: await db.createRaceSubclassRecommendation({
			id: "orc-oath-of-the-crown-relation",
			raceId: races.orc.id,
			subclassId: subclasses.paladin_oath_of_the_crown.id,
			reasoning: `Tribal Loyalty And Unified Kingdom Service`,
		}),
		aarakocra_beast_master_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-beast-master-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.ranger_beast_master.id,
			reasoning: `Aerial Scouting With Flying Companions`,
		}),
		shifter_beast_master_relation: await db.createRaceSubclassRecommendation({
			id: "shifter-beast-master-relation",
			raceId: races.shifter.id,
			subclassId: subclasses.ranger_beast_master.id,
			reasoning: `Natural Beast Kinship`,
		}),
		halfling_beast_master_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-beast-master-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.ranger_beast_master.id,
			reasoning: `Small Creature Companionship`,
		}),
		dragonborn_drakewarden_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-drakewarden-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.ranger_drakewarden.id,
			reasoning: `Natural Draconic Kinship And Understanding`,
		}),
		kobold_drakewarden_relation: await db.createRaceSubclassRecommendation({
			id: "kobold-drakewarden-relation",
			raceId: races.kobold.id,
			subclassId: subclasses.ranger_drakewarden.id,
			reasoning: `Dragon Worship And Draconic Servitude`,
		}),
		satyr_fey_wanderer_relation: await db.createRaceSubclassRecommendation({
			id: "satyr-fey-wanderer-relation",
			raceId: races.satyr.id,
			subclassId: subclasses.ranger_fey_wanderer.id,
			reasoning: `Natural Fey Wandering And Revelry`,
		}),
		fairy_fey_wanderer_relation: await db.createRaceSubclassRecommendation({
			id: "fairy-fey-wanderer-relation",
			raceId: races.fairy.id,
			subclassId: subclasses.ranger_fey_wanderer.id,
			reasoning: `Innate Fey Magic And Wanderlust`,
		}),
		hexblood_fey_wanderer_relation: await db.createRaceSubclassRecommendation({
			id: "hexblood-fey-wanderer-relation",
			raceId: races.hexblood.id,
			subclassId: subclasses.ranger_fey_wanderer.id,
			reasoning: `Hag-touched Fey Connections`,
		}),
		aarakocra_gloom_stalker_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-gloom-stalker-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.ranger_gloom_stalker.id,
			reasoning: `Aerial Night Hunting And Mountain Stalking`,
		}),
		tabaxi_gloom_stalker_relation: await db.createRaceSubclassRecommendation({
			id: "tabaxi-gloom-stalker-relation",
			raceId: races.tabaxi.id,
			subclassId: subclasses.ranger_gloom_stalker.id,
			reasoning: `Feline Night Hunting Instincts`,
		}),
		hadozee_gloom_stalker_relation: await db.createRaceSubclassRecommendation({
			id: "hadozee-gloom-stalker-relation",
			raceId: races.hadozee.id,
			subclassId: subclasses.ranger_gloom_stalker.id,
			reasoning: `Strike From Shadows Using Gliding Skills`,
		}),
		aarakocra_horizon_walker_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-horizon-walker-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.ranger_horizon_walker.id,
			reasoning: `Aerial Patrol And Sky Watching`,
		}),
		hadozee_horizon_walker_relation: await db.createRaceSubclassRecommendation({
			id: "hadozee-horizon-walker-relation",
			raceId: races.hadozee.id,
			subclassId: subclasses.ranger_horizon_walker.id,
			reasoning: `Fast Repositioning Using Vertical Mobility`,
		}),
		human_hunter_relation: await db.createRaceSubclassRecommendation({
			id: "human-hunter-relation",
			raceId: races.human.id,
			subclassId: subclasses.ranger_hunter.id,
			reasoning: `Adaptable Hunting Techniques`,
		}),
		tabaxi_hunter_relation: await db.createRaceSubclassRecommendation({
			id: "tabaxi-hunter-relation",
			raceId: races.tabaxi.id,
			subclassId: subclasses.ranger_hunter.id,
			reasoning: `Feline Hunting Instincts`,
		}),
		halfling_hunter_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-hunter-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.ranger_hunter.id,
			reasoning: `Nimble Hunting And Tracking`,
		}),
		human_monster_slayer_relation: await db.createRaceSubclassRecommendation({
			id: "human-monster-slayer-relation",
			raceId: races.human.id,
			subclassId: subclasses.ranger_monster_slayer.id,
			reasoning: `Dedicated Monster Hunting Expertise`,
		}),
		aarakocra_monster_slayer_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-monster-slayer-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.ranger_monster_slayer.id,
			reasoning: `Aerial Monster Tracking And Hunting`,
		}),
		half_orc_monster_slayer_relation: await db.createRaceSubclassRecommendation({
			id: "half-orc-monster-slayer-relation",
			raceId: races.half_orc.id,
			subclassId: subclasses.ranger_monster_slayer.id,
			reasoning: `Relentless Monster Hunting Drive`,
		}),
		fairy_swarmkeeper_relation: await db.createRaceSubclassRecommendation({
			id: "fairy-swarmkeeper-relation",
			raceId: races.fairy.id,
			subclassId: subclasses.ranger_swarmkeeper.id,
			reasoning: `Natural Insect And Small Creature Kinship`,
		}),
		gnome_swarmkeeper_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-swarmkeeper-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.ranger_swarmkeeper.id,
			reasoning: `Small Creature Communication`,
		}),
		firbolg_swarmkeeper_relation: await db.createRaceSubclassRecommendation({
			id: "firbolg-swarmkeeper-relation",
			raceId: races.firbolg.id,
			subclassId: subclasses.ranger_swarmkeeper.id,
			reasoning: `Forest Swarm Guardianship`,
		}),
		gnome_arcane_trickster_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-arcane-trickster-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.rogue_arcane_trickster.id,
			reasoning: `Illusion Magic And Trickery`,
		}),
		half_elf_arcane_trickster_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-arcane-trickster-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.rogue_arcane_trickster.id,
			reasoning: `Versatile Magic-thief Abilities`,
		}),
		halfling_arcane_trickster_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-arcane-trickster-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.rogue_arcane_trickster.id,
			reasoning: `Nimble Magic And Luck`,
		}),
		kenku_assassin_relation: await db.createRaceSubclassRecommendation({
			id: "kenku-assassin-relation",
			raceId: races.kenku.id,
			subclassId: subclasses.rogue_assassin.id,
			reasoning: `Mimicry For Infiltration And Silent Kills`,
		}),
		tabaxi_assassin_relation: await db.createRaceSubclassRecommendation({
			id: "tabaxi-assassin-relation",
			raceId: races.tabaxi.id,
			subclassId: subclasses.rogue_assassin.id,
			reasoning: `Feline Stealth And Precise Strikes`,
		}),
		changeling_assassin_relation: await db.createRaceSubclassRecommendation({
			id: "changeling-assassin-relation",
			raceId: races.changeling.id,
			subclassId: subclasses.rogue_assassin.id,
			reasoning: `Perfect Disguises For Infiltration`,
		}),
		human_inquisitive_relation: await db.createRaceSubclassRecommendation({
			id: "human-inquisitive-relation",
			raceId: races.human.id,
			subclassId: subclasses.rogue_inquisitive.id,
			reasoning: `Natural Curiosity And Investigative Drive`,
		}),
		halfling_inquisitive_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-inquisitive-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.rogue_inquisitive.id,
			reasoning: `Keen Observation And Small-folk Insight`,
		}),
		vedalken_inquisitive_relation: await db.createRaceSubclassRecommendation({
			id: "vedalken-inquisitive-relation",
			raceId: races.vedalken.id,
			subclassId: subclasses.rogue_inquisitive.id,
			reasoning: `Logical Deduction And Systematic Investigation`,
		}),
		kalashtar_inquisitive_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-inquisitive-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.rogue_inquisitive.id,
			reasoning: `Psychic Insight And Truth Detection`,
		}),
		human_mastermind_relation: await db.createRaceSubclassRecommendation({
			id: "human-mastermind-relation",
			raceId: races.human.id,
			subclassId: subclasses.rogue_mastermind.id,
			reasoning: `Political Maneuvering And Social Manipulation`,
		}),
		changeling_mastermind_relation: await db.createRaceSubclassRecommendation({
			id: "changeling-mastermind-relation",
			raceId: races.changeling.id,
			subclassId: subclasses.rogue_mastermind.id,
			reasoning: `Identity Manipulation And Perfect Disguises`,
		}),
		tiefling_mastermind_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-mastermind-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.rogue_mastermind.id,
			reasoning: `Infernal Cunning And Dark Schemes`,
		}),
		half_elf_mastermind_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-mastermind-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.rogue_mastermind.id,
			reasoning: `Social Versatility And Cultural Bridging`,
		}),
		reborn_phantom_relation: await db.createRaceSubclassRecommendation({
			id: "reborn-phantom-relation",
			raceId: races.reborn.id,
			subclassId: subclasses.rogue_phantom.id,
			reasoning: `Death Experience And Lingering Spirits`,
		}),
		dhampir_phantom_relation: await db.createRaceSubclassRecommendation({
			id: "dhampir-phantom-relation",
			raceId: races.dhampir.id,
			subclassId: subclasses.rogue_phantom.id,
			reasoning: `Undead Nature And Ghostly Abilities`,
		}),
		hexblood_phantom_relation: await db.createRaceSubclassRecommendation({
			id: "hexblood-phantom-relation",
			raceId: races.hexblood.id,
			subclassId: subclasses.rogue_phantom.id,
			reasoning: `Hag Magic And Spectral Connections`,
		}),
		aarakocra_scout_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-scout-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.rogue_scout.id,
			reasoning: `Aerial Scouting And Reconnaissance`,
		}),
		tabaxi_scout_relation: await db.createRaceSubclassRecommendation({
			id: "tabaxi-scout-relation",
			raceId: races.tabaxi.id,
			subclassId: subclasses.rogue_scout.id,
			reasoning: `Feline Agility And Exploration Drive`,
		}),
		halfling_scout_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-scout-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.rogue_scout.id,
			reasoning: `Nimble Scouting And Pathfinding`,
		}),
		hadozee_scout_relation: await db.createRaceSubclassRecommendation({
			id: "hadozee-scout-relation",
			raceId: races.hadozee.id,
			subclassId: subclasses.rogue_scout.id,
			reasoning: `Quick Observers, Excel At Tactical Positioning`,
		}),
		kalashtar_soulknife_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-soulknife-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.rogue_soulknife.id,
			reasoning: `Psychic Blade Manifestation`,
		}),
		half_elf_swashbuckler_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-swashbuckler-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.rogue_swashbuckler.id,
			reasoning: `Charismatic Dueling And Social Finesse`,
		}),
		tabaxi_swashbuckler_relation: await db.createRaceSubclassRecommendation({
			id: "tabaxi-swashbuckler-relation",
			raceId: races.tabaxi.id,
			subclassId: subclasses.rogue_swashbuckler.id,
			reasoning: `Feline Agility And Flashy Combat`,
		}),
		human_swashbuckler_relation: await db.createRaceSubclassRecommendation({
			id: "human-swashbuckler-relation",
			raceId: races.human.id,
			subclassId: subclasses.rogue_swashbuckler.id,
			reasoning: `Adaptable Dueling And Charm`,
		}),
		tiefling_swashbuckler_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-swashbuckler-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.rogue_swashbuckler.id,
			reasoning: `Infernal Charisma And Dramatic Flair`,
		}),
		hadozee_swashbuckler_relation: await db.createRaceSubclassRecommendation({
			id: "hadozee-swashbuckler-relation",
			raceId: races.hadozee.id,
			subclassId: subclasses.rogue_swashbuckler.id,
			reasoning: `Excel In Mobility And Single-target Combat`,
		}),
		halfling_thief_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-thief-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.rogue_thief.id,
			reasoning: `Natural Nimbleness And Luck`,
		}),
		goblin_thief_relation: await db.createRaceSubclassRecommendation({
			id: "goblin-thief-relation",
			raceId: races.goblin.id,
			subclassId: subclasses.rogue_thief.id,
			reasoning: `Sneaky Scavenging Nature`,
		}),
		kenku_thief_relation: await db.createRaceSubclassRecommendation({
			id: "kenku-thief-relation",
			raceId: races.kenku.id,
			subclassId: subclasses.rogue_thief.id,
			reasoning: `Mimicry For Infiltration`,
		}),
		human_thief_relation: await db.createRaceSubclassRecommendation({
			id: "human-thief-relation",
			raceId: races.human.id,
			subclassId: subclasses.rogue_thief.id,
			reasoning: `Adaptable Criminal Techniques`,
		}),
		kalashtar_aberrant_mind_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-aberrant-mind-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.sorcerer_aberrant_mind.id,
			reasoning: `Psychic Heritage And Alien Dream Connections`,
		}),
		plasmoid_aberrant_mind_relation: await db.createRaceSubclassRecommendation({
			id: "plasmoid-aberrant-mind-relation",
			raceId: races.plasmoid.id,
			subclassId: subclasses.sorcerer_aberrant_mind.id,
			reasoning: `Alien Ooze Nature And Strange Thoughts`,
		}),
		warforged_clockwork_soul_relation: await db.createRaceSubclassRecommendation({
			id: "warforged-clockwork-soul-relation",
			raceId: races.warforged.id,
			subclassId: subclasses.sorcerer_clockwork_soul.id,
			reasoning: `Mechanical Soul And Ordered Construction`,
		}),
		autognome_clockwork_soul_relation: await db.createRaceSubclassRecommendation({
			id: "autognome-clockwork-soul-relation",
			raceId: races.autognome.id,
			subclassId: subclasses.sorcerer_clockwork_soul.id,
			reasoning: `Clockwork Precision And Mechanical Magic`,
		}),
		vedalken_clockwork_soul_relation: await db.createRaceSubclassRecommendation({
			id: "vedalken-clockwork-soul-relation",
			raceId: races.vedalken.id,
			subclassId: subclasses.sorcerer_clockwork_soul.id,
			reasoning: `Logical Order And Systematic Magic`,
		}),
		aasimar_divine_soul_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-divine-soul-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.sorcerer_divine_soul.id,
			reasoning: `Celestial Heritage And Divine Spark`,
		}),
		dragonborn_divine_soul_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-divine-soul-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.sorcerer_divine_soul.id,
			reasoning: `Draconic Divine Connection`,
		}),
		dragonborn_draconic_bloodline_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-draconic-bloodline-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.sorcerer_draconic_bloodline.id,
			reasoning: `Direct Draconic Heritage And Breath Weapon`,
		}),
		kobold_draconic_bloodline_relation: await db.createRaceSubclassRecommendation({
			id: "kobold-draconic-bloodline-relation",
			raceId: races.kobold.id,
			subclassId: subclasses.sorcerer_draconic_bloodline.id,
			reasoning: `Dragon Worship And Draconic Emulation`,
		}),
		half_elf_draconic_bloodline_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-draconic-bloodline-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.sorcerer_draconic_bloodline.id,
			reasoning: `Mixed Heritage With Draconic Influence`,
		}),
		owlin_lunar_sorcery_relation: await db.createRaceSubclassRecommendation({
			id: "owlin-lunar-sorcery-relation",
			raceId: races.owlin.id,
			subclassId: subclasses.sorcerer_lunar_sorcery.id,
			reasoning: `Nocturnal Lunar Wisdom`,
		}),
		tiefling_shadow_magic_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-shadow-magic-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.sorcerer_shadow_magic.id,
			reasoning: `Infernal Shadow Heritage`,
		}),
		aarakocra_storm_sorcery_relation: await db.createRaceSubclassRecommendation({
			id: "aarakocra-storm-sorcery-relation",
			raceId: races.aarakocra.id,
			subclassId: subclasses.sorcerer_storm_sorcery.id,
			reasoning: `Sky Storms And Wind Mastery`,
		}),
		triton_storm_sorcery_relation: await db.createRaceSubclassRecommendation({
			id: "triton-storm-sorcery-relation",
			raceId: races.triton.id,
			subclassId: subclasses.sorcerer_storm_sorcery.id,
			reasoning: `Oceanic Tempests And Sea Storms`,
		}),
		changeling_wild_magic_relation: await db.createRaceSubclassRecommendation({
			id: "changeling-wild-magic-relation",
			raceId: races.changeling.id,
			subclassId: subclasses.sorcerer_wild_magic.id,
			reasoning: `Shapeshifting Chaos And Identity Flux`,
		}),
		satyr_the_archfey_relation: await db.createRaceSubclassRecommendation({
			id: "satyr-the-archfey-relation",
			raceId: races.satyr.id,
			subclassId: subclasses.warlock_the_archfey.id,
			reasoning: `Fey Revelry And Archfey Patronage`,
		}),
		fairy_the_archfey_relation: await db.createRaceSubclassRecommendation({
			id: "fairy-the-archfey-relation",
			raceId: races.fairy.id,
			subclassId: subclasses.warlock_the_archfey.id,
			reasoning: `Direct Fey Heritage And Court Ties`,
		}),
		half_elf_the_archfey_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-the-archfey-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.warlock_the_archfey.id,
			reasoning: `Fey Attraction To Mixed Heritage`,
		}),
		aasimar_the_celestial_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-the-celestial-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.warlock_the_celestial.id,
			reasoning: `Celestial Heritage And Divine Connection`,
		}),
		human_the_celestial_relation: await db.createRaceSubclassRecommendation({
			id: "human-the-celestial-relation",
			raceId: races.human.id,
			subclassId: subclasses.warlock_the_celestial.id,
			reasoning: `Seeking Celestial Power And Guidance`,
		}),
		triton_the_fathomless_relation: await db.createRaceSubclassRecommendation({
			id: "triton-the-fathomless-relation",
			raceId: races.triton.id,
			subclassId: subclasses.warlock_the_fathomless.id,
			reasoning: `Oceanic Depths And Sea Entity Connections`,
		}),
		tiefling_the_fiend_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-the-fiend-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.warlock_the_fiend.id,
			reasoning: `Infernal Heritage And Natural Fiend Connection`,
		}),
		human_the_fiend_relation: await db.createRaceSubclassRecommendation({
			id: "human-the-fiend-relation",
			raceId: races.human.id,
			subclassId: subclasses.warlock_the_fiend.id,
			reasoning: `Desperate Pacts For Power`,
		}),
		half_orc_the_fiend_relation: await db.createRaceSubclassRecommendation({
			id: "half-orc-the-fiend-relation",
			raceId: races.half_orc.id,
			subclassId: subclasses.warlock_the_fiend.id,
			reasoning: `Savage Nature Attracting Fiendish Patrons`,
		}),
		dhampir_the_fiend_relation: await db.createRaceSubclassRecommendation({
			id: "dhampir-the-fiend-relation",
			raceId: races.dhampir.id,
			subclassId: subclasses.warlock_the_fiend.id,
			reasoning: `Dark Heritage And Fiendish Connections`,
		}),
		genasi_the_genie_relation: await db.createRaceSubclassRecommendation({
			id: "genasi-the-genie-relation",
			raceId: races.genasi.id,
			subclassId: subclasses.warlock_the_genie.id,
			reasoning: `Elemental Heritage And Genie Connections`,
		}),
		human_the_genie_relation: await db.createRaceSubclassRecommendation({
			id: "human-the-genie-relation",
			raceId: races.human.id,
			subclassId: subclasses.warlock_the_genie.id,
			reasoning: `Seeking Elemental Power Through Genie Pacts`,
		}),
		kalashtar_the_great_old_one_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-the-great-old-one-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.warlock_the_great_old_one.id,
			reasoning: `Psychic Vulnerability To Alien Minds`,
		}),
		human_the_great_old_one_relation: await db.createRaceSubclassRecommendation({
			id: "human-the-great-old-one-relation",
			raceId: races.human.id,
			subclassId: subclasses.warlock_the_great_old_one.id,
			reasoning: `Curiosity Leading To Forbidden Knowledge`,
		}),
		human_the_hexblade_relation: await db.createRaceSubclassRecommendation({
			id: "human-the-hexblade-relation",
			raceId: races.human.id,
			subclassId: subclasses.warlock_the_hexblade.id,
			reasoning: `Weapon-bound Pacts For Power`,
		}),
		half_elf_the_hexblade_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-the-hexblade-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.warlock_the_hexblade.id,
			reasoning: `Versatile Weapon Mastery With Eldritch Power`,
		}),
		dhampir_the_undead_relation: await db.createRaceSubclassRecommendation({
			id: "dhampir-the-undead-relation",
			raceId: races.dhampir.id,
			subclassId: subclasses.warlock_the_undead.id,
			reasoning: `Vampiric Heritage And Undead Connection`,
		}),
		reborn_the_undead_relation: await db.createRaceSubclassRecommendation({
			id: "reborn-the-undead-relation",
			raceId: races.reborn.id,
			subclassId: subclasses.warlock_the_undead.id,
			reasoning: `Death Experience And Undead Affinity`,
		}),
		yuan_ti_the_undying_relation: await db.createRaceSubclassRecommendation({
			id: "yuan-ti-the-undying-relation",
			raceId: races.yuan_ti.id,
			subclassId: subclasses.warlock_the_undying.id,
			reasoning: `Serpentine Longevity And Immortality Seeking`,
		}),
		human_the_undying_relation: await db.createRaceSubclassRecommendation({
			id: "human-the-undying-relation",
			raceId: races.human.id,
			subclassId: subclasses.warlock_the_undying.id,
			reasoning: `Desperate Pursuit Of Immortality`,
		}),
		dwarf_school_of_abjuration_relation: await db.createRaceSubclassRecommendation({
			id: "dwarf-school-of-abjuration-relation",
			raceId: races.dwarf.id,
			subclassId: subclasses.wizard_school_of_abjuration.id,
			reasoning: `Protective Ward Traditions And Defensive Magic`,
		}),
		gnome_school_of_abjuration_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-school-of-abjuration-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.wizard_school_of_abjuration.id,
			reasoning: `Magical Protection And Ward Crafting`,
		}),
		warforged_school_of_abjuration_relation: await db.createRaceSubclassRecommendation({
			id: "warforged-school-of-abjuration-relation",
			raceId: races.warforged.id,
			subclassId: subclasses.wizard_school_of_abjuration.id,
			reasoning: `Constructed Resilience And Magical Protection`,
		}),
		half_elf_school_of_bladesinging_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-school-of-bladesinging-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.wizard_school_of_bladesinging.id,
			reasoning: `Versatile Magic-martial Combination`,
		}),
		gnome_school_of_chronurgy_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-school-of-chronurgy-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.wizard_school_of_chronurgy.id,
			reasoning: `Temporal Tinkering And Time Magic Innovation`,
		}),
		vedalken_school_of_chronurgy_relation: await db.createRaceSubclassRecommendation({
			id: "vedalken-school-of-chronurgy-relation",
			raceId: races.vedalken.id,
			subclassId: subclasses.wizard_school_of_chronurgy.id,
			reasoning: `Logical Approach To Temporal Mechanics`,
		}),
		gnome_school_of_conjuration_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-school-of-conjuration-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.wizard_school_of_conjuration.id,
			reasoning: `Creative Summoning And Construct Creation`,
		}),
		kalashtar_school_of_divination_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-school-of-divination-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.wizard_school_of_divination.id,
			reasoning: `Dream Plane Visions And Psychic Foresight`,
		}),
		aasimar_school_of_divination_relation: await db.createRaceSubclassRecommendation({
			id: "aasimar-school-of-divination-relation",
			raceId: races.aasimar.id,
			subclassId: subclasses.wizard_school_of_divination.id,
			reasoning: `Celestial Guidance And Divine Visions`,
		}),
		human_school_of_divination_relation: await db.createRaceSubclassRecommendation({
			id: "human-school-of-divination-relation",
			raceId: races.human.id,
			subclassId: subclasses.wizard_school_of_divination.id,
			reasoning: `Scholarly Pursuit Of Prophetic Knowledge`,
		}),
		half_elf_school_of_enchantment_relation: await db.createRaceSubclassRecommendation({
			id: "half-elf-school-of-enchantment-relation",
			raceId: races.half_elf.id,
			subclassId: subclasses.wizard_school_of_enchantment.id,
			reasoning: `Natural Charisma And Social Magic`,
		}),
		changeling_school_of_enchantment_relation: await db.createRaceSubclassRecommendation({
			id: "changeling-school-of-enchantment-relation",
			raceId: races.changeling.id,
			subclassId: subclasses.wizard_school_of_enchantment.id,
			reasoning: `Identity Manipulation And Mental Influence`,
		}),
		satyr_school_of_enchantment_relation: await db.createRaceSubclassRecommendation({
			id: "satyr-school-of-enchantment-relation",
			raceId: races.satyr.id,
			subclassId: subclasses.wizard_school_of_enchantment.id,
			reasoning: `Fey Enchantment And Revelry Magic`,
		}),
		dragonborn_school_of_evocation_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-school-of-evocation-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.wizard_school_of_evocation.id,
			reasoning: `Draconic Destructive Magic And Breath Weapons`,
		}),
		tiefling_school_of_evocation_relation: await db.createRaceSubclassRecommendation({
			id: "tiefling-school-of-evocation-relation",
			raceId: races.tiefling.id,
			subclassId: subclasses.wizard_school_of_evocation.id,
			reasoning: `Infernal Destructive Magic`,
		}),
		vedalken_school_of_graviturgy_relation: await db.createRaceSubclassRecommendation({
			id: "vedalken-school-of-graviturgy-relation",
			raceId: races.vedalken.id,
			subclassId: subclasses.wizard_school_of_graviturgy.id,
			reasoning: `Logical Approach To Gravitational Forces`,
		}),
		gnome_school_of_illusion_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-school-of-illusion-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.wizard_school_of_illusion.id,
			reasoning: `Natural Illusion Magic And Trickery`,
		}),
		changeling_school_of_illusion_relation: await db.createRaceSubclassRecommendation({
			id: "changeling-school-of-illusion-relation",
			raceId: races.changeling.id,
			subclassId: subclasses.wizard_school_of_illusion.id,
			reasoning: `Shapeshifting And Identity Illusions`,
		}),
		kenku_school_of_illusion_relation: await db.createRaceSubclassRecommendation({
			id: "kenku-school-of-illusion-relation",
			raceId: races.kenku.id,
			subclassId: subclasses.wizard_school_of_illusion.id,
			reasoning: `Mimicry And Deceptive Magic`,
		}),
		fairy_school_of_illusion_relation: await db.createRaceSubclassRecommendation({
			id: "fairy-school-of-illusion-relation",
			raceId: races.fairy.id,
			subclassId: subclasses.wizard_school_of_illusion.id,
			reasoning: `Fey Glamour And Illusion Mastery`,
		}),
		dhampir_school_of_necromancy_relation: await db.createRaceSubclassRecommendation({
			id: "dhampir-school-of-necromancy-relation",
			raceId: races.dhampir.id,
			subclassId: subclasses.wizard_school_of_necromancy.id,
			reasoning: `Undead Heritage And Necromantic Affinity`,
		}),
		yuan_ti_school_of_necromancy_relation: await db.createRaceSubclassRecommendation({
			id: "yuan-ti-school-of-necromancy-relation",
			raceId: races.yuan_ti.id,
			subclassId: subclasses.wizard_school_of_necromancy.id,
			reasoning: `Serpentine Death Magic And Dark Rituals`,
		}),
		reborn_school_of_necromancy_relation: await db.createRaceSubclassRecommendation({
			id: "reborn-school-of-necromancy-relation",
			raceId: races.reborn.id,
			subclassId: subclasses.wizard_school_of_necromancy.id,
			reasoning: `Personal Death Experience And Undead Understanding`,
		}),
		gnome_order_of_scribes_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-order-of-scribes-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.wizard_order_of_scribes.id,
			reasoning: `Meticulous Record Keeping And Magical Innovation`,
		}),
		vedalken_order_of_scribes_relation: await db.createRaceSubclassRecommendation({
			id: "vedalken-order-of-scribes-relation",
			raceId: races.vedalken.id,
			subclassId: subclasses.wizard_order_of_scribes.id,
			reasoning: `Systematic Documentation And Logical Magic`,
		}),
		human_order_of_scribes_relation: await db.createRaceSubclassRecommendation({
			id: "human-order-of-scribes-relation",
			raceId: races.human.id,
			subclassId: subclasses.wizard_order_of_scribes.id,
			reasoning: `Adaptable Magical Documentation`,
		}),
		changeling_school_of_transmutation_relation: await db.createRaceSubclassRecommendation({
			id: "changeling-school-of-transmutation-relation",
			raceId: races.changeling.id,
			subclassId: subclasses.wizard_school_of_transmutation.id,
			reasoning: `Natural Transformation Magic And Shapeshifting`,
		}),
		gnome_school_of_transmutation_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-school-of-transmutation-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.wizard_school_of_transmutation.id,
			reasoning: `Inventive Transformation And Matter Manipulation`,
		}),
		shifter_school_of_transmutation_relation: await db.createRaceSubclassRecommendation({
			id: "shifter-school-of-transmutation-relation",
			raceId: races.shifter.id,
			subclassId: subclasses.wizard_school_of_transmutation.id,
			reasoning: `Shapeshifting Heritage And Transformation Magic`,
		}),
		plasmoid_school_of_transmutation_relation: await db.createRaceSubclassRecommendation({
			id: "plasmoid-school-of-transmutation-relation",
			raceId: races.plasmoid.id,
			subclassId: subclasses.wizard_school_of_transmutation.id,
			reasoning: `Ooze Transformation And Malleable Form`,
		}),
		hobgoblin_war_magic_relation: await db.createRaceSubclassRecommendation({
			id: "hobgoblin-war-magic-relation",
			raceId: races.hobgoblin.id,
			subclassId: subclasses.wizard_war_magic.id,
			reasoning: `Military Magical Tactics And Battlefield Wizardry`,
		}),
		human_war_magic_relation: await db.createRaceSubclassRecommendation({
			id: "human-war-magic-relation",
			raceId: races.human.id,
			subclassId: subclasses.wizard_war_magic.id,
			reasoning: `Adaptable Battle Magic And Military Service`,
		}),
		dragonborn_war_magic_relation: await db.createRaceSubclassRecommendation({
			id: "dragonborn-war-magic-relation",
			raceId: races.dragonborn.id,
			subclassId: subclasses.wizard_war_magic.id,
			reasoning: `Draconic Battle Magic And Tactical Spellcasting`,
		}),
		human_grandmaster_relation: await db.createRaceSubclassRecommendation({
			id: "human-grandmaster-relation",
			raceId: races.human.id,
			subclassId: subclasses.tactician_grandmaster.id,
			reasoning: `Human Intelligence And Strategic Thinking Excel In Long-term Planning And Diplomatic Coordination.`,
		}),
		elf_grandmaster_relation: await db.createRaceSubclassRecommendation({
			id: "elf-grandmaster-relation",
			raceId: races.elf.id,
			subclassId: subclasses.tactician_grandmaster.id,
			reasoning: `Elven Patience And Long-term Thinking Are Perfect For Grand Strategy And Complex Tactical Planning.`,
		}),
		dwarf_grandmaster_relation: await db.createRaceSubclassRecommendation({
			id: "dwarf-grandmaster-relation",
			raceId: races.dwarf.id,
			subclassId: subclasses.tactician_grandmaster.id,
			reasoning: `Dwarven Discipline And Tactical Expertise Excel In Large-scale Military Operations And Defensive Strategies.`,
		}),
		halfling_grandmaster_relation: await db.createRaceSubclassRecommendation({
			id: "halfling-grandmaster-relation",
			raceId: races.halfling.id,
			subclassId: subclasses.tactician_grandmaster.id,
			reasoning: `Halfling Ingenuity And Community-focused Thinking Make Them Excellent At Coordinating Large-scale Operations.`,
		}),
		kalashtar_mentalist_relation: await db.createRaceSubclassRecommendation({
			id: "kalashtar-mentalist-relation",
			raceId: races.kalashtar.id,
			subclassId: subclasses.tactician_mentalist.id,
			reasoning: `Kalashtar Psionic Abilities And Telepathic Communication Are Perfect For Mentalist Tactics And Coordination.`,
		}),
		elf_mentalist_relation: await db.createRaceSubclassRecommendation({
			id: "elf-mentalist-relation",
			raceId: races.elf.id,
			subclassId: subclasses.tactician_mentalist.id,
			reasoning: `Elven Mental Focus And Magical Aptitude Enhance Psionic Abilities And Strategic Thinking.`,
		}),
		elf_scholar_relation: await db.createRaceSubclassRecommendation({
			id: "elf-scholar-relation",
			raceId: races.elf.id,
			subclassId: subclasses.tactician_scholar.id,
			reasoning: `Elven Patience And Scholarly Nature Excel In Research, Study, And Developing Innovative Tactics.`,
		}),
		human_scholar_relation: await db.createRaceSubclassRecommendation({
			id: "human-scholar-relation",
			raceId: races.human.id,
			subclassId: subclasses.tactician_scholar.id,
			reasoning: `Human Intelligence And Research Skills Are Perfect For Studying Enemy Tactics And Developing Counter-strategies.`,
		}),
		gnome_scholar_relation: await db.createRaceSubclassRecommendation({
			id: "gnome-scholar-relation",
			raceId: races.gnome.id,
			subclassId: subclasses.tactician_scholar.id,
			reasoning: `Gnome Intelligence And Attention To Detail Excel In Tactical Research And Strategic Analysis.`,
		}),
		dwarf_war_mind_relation: await db.createRaceSubclassRecommendation({
			id: "dwarf-war-mind-relation",
			raceId: races.dwarf.id,
			subclassId: subclasses.tactician_war_mind.id,
			reasoning: `Dwarven Martial Prowess And Leadership Abilities Excel In Combat-focused Tactics And Battlefield Command.`,
		}),
		orc_war_mind_relation: await db.createRaceSubclassRecommendation({
			id: "orc-war-mind-relation",
			raceId: races.orc.id,
			subclassId: subclasses.tactician_war_mind.id,
			reasoning: `Orcish Strength And Combat Experience Are Perfect For Leading From The Front Lines And Inspiring Allies.`,
		}),
		goliath_war_mind_relation: await db.createRaceSubclassRecommendation({
			id: "goliath-war-mind-relation",
			raceId: races.goliath.id,
			subclassId: subclasses.tactician_war_mind.id,
			reasoning: `Goliath Strength And Endurance Excel In Combat Leadership And Battlefield Presence.`,
		}),
		human_war_mind_relation: await db.createRaceSubclassRecommendation({
			id: "human-war-mind-relation",
			raceId: races.human.id,
			subclassId: subclasses.tactician_war_mind.id,
			reasoning: `Human Versatility And Tactical Thinking Are Perfect For Combat Leadership And Strategic Command.`,
		}),
	}
}