import { Prisma, DeityRecommendationType } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Subraces, Deities } from '../index';

type SubraceDeityPayload = Prisma.SubraceDeityGetPayload<{}>;
export interface SubraceDeity {
	subraces_aasimar_scourge_aasimar_id_to_deities_tempus_id_relation: SubraceDeityPayload;
	subraces_aasimar_scourge_aasimar_id_to_deities_bane_id_relation: SubraceDeityPayload;
	subraces_aasimar_scourge_aasimar_id_to_deities_kelemvor_id_relation: SubraceDeityPayload;
	subraces_aasimar_fallen_aasimar_id_to_deities_myrkul_id_relation: SubraceDeityPayload;
	subraces_aasimar_fallen_aasimar_id_to_deities_shar_id_relation: SubraceDeityPayload;
	subraces_aasimar_fallen_aasimar_id_to_deities_beshaba_id_relation: SubraceDeityPayload;
	subraces_aasimar_fallen_aasimar_id_to_deities_jergal_id_relation: SubraceDeityPayload;
	subraces_dragonborn_chromatic_dragonborn_id_to_deities_bane_id_relation: SubraceDeityPayload;
	subraces_dragonborn_chromatic_dragonborn_id_to_deities_myrkul_id_relation: SubraceDeityPayload;
	subraces_dragonborn_chromatic_dragonborn_id_to_deities_beshaba_id_relation: SubraceDeityPayload;
	subraces_dragonborn_metallic_dragonborn_id_to_deities_selune_id_relation: SubraceDeityPayload;
	subraces_dragonborn_metallic_dragonborn_id_to_deities_mystra_id_relation: SubraceDeityPayload;
	subraces_dwarf_hill_dwarf_id_to_deities_tymora_id_relation: SubraceDeityPayload;
	subraces_dwarf_hill_dwarf_id_to_deities_lathander_id_relation: SubraceDeityPayload;
	subraces_dwarf_hill_dwarf_id_to_deities_yondalla_id_relation: SubraceDeityPayload;
	subraces_dwarf_mountain_dwarf_id_to_deities_tempus_id_relation: SubraceDeityPayload;
	subraces_dwarf_duergar_id_to_deities_myrkul_id_relation: SubraceDeityPayload;
	subraces_dwarf_duergar_id_to_deities_bane_id_relation: SubraceDeityPayload;
	subraces_dwarf_duergar_id_to_deities_beshaba_id_relation: SubraceDeityPayload;
	subraces_elf_wood_elf_id_to_deities_baervan_wildwanderer_id_relation: SubraceDeityPayload;
	subraces_elf_wood_elf_id_to_deities_lathander_id_relation: SubraceDeityPayload;
	subraces_elf_dark_elf_drow_id_to_deities_shar_id_relation: SubraceDeityPayload;
	subraces_elf_dark_elf_drow_id_to_deities_myrkul_id_relation: SubraceDeityPayload;
	subraces_elf_dark_elf_drow_id_to_deities_beshaba_id_relation: SubraceDeityPayload;
	subraces_elf_dark_elf_drow_id_to_deities_bane_id_relation: SubraceDeityPayload;
	subraces_elf_dark_elf_drow_id_to_deities_kelemvor_id_relation: SubraceDeityPayload;
	subraces_elf_sea_elf_id_to_deities_istishia_id_relation: SubraceDeityPayload;
	subraces_elf_sea_elf_id_to_deities_valkur_id_relation: SubraceDeityPayload;
	subraces_genasi_air_genasi_id_to_deities_tymora_id_relation: SubraceDeityPayload;
	subraces_genasi_air_genasi_id_to_deities_lathander_id_relation: SubraceDeityPayload;
	subraces_genasi_earth_genasi_id_to_deities_moradin_id_relation: SubraceDeityPayload;
	subraces_genasi_earth_genasi_id_to_deities_dugmaren_brightmantle_id_relation: SubraceDeityPayload;
	subraces_genasi_fire_genasi_id_to_deities_tempus_id_relation: SubraceDeityPayload;
	subraces_gnome_forest_gnome_id_to_deities_sehanine_moonbow_id_relation: SubraceDeityPayload;
	subraces_gnome_forest_gnome_id_to_deities_tymora_id_relation: SubraceDeityPayload;
	subraces_gnome_forest_gnome_id_to_deities_selune_id_relation: SubraceDeityPayload;
	subraces_gnome_rock_gnome_id_to_deities_dugmaren_brightmantle_id_relation: SubraceDeityPayload;
	subraces_gnome_rock_gnome_id_to_deities_lathander_id_relation: SubraceDeityPayload;
	subraces_halfling_lightfoot_halfling_id_to_deities_baravar_cloakshadow_id_relation: SubraceDeityPayload;
	subraces_halfling_lightfoot_halfling_id_to_deities_selune_id_relation: SubraceDeityPayload;
	subraces_halfling_ghostwise_halfling_id_to_deities_sehanine_moonbow_id_relation: SubraceDeityPayload;
	subraces_elf_dark_elf_drow_id_to_deities_lolth_id_relation: SubraceDeityPayload;
	subraces_elf_dark_elf_drow_id_to_deities_vhaeraun_id_relation: SubraceDeityPayload;
	subraces_elf_dark_elf_drow_id_to_deities_eilistraee_id_relation: SubraceDeityPayload;
}

interface SubraceDeityParams {
	subraces: Subraces;
	deities: Deities;
}
export async function setSubraceDeity(
	params: SubraceDeityParams
): Promise<SubraceDeity> {
	const { subraces, deities } = params;
	return {
		subraces_aasimar_scourge_aasimar_id_to_deities_tempus_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-aasimar-scourge-aasimar-id-to-deities-tempus-id-relation',
				subraceId: subraces.aasimar_scourge_aasimar.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Scourge Aasimar favor Tempus for strategy and battle.`,
			}),
		subraces_aasimar_scourge_aasimar_id_to_deities_bane_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-aasimar-scourge-aasimar-id-to-deities-bane-id-relation',
				subraceId: subraces.aasimar_scourge_aasimar.id,
				deityId: deities.bane.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Scourge Aasimar favor Bane for tyranny and conquest.`,
			}),
		subraces_aasimar_scourge_aasimar_id_to_deities_kelemvor_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-aasimar-scourge-aasimar-id-to-deities-kelemvor-id-relation',
				subraceId: subraces.aasimar_scourge_aasimar.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Scourge Aasimar favor Kelemvor for judgment.`,
			}),
		subraces_aasimar_fallen_aasimar_id_to_deities_myrkul_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-aasimar-fallen-aasimar-id-to-deities-myrkul-id-relation',
				subraceId: subraces.aasimar_fallen_aasimar.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Fallen Aasimar favor Myrkul for undeath.`,
			}),
		subraces_aasimar_fallen_aasimar_id_to_deities_shar_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-aasimar-fallen-aasimar-id-to-deities-shar-id-relation',
				subraceId: subraces.aasimar_fallen_aasimar.id,
				deityId: deities.shar.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Fallen Aasimar favor Shar for secrets and darkness.`,
			}),
		subraces_aasimar_fallen_aasimar_id_to_deities_beshaba_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-aasimar-fallen-aasimar-id-to-deities-beshaba-id-relation',
				subraceId: subraces.aasimar_fallen_aasimar.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Fallen Aasimar favor Beshaba for misfortune.`,
			}),
		subraces_aasimar_fallen_aasimar_id_to_deities_jergal_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-aasimar-fallen-aasimar-id-to-deities-jergal-id-relation',
				subraceId: subraces.aasimar_fallen_aasimar.id,
				deityId: deities.jergal.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Fallen Aasimar favor Jergal for records and fate.`,
			}),
		subraces_dragonborn_chromatic_dragonborn_id_to_deities_bane_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dragonborn-chromatic-dragonborn-id-to-deities-bane-id-relation',
				subraceId: subraces.dragonborn_chromatic_dragonborn.id,
				deityId: deities.bane.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Chromatic Dragonborn favor Bane for tyranny and power.`,
			}),
		subraces_dragonborn_chromatic_dragonborn_id_to_deities_myrkul_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dragonborn-chromatic-dragonborn-id-to-deities-myrkul-id-relation',
				subraceId: subraces.dragonborn_chromatic_dragonborn.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Chromatic Dragonborn favor Myrkul for undeath.`,
			}),
		subraces_dragonborn_chromatic_dragonborn_id_to_deities_beshaba_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dragonborn-chromatic-dragonborn-id-to-deities-beshaba-id-relation',
				subraceId: subraces.dragonborn_chromatic_dragonborn.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Chromatic Dragonborn favor Beshaba for misfortune.`,
			}),
		subraces_dragonborn_metallic_dragonborn_id_to_deities_selune_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dragonborn-metallic-dragonborn-id-to-deities-selune-id-relation',
				subraceId: subraces.dragonborn_metallic_dragonborn.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Metallic Dragonborn favor Selûne for guidance and navigation.`,
			}),
		subraces_dragonborn_metallic_dragonborn_id_to_deities_mystra_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dragonborn-metallic-dragonborn-id-to-deities-mystra-id-relation',
				subraceId: subraces.dragonborn_metallic_dragonborn.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Metallic Dragonborn favor Mystra for arcane knowledge.`,
			}),
		subraces_dwarf_hill_dwarf_id_to_deities_tymora_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dwarf-hill-dwarf-id-to-deities-tymora-id-relation',
				subraceId: subraces.dwarf_hill_dwarf.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Hill Dwarves favor Tymora for luck.`,
			}),
		subraces_dwarf_hill_dwarf_id_to_deities_lathander_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dwarf-hill-dwarf-id-to-deities-lathander-id-relation',
				subraceId: subraces.dwarf_hill_dwarf.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Hill Dwarves favor Lathander for renewal and hope.`,
			}),
		subraces_dwarf_hill_dwarf_id_to_deities_yondalla_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dwarf-hill-dwarf-id-to-deities-yondalla-id-relation',
				subraceId: subraces.dwarf_hill_dwarf.id,
				deityId: deities.yondalla.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Hill Dwarves favor Yondalla for protection and fertility.`,
			}),
		subraces_dwarf_mountain_dwarf_id_to_deities_tempus_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dwarf-mountain-dwarf-id-to-deities-tempus-id-relation',
				subraceId: subraces.dwarf_mountain_dwarf.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Mountain Dwarves favor Tempus for strategy and battle.`,
			}),
		subraces_dwarf_duergar_id_to_deities_myrkul_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dwarf-duergar-id-to-deities-myrkul-id-relation',
				subraceId: subraces.dwarf_duergar.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Duergar favor Myrkul for undeath.`,
			}),
		subraces_dwarf_duergar_id_to_deities_bane_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dwarf-duergar-id-to-deities-bane-id-relation',
				subraceId: subraces.dwarf_duergar.id,
				deityId: deities.bane.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Duergar favor Bane for tyranny and conquest.`,
			}),
		subraces_dwarf_duergar_id_to_deities_beshaba_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-dwarf-duergar-id-to-deities-beshaba-id-relation',
				subraceId: subraces.dwarf_duergar.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Duergar favor Beshaba for misfortune.`,
			}),
		subraces_elf_wood_elf_id_to_deities_baervan_wildwanderer_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-wood-elf-id-to-deities-baervan-wildwanderer-id-relation',
				subraceId: subraces.elf_wood_elf.id,
				deityId: deities.baervan_wildwanderer.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Wood Elves favor Baervan Wildwanderer for forests and travel.`,
			}),
		subraces_elf_wood_elf_id_to_deities_lathander_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-wood-elf-id-to-deities-lathander-id-relation',
				subraceId: subraces.elf_wood_elf.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Wood Elves favor Lathander for renewal and hope.`,
			}),
		subraces_elf_dark_elf_drow_id_to_deities_shar_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-drow-id-to-deities-shar-id-relation',
				subraceId: subraces.elf_dark_elf_drow.id,
				deityId: deities.shar.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Drow favor Shar for secrets and darkness.`,
			}),
		subraces_elf_dark_elf_drow_id_to_deities_myrkul_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-drow-id-to-deities-myrkul-id-relation',
				subraceId: subraces.elf_dark_elf_drow.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Drow favor Myrkul for undeath.`,
			}),
		subraces_elf_dark_elf_drow_id_to_deities_beshaba_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-drow-id-to-deities-beshaba-id-relation',
				subraceId: subraces.elf_dark_elf_drow.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Drow favor Beshaba for misfortune.`,
			}),
		subraces_elf_dark_elf_drow_id_to_deities_bane_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-drow-id-to-deities-bane-id-relation',
				subraceId: subraces.elf_dark_elf_drow.id,
				deityId: deities.bane.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Drow favor Bane for tyranny and conquest.`,
			}),
		subraces_elf_dark_elf_drow_id_to_deities_kelemvor_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-drow-id-to-deities-kelemvor-id-relation',
				subraceId: subraces.elf_dark_elf_drow.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Drow favor Kelemvor for judgment.`,
			}),
		subraces_elf_dark_elf_drow_id_to_deities_lolth_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-dark-elf-drow-id-to-deities-lolth-id-relation',
				subraceId: subraces.elf_dark_elf_drow.id,
				deityId: deities.lolth.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Drow favor Lolth, their spider queen.`,
			}),
		subraces_elf_dark_elf_drow_id_to_deities_vhaeraun_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-dark-elf-drow-id-to-deities-vhaeraun-id-relation',
				subraceId: subraces.elf_dark_elf_drow.id,
				deityId: deities.vhaeraun.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Drow favor Vhaeraun for independence.`,
			}),
		subraces_elf_dark_elf_drow_id_to_deities_eilistraee_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-dark-elf-drow-id-to-deities-eilistraee-id-relation',
				subraceId: subraces.elf_dark_elf_drow.id,
				deityId: deities.eilistraee.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Drow favor Eilistraee for redemption.`,
			}),
		subraces_elf_sea_elf_id_to_deities_istishia_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-sea-elf-id-to-deities-istishia-id-relation',
				subraceId: subraces.elf_sea_elf.id,
				deityId: deities.istishia.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Sea Elves favor Istishia for water and fluidity.`,
			}),
		subraces_elf_sea_elf_id_to_deities_valkur_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-elf-sea-elf-id-to-deities-valkur-id-relation',
				subraceId: subraces.elf_sea_elf.id,
				deityId: deities.valkur.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Sea Elves favor Valkur for protection and navigation.`,
			}),
		subraces_genasi_air_genasi_id_to_deities_tymora_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-genasi-air-genasi-id-to-deities-tymora-id-relation',
				subraceId: subraces.genasi_air_genasi.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Air Genasi favor Tymora for luck.`,
			}),
		subraces_genasi_air_genasi_id_to_deities_lathander_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-genasi-air-genasi-id-to-deities-lathander-id-relation',
				subraceId: subraces.genasi_air_genasi.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Air Genasi favor Lathander for renewal and hope.`,
			}),
		subraces_genasi_earth_genasi_id_to_deities_moradin_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-genasi-earth-genasi-id-to-deities-moradin-id-relation',
				subraceId: subraces.genasi_earth_genasi.id,
				deityId: deities.moradin.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Earth Genasi favor Moradin for creation and craftsmanship.`,
			}),
		subraces_genasi_earth_genasi_id_to_deities_dugmaren_brightmantle_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-genasi-earth-genasi-id-to-deities-dugmaren-brightmantle-id-relation',
				subraceId: subraces.genasi_earth_genasi.id,
				deityId: deities.dugmaren_brightmantle.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Earth Genasi favor Dugmaren Brightmantle for discovery and invention.`,
			}),
		subraces_genasi_fire_genasi_id_to_deities_tempus_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-genasi-fire-genasi-id-to-deities-tempus-id-relation',
				subraceId: subraces.genasi_fire_genasi.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Fire Genasi favor Tempus for strategy and battle.`,
			}),
		subraces_gnome_forest_gnome_id_to_deities_sehanine_moonbow_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-gnome-forest-gnome-id-to-deities-sehanine-moonbow-id-relation',
				subraceId: subraces.gnome_forest_gnome.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Forest Gnomes favor Sehanine Moonbow for dreams and journeys.`,
			}),
		subraces_gnome_forest_gnome_id_to_deities_tymora_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-gnome-forest-gnome-id-to-deities-tymora-id-relation',
				subraceId: subraces.gnome_forest_gnome.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Forest Gnomes favor Tymora for luck.`,
			}),
		subraces_gnome_forest_gnome_id_to_deities_selune_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-gnome-forest-gnome-id-to-deities-selune-id-relation',
				subraceId: subraces.gnome_forest_gnome.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Forest Gnomes favor Selûne for guidance and navigation.`,
			}),
		subraces_gnome_rock_gnome_id_to_deities_dugmaren_brightmantle_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-gnome-rock-gnome-id-to-deities-dugmaren-brightmantle-id-relation',
				subraceId: subraces.gnome_rock_gnome.id,
				deityId: deities.dugmaren_brightmantle.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Rock Gnomes favor Dugmaren Brightmantle for discovery and invention.`,
			}),
		subraces_gnome_rock_gnome_id_to_deities_lathander_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-gnome-rock-gnome-id-to-deities-lathander-id-relation',
				subraceId: subraces.gnome_rock_gnome.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Rock Gnomes favor Lathander for renewal and hope.`,
			}),
		subraces_halfling_lightfoot_halfling_id_to_deities_baravar_cloakshadow_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-halfling-lightfoot-halfling-id-to-deities-baravar-cloakshadow-id-relation',
				subraceId: subraces.halfling_lightfoot_halfling.id,
				deityId: deities.baravar_cloakshadow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Lightfoot Halflings favor Baravar Cloakshadow for trickery and illusions.`,
			}),
		subraces_halfling_lightfoot_halfling_id_to_deities_selune_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-halfling-lightfoot-halfling-id-to-deities-selune-id-relation',
				subraceId: subraces.halfling_lightfoot_halfling.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Lightfoot Halflings favor Selûne for guidance and navigation.`,
			}),
		subraces_halfling_ghostwise_halfling_id_to_deities_sehanine_moonbow_id_relation:
			await db.createSubraceDeity({
				id: 'subraces-halfling-ghostwise-halfling-id-to-deities-sehanine-moonbow-id-relation',
				subraceId: subraces.halfling_ghostwise_halfling.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Ghostwise Halflings favor Sehanine Moonbow for dreams and journeys.`,
			}),
	};
}
