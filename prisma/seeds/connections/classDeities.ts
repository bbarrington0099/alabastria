import { Prisma, DeityRecommendationType } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Classes, Deities } from "../index";

type ClassDeityPayload = Prisma.ClassDeityGetPayload<{}>
export interface ClassDeity {
	classes_fighter_id_to_deities_tempus_id_relation: ClassDeityPayload
	classes_fighter_id_to_deities_clangeddin_silverbeard_id_relation: ClassDeityPayload
	classes_fighter_id_to_deities_bahamut_id_relation: ClassDeityPayload
	classes_fighter_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_fighter_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_fighter_id_to_deities_mystra_id_relation: ClassDeityPayload
	classes_fighter_id_to_deities_corellon_larethian_id_relation: ClassDeityPayload
	classes_fighter_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_mystra_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_corellon_larethian_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_kossuth_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_sehanine_moonbow_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_jergal_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_berronar_truesilver_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_yondalla_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_tempus_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_clangeddin_silverbeard_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_bane_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_kelemvor_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_myrkul_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_jergal_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_shar_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_beshaba_id_relation: ClassDeityPayload
	classes_rogue_id_to_deities_shar_id_relation: ClassDeityPayload
	classes_rogue_id_to_deities_baravar_cloakshadow_id_relation: ClassDeityPayload
	classes_rogue_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_rogue_id_to_deities_beshaba_id_relation: ClassDeityPayload
	classes_rogue_id_to_deities_vergadain_id_relation: ClassDeityPayload
	classes_rogue_id_to_deities_bane_id_relation: ClassDeityPayload
	classes_rogue_id_to_deities_myrkul_id_relation: ClassDeityPayload
	classes_rogue_id_to_deities_kelemvor_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_sehanine_moonbow_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_baervan_wildwanderer_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_tempus_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_clangeddin_silverbeard_id_relation: ClassDeityPayload
	classes_paladin_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_paladin_id_to_deities_bahamut_id_relation: ClassDeityPayload
	classes_paladin_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_paladin_id_to_deities_tempus_id_relation: ClassDeityPayload
	classes_paladin_id_to_deities_bane_id_relation: ClassDeityPayload
	classes_paladin_id_to_deities_kelemvor_id_relation: ClassDeityPayload
	classes_paladin_id_to_deities_vergadain_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_gruumsh_one_eye_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_tempus_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_luthic_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_bane_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_sehanine_moonbow_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_baervan_wildwanderer_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_mystra_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_jergal_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_tempus_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_sehanine_moonbow_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_baervan_wildwanderer_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_grumbar_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_istishia_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_akadi_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_kossuth_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_mystra_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_jergal_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_shar_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_baravar_cloakshadow_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_beshaba_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_myrkul_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_kelemvor_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_bahamut_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_tiamat_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_mystra_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_beshaba_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_asmodeus_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_bane_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_myrkul_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_shar_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_beshaba_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_jergal_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_kelemvor_id_relation: ClassDeityPayload
	classes_artificer_id_to_deities_mystra_id_relation: ClassDeityPayload
	classes_artificer_id_to_deities_dugmaren_brightmantle_id_relation: ClassDeityPayload
	classes_artificer_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_artificer_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_artificer_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_artificer_id_to_deities_moradin_id_relation: ClassDeityPayload
	classes_artificer_id_to_deities_tempus_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_jergal_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_kossuth_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_istishia_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_akadi_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_grumbar_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_mystra_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_beshaba_id_relation: ClassDeityPayload
	classes_barbarian_id_to_deities_kelemvor_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_corellon_larethian_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_sehanine_moonbow_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_kelemvor_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_shar_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_baravar_cloakshadow_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_beshaba_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_myrkul_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_moradin_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_dugmaren_brightmantle_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_mystra_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_kossuth_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_istishia_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_akadi_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_grumbar_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_corellon_larethian_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_sehanine_moonbow_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_baervan_wildwanderer_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_baravar_cloakshadow_id_relation: ClassDeityPayload
	classes_fighter_id_to_deities_bane_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_kossuth_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_istishia_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_akadi_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_grumbar_id_relation: ClassDeityPayload
	classes_paladin_id_to_deities_sehanine_moonbow_id_relation: ClassDeityPayload
	classes_paladin_id_to_deities_baervan_wildwanderer_id_relation: ClassDeityPayload
	classes_paladin_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_shar_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_beshaba_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_myrkul_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_kelemvor_id_relation: ClassDeityPayload
	classes_rogue_id_to_deities_mystra_id_relation: ClassDeityPayload
	classes_rogue_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_rogue_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_corellon_larethian_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_sehanine_moonbow_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_corellon_larethian_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_selune_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_baravar_cloakshadow_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_myrkul_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_kelemvor_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_shar_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_beshaba_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_dugmaren_brightmantle_id_relation: ClassDeityPayload
	classes_tactician_id_to_deities_tempus_id_relation: ClassDeityPayload
	classes_tactician_id_to_deities_jergal_id_relation: ClassDeityPayload
	classes_tactician_id_to_deities_tymora_id_relation: ClassDeityPayload
	classes_tactician_id_to_deities_lathander_id_relation: ClassDeityPayload
	classes_tactician_id_to_deities_mystra_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_the_raven_queen_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_baravar_cloakshadow_id_relation: ClassDeityPayload
	classes_ranger_id_to_deities_solonor_thelandira_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_mystra_id_relation: ClassDeityPayload
	classes_warlock_id_to_deities_the_raven_queen_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_the_raven_queen_id_relation: ClassDeityPayload
	classes_cleric_id_to_deities_urogalan_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_hanali_celanil_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_the_raven_queen_id_relation: ClassDeityPayload
	classes_bard_id_to_deities_urogalan_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_urogalan_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_the_raven_queen_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_myrkul_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_jergal_id_relation: ClassDeityPayload
	classes_druid_id_to_deities_shar_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_the_raven_queen_id_relation: ClassDeityPayload
	classes_monk_id_to_deities_urogalan_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_shar_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_the_raven_queen_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_myrkul_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_jergal_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_urogalan_id_relation: ClassDeityPayload
	classes_sorcerer_id_to_deities_sehanine_moonbow_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_the_raven_queen_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_urogalan_id_relation: ClassDeityPayload
	classes_wizard_id_to_deities_hanali_celanil_id_relation: ClassDeityPayload
}

interface ClassDeityParams {
	classes: Classes;
	deities: Deities
}
export async function setClassDeity(params: ClassDeityParams): Promise<ClassDeity> {
	const { classes, deities } = params;
	return {
		classes_fighter_id_to_deities_tempus_id_relation: await db.createClassDeity({
			id: "classes-fighter-id-to-deities-tempus-id-relation",
			classId: classes.fighter.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Fighters favor Tempus for strategy and battle.`,
		}),
		classes_fighter_id_to_deities_clangeddin_silverbeard_id_relation: await db.createClassDeity({
			id: "classes-fighter-id-to-deities-clangeddin-silverbeard-id-relation",
			classId: classes.fighter.id,
			deityId: deities.clangeddin_silverbeard.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Fighters favor Clangeddin Silverbeard for honor and courage.`,
		}),
		classes_fighter_id_to_deities_bahamut_id_relation: await db.createClassDeity({
			id: "classes-fighter-id-to-deities-bahamut-id-relation",
			classId: classes.fighter.id,
			deityId: deities.bahamut.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Fighters favor Bahamut for justice and protection.`,
		}),
		classes_fighter_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-fighter-id-to-deities-tymora-id-relation",
			classId: classes.fighter.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Fighters favor Tymora for luck in battle.`,
		}),
		classes_fighter_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-fighter-id-to-deities-lathander-id-relation",
			classId: classes.fighter.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Fighters favor Lathander for renewal and hope.`,
		}),
		classes_fighter_id_to_deities_mystra_id_relation: await db.createClassDeity({
			id: "classes-fighter-id-to-deities-mystra-id-relation",
			classId: classes.fighter.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Fighters favor Mystra for arcane knowledge.`,
		}),
		classes_fighter_id_to_deities_corellon_larethian_id_relation: await db.createClassDeity({
			id: "classes-fighter-id-to-deities-corellon-larethian-id-relation",
			classId: classes.fighter.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Fighters favor Corellon Larethian for elven magic.`,
		}),
		classes_fighter_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-fighter-id-to-deities-selune-id-relation",
			classId: classes.fighter.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Fighters favor Selûne for guidance and navigation.`,
		}),
		classes_wizard_id_to_deities_mystra_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-mystra-id-relation",
			classId: classes.wizard.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor Mystra for arcane knowledge.`,
		}),
		classes_wizard_id_to_deities_corellon_larethian_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-corellon-larethian-id-relation",
			classId: classes.wizard.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor Corellon Larethian for elven magic.`,
		}),
		classes_wizard_id_to_deities_kossuth_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-kossuth-id-relation",
			classId: classes.wizard.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor Kossuth for fire magic.`,
		}),
		classes_wizard_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-tymora-id-relation",
			classId: classes.wizard.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Wizards favor Tymora for luck.`,
		}),
		classes_wizard_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-selune-id-relation",
			classId: classes.wizard.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Wizards favor Selûne for guidance and navigation.`,
		}),
		classes_wizard_id_to_deities_sehanine_moonbow_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-sehanine-moonbow-id-relation",
			classId: classes.wizard.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor Sehanine Moonbow for dreams and journeys.`,
		}),
		classes_wizard_id_to_deities_jergal_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-jergal-id-relation",
			classId: classes.wizard.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor Jergal for records and fate.`,
		}),
		classes_cleric_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-lathander-id-relation",
			classId: classes.cleric.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Lathander for renewal and hope.`,
		}),
		classes_cleric_id_to_deities_berronar_truesilver_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-berronar-truesilver-id-relation",
			classId: classes.cleric.id,
			deityId: deities.berronar_truesilver.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Berronar Truesilver for family protection.`,
		}),
		classes_cleric_id_to_deities_yondalla_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-yondalla-id-relation",
			classId: classes.cleric.id,
			deityId: deities.yondalla.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Yondalla for fertility and protection.`,
		}),
		classes_cleric_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-tymora-id-relation",
			classId: classes.cleric.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Clerics favor Tymora for luck.`,
		}),
		classes_cleric_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-selune-id-relation",
			classId: classes.cleric.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Clerics favor Selûne for guidance and navigation.`,
		}),
		classes_cleric_id_to_deities_tempus_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-tempus-id-relation",
			classId: classes.cleric.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Tempus for strategy and battle.`,
		}),
		classes_cleric_id_to_deities_clangeddin_silverbeard_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-clangeddin-silverbeard-id-relation",
			classId: classes.cleric.id,
			deityId: deities.clangeddin_silverbeard.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Clangeddin Silverbeard for honor and courage.`,
		}),
		classes_cleric_id_to_deities_bane_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-bane-id-relation",
			classId: classes.cleric.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Bane for tyranny and conquest.`,
		}),
		classes_cleric_id_to_deities_kelemvor_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-kelemvor-id-relation",
			classId: classes.cleric.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Kelemvor for judgment.`,
		}),
		classes_cleric_id_to_deities_myrkul_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-myrkul-id-relation",
			classId: classes.cleric.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Myrkul for undeath.`,
		}),
		classes_cleric_id_to_deities_jergal_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-jergal-id-relation",
			classId: classes.cleric.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Jergal for records of the dead.`,
		}),
		classes_cleric_id_to_deities_shar_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-shar-id-relation",
			classId: classes.cleric.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Clerics favor Shar for secrets and darkness.`,
		}),
		classes_cleric_id_to_deities_beshaba_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-beshaba-id-relation",
			classId: classes.cleric.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Clerics favor Beshaba for misfortune.`,
		}),
		classes_rogue_id_to_deities_shar_id_relation: await db.createClassDeity({
			id: "classes-rogue-id-to-deities-shar-id-relation",
			classId: classes.rogue.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rogues favor Shar for secrets and darkness.`,
		}),
		classes_rogue_id_to_deities_baravar_cloakshadow_id_relation: await db.createClassDeity({
			id: "classes-rogue-id-to-deities-baravar-cloakshadow-id-relation",
			classId: classes.rogue.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rogues favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		classes_rogue_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-rogue-id-to-deities-tymora-id-relation",
			classId: classes.rogue.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rogues favor Tymora for luck.`,
		}),
		classes_rogue_id_to_deities_beshaba_id_relation: await db.createClassDeity({
			id: "classes-rogue-id-to-deities-beshaba-id-relation",
			classId: classes.rogue.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Rogues favor Beshaba for misfortune.`,
		}),
		classes_rogue_id_to_deities_vergadain_id_relation: await db.createClassDeity({
			id: "classes-rogue-id-to-deities-vergadain-id-relation",
			classId: classes.rogue.id,
			deityId: deities.vergadain.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Rogues favor Vergadain for trade and wealth.`,
		}),
		classes_rogue_id_to_deities_bane_id_relation: await db.createClassDeity({
			id: "classes-rogue-id-to-deities-bane-id-relation",
			classId: classes.rogue.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rogues favor Bane for tyranny and conquest.`,
		}),
		classes_rogue_id_to_deities_myrkul_id_relation: await db.createClassDeity({
			id: "classes-rogue-id-to-deities-myrkul-id-relation",
			classId: classes.rogue.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rogues favor Myrkul for undeath.`,
		}),
		classes_rogue_id_to_deities_kelemvor_id_relation: await db.createClassDeity({
			id: "classes-rogue-id-to-deities-kelemvor-id-relation",
			classId: classes.rogue.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Rogues favor Kelemvor for judgment.`,
		}),
		classes_ranger_id_to_deities_sehanine_moonbow_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-sehanine-moonbow-id-relation",
			classId: classes.ranger.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rangers favor Sehanine Moonbow for dreams and journeys.`,
		}),
		classes_ranger_id_to_deities_baervan_wildwanderer_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-baervan-wildwanderer-id-relation",
			classId: classes.ranger.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rangers favor Baervan Wildwanderer for forests and travel.`,
		}),
		classes_ranger_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-selune-id-relation",
			classId: classes.ranger.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rangers favor Selûne for navigation and wanderers.`,
		}),
		classes_ranger_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-tymora-id-relation",
			classId: classes.ranger.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Rangers favor Tymora for luck.`,
		}),
		classes_ranger_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-lathander-id-relation",
			classId: classes.ranger.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Rangers favor Lathander for renewal and hope.`,
		}),
		classes_ranger_id_to_deities_tempus_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-tempus-id-relation",
			classId: classes.ranger.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rangers favor Tempus for strategy and battle.`,
		}),
		classes_ranger_id_to_deities_clangeddin_silverbeard_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-clangeddin-silverbeard-id-relation",
			classId: classes.ranger.id,
			deityId: deities.clangeddin_silverbeard.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rangers favor Clangeddin Silverbeard for honor and courage.`,
		}),
		classes_paladin_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-paladin-id-to-deities-lathander-id-relation",
			classId: classes.paladin.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Paladins favor Lathander for renewal and hope.`,
		}),
		classes_paladin_id_to_deities_bahamut_id_relation: await db.createClassDeity({
			id: "classes-paladin-id-to-deities-bahamut-id-relation",
			classId: classes.paladin.id,
			deityId: deities.bahamut.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Paladins favor Bahamut for justice and protection.`,
		}),
		classes_paladin_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-paladin-id-to-deities-tymora-id-relation",
			classId: classes.paladin.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Paladins favor Tymora for good fortune.`,
		}),
		classes_paladin_id_to_deities_tempus_id_relation: await db.createClassDeity({
			id: "classes-paladin-id-to-deities-tempus-id-relation",
			classId: classes.paladin.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Paladins favor Tempus for strategy and battle.`,
		}),
		classes_paladin_id_to_deities_bane_id_relation: await db.createClassDeity({
			id: "classes-paladin-id-to-deities-bane-id-relation",
			classId: classes.paladin.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Paladins favor Bane for tyranny and conquest.`,
		}),
		classes_paladin_id_to_deities_kelemvor_id_relation: await db.createClassDeity({
			id: "classes-paladin-id-to-deities-kelemvor-id-relation",
			classId: classes.paladin.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Paladins favor Kelemvor for judgment.`,
		}),
		classes_paladin_id_to_deities_vergadain_id_relation: await db.createClassDeity({
			id: "classes-paladin-id-to-deities-vergadain-id-relation",
			classId: classes.paladin.id,
			deityId: deities.vergadain.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Paladins favor Vergadain for wealth and commerce.`,
		}),
		classes_barbarian_id_to_deities_gruumsh_one_eye_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-gruumsh-one-eye-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.gruumsh_one_eye.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Gruumsh One-Eye for destruction and conquest.`,
		}),
		classes_barbarian_id_to_deities_tempus_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-tempus-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Tempus for strategy and battle.`,
		}),
		classes_barbarian_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-tymora-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Tymora for luck.`,
		}),
		classes_barbarian_id_to_deities_luthic_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-luthic-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.luthic.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Barbarians favor Luthic for protection and fertility.`,
		}),
		classes_barbarian_id_to_deities_bane_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-bane-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Barbarians favor Bane for tyranny and conquest.`,
		}),
		classes_barbarian_id_to_deities_sehanine_moonbow_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-sehanine-moonbow-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Sehanine Moonbow for dreams and journeys.`,
		}),
		classes_barbarian_id_to_deities_baervan_wildwanderer_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-baervan-wildwanderer-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Baervan Wildwanderer for forests and travel.`,
		}),
		classes_barbarian_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-selune-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Selûne for navigation and wanderers.`,
		}),
		classes_barbarian_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-lathander-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Barbarians favor Lathander for renewal and hope.`,
		}),
		classes_bard_id_to_deities_mystra_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-mystra-id-relation",
			classId: classes.bard.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor Mystra for arcane knowledge.`,
		}),
		classes_bard_id_to_deities_jergal_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-jergal-id-relation",
			classId: classes.bard.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor Jergal for records and fate.`,
		}),
		classes_bard_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-tymora-id-relation",
			classId: classes.bard.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor Tymora for luck.`,
		}),
		classes_bard_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-selune-id-relation",
			classId: classes.bard.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bards favor Selûne for guidance and navigation.`,
		}),
		classes_bard_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-lathander-id-relation",
			classId: classes.bard.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bards favor Lathander for renewal and hope.`,
		}),
		classes_bard_id_to_deities_tempus_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-tempus-id-relation",
			classId: classes.bard.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor Tempus for strategy and battle.`,
		}),
		classes_druid_id_to_deities_sehanine_moonbow_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-sehanine-moonbow-id-relation",
			classId: classes.druid.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Druids favor Sehanine Moonbow for dreams and journeys.`,
		}),
		classes_druid_id_to_deities_baervan_wildwanderer_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-baervan-wildwanderer-id-relation",
			classId: classes.druid.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Druids favor Baervan Wildwanderer for forests and travel.`,
		}),
		classes_druid_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-selune-id-relation",
			classId: classes.druid.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Druids favor Selûne for navigation and wanderers.`,
		}),
		classes_druid_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-tymora-id-relation",
			classId: classes.druid.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Druids favor Tymora for luck.`,
		}),
		classes_druid_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-lathander-id-relation",
			classId: classes.druid.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Druids favor Lathander for renewal and hope.`,
		}),
		classes_druid_id_to_deities_grumbar_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-grumbar-id-relation",
			classId: classes.druid.id,
			deityId: deities.grumbar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Druids favor Grumbar for earth.`,
		}),
		classes_druid_id_to_deities_istishia_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-istishia-id-relation",
			classId: classes.druid.id,
			deityId: deities.istishia.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Druids favor Istishia for water.`,
		}),
		classes_druid_id_to_deities_akadi_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-akadi-id-relation",
			classId: classes.druid.id,
			deityId: deities.akadi.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Druids favor Akadi for air and wind.`,
		}),
		classes_druid_id_to_deities_kossuth_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-kossuth-id-relation",
			classId: classes.druid.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Druids favor Kossuth for fire.`,
		}),
		classes_monk_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-lathander-id-relation",
			classId: classes.monk.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Monks favor Lathander for renewal and hope.`,
		}),
		classes_monk_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-tymora-id-relation",
			classId: classes.monk.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Monks favor Tymora for luck.`,
		}),
		classes_monk_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-selune-id-relation",
			classId: classes.monk.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Monks favor Selûne for navigation and wanderers.`,
		}),
		classes_monk_id_to_deities_mystra_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-mystra-id-relation",
			classId: classes.monk.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Monks favor Mystra for arcane knowledge.`,
		}),
		classes_monk_id_to_deities_jergal_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-jergal-id-relation",
			classId: classes.monk.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Monks favor Jergal for records and fate.`,
		}),
		classes_monk_id_to_deities_shar_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-shar-id-relation",
			classId: classes.monk.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Monks favor Shar for secrets and darkness.`,
		}),
		classes_monk_id_to_deities_baravar_cloakshadow_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-baravar-cloakshadow-id-relation",
			classId: classes.monk.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Monks favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		classes_monk_id_to_deities_beshaba_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-beshaba-id-relation",
			classId: classes.monk.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Monks favor Beshaba for misfortune.`,
		}),
		classes_monk_id_to_deities_myrkul_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-myrkul-id-relation",
			classId: classes.monk.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Monks favor Myrkul for undeath.`,
		}),
		classes_monk_id_to_deities_kelemvor_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-kelemvor-id-relation",
			classId: classes.monk.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Monks favor Kelemvor for judgment.`,
		}),
		classes_sorcerer_id_to_deities_bahamut_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-bahamut-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.bahamut.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Sorcerers favor Bahamut for their dragon heritage.`,
		}),
		classes_sorcerer_id_to_deities_tiamat_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-tiamat-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.tiamat.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Sorcerers favor Tiamat for their dragon heritage.`,
		}),
		classes_sorcerer_id_to_deities_mystra_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-mystra-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Sorcerers favor Mystra for arcane knowledge.`,
		}),
		classes_sorcerer_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-tymora-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Sorcerers favor Tymora for luck.`,
		}),
		classes_sorcerer_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-selune-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Sorcerers favor Selûne for guidance and navigation.`,
		}),
		classes_sorcerer_id_to_deities_beshaba_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-beshaba-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Sorcerers favor Beshaba for misfortune.`,
		}),
		classes_sorcerer_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-lathander-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Sorcerers favor Lathander for renewal and hope.`,
		}),
		classes_warlock_id_to_deities_asmodeus_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-asmodeus-id-relation",
			classId: classes.warlock.id,
			deityId: deities.asmodeus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Warlocks favor Asmodeus for their patron.`,
		}),
		classes_warlock_id_to_deities_bane_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-bane-id-relation",
			classId: classes.warlock.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Warlocks favor Bane for tyranny and conquest.`,
		}),
		classes_warlock_id_to_deities_myrkul_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-myrkul-id-relation",
			classId: classes.warlock.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Warlocks favor Myrkul for undeath.`,
		}),
		classes_warlock_id_to_deities_shar_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-shar-id-relation",
			classId: classes.warlock.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Warlocks favor Shar for secrets and darkness.`,
		}),
		classes_warlock_id_to_deities_beshaba_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-beshaba-id-relation",
			classId: classes.warlock.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Warlocks favor Beshaba for misfortune.`,
		}),
		classes_warlock_id_to_deities_jergal_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-jergal-id-relation",
			classId: classes.warlock.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Warlocks favor Jergal for records and fate.`,
		}),
		classes_warlock_id_to_deities_kelemvor_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-kelemvor-id-relation",
			classId: classes.warlock.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Warlocks favor Kelemvor for judgment.`,
		}),
		classes_artificer_id_to_deities_mystra_id_relation: await db.createClassDeity({
			id: "classes-artificer-id-to-deities-mystra-id-relation",
			classId: classes.artificer.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Artificers favor Mystra for arcane knowledge.`,
		}),
		classes_artificer_id_to_deities_dugmaren_brightmantle_id_relation: await db.createClassDeity({
			id: "classes-artificer-id-to-deities-dugmaren-brightmantle-id-relation",
			classId: classes.artificer.id,
			deityId: deities.dugmaren_brightmantle.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Artificers favor Dugmaren Brightmantle for discovery and invention.`,
		}),
		classes_artificer_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-artificer-id-to-deities-tymora-id-relation",
			classId: classes.artificer.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Artificers favor Tymora for luck.`,
		}),
		classes_artificer_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-artificer-id-to-deities-lathander-id-relation",
			classId: classes.artificer.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Artificers favor Lathander for renewal and hope.`,
		}),
		classes_artificer_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-artificer-id-to-deities-selune-id-relation",
			classId: classes.artificer.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Artificers favor Selûne for guidance and navigation.`,
		}),
		classes_artificer_id_to_deities_moradin_id_relation: await db.createClassDeity({
			id: "classes-artificer-id-to-deities-moradin-id-relation",
			classId: classes.artificer.id,
			deityId: deities.moradin.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Artificers favor Moradin for creation and craftsmanship.`,
		}),
		classes_artificer_id_to_deities_tempus_id_relation: await db.createClassDeity({
			id: "classes-artificer-id-to-deities-tempus-id-relation",
			classId: classes.artificer.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Artificers favor Tempus for strategy and battle.`,
		}),
		classes_barbarian_id_to_deities_jergal_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-jergal-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Jergal for records and fate.`,
		}),
		classes_barbarian_id_to_deities_kossuth_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-kossuth-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Kossuth for fire.`,
		}),
		classes_barbarian_id_to_deities_istishia_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-istishia-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.istishia.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Istishia for water.`,
		}),
		classes_barbarian_id_to_deities_akadi_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-akadi-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.akadi.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Akadi for air and wind.`,
		}),
		classes_barbarian_id_to_deities_grumbar_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-grumbar-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.grumbar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Barbarians favor Grumbar for earth.`,
		}),
		classes_barbarian_id_to_deities_mystra_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-mystra-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Mystra for arcane knowledge.`,
		}),
		classes_barbarian_id_to_deities_beshaba_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-beshaba-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Barbarians favor Beshaba for misfortune.`,
		}),
		classes_barbarian_id_to_deities_kelemvor_id_relation: await db.createClassDeity({
			id: "classes-barbarian-id-to-deities-kelemvor-id-relation",
			classId: classes.barbarian.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Barbarians favor Kelemvor for judgment.`,
		}),
		classes_bard_id_to_deities_corellon_larethian_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-corellon-larethian-id-relation",
			classId: classes.bard.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor Corellon Larethian for elven magic.`,
		}),
		classes_bard_id_to_deities_sehanine_moonbow_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-sehanine-moonbow-id-relation",
			classId: classes.bard.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor Sehanine Moonbow for dreams and journeys.`,
		}),
		classes_bard_id_to_deities_kelemvor_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-kelemvor-id-relation",
			classId: classes.bard.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor Kelemvor for judgment.`,
		}),
		classes_bard_id_to_deities_shar_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-shar-id-relation",
			classId: classes.bard.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor Shar for secrets and darkness.`,
		}),
		classes_bard_id_to_deities_baravar_cloakshadow_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-baravar-cloakshadow-id-relation",
			classId: classes.bard.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		classes_bard_id_to_deities_beshaba_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-beshaba-id-relation",
			classId: classes.bard.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor Beshaba for misfortune.`,
		}),
		classes_bard_id_to_deities_myrkul_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-myrkul-id-relation",
			classId: classes.bard.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bards favor Myrkul for undeath.`,
		}),
		classes_cleric_id_to_deities_moradin_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-moradin-id-relation",
			classId: classes.cleric.id,
			deityId: deities.moradin.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Moradin for creation and craftsmanship.`,
		}),
		classes_cleric_id_to_deities_dugmaren_brightmantle_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-dugmaren-brightmantle-id-relation",
			classId: classes.cleric.id,
			deityId: deities.dugmaren_brightmantle.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Dugmaren Brightmantle for discovery and invention.`,
		}),
		classes_cleric_id_to_deities_mystra_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-mystra-id-relation",
			classId: classes.cleric.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Mystra for arcane knowledge.`,
		}),
		classes_cleric_id_to_deities_kossuth_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-kossuth-id-relation",
			classId: classes.cleric.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Kossuth for fire.`,
		}),
		classes_cleric_id_to_deities_istishia_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-istishia-id-relation",
			classId: classes.cleric.id,
			deityId: deities.istishia.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Istishia for water.`,
		}),
		classes_cleric_id_to_deities_akadi_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-akadi-id-relation",
			classId: classes.cleric.id,
			deityId: deities.akadi.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Akadi for air and wind.`,
		}),
		classes_cleric_id_to_deities_grumbar_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-grumbar-id-relation",
			classId: classes.cleric.id,
			deityId: deities.grumbar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Clerics favor Grumbar for earth.`,
		}),
		classes_cleric_id_to_deities_corellon_larethian_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-corellon-larethian-id-relation",
			classId: classes.cleric.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Clerics favor Corellon Larethian for elven magic.`,
		}),
		classes_cleric_id_to_deities_sehanine_moonbow_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-sehanine-moonbow-id-relation",
			classId: classes.cleric.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Sehanine Moonbow for dreams and journeys.`,
		}),
		classes_cleric_id_to_deities_baervan_wildwanderer_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-baervan-wildwanderer-id-relation",
			classId: classes.cleric.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Baervan Wildwanderer for forests and travel.`,
		}),
		classes_cleric_id_to_deities_baravar_cloakshadow_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-baravar-cloakshadow-id-relation",
			classId: classes.cleric.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		classes_fighter_id_to_deities_bane_id_relation: await db.createClassDeity({
			id: "classes-fighter-id-to-deities-bane-id-relation",
			classId: classes.fighter.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Fighters favor Bane for tyranny and conquest.`,
		}),
		classes_monk_id_to_deities_kossuth_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-kossuth-id-relation",
			classId: classes.monk.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Monks favor Kossuth for fire.`,
		}),
		classes_monk_id_to_deities_istishia_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-istishia-id-relation",
			classId: classes.monk.id,
			deityId: deities.istishia.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Monks favor Istishia for water.`,
		}),
		classes_monk_id_to_deities_akadi_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-akadi-id-relation",
			classId: classes.monk.id,
			deityId: deities.akadi.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Monks favor Akadi for air and wind.`,
		}),
		classes_monk_id_to_deities_grumbar_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-grumbar-id-relation",
			classId: classes.monk.id,
			deityId: deities.grumbar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Monks favor Grumbar for earth.`,
		}),
		classes_paladin_id_to_deities_sehanine_moonbow_id_relation: await db.createClassDeity({
			id: "classes-paladin-id-to-deities-sehanine-moonbow-id-relation",
			classId: classes.paladin.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Paladins favor Sehanine Moonbow for dreams and journeys.`,
		}),
		classes_paladin_id_to_deities_baervan_wildwanderer_id_relation: await db.createClassDeity({
			id: "classes-paladin-id-to-deities-baervan-wildwanderer-id-relation",
			classId: classes.paladin.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Paladins favor Baervan Wildwanderer for forests and travel.`,
		}),
		classes_paladin_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-paladin-id-to-deities-selune-id-relation",
			classId: classes.paladin.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Paladins favor Selûne for navigation and wanderers.`,
		}),
		classes_ranger_id_to_deities_shar_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-shar-id-relation",
			classId: classes.ranger.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rangers favor Shar for secrets and darkness.`,
		}),
		classes_ranger_id_to_deities_beshaba_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-beshaba-id-relation",
			classId: classes.ranger.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rangers favor Beshaba for misfortune.`,
		}),
		classes_ranger_id_to_deities_myrkul_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-myrkul-id-relation",
			classId: classes.ranger.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Rangers favor Myrkul for undeath.`,
		}),
		classes_ranger_id_to_deities_kelemvor_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-kelemvor-id-relation",
			classId: classes.ranger.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Rangers favor Kelemvor for judgment.`,
		}),
		classes_rogue_id_to_deities_mystra_id_relation: await db.createClassDeity({
			id: "classes-rogue-id-to-deities-mystra-id-relation",
			classId: classes.rogue.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rogues favor Mystra for arcane knowledge.`,
		}),
		classes_rogue_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-rogue-id-to-deities-selune-id-relation",
			classId: classes.rogue.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Rogues favor Selûne for guidance and navigation.`,
		}),
		classes_rogue_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-rogue-id-to-deities-lathander-id-relation",
			classId: classes.rogue.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Rogues favor Lathander for renewal and hope.`,
		}),
		classes_sorcerer_id_to_deities_corellon_larethian_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-corellon-larethian-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Sorcerers favor Corellon Larethian for elven magic.`,
		}),
		classes_warlock_id_to_deities_sehanine_moonbow_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-sehanine-moonbow-id-relation",
			classId: classes.warlock.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Warlocks favor Sehanine Moonbow for dreams and journeys.`,
		}),
		classes_warlock_id_to_deities_corellon_larethian_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-corellon-larethian-id-relation",
			classId: classes.warlock.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Warlocks favor Corellon Larethian for elven magic.`,
		}),
		classes_warlock_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-tymora-id-relation",
			classId: classes.warlock.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Warlocks favor Tymora for luck.`,
		}),
		classes_warlock_id_to_deities_selune_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-selune-id-relation",
			classId: classes.warlock.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Warlocks favor Selûne for guidance and navigation.`,
		}),
		classes_warlock_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-lathander-id-relation",
			classId: classes.warlock.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Warlocks favor Lathander for renewal and hope.`,
		}),
		classes_wizard_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-lathander-id-relation",
			classId: classes.wizard.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor Lathander for renewal and hope.`,
		}),
		classes_wizard_id_to_deities_baravar_cloakshadow_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-baravar-cloakshadow-id-relation",
			classId: classes.wizard.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		classes_wizard_id_to_deities_myrkul_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-myrkul-id-relation",
			classId: classes.wizard.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor Myrkul for undeath.`,
		}),
		classes_wizard_id_to_deities_kelemvor_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-kelemvor-id-relation",
			classId: classes.wizard.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor Kelemvor for judgment.`,
		}),
		classes_wizard_id_to_deities_shar_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-shar-id-relation",
			classId: classes.wizard.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Wizards favor Shar for secrets and darkness.`,
		}),
		classes_wizard_id_to_deities_beshaba_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-beshaba-id-relation",
			classId: classes.wizard.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Wizards favor Beshaba for misfortune.`,
		}),
		classes_wizard_id_to_deities_dugmaren_brightmantle_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-dugmaren-brightmantle-id-relation",
			classId: classes.wizard.id,
			deityId: deities.dugmaren_brightmantle.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor Dugmaren Brightmantle for discovery and invention.`,
		}),
		classes_tactician_id_to_deities_tempus_id_relation: await db.createClassDeity({
			id: "classes-tactician-id-to-deities-tempus-id-relation",
			classId: classes.tactician.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Tacticians favor Tempus for strategy and battle.`,
		}),
		classes_tactician_id_to_deities_jergal_id_relation: await db.createClassDeity({
			id: "classes-tactician-id-to-deities-jergal-id-relation",
			classId: classes.tactician.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Tacticians favor Jergal for records and fate.`,
		}),
		classes_tactician_id_to_deities_tymora_id_relation: await db.createClassDeity({
			id: "classes-tactician-id-to-deities-tymora-id-relation",
			classId: classes.tactician.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Tacticians favor Tymora for luck.`,
		}),
		classes_tactician_id_to_deities_lathander_id_relation: await db.createClassDeity({
			id: "classes-tactician-id-to-deities-lathander-id-relation",
			classId: classes.tactician.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Tacticians favor Lathander for renewal and hope.`,
		}),
		classes_tactician_id_to_deities_mystra_id_relation: await db.createClassDeity({
			id: "classes-tactician-id-to-deities-mystra-id-relation",
			classId: classes.tactician.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Tacticians favor Mystra for arcane knowledge.`,
		}),
		classes_ranger_id_to_deities_the_raven_queen_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-the-raven-queen-id-relation",
			classId: classes.ranger.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rangers favor The Raven Queen for her connection to fate and death.`,
		}),
		classes_ranger_id_to_deities_baravar_cloakshadow_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-baravar-cloakshadow-id-relation",
			classId: classes.ranger.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Rangers favor Baravar Cloakshadow for trickery and illusions.`,
		}),
		classes_ranger_id_to_deities_solonor_thelandira_id_relation: await db.createClassDeity({
			id: "classes-ranger-id-to-deities-solonor-thelandira-id-relation",
			classId: classes.ranger.id,
			deityId: deities.solonor_thelandira.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Rangers favor Solonor Thelandira for archery and hunting.`,
		}),
		classes_warlock_id_to_deities_mystra_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-mystra-id-relation",
			classId: classes.warlock.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Warlocks favor Mystra for arcane knowledge.`,
		}),
		classes_warlock_id_to_deities_the_raven_queen_id_relation: await db.createClassDeity({
			id: "classes-warlock-id-to-deities-the-raven-queen-id-relation",
			classId: classes.warlock.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Warlocks favor The Raven Queen for her connection to fate and death.`,
		}),
		classes_cleric_id_to_deities_the_raven_queen_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-the-raven-queen-id-relation",
			classId: classes.cleric.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Clerics favor The Raven Queen for her connection to fate and death.`,
		}),
		classes_cleric_id_to_deities_urogalan_id_relation: await db.createClassDeity({
			id: "classes-cleric-id-to-deities-urogalan-id-relation",
			classId: classes.cleric.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Clerics favor Urogalan for his connection to death and the underworld.`,
		}),
		classes_bard_id_to_deities_hanali_celanil_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-hanali-celanil-id-relation",
			classId: classes.bard.id,
			deityId: deities.hanali_celanil.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor Hanali Celanil for beauty and love.`,
		}),
		classes_bard_id_to_deities_the_raven_queen_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-the-raven-queen-id-relation",
			classId: classes.bard.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bards favor The Raven Queen for her connection to fate and death.`,
		}),
		classes_bard_id_to_deities_urogalan_id_relation: await db.createClassDeity({
			id: "classes-bard-id-to-deities-urogalan-id-relation",
			classId: classes.bard.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bards favor Urogalan for his connection to death and the underworld.`,
		}),
		classes_druid_id_to_deities_urogalan_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-urogalan-id-relation",
			classId: classes.druid.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Druids favor Urogalan for his connection to death and the underworld.`,
		}),
		classes_druid_id_to_deities_the_raven_queen_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-the-raven-queen-id-relation",
			classId: classes.druid.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Druids favor The Raven Queen for fate and death.`,
		}),
		classes_druid_id_to_deities_myrkul_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-myrkul-id-relation",
			classId: classes.druid.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Druids favor Myrkul for death.`,
		}),
		classes_druid_id_to_deities_jergal_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-jergal-id-relation",
			classId: classes.druid.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Druids favor Jergal for records and fate.`,
		}),
		classes_druid_id_to_deities_shar_id_relation: await db.createClassDeity({
			id: "classes-druid-id-to-deities-shar-id-relation",
			classId: classes.druid.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Druids favor Shar for secrets and darkness.`,
		}),
		classes_monk_id_to_deities_the_raven_queen_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-the-raven-queen-id-relation",
			classId: classes.monk.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Monks favor The Raven Queen for her connection to fate and death.`,
		}),
		classes_monk_id_to_deities_urogalan_id_relation: await db.createClassDeity({
			id: "classes-monk-id-to-deities-urogalan-id-relation",
			classId: classes.monk.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Monks favor Urogalan for death.`,
		}),
		classes_sorcerer_id_to_deities_shar_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-shar-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Sorcerers favor Shar for secrets and darkness.`,
		}),
		classes_sorcerer_id_to_deities_the_raven_queen_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-the-raven-queen-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Sorcerers favor The Raven Queen for fate and death.`,
		}),
		classes_sorcerer_id_to_deities_myrkul_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-myrkul-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Sorcerers favor Myrkul for death.`,
		}),
		classes_sorcerer_id_to_deities_jergal_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-jergal-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Sorcerers favor Jergal for records and fate.`,
		}),
		classes_sorcerer_id_to_deities_urogalan_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-urogalan-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Sorcerers favor Urogalan for death.`,
		}),
		classes_sorcerer_id_to_deities_sehanine_moonbow_id_relation: await db.createClassDeity({
			id: "classes-sorcerer-id-to-deities-sehanine-moonbow-id-relation",
			classId: classes.sorcerer.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Sorcerers favor Sehanine Moonbow for dreams and journeys.`,
		}),
		classes_wizard_id_to_deities_the_raven_queen_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-the-raven-queen-id-relation",
			classId: classes.wizard.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor The Raven Queen for her connection to fate and death.`,
		}),
		classes_wizard_id_to_deities_urogalan_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-urogalan-id-relation",
			classId: classes.wizard.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Wizards favor Urogalan for death.`,
		}),
		classes_wizard_id_to_deities_hanali_celanil_id_relation: await db.createClassDeity({
			id: "classes-wizard-id-to-deities-hanali-celanil-id-relation",
			classId: classes.wizard.id,
			deityId: deities.hanali_celanil.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Wizards favor Hanali Celanil for beauty and love.`,
		}),
	}
}