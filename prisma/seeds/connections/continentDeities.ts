import { Prisma, DeityRecommendationType } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Continents, Deities } from "../index";

type ContinentDeityPayload = Prisma.ContinentDeityGetPayload<{}>
export interface ContinentDeity {
	continents_skratonia_id_to_deities_tempus_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_lathander_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_tymora_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_mystra_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_selune_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_kelemvor_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_tempus_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_kelemvor_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_bane_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_lathander_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_selune_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_mystra_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_selune_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_tymora_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_lathander_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_kelemvor_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_bane_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_myrkul_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_beshaba_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_tempus_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_kelemvor_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_bane_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_myrkul_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_beshaba_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_tempus_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_kelemvor_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_bane_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_myrkul_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_beshaba_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_tempus_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_kelemvor_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_moradin_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_clangeddin_silverbeard_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_berronar_truesilver_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_dugmaren_brightmantle_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_vergadain_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_moradin_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_vergadain_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_dugmaren_brightmantle_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_berronar_truesilver_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_clangeddin_silverbeard_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_moradin_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_vergadain_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_dugmaren_brightmantle_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_berronar_truesilver_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_clangeddin_silverbeard_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_moradin_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_vergadain_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_dugmaren_brightmantle_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_berronar_truesilver_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_clangeddin_silverbeard_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_corellon_larethian_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_sehanine_moonbow_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_corellon_larethian_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_sehanine_moonbow_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_gruumsh_one_eye_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_luthic_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_yondalla_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_arvoreen_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_cyrrollalee_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_garl_glittergold_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_baravar_cloakshadow_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_baervan_wildwanderer_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_segojan_earthcaller_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_bahamut_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_tiamat_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_asmodeus_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_shar_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_asmodeus_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_shar_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_asmodeus_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_shar_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_akadi_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_grumbar_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_kossuth_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_istishia_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_gith_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_vlaakith_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_sseth_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_merrshaulk_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_sseth_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_merrshaulk_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_sseth_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_merrshaulk_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_umberlee_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_valkur_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_deep_sashelas_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_akadi_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_valkur_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_tymora_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_garl_glittergold_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_mystra_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_baravar_cloakshadow_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_tymora_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_gruumsh_one_eye_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_luthic_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_baervan_wildwanderer_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_jergal_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_bane_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_tymora_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_shar_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_beshaba_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_myrkul_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_jergal_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_baravar_cloakshadow_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_kurtulmak_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_tymora_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_lathander_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_istishia_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_selune_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_lathander_id_relation: ContinentDeityPayload
	continents_kantra_id_to_deities_asmodeus_id_relation: ContinentDeityPayload
	continents_kantra_id_to_deities_bane_id_relation: ContinentDeityPayload
	continents_kantra_id_to_deities_myrkul_id_relation: ContinentDeityPayload
	continents_kantra_id_to_deities_shar_id_relation: ContinentDeityPayload
	continents_kantra_id_to_deities_beshaba_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_jergal_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_jergal_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_tiamat_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_myrkul_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_beshaba_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_bahamut_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_moradin_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_berronar_truesilver_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_grumbar_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_kossuth_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_garl_glittergold_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_mystra_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_yondalla_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_bahgtru_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_ilneval_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_shargaas_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_bahgtru_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_gruumsh_one_eye_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_ilneval_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_luthic_id_relation: ContinentDeityPayload
	continents_bulsania_id_to_deities_shargaas_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_eilistraee_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_hanali_celanil_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_labelas_enoreth_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_hanali_celanil_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_labelas_enoreth_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_eilistraee_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_lolth_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_vhaeraun_id_relation: ContinentDeityPayload
	continents_maltman_id_to_deities_eilistraee_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_solonor_thelandira_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_maglubiyet_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_khurgorbaeyag_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_nomog_geaya_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_bargrivyek_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_maglubiyet_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_khurgorbaeyag_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_bargrivyek_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_nomog_geaya_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_luthic_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_sekolah_id_relation: ContinentDeityPayload
	continents_katman_id_to_deities_urogalan_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_sekolah_id_relation: ContinentDeityPayload
	continents_alatman_id_to_deities_urogalan_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_the_raven_queen_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_the_raven_queen_id_relation: ContinentDeityPayload
	continents_skratonia_id_to_deities_urogalan_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_urogalan_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_arvoreen_id_relation: ContinentDeityPayload
	continents_kuriguer_id_to_deities_cyrrollalee_id_relation: ContinentDeityPayload
}

interface ContinentDeityParams {
	continents: Continents;
	deities: Deities
}
export async function setContinentDeity(params: ContinentDeityParams): Promise<ContinentDeity> {
	const { continents, deities } = params;
	return {
		continents_skratonia_id_to_deities_tempus_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-tempus-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Tempus for warfare and strategy.`,
		}),
		continents_skratonia_id_to_deities_lathander_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-lathander-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Lathander for renewal and hope.`,
		}),
		continents_skratonia_id_to_deities_tymora_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-tymora-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Tymora for good fortune.`,
		}),
		continents_skratonia_id_to_deities_mystra_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-mystra-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Skratonia favors Mystra for arcane knowledge.`,
		}),
		continents_skratonia_id_to_deities_selune_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-selune-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Skratonia favors Selûne for guidance and navigation.`,
		}),
		continents_skratonia_id_to_deities_kelemvor_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-kelemvor-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Skratonia favors Kelemvor for judgment.`,
		}),
		continents_bulsania_id_to_deities_tempus_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-tempus-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Tempus for strategy and battle.`,
		}),
		continents_bulsania_id_to_deities_kelemvor_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-kelemvor-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Kelemvor for judgment.`,
		}),
		continents_bulsania_id_to_deities_bane_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-bane-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Bane for tyranny and conquest.`,
		}),
		continents_bulsania_id_to_deities_lathander_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-lathander-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bulsania favors Lathander for renewal and hope.`,
		}),
		continents_bulsania_id_to_deities_selune_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-selune-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bulsania favors Selûne for guidance and navigation.`,
		}),
		continents_kuriguer_id_to_deities_mystra_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-mystra-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Mystra for arcane knowledge.`,
		}),
		continents_kuriguer_id_to_deities_selune_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-selune-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Selûne for guidance and navigation.`,
		}),
		continents_kuriguer_id_to_deities_tymora_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-tymora-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Tymora for luck.`,
		}),
		continents_kuriguer_id_to_deities_lathander_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-lathander-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Kuriguer favors Lathander for renewal and hope.`,
		}),
		continents_kuriguer_id_to_deities_kelemvor_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-kelemvor-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Kuriguer favors Kelemvor for judgment.`,
		}),
		continents_alatman_id_to_deities_bane_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-bane-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Bane for tyranny and conquest.`,
		}),
		continents_alatman_id_to_deities_myrkul_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-myrkul-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Myrkul for undeath.`,
		}),
		continents_alatman_id_to_deities_beshaba_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-beshaba-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Beshaba for misfortune.`,
		}),
		continents_alatman_id_to_deities_tempus_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-tempus-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Tempus for strategy and battle.`,
		}),
		continents_alatman_id_to_deities_kelemvor_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-kelemvor-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Kelemvor for judgment.`,
		}),
		continents_maltman_id_to_deities_bane_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-bane-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Bane for tyranny and conquest.`,
		}),
		continents_maltman_id_to_deities_myrkul_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-myrkul-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Myrkul for undeath.`,
		}),
		continents_maltman_id_to_deities_beshaba_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-beshaba-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Beshaba for misfortune.`,
		}),
		continents_maltman_id_to_deities_tempus_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-tempus-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Maltman favors Tempus for strategy and battle.`,
		}),
		continents_maltman_id_to_deities_kelemvor_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-kelemvor-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Maltman favors Kelemvor for judgment.`,
		}),
		continents_katman_id_to_deities_bane_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-bane-id-relation",
			continentId: continents.katman.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Bane for tyranny and conquest.`,
		}),
		continents_katman_id_to_deities_myrkul_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-myrkul-id-relation",
			continentId: continents.katman.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Myrkul for undeath.`,
		}),
		continents_katman_id_to_deities_beshaba_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-beshaba-id-relation",
			continentId: continents.katman.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Beshaba for misfortune.`,
		}),
		continents_katman_id_to_deities_tempus_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-tempus-id-relation",
			continentId: continents.katman.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Katman favors Tempus for strategy and battle.`,
		}),
		continents_katman_id_to_deities_kelemvor_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-kelemvor-id-relation",
			continentId: continents.katman.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Katman favors Kelemvor for judgment.`,
		}),
		continents_bulsania_id_to_deities_moradin_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-moradin-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.moradin.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Moradin for creation.`,
		}),
		continents_bulsania_id_to_deities_clangeddin_silverbeard_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-clangeddin-silverbeard-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.clangeddin_silverbeard.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Clangeddin Silverbeard for honor and courage.`,
		}),
		continents_bulsania_id_to_deities_berronar_truesilver_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-berronar-truesilver-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.berronar_truesilver.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Berronar Truesilver for family protection.`,
		}),
		continents_bulsania_id_to_deities_dugmaren_brightmantle_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-dugmaren-brightmantle-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.dugmaren_brightmantle.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bulsania favors Dugmaren Brightmantle for discovery and invention.`,
		}),
		continents_bulsania_id_to_deities_vergadain_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-vergadain-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.vergadain.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bulsania favors Vergadain for trade and wealth.`,
		}),
		continents_alatman_id_to_deities_moradin_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-moradin-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.moradin.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Moradin for creation.`,
		}),
		continents_alatman_id_to_deities_vergadain_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-vergadain-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.vergadain.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Vergadain for trade and wealth.`,
		}),
		continents_alatman_id_to_deities_dugmaren_brightmantle_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-dugmaren-brightmantle-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.dugmaren_brightmantle.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Dugmaren Brightmantle for discovery and invention.`,
		}),
		continents_alatman_id_to_deities_berronar_truesilver_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-berronar-truesilver-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.berronar_truesilver.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Berronar Truesilver for family protection.`,
		}),
		continents_alatman_id_to_deities_clangeddin_silverbeard_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-clangeddin-silverbeard-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.clangeddin_silverbeard.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Clangeddin Silverbeard for honor and courage.`,
		}),
		continents_maltman_id_to_deities_moradin_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-moradin-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.moradin.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Moradin for creation.`,
		}),
		continents_maltman_id_to_deities_vergadain_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-vergadain-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.vergadain.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Vergadain for trade and wealth.`,
		}),
		continents_maltman_id_to_deities_dugmaren_brightmantle_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-dugmaren-brightmantle-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.dugmaren_brightmantle.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Dugmaren Brightmantle for discovery and invention.`,
		}),
		continents_maltman_id_to_deities_berronar_truesilver_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-berronar-truesilver-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.berronar_truesilver.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Maltman favors Berronar Truesilver for family protection.`,
		}),
		continents_maltman_id_to_deities_clangeddin_silverbeard_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-clangeddin-silverbeard-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.clangeddin_silverbeard.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Maltman favors Clangeddin Silverbeard for honor and courage.`,
		}),
		continents_katman_id_to_deities_moradin_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-moradin-id-relation",
			continentId: continents.katman.id,
			deityId: deities.moradin.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Moradin for creation.`,
		}),
		continents_katman_id_to_deities_vergadain_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-vergadain-id-relation",
			continentId: continents.katman.id,
			deityId: deities.vergadain.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Vergadain for trade and wealth.`,
		}),
		continents_katman_id_to_deities_dugmaren_brightmantle_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-dugmaren-brightmantle-id-relation",
			continentId: continents.katman.id,
			deityId: deities.dugmaren_brightmantle.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Dugmaren Brightmantle for discovery and invention.`,
		}),
		continents_katman_id_to_deities_berronar_truesilver_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-berronar-truesilver-id-relation",
			continentId: continents.katman.id,
			deityId: deities.berronar_truesilver.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Katman favors Berronar Truesilver for family protection.`,
		}),
		continents_katman_id_to_deities_clangeddin_silverbeard_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-clangeddin-silverbeard-id-relation",
			continentId: continents.katman.id,
			deityId: deities.clangeddin_silverbeard.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Katman favors Clangeddin Silverbeard for honor and courage.`,
		}),
		continents_kuriguer_id_to_deities_corellon_larethian_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-corellon-larethian-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Corellon Larethian for elven creation.`,
		}),
		continents_kuriguer_id_to_deities_sehanine_moonbow_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-sehanine-moonbow-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Sehanine Moonbow for dreams and journeys.`,
		}),
		continents_skratonia_id_to_deities_corellon_larethian_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-corellon-larethian-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.corellon_larethian.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Corellon Larethian for elven creation.`,
		}),
		continents_skratonia_id_to_deities_sehanine_moonbow_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-sehanine-moonbow-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.sehanine_moonbow.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Skratonia favors Sehanine Moonbow for dreams and journeys.`,
		}),
		continents_skratonia_id_to_deities_gruumsh_one_eye_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-gruumsh-one-eye-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.gruumsh_one_eye.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Gruumsh One-Eye for strength and conquest.`,
		}),
		continents_skratonia_id_to_deities_luthic_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-luthic-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.luthic.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Luthic for protection and fertility.`,
		}),
		continents_skratonia_id_to_deities_yondalla_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-yondalla-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.yondalla.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Yondalla for protection and fertility.`,
		}),
		continents_skratonia_id_to_deities_arvoreen_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-arvoreen-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.arvoreen.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Skratonia favors Arvoreen for protection.`,
		}),
		continents_skratonia_id_to_deities_cyrrollalee_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-cyrrollalee-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.cyrrollalee.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Skratonia favors Cyrrollalee for home and hearth.`,
		}),
		continents_kuriguer_id_to_deities_garl_glittergold_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-garl-glittergold-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.garl_glittergold.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Garl Glittergold for luck and protection.`,
		}),
		continents_kuriguer_id_to_deities_baravar_cloakshadow_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-baravar-cloakshadow-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Baravar Cloakshadow for trickery and illusions.`,
		}),
		continents_kuriguer_id_to_deities_baervan_wildwanderer_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-baervan-wildwanderer-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Kuriguer favors Baervan Wildwanderer for forests and travel.`,
		}),
		continents_kuriguer_id_to_deities_segojan_earthcaller_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-segojan-earthcaller-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.segojan_earthcaller.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Kuriguer favors Segojan Earthcaller for earth and nature.`,
		}),
		continents_skratonia_id_to_deities_bahamut_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-bahamut-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.bahamut.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Bahamut for dragon heritage.`,
		}),
		continents_skratonia_id_to_deities_tiamat_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-tiamat-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.tiamat.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Tiamat for dragon heritage.`,
		}),
		continents_alatman_id_to_deities_asmodeus_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-asmodeus-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.asmodeus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Asmodeus for infernal power.`,
		}),
		continents_alatman_id_to_deities_shar_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-shar-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Shar for secrets and darkness.`,
		}),
		continents_maltman_id_to_deities_asmodeus_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-asmodeus-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.asmodeus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Asmodeus for infernal power.`,
		}),
		continents_maltman_id_to_deities_shar_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-shar-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Maltman favors Shar for secrets and darkness.`,
		}),
		continents_katman_id_to_deities_asmodeus_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-asmodeus-id-relation",
			continentId: continents.katman.id,
			deityId: deities.asmodeus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Asmodeus for infernal power.`,
		}),
		continents_katman_id_to_deities_shar_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-shar-id-relation",
			continentId: continents.katman.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Katman favors Shar for secrets and darkness.`,
		}),
		continents_kuriguer_id_to_deities_akadi_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-akadi-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.akadi.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Akadi for air.`,
		}),
		continents_kuriguer_id_to_deities_grumbar_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-grumbar-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.grumbar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Grumbar for earth.`,
		}),
		continents_kuriguer_id_to_deities_kossuth_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-kossuth-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Kossuth for fire.`,
		}),
		continents_kuriguer_id_to_deities_istishia_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-istishia-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.istishia.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Istishia for water.`,
		}),
		continents_skratonia_id_to_deities_gith_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-gith-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.gith.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Gith for planar guidance.`,
		}),
		continents_skratonia_id_to_deities_vlaakith_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-vlaakith-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.vlaakith.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Vlaakith for planar guidance.`,
		}),
		continents_alatman_id_to_deities_sseth_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-sseth-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.sseth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Sseth for serpent power.`,
		}),
		continents_alatman_id_to_deities_merrshaulk_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-merrshaulk-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.merrshaulk.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Merrshaulk for serpent power.`,
		}),
		continents_maltman_id_to_deities_sseth_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-sseth-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.sseth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Sseth for serpent power.`,
		}),
		continents_maltman_id_to_deities_merrshaulk_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-merrshaulk-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.merrshaulk.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Merrshaulk for serpent power.`,
		}),
		continents_katman_id_to_deities_sseth_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-sseth-id-relation",
			continentId: continents.katman.id,
			deityId: deities.sseth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Sseth for serpent power.`,
		}),
		continents_katman_id_to_deities_merrshaulk_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-merrshaulk-id-relation",
			continentId: continents.katman.id,
			deityId: deities.merrshaulk.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Merrshaulk for serpent power.`,
		}),
		continents_kuriguer_id_to_deities_umberlee_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-umberlee-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.umberlee.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Umberlee for the sea's power.`,
		}),
		continents_kuriguer_id_to_deities_valkur_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-valkur-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.valkur.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Valkur for protection and navigation.`,
		}),
		continents_kuriguer_id_to_deities_deep_sashelas_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-deep-sashelas-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.deep_sashelas.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Deep Sashelas for creativity.`,
		}),
		continents_bulsania_id_to_deities_akadi_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-akadi-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.akadi.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Akadi for air and wind.`,
		}),
		continents_bulsania_id_to_deities_valkur_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-valkur-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.valkur.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Valkur for protection and navigation.`,
		}),
		continents_bulsania_id_to_deities_tymora_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-tymora-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Tymora for luck.`,
		}),
		continents_alatman_id_to_deities_garl_glittergold_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-garl-glittergold-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.garl_glittergold.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Garl Glittergold for protection and luck.`,
		}),
		continents_alatman_id_to_deities_mystra_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-mystra-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Mystra for arcane knowledge.`,
		}),
		continents_alatman_id_to_deities_baravar_cloakshadow_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-baravar-cloakshadow-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Baravar Cloakshadow for trickery and illusions.`,
		}),
		continents_alatman_id_to_deities_tymora_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-tymora-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Tymora for luck.`,
		}),
		continents_katman_id_to_deities_gruumsh_one_eye_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-gruumsh-one-eye-id-relation",
			continentId: continents.katman.id,
			deityId: deities.gruumsh_one_eye.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Gruumsh One-Eye for strength and conquest.`,
		}),
		continents_katman_id_to_deities_luthic_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-luthic-id-relation",
			continentId: continents.katman.id,
			deityId: deities.luthic.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Luthic for protection and fertility.`,
		}),
		continents_skratonia_id_to_deities_baervan_wildwanderer_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-baervan-wildwanderer-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.baervan_wildwanderer.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Baervan Wildwanderer for forests and travel.`,
		}),
		continents_alatman_id_to_deities_jergal_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-jergal-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Jergal for records of the dead.`,
		}),
		continents_skratonia_id_to_deities_bane_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-bane-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Skratonia favors Bane for tyranny and power.`,
		}),
		continents_katman_id_to_deities_tymora_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-tymora-id-relation",
			continentId: continents.katman.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Katman favors Tymora for luck.`,
		}),
		continents_kuriguer_id_to_deities_shar_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-shar-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Shar for secrets and darkness.`,
		}),
		continents_kuriguer_id_to_deities_beshaba_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-beshaba-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Beshaba for misfortune.`,
		}),
		continents_kuriguer_id_to_deities_myrkul_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-myrkul-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Kuriguer favors Myrkul for undeath.`,
		}),
		continents_skratonia_id_to_deities_jergal_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-jergal-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Jergal for records and fate.`,
		}),
		continents_skratonia_id_to_deities_baravar_cloakshadow_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-baravar-cloakshadow-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.baravar_cloakshadow.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Baravar Cloakshadow for trickery and illusions.`,
		}),
		continents_maltman_id_to_deities_kurtulmak_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-kurtulmak-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.kurtulmak.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Kurtulmak for kobold guidance.`,
		}),
		continents_maltman_id_to_deities_tymora_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-tymora-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Maltman favors Tymora for luck.`,
		}),
		continents_maltman_id_to_deities_lathander_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-lathander-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Maltman favors Lathander for renewal and hope.`,
		}),
		continents_alatman_id_to_deities_istishia_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-istishia-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.istishia.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Istishia for water and fluidity.`,
		}),
		continents_alatman_id_to_deities_selune_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-selune-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Selûne for guidance and navigation.`,
		}),
		continents_alatman_id_to_deities_lathander_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-lathander-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.lathander.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Lathander for renewal and hope.`,
		}),
		continents_kantra_id_to_deities_asmodeus_id_relation: await db.createContinentDeity({
			id: "continents-kantra-id-to-deities-asmodeus-id-relation",
			continentId: continents.kantra.id,
			deityId: deities.asmodeus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kantra favors Asmodeus for infernal power.`,
		}),
		continents_kantra_id_to_deities_bane_id_relation: await db.createContinentDeity({
			id: "continents-kantra-id-to-deities-bane-id-relation",
			continentId: continents.kantra.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kantra favors Bane for tyranny and conquest.`,
		}),
		continents_kantra_id_to_deities_myrkul_id_relation: await db.createContinentDeity({
			id: "continents-kantra-id-to-deities-myrkul-id-relation",
			continentId: continents.kantra.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kantra favors Myrkul for undeath.`,
		}),
		continents_kantra_id_to_deities_shar_id_relation: await db.createContinentDeity({
			id: "continents-kantra-id-to-deities-shar-id-relation",
			continentId: continents.kantra.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Kantra favors Shar for secrets and darkness.`,
		}),
		continents_kantra_id_to_deities_beshaba_id_relation: await db.createContinentDeity({
			id: "continents-kantra-id-to-deities-beshaba-id-relation",
			continentId: continents.kantra.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Kantra favors Beshaba for misfortune.`,
		}),
		continents_maltman_id_to_deities_jergal_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-jergal-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Maltman favors Jergal for records and fate.`,
		}),
		continents_katman_id_to_deities_jergal_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-jergal-id-relation",
			continentId: continents.katman.id,
			deityId: deities.jergal.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Katman favors Jergal for records and fate.`,
		}),
		continents_bulsania_id_to_deities_tiamat_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-tiamat-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.tiamat.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Tiamat for dragon heritage.`,
		}),
		continents_bulsania_id_to_deities_myrkul_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-myrkul-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bulsania favors Myrkul for undeath.`,
		}),
		continents_bulsania_id_to_deities_beshaba_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-beshaba-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bulsania favors Beshaba for misfortune.`,
		}),
		continents_kuriguer_id_to_deities_bahamut_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-bahamut-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.bahamut.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Bahamut for dragon heritage.`,
		}),
		continents_skratonia_id_to_deities_moradin_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-moradin-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.moradin.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Moradin for creation and craftsmanship.`,
		}),
		continents_skratonia_id_to_deities_berronar_truesilver_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-berronar-truesilver-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.berronar_truesilver.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Berronar Truesilver for family protection.`,
		}),
		continents_maltman_id_to_deities_grumbar_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-grumbar-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.grumbar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Grumbar for earth and strength.`,
		}),
		continents_alatman_id_to_deities_kossuth_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-kossuth-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.kossuth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Kossuth for fire and destruction.`,
		}),
		continents_maltman_id_to_deities_garl_glittergold_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-garl-glittergold-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.garl_glittergold.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Garl Glittergold for luck and protection.`,
		}),
		continents_maltman_id_to_deities_mystra_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-mystra-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Mystra for arcane knowledge.`,
		}),
		continents_kuriguer_id_to_deities_yondalla_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-yondalla-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.yondalla.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Yondalla for protection and fertility.`,
		}),
		continents_katman_id_to_deities_bahgtru_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-bahgtru-id-relation",
			continentId: continents.katman.id,
			deityId: deities.bahgtru.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Bahgtru for strength and endurance.`,
		}),
		continents_katman_id_to_deities_ilneval_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-ilneval-id-relation",
			continentId: continents.katman.id,
			deityId: deities.ilneval.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Katman favors Ilneval for tactical wisdom.`,
		}),
		continents_katman_id_to_deities_shargaas_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-shargaas-id-relation",
			continentId: continents.katman.id,
			deityId: deities.shargaas.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Katman favors Shargaas for guidance through darkness.`,
		}),
		continents_bulsania_id_to_deities_bahgtru_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-bahgtru-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.bahgtru.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Bahgtru for strength and endurance.`,
		}),
		continents_bulsania_id_to_deities_gruumsh_one_eye_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-gruumsh-one-eye-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.gruumsh_one_eye.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Gruumsh One-Eye for strength and conquest.`,
		}),
		continents_bulsania_id_to_deities_ilneval_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-ilneval-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.ilneval.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bulsania favors Ilneval for tactical wisdom.`,
		}),
		continents_bulsania_id_to_deities_luthic_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-luthic-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.luthic.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bulsania favors Luthic for protection and fertility.`,
		}),
		continents_bulsania_id_to_deities_shargaas_id_relation: await db.createContinentDeity({
			id: "continents-bulsania-id-to-deities-shargaas-id-relation",
			continentId: continents.bulsania.id,
			deityId: deities.shargaas.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Bulsania favors Shargaas for guidance through darkness.`,
		}),
		continents_kuriguer_id_to_deities_eilistraee_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-eilistraee-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.eilistraee.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Eilistraee for her connection to nature and dance.`,
		}),
		continents_kuriguer_id_to_deities_hanali_celanil_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-hanali-celanil-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.hanali_celanil.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Hanali Celanil for beauty and love.`,
		}),
		continents_kuriguer_id_to_deities_labelas_enoreth_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-labelas-enoreth-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.labelas_enoreth.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Kuriguer favors Labelas Enoreth for wisdom and time mastery.`,
		}),
		continents_skratonia_id_to_deities_hanali_celanil_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-hanali-celanil-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.hanali_celanil.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Hanali Celanil for beauty and love.`,
		}),
		continents_skratonia_id_to_deities_labelas_enoreth_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-labelas-enoreth-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.labelas_enoreth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Labelas Enoreth for wisdom and time mastery.`,
		}),
		continents_skratonia_id_to_deities_eilistraee_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-eilistraee-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.eilistraee.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Skratonia favors Eilistraee for her connection to nature and dance.`,
		}),
		continents_maltman_id_to_deities_lolth_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-lolth-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.lolth.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Lolth for dark power.`,
		}),
		continents_maltman_id_to_deities_vhaeraun_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-vhaeraun-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.vhaeraun.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Vhaeraun for independence.`,
		}),
		continents_maltman_id_to_deities_eilistraee_id_relation: await db.createContinentDeity({
			id: "continents-maltman-id-to-deities-eilistraee-id-relation",
			continentId: continents.maltman.id,
			deityId: deities.eilistraee.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Maltman favors Eilistraee for redemption.`,
		}),
		continents_kuriguer_id_to_deities_solonor_thelandira_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-solonor-thelandira-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.solonor_thelandira.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Solonor Thelandira for archery and hunting.`,
		}),
		continents_katman_id_to_deities_maglubiyet_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-maglubiyet-id-relation",
			continentId: continents.katman.id,
			deityId: deities.maglubiyet.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Maglubiyet for warfare.`,
		}),
		continents_katman_id_to_deities_khurgorbaeyag_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-khurgorbaeyag-id-relation",
			continentId: continents.katman.id,
			deityId: deities.khurgorbaeyag.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Khurgorbaeyag for slavery and oppression.`,
		}),
		continents_katman_id_to_deities_nomog_geaya_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-nomog-geaya-id-relation",
			continentId: continents.katman.id,
			deityId: deities.nomog_geaya.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Nomog-Geaya for goblin guidance.`,
		}),
		continents_katman_id_to_deities_bargrivyek_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-bargrivyek-id-relation",
			continentId: continents.katman.id,
			deityId: deities.bargrivyek.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Katman favors Bargrivyek for community guidance.`,
		}),
		continents_alatman_id_to_deities_maglubiyet_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-maglubiyet-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.maglubiyet.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Maglubiyet for warfare.`,
		}),
		continents_alatman_id_to_deities_khurgorbaeyag_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-khurgorbaeyag-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.khurgorbaeyag.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Khurgorbaeyag for slavery and oppression.`,
		}),
		continents_alatman_id_to_deities_bargrivyek_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-bargrivyek-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.bargrivyek.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Bargrivyek for community guidance.`,
		}),
		continents_alatman_id_to_deities_nomog_geaya_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-nomog-geaya-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.nomog_geaya.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Nomog-Geaya for goblin guidance.`,
		}),
		continents_alatman_id_to_deities_luthic_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-luthic-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.luthic.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Alatman favors Luthic for protection and fertility.`,
		}),
		continents_katman_id_to_deities_sekolah_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-sekolah-id-relation",
			continentId: continents.katman.id,
			deityId: deities.sekolah.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Katman favors Sekolah for water and hunting.`,
		}),
		continents_katman_id_to_deities_urogalan_id_relation: await db.createContinentDeity({
			id: "continents-katman-id-to-deities-urogalan-id-relation",
			continentId: continents.katman.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Katman favors Urogalan for death and the underworld.`,
		}),
		continents_alatman_id_to_deities_sekolah_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-sekolah-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.sekolah.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Sekolah for water and hunting.`,
		}),
		continents_alatman_id_to_deities_urogalan_id_relation: await db.createContinentDeity({
			id: "continents-alatman-id-to-deities-urogalan-id-relation",
			continentId: continents.alatman.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Alatman favors Urogalan for death and the underworld.`,
		}),
		continents_kuriguer_id_to_deities_the_raven_queen_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-the-raven-queen-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors The Raven Queen for her connection to fate and death.`,
		}),
		continents_skratonia_id_to_deities_the_raven_queen_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-the-raven-queen-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.the_raven_queen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors The Raven Queen for her domains of fate and death.`,
		}),
		continents_skratonia_id_to_deities_urogalan_id_relation: await db.createContinentDeity({
			id: "continents-skratonia-id-to-deities-urogalan-id-relation",
			continentId: continents.skratonia.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Skratonia favors Urogalan for his connection to death and the afterlife.`,
		}),
		continents_kuriguer_id_to_deities_urogalan_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-urogalan-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.urogalan.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Urogalan for his connection to death and the afterlife.`,
		}),
		continents_kuriguer_id_to_deities_arvoreen_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-arvoreen-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.arvoreen.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kuriguer favors Arvoreen for protection.`,
		}),
		continents_kuriguer_id_to_deities_cyrrollalee_id_relation: await db.createContinentDeity({
			id: "continents-kuriguer-id-to-deities-cyrrollalee-id-relation",
			continentId: continents.kuriguer.id,
			deityId: deities.cyrrollalee.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Kuriguer favors Cyrrollalee for home and hearth.`,
		}),
	}
}