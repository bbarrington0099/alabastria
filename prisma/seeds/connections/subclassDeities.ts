import { Prisma, DeityRecommendationType } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Subclasses, Deities } from "../index";

type SubclassDeityPayload = Prisma.SubclassDeityGetPayload<{}>
export interface SubclassDeity {
	subclasses_fighter_champion_id_to_deities_tempus_id_relation: SubclassDeityPayload
	subclasses_fighter_champion_id_to_deities_clangeddin_silverbeard_id_relation: SubclassDeityPayload
	subclasses_fighter_champion_id_to_deities_bahamut_id_relation: SubclassDeityPayload
	subclasses_fighter_champion_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_fighter_champion_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_fighter_eldritch_knight_id_to_deities_mystra_id_relation: SubclassDeityPayload
	subclasses_fighter_eldritch_knight_id_to_deities_corellon_larethian_id_relation: SubclassDeityPayload
	subclasses_fighter_eldritch_knight_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_wizard_evocation_id_to_deities_mystra_id_relation: SubclassDeityPayload
	subclasses_wizard_evocation_id_to_deities_corellon_larethian_id_relation: SubclassDeityPayload
	subclasses_wizard_evocation_id_to_deities_kossuth_id_relation: SubclassDeityPayload
	subclasses_wizard_evocation_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_wizard_evocation_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_wizard_divination_id_to_deities_sehanine_moonbow_id_relation: SubclassDeityPayload
	subclasses_wizard_divination_id_to_deities_jergal_id_relation: SubclassDeityPayload
	subclasses_cleric_life_domain_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_cleric_life_domain_id_to_deities_berronar_truesilver_id_relation: SubclassDeityPayload
	subclasses_cleric_life_domain_id_to_deities_yondalla_id_relation: SubclassDeityPayload
	subclasses_cleric_life_domain_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_cleric_life_domain_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_cleric_war_domain_id_to_deities_tempus_id_relation: SubclassDeityPayload
	subclasses_cleric_war_domain_id_to_deities_clangeddin_silverbeard_id_relation: SubclassDeityPayload
	subclasses_cleric_war_domain_id_to_deities_bane_id_relation: SubclassDeityPayload
	subclasses_cleric_death_domain_id_to_deities_kelemvor_id_relation: SubclassDeityPayload
	subclasses_cleric_death_domain_id_to_deities_myrkul_id_relation: SubclassDeityPayload
	subclasses_cleric_death_domain_id_to_deities_jergal_id_relation: SubclassDeityPayload
	subclasses_cleric_death_domain_id_to_deities_shar_id_relation: SubclassDeityPayload
	subclasses_cleric_death_domain_id_to_deities_beshaba_id_relation: SubclassDeityPayload
	subclasses_rogue_thief_id_to_deities_shar_id_relation: SubclassDeityPayload
	subclasses_rogue_thief_id_to_deities_baravar_cloakshadow_id_relation: SubclassDeityPayload
	subclasses_rogue_thief_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_rogue_thief_id_to_deities_beshaba_id_relation: SubclassDeityPayload
	subclasses_rogue_thief_id_to_deities_vergadain_id_relation: SubclassDeityPayload
	subclasses_rogue_assassin_id_to_deities_bane_id_relation: SubclassDeityPayload
	subclasses_rogue_assassin_id_to_deities_myrkul_id_relation: SubclassDeityPayload
	subclasses_rogue_assassin_id_to_deities_kelemvor_id_relation: SubclassDeityPayload
	subclasses_ranger_beast_master_id_to_deities_sehanine_moonbow_id_relation: SubclassDeityPayload
	subclasses_ranger_beast_master_id_to_deities_baervan_wildwanderer_id_relation: SubclassDeityPayload
	subclasses_ranger_beast_master_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_ranger_beast_master_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_ranger_beast_master_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_ranger_hunter_id_to_deities_tempus_id_relation: SubclassDeityPayload
	subclasses_ranger_hunter_id_to_deities_clangeddin_silverbeard_id_relation: SubclassDeityPayload
	subclasses_paladin_devotion_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_paladin_devotion_id_to_deities_bahamut_id_relation: SubclassDeityPayload
	subclasses_paladin_devotion_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_paladin_vengeance_id_to_deities_tempus_id_relation: SubclassDeityPayload
	subclasses_paladin_vengeance_id_to_deities_bane_id_relation: SubclassDeityPayload
	subclasses_paladin_vengeance_id_to_deities_kelemvor_id_relation: SubclassDeityPayload
	subclasses_paladin_oath_of_the_crown_id_to_deities_vergadain_id_relation: SubclassDeityPayload
	subclasses_barbarian_berserker_id_to_deities_gruumsh_one_eye_id_relation: SubclassDeityPayload
	subclasses_barbarian_berserker_id_to_deities_tempus_id_relation: SubclassDeityPayload
	subclasses_barbarian_berserker_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_barbarian_berserker_id_to_deities_luthic_id_relation: SubclassDeityPayload
	subclasses_barbarian_berserker_id_to_deities_bane_id_relation: SubclassDeityPayload
	subclasses_barbarian_totem_warrior_id_to_deities_sehanine_moonbow_id_relation: SubclassDeityPayload
	subclasses_barbarian_totem_warrior_id_to_deities_baervan_wildwanderer_id_relation: SubclassDeityPayload
	subclasses_barbarian_totem_warrior_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_barbarian_totem_warrior_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_bard_lore_id_to_deities_mystra_id_relation: SubclassDeityPayload
	subclasses_bard_lore_id_to_deities_jergal_id_relation: SubclassDeityPayload
	subclasses_bard_lore_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_bard_lore_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_bard_lore_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_bard_valor_id_to_deities_tempus_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_the_moon_id_to_deities_sehanine_moonbow_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_the_moon_id_to_deities_baervan_wildwanderer_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_the_moon_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_the_moon_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_the_moon_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_the_land_id_to_deities_grumbar_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_the_land_id_to_deities_istishia_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_the_land_id_to_deities_akadi_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_the_land_id_to_deities_kossuth_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_the_open_hand_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_the_open_hand_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_the_open_hand_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_the_open_hand_id_to_deities_mystra_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_the_open_hand_id_to_deities_jergal_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_shadow_id_to_deities_shar_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_shadow_id_to_deities_baravar_cloakshadow_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_shadow_id_to_deities_beshaba_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_shadow_id_to_deities_myrkul_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_shadow_id_to_deities_kelemvor_id_relation: SubclassDeityPayload
	subclasses_sorcerer_draconic_bloodline_id_to_deities_bahamut_id_relation: SubclassDeityPayload
	subclasses_sorcerer_draconic_bloodline_id_to_deities_tiamat_id_relation: SubclassDeityPayload
	subclasses_sorcerer_draconic_bloodline_id_to_deities_mystra_id_relation: SubclassDeityPayload
	subclasses_sorcerer_draconic_bloodline_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_sorcerer_draconic_bloodline_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_sorcerer_wild_magic_id_to_deities_beshaba_id_relation: SubclassDeityPayload
	subclasses_sorcerer_wild_magic_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_warlock_the_fiend_id_to_deities_asmodeus_id_relation: SubclassDeityPayload
	subclasses_warlock_the_fiend_id_to_deities_bane_id_relation: SubclassDeityPayload
	subclasses_warlock_the_fiend_id_to_deities_myrkul_id_relation: SubclassDeityPayload
	subclasses_warlock_the_fiend_id_to_deities_shar_id_relation: SubclassDeityPayload
	subclasses_warlock_the_fiend_id_to_deities_beshaba_id_relation: SubclassDeityPayload
	subclasses_warlock_the_great_old_one_id_to_deities_jergal_id_relation: SubclassDeityPayload
	subclasses_warlock_the_great_old_one_id_to_deities_kelemvor_id_relation: SubclassDeityPayload
	subclasses_artificer_alchemist_id_to_deities_mystra_id_relation: SubclassDeityPayload
	subclasses_artificer_alchemist_id_to_deities_dugmaren_brightmantle_id_relation: SubclassDeityPayload
	subclasses_artificer_alchemist_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_artificer_alchemist_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_artificer_alchemist_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_artificer_battle_smith_id_to_deities_moradin_id_relation: SubclassDeityPayload
	subclasses_artificer_battle_smith_id_to_deities_tempus_id_relation: SubclassDeityPayload
	subclasses_barbarian_path_of_the_ancestral_guardian_id_to_deities_jergal_id_relation: SubclassDeityPayload
	subclasses_barbarian_path_of_the_storm_herald_id_to_deities_kossuth_id_relation: SubclassDeityPayload
	subclasses_barbarian_path_of_the_storm_herald_id_to_deities_istishia_id_relation: SubclassDeityPayload
	subclasses_barbarian_path_of_the_storm_herald_id_to_deities_akadi_id_relation: SubclassDeityPayload
	subclasses_barbarian_path_of_the_storm_herald_id_to_deities_grumbar_id_relation: SubclassDeityPayload
	subclasses_barbarian_path_of_wild_magic_id_to_deities_mystra_id_relation: SubclassDeityPayload
	subclasses_barbarian_path_of_wild_magic_id_to_deities_beshaba_id_relation: SubclassDeityPayload
	subclasses_barbarian_path_of_the_zealot_id_to_deities_kelemvor_id_relation: SubclassDeityPayload
	subclasses_bard_college_of_creation_id_to_deities_corellon_larethian_id_relation: SubclassDeityPayload
	subclasses_bard_college_of_glamour_id_to_deities_sehanine_moonbow_id_relation: SubclassDeityPayload
	subclasses_bard_college_of_spirits_id_to_deities_kelemvor_id_relation: SubclassDeityPayload
	subclasses_bard_college_of_whispers_id_to_deities_shar_id_relation: SubclassDeityPayload
	subclasses_bard_college_of_whispers_id_to_deities_baravar_cloakshadow_id_relation: SubclassDeityPayload
	subclasses_bard_college_of_whispers_id_to_deities_beshaba_id_relation: SubclassDeityPayload
	subclasses_bard_college_of_whispers_id_to_deities_myrkul_id_relation: SubclassDeityPayload
	subclasses_cleric_forge_domain_id_to_deities_moradin_id_relation: SubclassDeityPayload
	subclasses_cleric_forge_domain_id_to_deities_dugmaren_brightmantle_id_relation: SubclassDeityPayload
	subclasses_cleric_forge_domain_id_to_deities_mystra_id_relation: SubclassDeityPayload
	subclasses_cleric_tempest_domain_id_to_deities_kossuth_id_relation: SubclassDeityPayload
	subclasses_cleric_tempest_domain_id_to_deities_istishia_id_relation: SubclassDeityPayload
	subclasses_cleric_tempest_domain_id_to_deities_akadi_id_relation: SubclassDeityPayload
	subclasses_cleric_tempest_domain_id_to_deities_grumbar_id_relation: SubclassDeityPayload
	subclasses_cleric_light_domain_id_to_deities_corellon_larethian_id_relation: SubclassDeityPayload
	subclasses_cleric_nature_domain_id_to_deities_sehanine_moonbow_id_relation: SubclassDeityPayload
	subclasses_cleric_nature_domain_id_to_deities_baervan_wildwanderer_id_relation: SubclassDeityPayload
	subclasses_cleric_trickery_domain_id_to_deities_baravar_cloakshadow_id_relation: SubclassDeityPayload
	subclasses_fighter_battle_master_id_to_deities_bane_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_the_four_elements_id_to_deities_kossuth_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_the_four_elements_id_to_deities_istishia_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_the_four_elements_id_to_deities_akadi_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_the_four_elements_id_to_deities_grumbar_id_relation: SubclassDeityPayload
	subclasses_paladin_oath_of_the_ancients_id_to_deities_sehanine_moonbow_id_relation: SubclassDeityPayload
	subclasses_paladin_oath_of_the_ancients_id_to_deities_baervan_wildwanderer_id_relation: SubclassDeityPayload
	subclasses_paladin_oath_of_the_ancients_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_ranger_gloom_stalker_id_to_deities_shar_id_relation: SubclassDeityPayload
	subclasses_ranger_gloom_stalker_id_to_deities_beshaba_id_relation: SubclassDeityPayload
	subclasses_ranger_gloom_stalker_id_to_deities_myrkul_id_relation: SubclassDeityPayload
	subclasses_ranger_gloom_stalker_id_to_deities_kelemvor_id_relation: SubclassDeityPayload
	subclasses_rogue_arcane_trickster_id_to_deities_mystra_id_relation: SubclassDeityPayload
	subclasses_rogue_arcane_trickster_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_rogue_arcane_trickster_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_sorcerer_divine_soul_id_to_deities_corellon_larethian_id_relation: SubclassDeityPayload
	subclasses_warlock_the_archfey_id_to_deities_sehanine_moonbow_id_relation: SubclassDeityPayload
	subclasses_warlock_the_archfey_id_to_deities_corellon_larethian_id_relation: SubclassDeityPayload
	subclasses_warlock_the_archfey_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_warlock_the_archfey_id_to_deities_selune_id_relation: SubclassDeityPayload
	subclasses_warlock_the_archfey_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_wizard_school_of_abjuration_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_wizard_school_of_enchantment_id_to_deities_baravar_cloakshadow_id_relation: SubclassDeityPayload
	subclasses_wizard_school_of_necromancy_id_to_deities_myrkul_id_relation: SubclassDeityPayload
	subclasses_wizard_school_of_necromancy_id_to_deities_kelemvor_id_relation: SubclassDeityPayload
	subclasses_wizard_school_of_necromancy_id_to_deities_shar_id_relation: SubclassDeityPayload
	subclasses_wizard_school_of_necromancy_id_to_deities_beshaba_id_relation: SubclassDeityPayload
	subclasses_wizard_school_of_transmutation_id_to_deities_dugmaren_brightmantle_id_relation: SubclassDeityPayload
	subclasses_tactician_grandmaster_id_to_deities_tempus_id_relation: SubclassDeityPayload
	subclasses_tactician_grandmaster_id_to_deities_jergal_id_relation: SubclassDeityPayload
	subclasses_tactician_grandmaster_id_to_deities_tymora_id_relation: SubclassDeityPayload
	subclasses_tactician_grandmaster_id_to_deities_lathander_id_relation: SubclassDeityPayload
	subclasses_tactician_grandmaster_id_to_deities_mystra_id_relation: SubclassDeityPayload
	subclasses_ranger_gloom_stalker_id_to_deities_the_raven_queen_id_relation: SubclassDeityPayload
	subclasses_ranger_gloom_stalker_id_to_deities_baravar_cloakshadow_id_relation: SubclassDeityPayload
	subclasses_ranger_hunter_id_to_deities_solonor_thelandira_id_relation: SubclassDeityPayload
	subclasses_warlock_the_archfey_id_to_deities_mystra_id_relation: SubclassDeityPayload
	subclasses_warlock_the_great_old_one_id_to_deities_the_raven_queen_id_relation: SubclassDeityPayload
	subclasses_cleric_death_domain_id_to_deities_the_raven_queen_id_relation: SubclassDeityPayload
	subclasses_cleric_death_domain_id_to_deities_urogalan_id_relation: SubclassDeityPayload
	subclasses_bard_college_of_glamour_id_to_deities_hanali_celanil_id_relation: SubclassDeityPayload
	subclasses_bard_college_of_spirits_id_to_deities_the_raven_queen_id_relation: SubclassDeityPayload
	subclasses_bard_college_of_spirits_id_to_deities_urogalan_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_spores_id_to_deities_urogalan_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_spores_id_to_deities_the_raven_queen_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_spores_id_to_deities_myrkul_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_spores_id_to_deities_jergal_id_relation: SubclassDeityPayload
	subclasses_druid_circle_of_spores_id_to_deities_shar_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_the_long_death_id_to_deities_the_raven_queen_id_relation: SubclassDeityPayload
	subclasses_monk_way_of_the_long_death_id_to_deities_urogalan_id_relation: SubclassDeityPayload
	subclasses_sorcerer_shadow_magic_id_to_deities_shar_id_relation: SubclassDeityPayload
	subclasses_sorcerer_shadow_magic_id_to_deities_the_raven_queen_id_relation: SubclassDeityPayload
	subclasses_sorcerer_shadow_magic_id_to_deities_myrkul_id_relation: SubclassDeityPayload
	subclasses_sorcerer_shadow_magic_id_to_deities_jergal_id_relation: SubclassDeityPayload
	subclasses_sorcerer_shadow_magic_id_to_deities_urogalan_id_relation: SubclassDeityPayload
	subclasses_sorcerer_divine_soul_id_to_deities_sehanine_moonbow_id_relation: SubclassDeityPayload
	subclasses_wizard_school_of_necromancy_id_to_deities_the_raven_queen_id_relation: SubclassDeityPayload
	subclasses_wizard_school_of_necromancy_id_to_deities_urogalan_id_relation: SubclassDeityPayload
	subclasses_wizard_school_of_enchantment_id_to_deities_hanali_celanil_id_relation: SubclassDeityPayload
}

interface SubclassDeityParams {
	subclasses: Subclasses;
	deities: Deities
}
export async function setSubclassDeity(params: SubclassDeityParams): Promise<SubclassDeity> {
	const { subclasses, deities } = params;
	return {
		subclasses_fighter_champion_id_to_deities_tempus_id_relation: await db.createSubclassDeity({
			id: "subclasses-fighter-champion-id-to-deities-tempus-id-relation",
			subclassId: subclasses.fighter_champion.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Champions favor Tempus for strategy and battle.`,
		}),
		subclasses_fighter_champion_id_to_deities_clangeddin_silverbeard_id_relation: await db.createSubclassDeity({
			id: "subclasses-fighter-champion-id-to-deities-clangeddin-silverbeard-id-relation",
			subclassId: subclasses.fighter_champion.id,
			deityId: deities.clangeddin_silverbeard.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Champions favor Clangeddin Silverbeard for honor and courage.`,
		}),
		subclasses_fighter_champion_id_to_deities_bahamut_id_relation: await db.createSubclassDeity({
			id: "subclasses-fighter-champion-id-to-deities-bahamut-id-relation",
			subclassId: subclasses.fighter_champion.id,
			deityId: deities.bahamut.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Champions favor Bahamut for justice and protection.`,
		}),
		subclasses_fighter_champion_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-fighter-champion-id-to-deities-tymora-id-relation",
			subclassId: subclasses.fighter_champion.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Champions favor Tymora for luck in battle.`,
		}),
		subclasses_fighter_champion_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-fighter-champion-id-to-deities-lathander-id-relation",
			subclassId: subclasses.fighter_champion.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Champions favor Lathander for renewal and hope.`,
		}),
		subclasses_fighter_eldritch_knight_id_to_deities_mystra_id_relation: await db.createSubclassDeity({
			id: "subclasses-fighter-eldritch-knight-id-to-deities-mystra-id-relation",
			subclassId: subclasses.fighter_eldritch_knight.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Eldritch Knights favor Mystra for arcane knowledge.`,
		}),
		subclasses_fighter_eldritch_knight_id_to_deities_corellon_larethian_id_relation: await db.createSubclassDeity({
			id: "subclasses-fighter-eldritch-knight-id-to-deities-corellon-larethian-id-relation",
			subclassId: subclasses.fighter_eldritch_knight.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Eldritch Knights favor Corellon Larethian for elven magic.`,
		}),
		subclasses_fighter_eldritch_knight_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-fighter-eldritch-knight-id-to-deities-selune-id-relation",
			subclassId: subclasses.fighter_eldritch_knight.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Eldritch Knights favor Selûne for guidance and navigation.`,
		}),
		subclasses_wizard_evocation_id_to_deities_mystra_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-evocation-id-to-deities-mystra-id-relation",
			subclassId: subclasses.wizard_school_of_evocation.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Evocation favor Mystra for arcane knowledge.`,
		}),
		subclasses_wizard_evocation_id_to_deities_corellon_larethian_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-evocation-id-to-deities-corellon-larethian-id-relation",
			subclassId: subclasses.wizard_school_of_evocation.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Evocation favor Corellon Larethian for elven magic.`,
		}),
		subclasses_wizard_evocation_id_to_deities_kossuth_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-evocation-id-to-deities-kossuth-id-relation",
			subclassId: subclasses.wizard_school_of_evocation.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Evocation favor Kossuth for fire magic.`,
		}),
		subclasses_wizard_evocation_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-evocation-id-to-deities-tymora-id-relation",
			subclassId: subclasses.wizard_school_of_evocation.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Evocation favor Tymora for luck.`,
		}),
		subclasses_wizard_evocation_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-evocation-id-to-deities-selune-id-relation",
			subclassId: subclasses.wizard_school_of_evocation.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Evocation favor Selûne for guidance and navigation.`,
		}),
		subclasses_wizard_divination_id_to_deities_sehanine_moonbow_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-divination-id-to-deities-sehanine-moonbow-id-relation",
			subclassId: subclasses.wizard_school_of_divination.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Divination favor Sehanine Moonbow for dreams and journeys.`,
		}),
		subclasses_wizard_divination_id_to_deities_jergal_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-divination-id-to-deities-jergal-id-relation",
			subclassId: subclasses.wizard_school_of_divination.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Divination favor Jergal for records and fate.`,
		}),
		subclasses_cleric_life_domain_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-life-domain-id-to-deities-lathander-id-relation",
			subclassId: subclasses.cleric_life_domain.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Life Domain favor Lathander for renewal and healing.`,
		}),
		subclasses_cleric_life_domain_id_to_deities_berronar_truesilver_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-life-domain-id-to-deities-berronar-truesilver-id-relation",
			subclassId: subclasses.cleric_life_domain.id,
			deityId: deities.berronar_truesilver.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Life Domain favor Berronar Truesilver for family protection.`,
		}),
		subclasses_cleric_life_domain_id_to_deities_yondalla_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-life-domain-id-to-deities-yondalla-id-relation",
			subclassId: subclasses.cleric_life_domain.id,
			deityId: deities.yondalla.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Life Domain favor Yondalla for fertility and protection.`,
		}),
		subclasses_cleric_life_domain_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-life-domain-id-to-deities-tymora-id-relation",
			subclassId: subclasses.cleric_life_domain.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Life Domain favor Tymora for luck.`,
		}),
		subclasses_cleric_life_domain_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-life-domain-id-to-deities-selune-id-relation",
			subclassId: subclasses.cleric_life_domain.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Life Domain favor Selûne for guidance and navigation.`,
		}),
		subclasses_cleric_war_domain_id_to_deities_tempus_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-war-domain-id-to-deities-tempus-id-relation",
			subclassId: subclasses.cleric_war_domain.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `War Domain favor Tempus for strategy and battle.`,
		}),
		subclasses_cleric_war_domain_id_to_deities_clangeddin_silverbeard_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-war-domain-id-to-deities-clangeddin-silverbeard-id-relation",
			subclassId: subclasses.cleric_war_domain.id,
			deityId: deities.clangeddin_silverbeard.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `War Domain favor Clangeddin Silverbeard for honor and courage.`,
		}),
		subclasses_cleric_war_domain_id_to_deities_bane_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-war-domain-id-to-deities-bane-id-relation",
			subclassId: subclasses.cleric_war_domain.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `War Domain favor Bane for tyranny and conquest.`,
		}),
		subclasses_cleric_death_domain_id_to_deities_kelemvor_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-death-domain-id-to-deities-kelemvor-id-relation",
			subclassId: subclasses.cleric_death_domain.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Death Domain favor Kelemvor for judgment.`,
		}),
		subclasses_cleric_death_domain_id_to_deities_myrkul_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-death-domain-id-to-deities-myrkul-id-relation",
			subclassId: subclasses.cleric_death_domain.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Death Domain favor Myrkul for undeath.`,
		}),
		subclasses_cleric_death_domain_id_to_deities_jergal_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-death-domain-id-to-deities-jergal-id-relation",
			subclassId: subclasses.cleric_death_domain.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Death Domain favor Jergal for records of the dead.`,
		}),
		subclasses_cleric_death_domain_id_to_deities_shar_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-death-domain-id-to-deities-shar-id-relation",
			subclassId: subclasses.cleric_death_domain.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Death Domain favor Shar for secrets and darkness.`,
		}),
		subclasses_cleric_death_domain_id_to_deities_beshaba_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-death-domain-id-to-deities-beshaba-id-relation",
			subclassId: subclasses.cleric_death_domain.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Death Domain favor Beshaba for misfortune.`,
		}),
		subclasses_rogue_thief_id_to_deities_shar_id_relation: await db.createSubclassDeity({
			id: "subclasses-rogue-thief-id-to-deities-shar-id-relation",
			subclassId: subclasses.rogue_thief.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Thieves favor Shar for secrets and darkness.`,
		}),
		subclasses_rogue_thief_id_to_deities_baravar_cloakshadow_id_relation: await db.createSubclassDeity({
			id: "subclasses-rogue-thief-id-to-deities-baravar-cloakshadow-id-relation",
			subclassId: subclasses.rogue_thief.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Thieves favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		subclasses_rogue_thief_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-rogue-thief-id-to-deities-tymora-id-relation",
			subclassId: subclasses.rogue_thief.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Thieves favor Tymora for luck.`,
		}),
		subclasses_rogue_thief_id_to_deities_beshaba_id_relation: await db.createSubclassDeity({
			id: "subclasses-rogue-thief-id-to-deities-beshaba-id-relation",
			subclassId: subclasses.rogue_thief.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Thieves favor Beshaba for misfortune.`,
		}),
		subclasses_rogue_thief_id_to_deities_vergadain_id_relation: await db.createSubclassDeity({
			id: "subclasses-rogue-thief-id-to-deities-vergadain-id-relation",
			subclassId: subclasses.rogue_thief.id,
			deityId: deities.vergadain.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Thieves favor Vergadain for wealth and commerce.`,
		}),
		subclasses_rogue_assassin_id_to_deities_bane_id_relation: await db.createSubclassDeity({
			id: "subclasses-rogue-assassin-id-to-deities-bane-id-relation",
			subclassId: subclasses.rogue_assassin.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Assassins favor Bane for tyranny and conquest.`,
		}),
		subclasses_rogue_assassin_id_to_deities_myrkul_id_relation: await db.createSubclassDeity({
			id: "subclasses-rogue-assassin-id-to-deities-myrkul-id-relation",
			subclassId: subclasses.rogue_assassin.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Assassins favor Myrkul for undeath.`,
		}),
		subclasses_rogue_assassin_id_to_deities_kelemvor_id_relation: await db.createSubclassDeity({
			id: "subclasses-rogue-assassin-id-to-deities-kelemvor-id-relation",
			subclassId: subclasses.rogue_assassin.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Assassins favor Kelemvor for judgment.`,
		}),
		subclasses_ranger_beast_master_id_to_deities_sehanine_moonbow_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-beast-master-id-to-deities-sehanine-moonbow-id-relation",
			subclassId: subclasses.ranger_beast_master.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Beast Masters favor Sehanine Moonbow for dreams and journeys.`,
		}),
		subclasses_ranger_beast_master_id_to_deities_baervan_wildwanderer_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-beast-master-id-to-deities-baervan-wildwanderer-id-relation",
			subclassId: subclasses.ranger_beast_master.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Beast Masters favor Baervan Wildwanderer for forests and travel.`,
		}),
		subclasses_ranger_beast_master_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-beast-master-id-to-deities-selune-id-relation",
			subclassId: subclasses.ranger_beast_master.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Beast Masters favor Selûne for navigation and wanderers.`,
		}),
		subclasses_ranger_beast_master_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-beast-master-id-to-deities-tymora-id-relation",
			subclassId: subclasses.ranger_beast_master.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Beast Masters favor Tymora for luck.`,
		}),
		subclasses_ranger_beast_master_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-beast-master-id-to-deities-lathander-id-relation",
			subclassId: subclasses.ranger_beast_master.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Beast Masters favor Lathander for renewal and hope.`,
		}),
		subclasses_ranger_hunter_id_to_deities_tempus_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-hunter-id-to-deities-tempus-id-relation",
			subclassId: subclasses.ranger_hunter.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Hunters favor Tempus for strategy and battle.`,
		}),
		subclasses_ranger_hunter_id_to_deities_clangeddin_silverbeard_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-hunter-id-to-deities-clangeddin-silverbeard-id-relation",
			subclassId: subclasses.ranger_hunter.id,
			deityId: deities.clangeddin_silverbeard.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Hunters favor Clangeddin Silverbeard for honor and courage.`,
		}),
		subclasses_paladin_devotion_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-paladin-devotion-id-to-deities-lathander-id-relation",
			subclassId: subclasses.paladin_oath_of_devotion.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Devotion favor Lathander for renewal and hope.`,
		}),
		subclasses_paladin_devotion_id_to_deities_bahamut_id_relation: await db.createSubclassDeity({
			id: "subclasses-paladin-devotion-id-to-deities-bahamut-id-relation",
			subclassId: subclasses.paladin_oath_of_devotion.id,
			deityId: deities.bahamut.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Devotion favor Bahamut for justice and protection.`,
		}),
		subclasses_paladin_devotion_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-paladin-devotion-id-to-deities-tymora-id-relation",
			subclassId: subclasses.paladin_oath_of_devotion.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Devotion favor Tymora for good fortune.`,
		}),
		subclasses_paladin_vengeance_id_to_deities_tempus_id_relation: await db.createSubclassDeity({
			id: "subclasses-paladin-vengeance-id-to-deities-tempus-id-relation",
			subclassId: subclasses.paladin_oath_of_vengeance.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Vengeance favor Tempus for strategy and battle.`,
		}),
		subclasses_paladin_vengeance_id_to_deities_bane_id_relation: await db.createSubclassDeity({
			id: "subclasses-paladin-vengeance-id-to-deities-bane-id-relation",
			subclassId: subclasses.paladin_oath_of_vengeance.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Vengeance favor Bane for tyranny and conquest.`,
		}),
		subclasses_paladin_vengeance_id_to_deities_kelemvor_id_relation: await db.createSubclassDeity({
			id: "subclasses-paladin-vengeance-id-to-deities-kelemvor-id-relation",
			subclassId: subclasses.paladin_oath_of_vengeance.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Vengeance favor Kelemvor for judgment.`,
		}),
		subclasses_paladin_oath_of_the_crown_id_to_deities_vergadain_id_relation: await db.createSubclassDeity({
			id: "subclasses-paladin-oath-of-the-crown-id-to-deities-vergadain-id-relation",
			subclassId: subclasses.paladin_oath_of_the_crown.id,
			deityId: deities.vergadain.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Crown favor Vergadain for wealth and commerce that supports civilization.`,
		}),
		subclasses_barbarian_berserker_id_to_deities_gruumsh_one_eye_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-berserker-id-to-deities-gruumsh-one-eye-id-relation",
			subclassId: subclasses.barbarian_path_of_the_berserker.id,
			deityId: deities.gruumsh_one_eye.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Berserkers favor Gruumsh One Eye for destruction and conquest.`,
		}),
		subclasses_barbarian_berserker_id_to_deities_tempus_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-berserker-id-to-deities-tempus-id-relation",
			subclassId: subclasses.barbarian_path_of_the_berserker.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Berserkers favor Tempus for strategy and battle.`,
		}),
		subclasses_barbarian_berserker_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-berserker-id-to-deities-tymora-id-relation",
			subclassId: subclasses.barbarian_path_of_the_berserker.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Berserkers favor Tymora for luck.`,
		}),
		subclasses_barbarian_berserker_id_to_deities_luthic_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-berserker-id-to-deities-luthic-id-relation",
			subclassId: subclasses.barbarian_path_of_the_berserker.id,
			deityId: deities.luthic.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Berserkers favor Luthic for her domains.`,
		}),
		subclasses_barbarian_berserker_id_to_deities_bane_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-berserker-id-to-deities-bane-id-relation",
			subclassId: subclasses.barbarian_path_of_the_berserker.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Berserkers favor Bane for tyranny and conquest.`,
		}),
		subclasses_barbarian_totem_warrior_id_to_deities_sehanine_moonbow_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-totem-warrior-id-to-deities-sehanine-moonbow-id-relation",
			subclassId: subclasses.barbarian_path_of_the_totem_warrior.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Totem Warriors favor Sehanine Moonbow for dreams and journeys.`,
		}),
		subclasses_barbarian_totem_warrior_id_to_deities_baervan_wildwanderer_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-totem-warrior-id-to-deities-baervan-wildwanderer-id-relation",
			subclassId: subclasses.barbarian_path_of_the_totem_warrior.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Totem Warriors favor Baervan Wildwanderer for forests and travel.`,
		}),
		subclasses_barbarian_totem_warrior_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-totem-warrior-id-to-deities-selune-id-relation",
			subclassId: subclasses.barbarian_path_of_the_totem_warrior.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Totem Warriors favor Selûne for navigation and wanderers.`,
		}),
		subclasses_barbarian_totem_warrior_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-totem-warrior-id-to-deities-lathander-id-relation",
			subclassId: subclasses.barbarian_path_of_the_totem_warrior.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Totem Warriors favor Lathander for renewal and hope.`,
		}),
		subclasses_bard_lore_id_to_deities_mystra_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-lore-id-to-deities-mystra-id-relation",
			subclassId: subclasses.bard_college_of_lore.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Lore favor Mystra for arcane knowledge.`,
		}),
		subclasses_bard_lore_id_to_deities_jergal_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-lore-id-to-deities-jergal-id-relation",
			subclassId: subclasses.bard_college_of_lore.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Lore favor Jergal for records and fate.`,
		}),
		subclasses_bard_lore_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-lore-id-to-deities-tymora-id-relation",
			subclassId: subclasses.bard_college_of_lore.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Lore favor Tymora for luck.`,
		}),
		subclasses_bard_lore_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-lore-id-to-deities-selune-id-relation",
			subclassId: subclasses.bard_college_of_lore.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Lore favor Selûne for guidance and navigation.`,
		}),
		subclasses_bard_lore_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-lore-id-to-deities-lathander-id-relation",
			subclassId: subclasses.bard_college_of_lore.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Lore favor Lathander for renewal and hope.`,
		}),
		subclasses_bard_valor_id_to_deities_tempus_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-valor-id-to-deities-tempus-id-relation",
			subclassId: subclasses.bard_college_of_valor.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Valor favor Tempus for strategy and battle.`,
		}),
		subclasses_druid_circle_of_the_moon_id_to_deities_sehanine_moonbow_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-the-moon-id-to-deities-sehanine-moonbow-id-relation",
			subclassId: subclasses.druid_circle_of_the_moon.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Circle of the Moon favor Sehanine Moonbow for dreams and journeys.`,
		}),
		subclasses_druid_circle_of_the_moon_id_to_deities_baervan_wildwanderer_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-the-moon-id-to-deities-baervan-wildwanderer-id-relation",
			subclassId: subclasses.druid_circle_of_the_moon.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Circle of the Moon favor Baervan Wildwanderer for forests and travel.`,
		}),
		subclasses_druid_circle_of_the_moon_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-the-moon-id-to-deities-selune-id-relation",
			subclassId: subclasses.druid_circle_of_the_moon.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Circle of the Moon favor Selûne for navigation and wanderers.`,
		}),
		subclasses_druid_circle_of_the_moon_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-the-moon-id-to-deities-tymora-id-relation",
			subclassId: subclasses.druid_circle_of_the_moon.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Circle of the Moon favor Tymora for luck.`,
		}),
		subclasses_druid_circle_of_the_moon_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-the-moon-id-to-deities-lathander-id-relation",
			subclassId: subclasses.druid_circle_of_the_moon.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Circle of the Moon favor Lathander for renewal and hope.`,
		}),
		subclasses_druid_circle_of_the_land_id_to_deities_grumbar_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-the-land-id-to-deities-grumbar-id-relation",
			subclassId: subclasses.druid_circle_of_the_land.id,
			deityId: deities.grumbar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Circle of the Land favor Grumbar for earth.`,
		}),
		subclasses_druid_circle_of_the_land_id_to_deities_istishia_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-the-land-id-to-deities-istishia-id-relation",
			subclassId: subclasses.druid_circle_of_the_land.id,
			deityId: deities.istishia.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Circle of the Land favor Istishia for water.`,
		}),
		subclasses_druid_circle_of_the_land_id_to_deities_akadi_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-the-land-id-to-deities-akadi-id-relation",
			subclassId: subclasses.druid_circle_of_the_land.id,
			deityId: deities.akadi.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Circle of the Land favor Akadi for air.`,
		}),
		subclasses_druid_circle_of_the_land_id_to_deities_kossuth_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-the-land-id-to-deities-kossuth-id-relation",
			subclassId: subclasses.druid_circle_of_the_land.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Circle of the Land favor Kossuth for fire.`,
		}),
		subclasses_monk_way_of_the_open_hand_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-the-open-hand-id-to-deities-lathander-id-relation",
			subclassId: subclasses.monk_way_of_the_open_hand.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Open Hand favor Lathander for renewal and hope.`,
		}),
		subclasses_monk_way_of_the_open_hand_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-the-open-hand-id-to-deities-tymora-id-relation",
			subclassId: subclasses.monk_way_of_the_open_hand.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Open Hand favor Tymora for luck.`,
		}),
		subclasses_monk_way_of_the_open_hand_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-the-open-hand-id-to-deities-selune-id-relation",
			subclassId: subclasses.monk_way_of_the_open_hand.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Open Hand favor Selûne for navigation and wanderers.`,
		}),
		subclasses_monk_way_of_the_open_hand_id_to_deities_mystra_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-the-open-hand-id-to-deities-mystra-id-relation",
			subclassId: subclasses.monk_way_of_the_open_hand.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Open Hand favor Mystra for arcane knowledge.`,
		}),
		subclasses_monk_way_of_the_open_hand_id_to_deities_jergal_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-the-open-hand-id-to-deities-jergal-id-relation",
			subclassId: subclasses.monk_way_of_the_open_hand.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Open Hand favor Jergal for records and fate.`,
		}),
		subclasses_monk_way_of_shadow_id_to_deities_shar_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-shadow-id-to-deities-shar-id-relation",
			subclassId: subclasses.monk_way_of_shadow.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Way of Shadow favor Shar for secrets and darkness.`,
		}),
		subclasses_monk_way_of_shadow_id_to_deities_baravar_cloakshadow_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-shadow-id-to-deities-baravar-cloakshadow-id-relation",
			subclassId: subclasses.monk_way_of_shadow.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Way of Shadow favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		subclasses_monk_way_of_shadow_id_to_deities_beshaba_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-shadow-id-to-deities-beshaba-id-relation",
			subclassId: subclasses.monk_way_of_shadow.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Way of Shadow favor Beshaba for misfortune.`,
		}),
		subclasses_monk_way_of_shadow_id_to_deities_myrkul_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-shadow-id-to-deities-myrkul-id-relation",
			subclassId: subclasses.monk_way_of_shadow.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Way of Shadow favor Myrkul for undeath.`,
		}),
		subclasses_monk_way_of_shadow_id_to_deities_kelemvor_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-shadow-id-to-deities-kelemvor-id-relation",
			subclassId: subclasses.monk_way_of_shadow.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Way of Shadow favor Kelemvor for judgment.`,
		}),
		subclasses_sorcerer_draconic_bloodline_id_to_deities_bahamut_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-draconic-bloodline-id-to-deities-bahamut-id-relation",
			subclassId: subclasses.sorcerer_draconic_bloodline.id,
			deityId: deities.bahamut.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Draconic Bloodline favor Bahamut for their dragon heritage.`,
		}),
		subclasses_sorcerer_draconic_bloodline_id_to_deities_tiamat_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-draconic-bloodline-id-to-deities-tiamat-id-relation",
			subclassId: subclasses.sorcerer_draconic_bloodline.id,
			deityId: deities.tiamat.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Draconic Bloodline favor Tiamat for their dragon heritage.`,
		}),
		subclasses_sorcerer_draconic_bloodline_id_to_deities_mystra_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-draconic-bloodline-id-to-deities-mystra-id-relation",
			subclassId: subclasses.sorcerer_draconic_bloodline.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Draconic Bloodline favor Mystra for arcane knowledge.`,
		}),
		subclasses_sorcerer_draconic_bloodline_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-draconic-bloodline-id-to-deities-tymora-id-relation",
			subclassId: subclasses.sorcerer_draconic_bloodline.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Draconic Bloodline favor Tymora for luck.`,
		}),
		subclasses_sorcerer_draconic_bloodline_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-draconic-bloodline-id-to-deities-selune-id-relation",
			subclassId: subclasses.sorcerer_draconic_bloodline.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Draconic Bloodline favor Selûne for guidance and navigation.`,
		}),
		subclasses_sorcerer_wild_magic_id_to_deities_beshaba_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-wild-magic-id-to-deities-beshaba-id-relation",
			subclassId: subclasses.sorcerer_wild_magic.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wild Magic favor Beshaba for misfortune.`,
		}),
		subclasses_sorcerer_wild_magic_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-wild-magic-id-to-deities-lathander-id-relation",
			subclassId: subclasses.sorcerer_wild_magic.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Wild Magic favor Lathander for renewal and hope.`,
		}),
		subclasses_warlock_the_fiend_id_to_deities_asmodeus_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-fiend-id-to-deities-asmodeus-id-relation",
			subclassId: subclasses.warlock_the_fiend.id,
			deityId: deities.asmodeus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `The Fiend favor Asmodeus for their patron.`,
		}),
		subclasses_warlock_the_fiend_id_to_deities_bane_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-fiend-id-to-deities-bane-id-relation",
			subclassId: subclasses.warlock_the_fiend.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `The Fiend favor Bane for tyranny and conquest.`,
		}),
		subclasses_warlock_the_fiend_id_to_deities_myrkul_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-fiend-id-to-deities-myrkul-id-relation",
			subclassId: subclasses.warlock_the_fiend.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `The Fiend favor Myrkul for undeath.`,
		}),
		subclasses_warlock_the_fiend_id_to_deities_shar_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-fiend-id-to-deities-shar-id-relation",
			subclassId: subclasses.warlock_the_fiend.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `The Fiend favor Shar for secrets and darkness.`,
		}),
		subclasses_warlock_the_fiend_id_to_deities_beshaba_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-fiend-id-to-deities-beshaba-id-relation",
			subclassId: subclasses.warlock_the_fiend.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `The Fiend favor Beshaba for misfortune.`,
		}),
		subclasses_warlock_the_great_old_one_id_to_deities_jergal_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-great-old-one-id-to-deities-jergal-id-relation",
			subclassId: subclasses.warlock_the_great_old_one.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `The Great Old One favor Jergal for records and fate.`,
		}),
		subclasses_warlock_the_great_old_one_id_to_deities_kelemvor_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-great-old-one-id-to-deities-kelemvor-id-relation",
			subclassId: subclasses.warlock_the_great_old_one.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `The Great Old One favor Kelemvor for judgment.`,
		}),
		subclasses_artificer_alchemist_id_to_deities_mystra_id_relation: await db.createSubclassDeity({
			id: "subclasses-artificer-alchemist-id-to-deities-mystra-id-relation",
			subclassId: subclasses.artificer_alchemist.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alchemists favor Mystra for arcane knowledge.`,
		}),
		subclasses_artificer_alchemist_id_to_deities_dugmaren_brightmantle_id_relation: await db.createSubclassDeity({
			id: "subclasses-artificer-alchemist-id-to-deities-dugmaren-brightmantle-id-relation",
			subclassId: subclasses.artificer_alchemist.id,
			deityId: deities.dugmaren_brightmantle.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alchemists favor Dugmaren Brightmantle for discovery and invention.`,
		}),
		subclasses_artificer_alchemist_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-artificer-alchemist-id-to-deities-tymora-id-relation",
			subclassId: subclasses.artificer_alchemist.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alchemists favor Tymora for luck.`,
		}),
		subclasses_artificer_alchemist_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-artificer-alchemist-id-to-deities-lathander-id-relation",
			subclassId: subclasses.artificer_alchemist.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alchemists favor Lathander for renewal and hope.`,
		}),
		subclasses_artificer_alchemist_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-artificer-alchemist-id-to-deities-selune-id-relation",
			subclassId: subclasses.artificer_alchemist.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alchemists favor Selûne for guidance and navigation.`,
		}),
		subclasses_artificer_battle_smith_id_to_deities_moradin_id_relation: await db.createSubclassDeity({
			id: "subclasses-artificer-battle-smith-id-to-deities-moradin-id-relation",
			subclassId: subclasses.artificer_battle_smith.id,
			deityId: deities.moradin.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Battle Smiths favor Moradin for creation and craftsmanship.`,
		}),
		subclasses_artificer_battle_smith_id_to_deities_tempus_id_relation: await db.createSubclassDeity({
			id: "subclasses-artificer-battle-smith-id-to-deities-tempus-id-relation",
			subclassId: subclasses.artificer_battle_smith.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Battle Smiths favor Tempus for strategy and battle.`,
		}),
		subclasses_barbarian_path_of_the_ancestral_guardian_id_to_deities_jergal_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-path-of-the-ancestral-guardian-id-to-deities-jergal-id-relation",
			subclassId: subclasses.barbarian_path_of_the_ancestral_guardian.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Ancestral Guardians favor Jergal for records and fate.`,
		}),
		subclasses_barbarian_path_of_the_storm_herald_id_to_deities_kossuth_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-path-of-the-storm-herald-id-to-deities-kossuth-id-relation",
			subclassId: subclasses.barbarian_path_of_the_storm_herald.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Storm Heralds favor Kossuth for fire.`,
		}),
		subclasses_barbarian_path_of_the_storm_herald_id_to_deities_istishia_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-path-of-the-storm-herald-id-to-deities-istishia-id-relation",
			subclassId: subclasses.barbarian_path_of_the_storm_herald.id,
			deityId: deities.istishia.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Storm Heralds favor Istishia for water.`,
		}),
		subclasses_barbarian_path_of_the_storm_herald_id_to_deities_akadi_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-path-of-the-storm-herald-id-to-deities-akadi-id-relation",
			subclassId: subclasses.barbarian_path_of_the_storm_herald.id,
			deityId: deities.akadi.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Storm Heralds favor Akadi for air.`,
		}),
		subclasses_barbarian_path_of_the_storm_herald_id_to_deities_grumbar_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-path-of-the-storm-herald-id-to-deities-grumbar-id-relation",
			subclassId: subclasses.barbarian_path_of_the_storm_herald.id,
			deityId: deities.grumbar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Storm Heralds favor Grumbar for earth.`,
		}),
		subclasses_barbarian_path_of_wild_magic_id_to_deities_mystra_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-path-of-wild-magic-id-to-deities-mystra-id-relation",
			subclassId: subclasses.barbarian_path_of_wild_magic.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wild Magic favor Mystra for arcane knowledge.`,
		}),
		subclasses_barbarian_path_of_wild_magic_id_to_deities_beshaba_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-path-of-wild-magic-id-to-deities-beshaba-id-relation",
			subclassId: subclasses.barbarian_path_of_wild_magic.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wild Magic favor Beshaba for misfortune.`,
		}),
		subclasses_barbarian_path_of_the_zealot_id_to_deities_kelemvor_id_relation: await db.createSubclassDeity({
			id: "subclasses-barbarian-path-of-the-zealot-id-to-deities-kelemvor-id-relation",
			subclassId: subclasses.barbarian_path_of_the_zealot.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Zealots favor Kelemvor for judgment.`,
		}),
		subclasses_bard_college_of_creation_id_to_deities_corellon_larethian_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-college-of-creation-id-to-deities-corellon-larethian-id-relation",
			subclassId: subclasses.bard_college_of_creation.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Creation favor Corellon Larethian for elven magic.`,
		}),
		subclasses_bard_college_of_glamour_id_to_deities_sehanine_moonbow_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-college-of-glamour-id-to-deities-sehanine-moonbow-id-relation",
			subclassId: subclasses.bard_college_of_glamour.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Glamour favor Sehanine Moonbow for dreams and journeys.`,
		}),
		subclasses_bard_college_of_spirits_id_to_deities_kelemvor_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-college-of-spirits-id-to-deities-kelemvor-id-relation",
			subclassId: subclasses.bard_college_of_spirits.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Spirits favor Kelemvor for judgment.`,
		}),
		subclasses_bard_college_of_whispers_id_to_deities_shar_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-college-of-whispers-id-to-deities-shar-id-relation",
			subclassId: subclasses.bard_college_of_whispers.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Whispers favor Shar for secrets and darkness.`,
		}),
		subclasses_bard_college_of_whispers_id_to_deities_baravar_cloakshadow_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-college-of-whispers-id-to-deities-baravar-cloakshadow-id-relation",
			subclassId: subclasses.bard_college_of_whispers.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Whispers favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		subclasses_bard_college_of_whispers_id_to_deities_beshaba_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-college-of-whispers-id-to-deities-beshaba-id-relation",
			subclassId: subclasses.bard_college_of_whispers.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Whispers favor Beshaba for misfortune.`,
		}),
		subclasses_bard_college_of_whispers_id_to_deities_myrkul_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-college-of-whispers-id-to-deities-myrkul-id-relation",
			subclassId: subclasses.bard_college_of_whispers.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Whispers favor Myrkul for undeath.`,
		}),
		subclasses_cleric_forge_domain_id_to_deities_moradin_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-forge-domain-id-to-deities-moradin-id-relation",
			subclassId: subclasses.cleric_forge_domain.id,
			deityId: deities.moradin.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Forge Domain favor Moradin for creation and craftsmanship.`,
		}),
		subclasses_cleric_forge_domain_id_to_deities_dugmaren_brightmantle_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-forge-domain-id-to-deities-dugmaren-brightmantle-id-relation",
			subclassId: subclasses.cleric_forge_domain.id,
			deityId: deities.dugmaren_brightmantle.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Forge Domain favor Dugmaren Brightmantle for discovery and invention.`,
		}),
		subclasses_cleric_forge_domain_id_to_deities_mystra_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-forge-domain-id-to-deities-mystra-id-relation",
			subclassId: subclasses.cleric_forge_domain.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Forge Domain favor Mystra for arcane knowledge.`,
		}),
		subclasses_cleric_tempest_domain_id_to_deities_kossuth_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-tempest-domain-id-to-deities-kossuth-id-relation",
			subclassId: subclasses.cleric_tempest_domain.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Tempest Domain favor Kossuth for fire.`,
		}),
		subclasses_cleric_tempest_domain_id_to_deities_istishia_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-tempest-domain-id-to-deities-istishia-id-relation",
			subclassId: subclasses.cleric_tempest_domain.id,
			deityId: deities.istishia.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Tempest Domain favor Istishia for water.`,
		}),
		subclasses_cleric_tempest_domain_id_to_deities_akadi_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-tempest-domain-id-to-deities-akadi-id-relation",
			subclassId: subclasses.cleric_tempest_domain.id,
			deityId: deities.akadi.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Tempest Domain favor Akadi for air.`,
		}),
		subclasses_cleric_tempest_domain_id_to_deities_grumbar_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-tempest-domain-id-to-deities-grumbar-id-relation",
			subclassId: subclasses.cleric_tempest_domain.id,
			deityId: deities.grumbar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Tempest Domain favor Grumbar for earth.`,
		}),
		subclasses_cleric_light_domain_id_to_deities_corellon_larethian_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-light-domain-id-to-deities-corellon-larethian-id-relation",
			subclassId: subclasses.cleric_light_domain.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Light Domain favor Corellon Larethian for elven magic.`,
		}),
		subclasses_cleric_nature_domain_id_to_deities_sehanine_moonbow_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-nature-domain-id-to-deities-sehanine-moonbow-id-relation",
			subclassId: subclasses.cleric_nature_domain.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Nature Domain favor Sehanine Moonbow for dreams and journeys.`,
		}),
		subclasses_cleric_nature_domain_id_to_deities_baervan_wildwanderer_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-nature-domain-id-to-deities-baervan-wildwanderer-id-relation",
			subclassId: subclasses.cleric_nature_domain.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Nature Domain favor Baervan Wildwanderer for forests and travel.`,
		}),
		subclasses_cleric_trickery_domain_id_to_deities_baravar_cloakshadow_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-trickery-domain-id-to-deities-baravar-cloakshadow-id-relation",
			subclassId: subclasses.cleric_trickery_domain.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Trickery Domain favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		subclasses_fighter_battle_master_id_to_deities_bane_id_relation: await db.createSubclassDeity({
			id: "subclasses-fighter-battle-master-id-to-deities-bane-id-relation",
			subclassId: subclasses.fighter_battle_master.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Battle Masters favor Bane for tyranny and conquest.`,
		}),
		subclasses_monk_way_of_the_four_elements_id_to_deities_kossuth_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-the-four-elements-id-to-deities-kossuth-id-relation",
			subclassId: subclasses.monk_way_of_the_four_elements.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Four Elements favor Kossuth for fire.`,
		}),
		subclasses_monk_way_of_the_four_elements_id_to_deities_istishia_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-the-four-elements-id-to-deities-istishia-id-relation",
			subclassId: subclasses.monk_way_of_the_four_elements.id,
			deityId: deities.istishia.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Four Elements favor Istishia for water.`,
		}),
		subclasses_monk_way_of_the_four_elements_id_to_deities_akadi_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-the-four-elements-id-to-deities-akadi-id-relation",
			subclassId: subclasses.monk_way_of_the_four_elements.id,
			deityId: deities.akadi.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Four Elements favor Akadi for air.`,
		}),
		subclasses_monk_way_of_the_four_elements_id_to_deities_grumbar_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-the-four-elements-id-to-deities-grumbar-id-relation",
			subclassId: subclasses.monk_way_of_the_four_elements.id,
			deityId: deities.grumbar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Four Elements favor Grumbar for earth.`,
		}),
		subclasses_paladin_oath_of_the_ancients_id_to_deities_sehanine_moonbow_id_relation: await db.createSubclassDeity({
			id: "subclasses-paladin-oath-of-the-ancients-id-to-deities-sehanine-moonbow-id-relation",
			subclassId: subclasses.paladin_oath_of_the_ancients.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Ancients favor Sehanine Moonbow for dreams and journeys.`,
		}),
		subclasses_paladin_oath_of_the_ancients_id_to_deities_baervan_wildwanderer_id_relation: await db.createSubclassDeity({
			id: "subclasses-paladin-oath-of-the-ancients-id-to-deities-baervan-wildwanderer-id-relation",
			subclassId: subclasses.paladin_oath_of_the_ancients.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Ancients favor Baervan Wildwanderer for forests and travel.`,
		}),
		subclasses_paladin_oath_of_the_ancients_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-paladin-oath-of-the-ancients-id-to-deities-selune-id-relation",
			subclassId: subclasses.paladin_oath_of_the_ancients.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Ancients favor Selûne for navigation and wanderers.`,
		}),
		subclasses_ranger_gloom_stalker_id_to_deities_shar_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-gloom-stalker-id-to-deities-shar-id-relation",
			subclassId: subclasses.ranger_gloom_stalker.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Gloom Stalkers favor Shar for secrets and darkness.`,
		}),
		subclasses_ranger_gloom_stalker_id_to_deities_beshaba_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-gloom-stalker-id-to-deities-beshaba-id-relation",
			subclassId: subclasses.ranger_gloom_stalker.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Gloom Stalkers favor Beshaba for misfortune.`,
		}),
		subclasses_ranger_gloom_stalker_id_to_deities_myrkul_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-gloom-stalker-id-to-deities-myrkul-id-relation",
			subclassId: subclasses.ranger_gloom_stalker.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Gloom Stalkers favor Myrkul for undeath.`,
		}),
		subclasses_ranger_gloom_stalker_id_to_deities_kelemvor_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-gloom-stalker-id-to-deities-kelemvor-id-relation",
			subclassId: subclasses.ranger_gloom_stalker.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Gloom Stalkers favor Kelemvor for judgment.`,
		}),
		subclasses_rogue_arcane_trickster_id_to_deities_mystra_id_relation: await db.createSubclassDeity({
			id: "subclasses-rogue-arcane-trickster-id-to-deities-mystra-id-relation",
			subclassId: subclasses.rogue_arcane_trickster.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Arcane Tricksters favor Mystra for arcane knowledge.`,
		}),
		subclasses_rogue_arcane_trickster_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-rogue-arcane-trickster-id-to-deities-selune-id-relation",
			subclassId: subclasses.rogue_arcane_trickster.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Arcane Tricksters favor Selûne for guidance and navigation.`,
		}),
		subclasses_rogue_arcane_trickster_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-rogue-arcane-trickster-id-to-deities-lathander-id-relation",
			subclassId: subclasses.rogue_arcane_trickster.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Arcane Tricksters favor Lathander for renewal and hope.`,
		}),
		subclasses_sorcerer_divine_soul_id_to_deities_corellon_larethian_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-divine-soul-id-to-deities-corellon-larethian-id-relation",
			subclassId: subclasses.sorcerer_divine_soul.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Divine Soul favor Corellon Larethian for elven magic.`,
		}),
		subclasses_warlock_the_archfey_id_to_deities_sehanine_moonbow_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-archfey-id-to-deities-sehanine-moonbow-id-relation",
			subclassId: subclasses.warlock_the_archfey.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Archfey favor Sehanine Moonbow for dreams and journeys.`,
		}),
		subclasses_warlock_the_archfey_id_to_deities_corellon_larethian_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-archfey-id-to-deities-corellon-larethian-id-relation",
			subclassId: subclasses.warlock_the_archfey.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Archfey favor Corellon Larethian for elven magic.`,
		}),
		subclasses_warlock_the_archfey_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-archfey-id-to-deities-tymora-id-relation",
			subclassId: subclasses.warlock_the_archfey.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Archfey favor Tymora for luck.`,
		}),
		subclasses_warlock_the_archfey_id_to_deities_selune_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-archfey-id-to-deities-selune-id-relation",
			subclassId: subclasses.warlock_the_archfey.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Archfey favor Selûne for guidance and navigation.`,
		}),
		subclasses_warlock_the_archfey_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-archfey-id-to-deities-lathander-id-relation",
			subclassId: subclasses.warlock_the_archfey.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Archfey favor Lathander for renewal and hope.`,
		}),
		subclasses_wizard_school_of_abjuration_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-school-of-abjuration-id-to-deities-lathander-id-relation",
			subclassId: subclasses.wizard_school_of_abjuration.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Abjuration favor Lathander for renewal and hope.`,
		}),
		subclasses_wizard_school_of_enchantment_id_to_deities_baravar_cloakshadow_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-school-of-enchantment-id-to-deities-baravar-cloakshadow-id-relation",
			subclassId: subclasses.wizard_school_of_enchantment.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Enchantment favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		subclasses_wizard_school_of_necromancy_id_to_deities_myrkul_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-school-of-necromancy-id-to-deities-myrkul-id-relation",
			subclassId: subclasses.wizard_school_of_necromancy.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Necromancy favor Myrkul for undeath.`,
		}),
		subclasses_wizard_school_of_necromancy_id_to_deities_kelemvor_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-school-of-necromancy-id-to-deities-kelemvor-id-relation",
			subclassId: subclasses.wizard_school_of_necromancy.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Necromancy favor Kelemvor for judgment.`,
		}),
		subclasses_wizard_school_of_necromancy_id_to_deities_shar_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-school-of-necromancy-id-to-deities-shar-id-relation",
			subclassId: subclasses.wizard_school_of_necromancy.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Necromancy favor Shar for secrets and darkness.`,
		}),
		subclasses_wizard_school_of_necromancy_id_to_deities_beshaba_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-school-of-necromancy-id-to-deities-beshaba-id-relation",
			subclassId: subclasses.wizard_school_of_necromancy.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Necromancy favor Beshaba for misfortune.`,
		}),
		subclasses_wizard_school_of_transmutation_id_to_deities_dugmaren_brightmantle_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-school-of-transmutation-id-to-deities-dugmaren-brightmantle-id-relation",
			subclassId: subclasses.wizard_school_of_transmutation.id,
			deityId: deities.dugmaren_brightmantle.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Transmutation favor Dugmaren Brightmantle for discovery and invention.`,
		}),
		subclasses_tactician_grandmaster_id_to_deities_tempus_id_relation: await db.createSubclassDeity({
			id: "subclasses-tactician-grandmaster-id-to-deities-tempus-id-relation",
			subclassId: subclasses.tactician_grandmaster.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Grandmasters favor Tempus for strategy and battle.`,
		}),
		subclasses_tactician_grandmaster_id_to_deities_jergal_id_relation: await db.createSubclassDeity({
			id: "subclasses-tactician-grandmaster-id-to-deities-jergal-id-relation",
			subclassId: subclasses.tactician_grandmaster.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Grandmasters favor Jergal for records and fate.`,
		}),
		subclasses_tactician_grandmaster_id_to_deities_tymora_id_relation: await db.createSubclassDeity({
			id: "subclasses-tactician-grandmaster-id-to-deities-tymora-id-relation",
			subclassId: subclasses.tactician_grandmaster.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Grandmasters favor Tymora for luck.`,
		}),
		subclasses_tactician_grandmaster_id_to_deities_lathander_id_relation: await db.createSubclassDeity({
			id: "subclasses-tactician-grandmaster-id-to-deities-lathander-id-relation",
			subclassId: subclasses.tactician_grandmaster.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Grandmasters favor Lathander for renewal and hope.`,
		}),
		subclasses_tactician_grandmaster_id_to_deities_mystra_id_relation: await db.createSubclassDeity({
			id: "subclasses-tactician-grandmaster-id-to-deities-mystra-id-relation",
			subclassId: subclasses.tactician_grandmaster.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Grandmasters favor Mystra for arcane knowledge.`,
		}),
		subclasses_ranger_gloom_stalker_id_to_deities_the_raven_queen_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-gloom-stalker-id-to-deities-the-raven-queen-id-relation",
			subclassId: subclasses.ranger_gloom_stalker.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Gloom Stalkers favor The Raven Queen for her connection to fate and death.`,
		}),
		subclasses_ranger_gloom_stalker_id_to_deities_baravar_cloakshadow_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-gloom-stalker-id-to-deities-baravar-cloakshadow-id-relation",
			subclassId: subclasses.ranger_gloom_stalker.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Gloom Stalkers favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		subclasses_ranger_hunter_id_to_deities_solonor_thelandira_id_relation: await db.createSubclassDeity({
			id: "subclasses-ranger-hunter-id-to-deities-solonor-thelandira-id-relation",
			subclassId: subclasses.ranger_hunter.id,
			deityId: deities.solonor_thelandira.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Hunters favor Solonor Thelandira for archery and hunting.`,
		}),
		subclasses_warlock_the_archfey_id_to_deities_mystra_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-archfey-id-to-deities-mystra-id-relation",
			subclassId: subclasses.warlock_the_archfey.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Archfey favor Mystra for arcane knowledge.`,
		}),
		subclasses_warlock_the_great_old_one_id_to_deities_the_raven_queen_id_relation: await db.createSubclassDeity({
			id: "subclasses-warlock-the-great-old-one-id-to-deities-the-raven-queen-id-relation",
			subclassId: subclasses.warlock_the_great_old_one.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `The Great Old One favor The Raven Queen for her connection to fate and death.`,
		}),
		subclasses_cleric_death_domain_id_to_deities_the_raven_queen_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-death-domain-id-to-deities-the-raven-queen-id-relation",
			subclassId: subclasses.cleric_death_domain.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Death Domain favor The Raven Queen for her connection to fate and death.`,
		}),
		subclasses_cleric_death_domain_id_to_deities_urogalan_id_relation: await db.createSubclassDeity({
			id: "subclasses-cleric-death-domain-id-to-deities-urogalan-id-relation",
			subclassId: subclasses.cleric_death_domain.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Death Domain favor Urogalan for death and the underworld.`,
		}),
		subclasses_bard_college_of_glamour_id_to_deities_hanali_celanil_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-college-of-glamour-id-to-deities-hanali-celanil-id-relation",
			subclassId: subclasses.bard_college_of_glamour.id,
			deityId: deities.hanali_celanil.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Glamour favor Hanali Celanil for beauty and love.`,
		}),
		subclasses_bard_college_of_spirits_id_to_deities_the_raven_queen_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-college-of-spirits-id-to-deities-the-raven-queen-id-relation",
			subclassId: subclasses.bard_college_of_spirits.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Spirits favor The Raven Queen for her connection to fate and death.`,
		}),
		subclasses_bard_college_of_spirits_id_to_deities_urogalan_id_relation: await db.createSubclassDeity({
			id: "subclasses-bard-college-of-spirits-id-to-deities-urogalan-id-relation",
			subclassId: subclasses.bard_college_of_spirits.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Spirits favor Urogalan for death and the underworld.`,
		}),
		subclasses_druid_circle_of_spores_id_to_deities_urogalan_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-spores-id-to-deities-urogalan-id-relation",
			subclassId: subclasses.druid_circle_of_spores.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Circle of Spores favor Urogalan for his connection to death and the underworld.`,
		}),
		subclasses_druid_circle_of_spores_id_to_deities_the_raven_queen_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-spores-id-to-deities-the-raven-queen-id-relation",
			subclassId: subclasses.druid_circle_of_spores.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Circle of Spores favor The Raven Queen for fate and death.`,
		}),
		subclasses_druid_circle_of_spores_id_to_deities_myrkul_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-spores-id-to-deities-myrkul-id-relation",
			subclassId: subclasses.druid_circle_of_spores.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Circle of Spores favor Myrkul for death.`,
		}),
		subclasses_druid_circle_of_spores_id_to_deities_jergal_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-spores-id-to-deities-jergal-id-relation",
			subclassId: subclasses.druid_circle_of_spores.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Circle of Spores favor Jergal for records of the dead.`,
		}),
		subclasses_druid_circle_of_spores_id_to_deities_shar_id_relation: await db.createSubclassDeity({
			id: "subclasses-druid-circle-of-spores-id-to-deities-shar-id-relation",
			subclassId: subclasses.druid_circle_of_spores.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Circle of Spores favor Shar for secrets and darkness.`,
		}),
		subclasses_monk_way_of_the_long_death_id_to_deities_the_raven_queen_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-the-long-death-id-to-deities-the-raven-queen-id-relation",
			subclassId: subclasses.monk_way_of_the_long_death.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Long Death favor The Raven Queen for her connection to fate and death.`,
		}),
		subclasses_monk_way_of_the_long_death_id_to_deities_urogalan_id_relation: await db.createSubclassDeity({
			id: "subclasses-monk-way-of-the-long-death-id-to-deities-urogalan-id-relation",
			subclassId: subclasses.monk_way_of_the_long_death.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Long Death favor Urogalan for death.`,
		}),
		subclasses_sorcerer_shadow_magic_id_to_deities_shar_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-shadow-magic-id-to-deities-shar-id-relation",
			subclassId: subclasses.sorcerer_shadow_magic.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Shadow Magic favor Shar for her domains of darkness and secrets.`,
		}),
		subclasses_sorcerer_shadow_magic_id_to_deities_the_raven_queen_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-shadow-magic-id-to-deities-the-raven-queen-id-relation",
			subclassId: subclasses.sorcerer_shadow_magic.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Shadow Magic favor The Raven Queen for fate and death.`,
		}),
		subclasses_sorcerer_shadow_magic_id_to_deities_myrkul_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-shadow-magic-id-to-deities-myrkul-id-relation",
			subclassId: subclasses.sorcerer_shadow_magic.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Shadow Magic favor Myrkul for death.`,
		}),
		subclasses_sorcerer_shadow_magic_id_to_deities_jergal_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-shadow-magic-id-to-deities-jergal-id-relation",
			subclassId: subclasses.sorcerer_shadow_magic.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Shadow Magic favor Jergal for records of the dead.`,
		}),
		subclasses_sorcerer_shadow_magic_id_to_deities_urogalan_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-shadow-magic-id-to-deities-urogalan-id-relation",
			subclassId: subclasses.sorcerer_shadow_magic.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Shadow Magic favor Urogalan for death and the underworld.`,
		}),
		subclasses_sorcerer_divine_soul_id_to_deities_sehanine_moonbow_id_relation: await db.createSubclassDeity({
			id: "subclasses-sorcerer-divine-soul-id-to-deities-sehanine-moonbow-id-relation",
			subclassId: subclasses.sorcerer_divine_soul.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Divine Soul favor Sehanine Moonbow for lunar guidance.`,
		}),
		subclasses_wizard_school_of_necromancy_id_to_deities_the_raven_queen_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-school-of-necromancy-id-to-deities-the-raven-queen-id-relation",
			subclassId: subclasses.wizard_school_of_necromancy.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Necromancy favor The Raven Queen for her connection to fate and death.`,
		}),
		subclasses_wizard_school_of_necromancy_id_to_deities_urogalan_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-school-of-necromancy-id-to-deities-urogalan-id-relation",
			subclassId: subclasses.wizard_school_of_necromancy.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Necromancy favor Urogalan for death and the underworld.`,
		}),
		subclasses_wizard_school_of_enchantment_id_to_deities_hanali_celanil_id_relation: await db.createSubclassDeity({
			id: "subclasses-wizard-school-of-enchantment-id-to-deities-hanali-celanil-id-relation",
			subclassId: subclasses.wizard_school_of_enchantment.id,
			deityId: deities.hanali_celanil.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Enchantment favor Hanali Celanil for her domains of beauty and love.`,
		}),
	}
}