import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Subraces, Subclasses } from "../index";

type SubraceSubclassPayload = Prisma.SubraceSubclassRecommendationGetPayload<{}>
export interface SubracesSubclasses {
	svirfneblin_alchemist_relation: SubraceSubclassPayload;
	rock_gnome_artillerist_relation: SubraceSubclassPayload;
	beasthide_shifter_beast_relation: SubraceSubclassPayload;
	longtooth_shifter_beast_relation: SubraceSubclassPayload;
	air_genasi_storm_herald_relation: SubraceSubclassPayload;
	eladrin_college_of_glamour_relation: SubraceSubclassPayload;
	shadar_kai_college_of_spirits_relation: SubraceSubclassPayload;
	high_elf_arcana_domain_relation: SubraceSubclassPayload;
	shadar_kai_death_domain_relation: SubraceSubclassPayload;
	duergar_forge_domain_relation: SubraceSubclassPayload;
	high_elf_knowledge_domain_relation: SubraceSubclassPayload;
	protector_aasimar_life_domain_relation: SubraceSubclassPayload;
	high_elf_light_domain_relation: SubraceSubclassPayload;
	wood_elf_nature_domain_relation: SubraceSubclassPayload;
	air_genasi_tempest_domain_relation: SubraceSubclassPayload;
	sea_elf_tempest_domain_relation: SubraceSubclassPayload;
	shadar_kai_twilight_domain_relation: SubraceSubclassPayload;
	pallid_elf_twilight_domain_relation: SubraceSubclassPayload;
	eladrin_circle_of_dreams_relation: SubraceSubclassPayload;
	wood_elf_circle_of_the_land_relation: SubraceSubclassPayload;
	beasthide_shifter_circle_of_the_moon_relation: SubraceSubclassPayload;
	wood_elf_circle_of_the_moon_relation: SubraceSubclassPayload;
	shadar_kai_circle_of_spores_relation: SubraceSubclassPayload;
	fire_genasi_circle_of_wildfire_relation: SubraceSubclassPayload;
	high_elf_arcane_archer_relation: SubraceSubclassPayload;
	wood_elf_arcane_archer_relation: SubraceSubclassPayload;
	githyanki_echo_knight_relation: SubraceSubclassPayload;
	shadar_kai_echo_knight_relation: SubraceSubclassPayload;
	high_elf_eldritch_knight_relation: SubraceSubclassPayload;
	githyanki_eldritch_knight_relation: SubraceSubclassPayload;
	githyanki_psi_warrior_relation: SubraceSubclassPayload;
	githzerai_psi_warrior_relation: SubraceSubclassPayload;
	githzerai_way_of_the_astral_self_relation: SubraceSubclassPayload;
	air_genasi_way_of_the_four_elements_relation: SubraceSubclassPayload;
	fire_genasi_way_of_the_four_elements_relation: SubraceSubclassPayload;
	earth_genasi_way_of_the_four_elements_relation: SubraceSubclassPayload;
	water_genasi_way_of_the_four_elements_relation: SubraceSubclassPayload;
	high_elf_way_of_the_kensei_relation: SubraceSubclassPayload;
	shadar_kai_way_of_the_long_death_relation: SubraceSubclassPayload;
	high_elf_way_of_the_open_hand_relation: SubraceSubclassPayload;
	shadar_kai_way_of_shadow_relation: SubraceSubclassPayload;
	high_elf_way_of_the_sun_soul_relation: SubraceSubclassPayload;
	wood_elf_oath_of_the_ancients_relation: SubraceSubclassPayload;
	fallen_aasimar_oath_of_redemption_relation: SubraceSubclassPayload;
	githyanki_oath_of_the_watchers_relation: SubraceSubclassPayload;
	wood_elf_beast_master_relation: SubraceSubclassPayload;
	eladrin_fey_wanderer_relation: SubraceSubclassPayload;
	shadar_kai_gloom_stalker_relation: SubraceSubclassPayload;
	drow_gloom_stalker_relation: SubraceSubclassPayload;
	githyanki_horizon_walker_relation: SubraceSubclassPayload;
	eladrin_horizon_walker_relation: SubraceSubclassPayload;
	wood_elf_hunter_relation: SubraceSubclassPayload;
	high_elf_arcane_trickster_relation: SubraceSubclassPayload;
	shadar_kai_assassin_relation: SubraceSubclassPayload;
	shadar_kai_phantom_relation: SubraceSubclassPayload;
	wood_elf_scout_relation: SubraceSubclassPayload;
	githyanki_soulknife_relation: SubraceSubclassPayload;
	githzerai_soulknife_relation: SubraceSubclassPayload;
	githyanki_aberrant_mind_relation: SubraceSubclassPayload;
	protector_aasimar_divine_soul_relation: SubraceSubclassPayload;
	scourge_aasimar_divine_soul_relation: SubraceSubclassPayload;
	eladrin_lunar_sorcery_relation: SubraceSubclassPayload;
	shadar_kai_lunar_sorcery_relation: SubraceSubclassPayload;
	shadar_kai_shadow_magic_relation: SubraceSubclassPayload;
	drow_shadow_magic_relation: SubraceSubclassPayload;
	air_genasi_storm_sorcery_relation: SubraceSubclassPayload;
	eladrin_the_archfey_relation: SubraceSubclassPayload;
	protector_aasimar_the_celestial_relation: SubraceSubclassPayload;
	sea_elf_the_fathomless_relation: SubraceSubclassPayload;
	water_genasi_the_fathomless_relation: SubraceSubclassPayload;
	air_genasi_the_genie_relation: SubraceSubclassPayload;
	fire_genasi_the_genie_relation: SubraceSubclassPayload;
	githyanki_the_great_old_one_relation: SubraceSubclassPayload;
	shadar_kai_the_hexblade_relation: SubraceSubclassPayload;
	shadar_kai_the_undead_relation: SubraceSubclassPayload;
	shadar_kai_the_undying_relation: SubraceSubclassPayload;
	high_elf_school_of_abjuration_relation: SubraceSubclassPayload;
	high_elf_school_of_bladesinging_relation: SubraceSubclassPayload;
	shadar_kai_school_of_bladesinging_relation: SubraceSubclassPayload;
	high_elf_school_of_chronurgy_relation: SubraceSubclassPayload;
	high_elf_school_of_conjuration_relation: SubraceSubclassPayload;
	githyanki_school_of_conjuration_relation: SubraceSubclassPayload;
	high_elf_school_of_divination_relation: SubraceSubclassPayload;
	eladrin_school_of_enchantment_relation: SubraceSubclassPayload;
	fire_genasi_school_of_evocation_relation: SubraceSubclassPayload;
	high_elf_school_of_evocation_relation: SubraceSubclassPayload;
	githyanki_school_of_graviturgy_relation: SubraceSubclassPayload;
	high_elf_school_of_graviturgy_relation: SubraceSubclassPayload;
	shadar_kai_school_of_necromancy_relation: SubraceSubclassPayload;
	high_elf_order_of_scribes_relation: SubraceSubclassPayload;
	githyanki_war_magic_relation: SubraceSubclassPayload;
	gith_mentalist_relation: SubraceSubclassPayload;
}

interface SubracesSubclassesParams {
	subraces: Subraces;
	subclasses: Subclasses;
}
export async function setSubracesSubclasses(params: SubracesSubclassesParams): Promise<SubracesSubclasses> {
	const { subraces, subclasses } = params;
	return {
		svirfneblin_alchemist_relation: await db.createSubraceSubclassRecommendation({
			id: "svirfneblin-alchemist-relation",
			subraceId: subraces.gnome_svirfneblin.id,
			subclassId: subclasses.artificer_alchemist.id,
			reasoning: `Underground Alchemical Expertise`,
		}),
		rock_gnome_artillerist_relation: await db.createSubraceSubclassRecommendation({
			id: "rock-gnome-artillerist-relation",
			subraceId: subraces.gnome_rock_gnome.id,
			subclassId: subclasses.artificer_artillerist.id,
			reasoning: `Technological Innovation And Gadgeteering`,
		}),
		beasthide_shifter_beast_relation: await db.createSubraceSubclassRecommendation({
			id: "beasthide-shifter-beast-relation",
			subraceId: subraces.shifter_beasthide_shifter.id,
			subclassId: subclasses.barbarian_path_of_the_beast.id,
			reasoning: `Enhanced Beast Transformation Abilities`,
		}),
		longtooth_shifter_beast_relation: await db.createSubraceSubclassRecommendation({
			id: "longtooth-shifter-beast-relation",
			subraceId: subraces.shifter_longtooth_shifter.id,
			subclassId: subclasses.barbarian_path_of_the_beast.id,
			reasoning: `Feral Combat Instincts`,
		}),
		air_genasi_storm_herald_relation: await db.createSubraceSubclassRecommendation({
			id: "air-genasi-storm-herald-relation",
			subraceId: subraces.genasi_air_genasi.id,
			subclassId: subclasses.barbarian_path_of_the_storm_herald.id,
			reasoning: `Elemental Storm Affinity`,
		}),
		eladrin_college_of_glamour_relation: await db.createSubraceSubclassRecommendation({
			id: "eladrin-college-of-glamour-relation",
			subraceId: subraces.elf_eladrin.id,
			subclassId: subclasses.bard_college_of_glamour.id,
			reasoning: `Fey Glamour And Seasonal Beauty`,
		}),
		shadar_kai_college_of_spirits_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-college-of-spirits-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.bard_college_of_spirits.id,
			reasoning: `Shadow Realm Spirit Communication`,
		}),
		high_elf_arcana_domain_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-arcana-domain-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.cleric_arcana_domain.id,
			reasoning: `Natural Arcane Affinity And Divine Magic Fusion`,
		}),
		shadar_kai_death_domain_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-death-domain-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.cleric_death_domain.id,
			reasoning: `Shadow Realm Death Magic`,
		}),
		duergar_forge_domain_relation: await db.createSubraceSubclassRecommendation({
			id: "duergar-forge-domain-relation",
			subraceId: subraces.dwarf_duergar.id,
			subclassId: subclasses.cleric_forge_domain.id,
			reasoning: `Underground Forge Expertise`,
		}),
		high_elf_knowledge_domain_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-knowledge-domain-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.cleric_knowledge_domain.id,
			reasoning: `Long-lived Scholarly Traditions`,
		}),
		protector_aasimar_life_domain_relation: await db.createSubraceSubclassRecommendation({
			id: "protector-aasimar-life-domain-relation",
			subraceId: subraces.aasimar_protector_aasimar.id,
			subclassId: subclasses.cleric_life_domain.id,
			reasoning: `Divine Protection And Healing Focus`,
		}),
		high_elf_light_domain_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-light-domain-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.cleric_light_domain.id,
			reasoning: `Connection To Sun Magic And Illumination`,
		}),
		wood_elf_nature_domain_relation: await db.createSubraceSubclassRecommendation({
			id: "wood-elf-nature-domain-relation",
			subraceId: subraces.elf_wood_elf.id,
			subclassId: subclasses.cleric_nature_domain.id,
			reasoning: `Deep Forest Spiritual Connection`,
		}),
		air_genasi_tempest_domain_relation: await db.createSubraceSubclassRecommendation({
			id: "air-genasi-tempest-domain-relation",
			subraceId: subraces.genasi_air_genasi.id,
			subclassId: subclasses.cleric_tempest_domain.id,
			reasoning: `Elemental Storm Connection`,
		}),
		sea_elf_tempest_domain_relation: await db.createSubraceSubclassRecommendation({
			id: "sea-elf-tempest-domain-relation",
			subraceId: subraces.elf_sea_elf.id,
			subclassId: subclasses.cleric_tempest_domain.id,
			reasoning: `Maritime Storm Worship`,
		}),
		shadar_kai_twilight_domain_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-twilight-domain-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.cleric_twilight_domain.id,
			reasoning: `Shadow Realm Twilight Mastery`,
		}),
		pallid_elf_twilight_domain_relation: await db.createSubraceSubclassRecommendation({
			id: "pallid-elf-twilight-domain-relation",
			subraceId: subraces.elf_pallid_elf.id,
			subclassId: subclasses.cleric_twilight_domain.id,
			reasoning: `Twilight Magic And Dusk Connection`,
		}),
		eladrin_circle_of_dreams_relation: await db.createSubraceSubclassRecommendation({
			id: "eladrin-circle-of-dreams-relation",
			subraceId: subraces.elf_eladrin.id,
			subclassId: subclasses.druid_circle_of_dreams.id,
			reasoning: `Fey Dream Realm Connections`,
		}),
		wood_elf_circle_of_the_land_relation: await db.createSubraceSubclassRecommendation({
			id: "wood-elf-circle-of-the-land-relation",
			subraceId: subraces.elf_wood_elf.id,
			subclassId: subclasses.druid_circle_of_the_land.id,
			reasoning: `Deep Forest Attunement`,
		}),
		beasthide_shifter_circle_of_the_moon_relation: await db.createSubraceSubclassRecommendation({
			id: "beasthide-shifter-circle-of-the-moon-relation",
			subraceId: subraces.shifter_beasthide_shifter.id,
			subclassId: subclasses.druid_circle_of_the_moon.id,
			reasoning: `Enhanced Beast Transformation`,
		}),
		wood_elf_circle_of_the_moon_relation: await db.createSubraceSubclassRecommendation({
			id: "wood-elf-circle-of-the-moon-relation",
			subraceId: subraces.elf_wood_elf.id,
			subclassId: subclasses.druid_circle_of_the_moon.id,
			reasoning: `Forest Creature Kinship`,
		}),
		shadar_kai_circle_of_spores_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-circle-of-spores-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.druid_circle_of_spores.id,
			reasoning: `Shadow Realm Decay Magic`,
		}),
		fire_genasi_circle_of_wildfire_relation: await db.createSubraceSubclassRecommendation({
			id: "fire-genasi-circle-of-wildfire-relation",
			subraceId: subraces.genasi_fire_genasi.id,
			subclassId: subclasses.druid_circle_of_wildfire.id,
			reasoning: `Elemental Fire Mastery`,
		}),
		high_elf_arcane_archer_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-arcane-archer-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.fighter_arcane_archer.id,
			reasoning: `Magical Archery Traditions`,
		}),
		wood_elf_arcane_archer_relation: await db.createSubraceSubclassRecommendation({
			id: "wood-elf-arcane-archer-relation",
			subraceId: subraces.elf_wood_elf.id,
			subclassId: subclasses.fighter_arcane_archer.id,
			reasoning: `Forest Archery Expertise`,
		}),
		githyanki_echo_knight_relation: await db.createSubraceSubclassRecommendation({
			id: "githyanki-echo-knight-relation",
			subraceId: subraces.gith_githyanki.id,
			subclassId: subclasses.fighter_echo_knight.id,
			reasoning: `Planar Warrior Traditions And Astral Knowledge`,
		}),
		shadar_kai_echo_knight_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-echo-knight-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.fighter_echo_knight.id,
			reasoning: `Shadow Realm Manipulation`,
		}),
		high_elf_eldritch_knight_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-eldritch-knight-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.fighter_eldritch_knight.id,
			reasoning: `Natural Spellsword Traditions`,
		}),
		githyanki_eldritch_knight_relation: await db.createSubraceSubclassRecommendation({
			id: "githyanki-eldritch-knight-relation",
			subraceId: subraces.gith_githyanki.id,
			subclassId: subclasses.fighter_eldritch_knight.id,
			reasoning: `Planar Warrior-mage Traditions`,
		}),
		githyanki_psi_warrior_relation: await db.createSubraceSubclassRecommendation({
			id: "githyanki-psi-warrior-relation",
			subraceId: subraces.gith_githyanki.id,
			subclassId: subclasses.fighter_psi_warrior.id,
			reasoning: `Innate Psionic Warrior Abilities`,
		}),
		githzerai_psi_warrior_relation: await db.createSubraceSubclassRecommendation({
			id: "githzerai-psi-warrior-relation",
			subraceId: subraces.gith_githzerai.id,
			subclassId: subclasses.fighter_psi_warrior.id,
			reasoning: `Disciplined Psionic Combat`,
		}),
		githzerai_way_of_the_astral_self_relation: await db.createSubraceSubclassRecommendation({
			id: "githzerai-way-of-the-astral-self-relation",
			subraceId: subraces.gith_githzerai.id,
			subclassId: subclasses.monk_way_of_the_astral_self.id,
			reasoning: `Astral Plane Mastery And Psionic Focus`,
		}),
		air_genasi_way_of_the_four_elements_relation: await db.createSubraceSubclassRecommendation({
			id: "air-genasi-way-of-the-four-elements-relation",
			subraceId: subraces.genasi_air_genasi.id,
			subclassId: subclasses.monk_way_of_the_four_elements.id,
			reasoning: `Wind And Storm Manipulation`,
		}),
		fire_genasi_way_of_the_four_elements_relation: await db.createSubraceSubclassRecommendation({
			id: "fire-genasi-way-of-the-four-elements-relation",
			subraceId: subraces.genasi_fire_genasi.id,
			subclassId: subclasses.monk_way_of_the_four_elements.id,
			reasoning: `Flame Control And Fire Mastery`,
		}),
		earth_genasi_way_of_the_four_elements_relation: await db.createSubraceSubclassRecommendation({
			id: "earth-genasi-way-of-the-four-elements-relation",
			subraceId: subraces.genasi_earth_genasi.id,
			subclassId: subclasses.monk_way_of_the_four_elements.id,
			reasoning: `Stone And Earth Manipulation`,
		}),
		water_genasi_way_of_the_four_elements_relation: await db.createSubraceSubclassRecommendation({
			id: "water-genasi-way-of-the-four-elements-relation",
			subraceId: subraces.genasi_water_genasi.id,
			subclassId: subclasses.monk_way_of_the_four_elements.id,
			reasoning: `Water Control And Fluid Movement`,
		}),
		high_elf_way_of_the_kensei_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-way-of-the-kensei-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.monk_way_of_the_kensei.id,
			reasoning: `Refined Weapon Artistry`,
		}),
		shadar_kai_way_of_the_long_death_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-way-of-the-long-death-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.monk_way_of_the_long_death.id,
			reasoning: `Shadow Realm Death Mastery`,
		}),
		high_elf_way_of_the_open_hand_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-way-of-the-open-hand-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.monk_way_of_the_open_hand.id,
			reasoning: `Graceful Combat Techniques`,
		}),
		shadar_kai_way_of_shadow_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-way-of-shadow-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.monk_way_of_shadow.id,
			reasoning: `Natural Shadow Manipulation`,
		}),
		high_elf_way_of_the_sun_soul_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-way-of-the-sun-soul-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.monk_way_of_the_sun_soul.id,
			reasoning: `Solar Magic And Light Mastery`,
		}),
		wood_elf_oath_of_the_ancients_relation: await db.createSubraceSubclassRecommendation({
			id: "wood-elf-oath-of-the-ancients-relation",
			subraceId: subraces.elf_wood_elf.id,
			subclassId: subclasses.paladin_oath_of_the_ancients.id,
			reasoning: `Ancient Forest Oaths And Nature Protection`,
		}),
		fallen_aasimar_oath_of_redemption_relation: await db.createSubraceSubclassRecommendation({
			id: "fallen-aasimar-oath-of-redemption-relation",
			subraceId: subraces.aasimar_fallen_aasimar.id,
			subclassId: subclasses.paladin_oath_of_redemption.id,
			reasoning: `Fallen Seeking To Return To Grace`,
		}),
		githyanki_oath_of_the_watchers_relation: await db.createSubraceSubclassRecommendation({
			id: "githyanki-oath-of-the-watchers-relation",
			subraceId: subraces.gith_githyanki.id,
			subclassId: subclasses.paladin_oath_of_the_watchers.id,
			reasoning: `Planar Threat Awareness`,
		}),
		wood_elf_beast_master_relation: await db.createSubraceSubclassRecommendation({
			id: "wood-elf-beast-master-relation",
			subraceId: subraces.elf_wood_elf.id,
			subclassId: subclasses.ranger_beast_master.id,
			reasoning: `Forest Animal Bonding`,
		}),
		eladrin_fey_wanderer_relation: await db.createSubraceSubclassRecommendation({
			id: "eladrin-fey-wanderer-relation",
			subraceId: subraces.elf_eladrin.id,
			subclassId: subclasses.ranger_fey_wanderer.id,
			reasoning: `Fey Realm Connections And Seasonal Magic`,
		}),
		shadar_kai_gloom_stalker_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-gloom-stalker-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.ranger_gloom_stalker.id,
			reasoning: `Shadow Realm Stealth And Darkness Mastery`,
		}),
		drow_gloom_stalker_relation: await db.createSubraceSubclassRecommendation({
			id: "drow-gloom-stalker-relation",
			subraceId: subraces.elf_dark_elf_drow.id,
			subclassId: subclasses.ranger_gloom_stalker.id,
			reasoning: `Underdark Hunting And Darkness Adaptation`,
		}),
		githyanki_horizon_walker_relation: await db.createSubraceSubclassRecommendation({
			id: "githyanki-horizon-walker-relation",
			subraceId: subraces.gith_githyanki.id,
			subclassId: subclasses.ranger_horizon_walker.id,
			reasoning: `Planar Warrior Expertise`,
		}),
		eladrin_horizon_walker_relation: await db.createSubraceSubclassRecommendation({
			id: "eladrin-horizon-walker-relation",
			subraceId: subraces.elf_eladrin.id,
			subclassId: subclasses.ranger_horizon_walker.id,
			reasoning: `Fey Realm Border Patrol`,
		}),
		wood_elf_hunter_relation: await db.createSubraceSubclassRecommendation({
			id: "wood-elf-hunter-relation",
			subraceId: subraces.elf_wood_elf.id,
			subclassId: subclasses.ranger_hunter.id,
			reasoning: `Forest Tracking Expertise`,
		}),
		high_elf_arcane_trickster_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-arcane-trickster-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.rogue_arcane_trickster.id,
			reasoning: `Natural Magic And Stealth Combination`,
		}),
		shadar_kai_assassin_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-assassin-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.rogue_assassin.id,
			reasoning: `Shadow Realm Stealth And Death Mastery`,
		}),
		shadar_kai_phantom_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-phantom-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.rogue_phantom.id,
			reasoning: `Shadow Realm Death Connection`,
		}),
		wood_elf_scout_relation: await db.createSubraceSubclassRecommendation({
			id: "wood-elf-scout-relation",
			subraceId: subraces.elf_wood_elf.id,
			subclassId: subclasses.rogue_scout.id,
			reasoning: `Forest Tracking And Stealth`,
		}),
		githyanki_soulknife_relation: await db.createSubraceSubclassRecommendation({
			id: "githyanki-soulknife-relation",
			subraceId: subraces.gith_githyanki.id,
			subclassId: subclasses.rogue_soulknife.id,
			reasoning: `Psionic Warrior Blade Techniques`,
		}),
		githzerai_soulknife_relation: await db.createSubraceSubclassRecommendation({
			id: "githzerai-soulknife-relation",
			subraceId: subraces.gith_githzerai.id,
			subclassId: subclasses.rogue_soulknife.id,
			reasoning: `Disciplined Psionic Focus`,
		}),
		githyanki_aberrant_mind_relation: await db.createSubraceSubclassRecommendation({
			id: "githyanki-aberrant-mind-relation",
			subraceId: subraces.gith_githyanki.id,
			subclassId: subclasses.sorcerer_aberrant_mind.id,
			reasoning: `Planar Exposure To Aberrant Forces`,
		}),
		protector_aasimar_divine_soul_relation: await db.createSubraceSubclassRecommendation({
			id: "protector-aasimar-divine-soul-relation",
			subraceId: subraces.aasimar_protector_aasimar.id,
			subclassId: subclasses.sorcerer_divine_soul.id,
			reasoning: `Divine Protection And Radiant Power`,
		}),
		scourge_aasimar_divine_soul_relation: await db.createSubraceSubclassRecommendation({
			id: "scourge-aasimar-divine-soul-relation",
			subraceId: subraces.aasimar_scourge_aasimar.id,
			subclassId: subclasses.sorcerer_divine_soul.id,
			reasoning: `Zealous Divine Energy`,
		}),
		eladrin_lunar_sorcery_relation: await db.createSubraceSubclassRecommendation({
			id: "eladrin-lunar-sorcery-relation",
			subraceId: subraces.elf_eladrin.id,
			subclassId: subclasses.sorcerer_lunar_sorcery.id,
			reasoning: `Fey Seasonal Magic And Lunar Cycles`,
		}),
		shadar_kai_lunar_sorcery_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-lunar-sorcery-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.sorcerer_lunar_sorcery.id,
			reasoning: `Shadow Realm Lunar Connection`,
		}),
		shadar_kai_shadow_magic_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-shadow-magic-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.sorcerer_shadow_magic.id,
			reasoning: `Shadow Realm Heritage And Darkness Mastery`,
		}),
		drow_shadow_magic_relation: await db.createSubraceSubclassRecommendation({
			id: "drow-shadow-magic-relation",
			subraceId: subraces.elf_dark_elf_drow.id,
			subclassId: subclasses.sorcerer_shadow_magic.id,
			reasoning: `Underdark Shadow Magic`,
		}),
		air_genasi_storm_sorcery_relation: await db.createSubraceSubclassRecommendation({
			id: "air-genasi-storm-sorcery-relation",
			subraceId: subraces.genasi_air_genasi.id,
			subclassId: subclasses.sorcerer_storm_sorcery.id,
			reasoning: `Elemental Storm Heritage`,
		}),
		eladrin_the_archfey_relation: await db.createSubraceSubclassRecommendation({
			id: "eladrin-the-archfey-relation",
			subraceId: subraces.elf_eladrin.id,
			subclassId: subclasses.warlock_the_archfey.id,
			reasoning: `Natural Fey Court Connections`,
		}),
		protector_aasimar_the_celestial_relation: await db.createSubraceSubclassRecommendation({
			id: "protector-aasimar-the-celestial-relation",
			subraceId: subraces.aasimar_protector_aasimar.id,
			subclassId: subclasses.warlock_the_celestial.id,
			reasoning: `Protective Celestial Guidance`,
		}),
		sea_elf_the_fathomless_relation: await db.createSubraceSubclassRecommendation({
			id: "sea-elf-the-fathomless-relation",
			subraceId: subraces.elf_sea_elf.id,
			subclassId: subclasses.warlock_the_fathomless.id,
			reasoning: `Deep Sea Exploration And Abyssal Contact`,
		}),
		water_genasi_the_fathomless_relation: await db.createSubraceSubclassRecommendation({
			id: "water-genasi-the-fathomless-relation",
			subraceId: subraces.genasi_water_genasi.id,
			subclassId: subclasses.warlock_the_fathomless.id,
			reasoning: `Elemental Water Connections To Deep Entities`,
		}),
		air_genasi_the_genie_relation: await db.createSubraceSubclassRecommendation({
			id: "air-genasi-the-genie-relation",
			subraceId: subraces.genasi_air_genasi.id,
			subclassId: subclasses.warlock_the_genie.id,
			reasoning: `Djinni Heritage And Wind Magic`,
		}),
		fire_genasi_the_genie_relation: await db.createSubraceSubclassRecommendation({
			id: "fire-genasi-the-genie-relation",
			subraceId: subraces.genasi_fire_genasi.id,
			subclassId: subclasses.warlock_the_genie.id,
			reasoning: `Efreeti Heritage And Flame Magic`,
		}),
		githyanki_the_great_old_one_relation: await db.createSubraceSubclassRecommendation({
			id: "githyanki-the-great-old-one-relation",
			subraceId: subraces.gith_githyanki.id,
			subclassId: subclasses.warlock_the_great_old_one.id,
			reasoning: `Planar Exposure To Ancient Entities`,
		}),
		shadar_kai_the_hexblade_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-the-hexblade-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.warlock_the_hexblade.id,
			reasoning: `Shadow Realm Weapon Spirits`,
		}),
		shadar_kai_the_undead_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-the-undead-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.warlock_the_undead.id,
			reasoning: `Shadow Realm Undead Connections`,
		}),
		shadar_kai_the_undying_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-the-undying-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.warlock_the_undying.id,
			reasoning: `Shadow Realm Deathless Pursuits`,
		}),
		high_elf_school_of_abjuration_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-school-of-abjuration-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.wizard_school_of_abjuration.id,
			reasoning: `Ancient Protective Magic Traditions`,
		}),
		high_elf_school_of_bladesinging_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-school-of-bladesinging-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.wizard_school_of_bladesinging.id,
			reasoning: `Traditional Elven Spellsword Mastery`,
		}),
		shadar_kai_school_of_bladesinging_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-school-of-bladesinging-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.wizard_school_of_bladesinging.id,
			reasoning: `Shadow-enhanced Blade Dancing`,
		}),
		high_elf_school_of_chronurgy_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-school-of-chronurgy-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.wizard_school_of_chronurgy.id,
			reasoning: `Long-lived Perspective On Time Magic`,
		}),
		high_elf_school_of_conjuration_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-school-of-conjuration-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.wizard_school_of_conjuration.id,
			reasoning: `Summoning Traditions And Planar Magic`,
		}),
		githyanki_school_of_conjuration_relation: await db.createSubraceSubclassRecommendation({
			id: "githyanki-school-of-conjuration-relation",
			subraceId: subraces.gith_githyanki.id,
			subclassId: subclasses.wizard_school_of_conjuration.id,
			reasoning: `Planar Summoning Expertise`,
		}),
		high_elf_school_of_divination_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-school-of-divination-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.wizard_school_of_divination.id,
			reasoning: `Ancient Wisdom And Foresight Traditions`,
		}),
		eladrin_school_of_enchantment_relation: await db.createSubraceSubclassRecommendation({
			id: "eladrin-school-of-enchantment-relation",
			subraceId: subraces.elf_eladrin.id,
			subclassId: subclasses.wizard_school_of_enchantment.id,
			reasoning: `Fey Charm Magic And Enchantment Mastery`,
		}),
		fire_genasi_school_of_evocation_relation: await db.createSubraceSubclassRecommendation({
			id: "fire-genasi-school-of-evocation-relation",
			subraceId: subraces.genasi_fire_genasi.id,
			subclassId: subclasses.wizard_school_of_evocation.id,
			reasoning: `Elemental Fire Evocation Mastery`,
		}),
		high_elf_school_of_evocation_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-school-of-evocation-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.wizard_school_of_evocation.id,
			reasoning: `Refined Destructive Magic Techniques`,
		}),
		githyanki_school_of_graviturgy_relation: await db.createSubraceSubclassRecommendation({
			id: "githyanki-school-of-graviturgy-relation",
			subraceId: subraces.gith_githyanki.id,
			subclassId: subclasses.wizard_school_of_graviturgy.id,
			reasoning: `Planar Gravity Manipulation Expertise`,
		}),
		high_elf_school_of_graviturgy_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-school-of-graviturgy-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.wizard_school_of_graviturgy.id,
			reasoning: `Advanced Magical Theory And Gravity Studies`,
		}),
		shadar_kai_school_of_necromancy_relation: await db.createSubraceSubclassRecommendation({
			id: "shadar-kai-school-of-necromancy-relation",
			subraceId: subraces.elf_shadar_kai.id,
			subclassId: subclasses.wizard_school_of_necromancy.id,
			reasoning: `Shadow Realm Death Magic Mastery`,
		}),
		high_elf_order_of_scribes_relation: await db.createSubraceSubclassRecommendation({
			id: "high-elf-order-of-scribes-relation",
			subraceId: subraces.elf_high_elf.id,
			subclassId: subclasses.wizard_order_of_scribes.id,
			reasoning: `Ancient Magical Libraries And Scholarly Traditions`,
		}),
		githyanki_war_magic_relation: await db.createSubraceSubclassRecommendation({
			id: "githyanki-war-magic-relation",
			subraceId: subraces.gith_githyanki.id,
			subclassId: subclasses.wizard_war_magic.id,
			reasoning: `Planar Warrior-mage Traditions`,
		}),
		gith_mentalist_relation: await db.createSubraceSubclassRecommendation({
			id: "gith-mentalist-relation",
			subraceId: subraces.gith_githzerai.id,
			subclassId: subclasses.tactician_mentalist.id,
			reasoning: `Gith Psionic Powers And Mental Training Excel In Telepathic Communication And Battlefield Coordination.`,
		}),
	}
}