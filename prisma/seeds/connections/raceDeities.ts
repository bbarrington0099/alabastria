import { Prisma, DeityRecommendationType } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Races, Deities } from '../index';

type RaceDeityPayload = Prisma.RaceDeityGetPayload<{}>;
export interface RaceDeity {
	races_human_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_human_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_human_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_human_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_human_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_human_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_human_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_human_id_to_deities_myrkul_id_relation: RaceDeityPayload;
	races_human_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_moradin_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_clangeddin_silverbeard_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_berronar_truesilver_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_dugmaren_brightmantle_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_vergadain_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_corellon_larethian_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_sehanine_moonbow_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_half_elf_id_to_deities_corellon_larethian_id_relation: RaceDeityPayload;
	races_half_elf_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_half_elf_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_half_elf_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_half_elf_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_half_elf_id_to_deities_sehanine_moonbow_id_relation: RaceDeityPayload;
	races_half_orc_id_to_deities_gruumsh_one_eye_id_relation: RaceDeityPayload;
	races_half_orc_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_half_orc_id_to_deities_luthic_id_relation: RaceDeityPayload;
	races_half_orc_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_half_orc_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_halfling_id_to_deities_yondalla_id_relation: RaceDeityPayload;
	races_halfling_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_halfling_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_halfling_id_to_deities_arvoreen_id_relation: RaceDeityPayload;
	races_halfling_id_to_deities_cyrrollalee_id_relation: RaceDeityPayload;
	races_gnome_id_to_deities_garl_glittergold_id_relation: RaceDeityPayload;
	races_gnome_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_gnome_id_to_deities_baravar_cloakshadow_id_relation: RaceDeityPayload;
	races_gnome_id_to_deities_baervan_wildwanderer_id_relation: RaceDeityPayload;
	races_gnome_id_to_deities_segojan_earthcaller_id_relation: RaceDeityPayload;
	races_dragonborn_id_to_deities_bahamut_id_relation: RaceDeityPayload;
	races_dragonborn_id_to_deities_tiamat_id_relation: RaceDeityPayload;
	races_dragonborn_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_dragonborn_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_dragonborn_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_tiefling_id_to_deities_asmodeus_id_relation: RaceDeityPayload;
	races_tiefling_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_tiefling_id_to_deities_myrkul_id_relation: RaceDeityPayload;
	races_tiefling_id_to_deities_shar_id_relation: RaceDeityPayload;
	races_tiefling_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_genasi_id_to_deities_akadi_id_relation: RaceDeityPayload;
	races_genasi_id_to_deities_grumbar_id_relation: RaceDeityPayload;
	races_genasi_id_to_deities_kossuth_id_relation: RaceDeityPayload;
	races_genasi_id_to_deities_istishia_id_relation: RaceDeityPayload;
	races_genasi_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_genasi_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_gith_id_to_deities_gith_id_relation: RaceDeityPayload;
	races_gith_id_to_deities_vlaakith_id_relation: RaceDeityPayload;
	races_gith_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_gith_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_gith_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_yuan_ti_id_to_deities_sseth_id_relation: RaceDeityPayload;
	races_yuan_ti_id_to_deities_merrshaulk_id_relation: RaceDeityPayload;
	races_yuan_ti_id_to_deities_myrkul_id_relation: RaceDeityPayload;
	races_yuan_ti_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_yuan_ti_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_triton_id_to_deities_umberlee_id_relation: RaceDeityPayload;
	races_triton_id_to_deities_valkur_id_relation: RaceDeityPayload;
	races_triton_id_to_deities_deep_sashelas_id_relation: RaceDeityPayload;
	races_triton_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_triton_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_aarakocra_id_to_deities_akadi_id_relation: RaceDeityPayload;
	races_aarakocra_id_to_deities_valkur_id_relation: RaceDeityPayload;
	races_aarakocra_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_aarakocra_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_aarakocra_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_corellon_larethian_id_relation: RaceDeityPayload;
	races_autognome_id_to_deities_garl_glittergold_id_relation: RaceDeityPayload;
	races_autognome_id_to_deities_dugmaren_brightmantle_id_relation: RaceDeityPayload;
	races_autognome_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_autognome_id_to_deities_baravar_cloakshadow_id_relation: RaceDeityPayload;
	races_autognome_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_bugbear_id_to_deities_gruumsh_one_eye_id_relation: RaceDeityPayload;
	races_bugbear_id_to_deities_luthic_id_relation: RaceDeityPayload;
	races_bugbear_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_bugbear_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_bugbear_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_centaur_id_to_deities_sehanine_moonbow_id_relation: RaceDeityPayload;
	races_centaur_id_to_deities_baervan_wildwanderer_id_relation: RaceDeityPayload;
	races_centaur_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_centaur_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_centaur_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_changeling_id_to_deities_baravar_cloakshadow_id_relation: RaceDeityPayload;
	races_changeling_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_changeling_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_changeling_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_changeling_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_dhampir_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_dhampir_id_to_deities_myrkul_id_relation: RaceDeityPayload;
	races_dhampir_id_to_deities_shar_id_relation: RaceDeityPayload;
	races_dhampir_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_dhampir_id_to_deities_jergal_id_relation: RaceDeityPayload;
	races_fairy_id_to_deities_sehanine_moonbow_id_relation: RaceDeityPayload;
	races_fairy_id_to_deities_corellon_larethian_id_relation: RaceDeityPayload;
	races_fairy_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_fairy_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_fairy_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_firbolg_id_to_deities_sehanine_moonbow_id_relation: RaceDeityPayload;
	races_firbolg_id_to_deities_baervan_wildwanderer_id_relation: RaceDeityPayload;
	races_firbolg_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_firbolg_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_firbolg_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_giff_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_giff_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_giff_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_giff_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_giff_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_goblin_id_to_deities_gruumsh_one_eye_id_relation: RaceDeityPayload;
	races_goblin_id_to_deities_luthic_id_relation: RaceDeityPayload;
	races_goblin_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_goblin_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_goblin_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_goliath_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_goliath_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_goliath_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_goliath_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_goliath_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_hadozee_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_hadozee_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_hadozee_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_hadozee_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_hadozee_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_hadozee_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_harengon_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_harengon_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_harengon_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_harengon_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_harengon_id_to_deities_corellon_larethian_id_relation: RaceDeityPayload;
	races_hexblood_id_to_deities_shar_id_relation: RaceDeityPayload;
	races_hexblood_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_hexblood_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_hexblood_id_to_deities_myrkul_id_relation: RaceDeityPayload;
	races_hexblood_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_hobgoblin_id_to_deities_gruumsh_one_eye_id_relation: RaceDeityPayload;
	races_hobgoblin_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_hobgoblin_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_hobgoblin_id_to_deities_luthic_id_relation: RaceDeityPayload;
	races_hobgoblin_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_kalashtar_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_kalashtar_id_to_deities_jergal_id_relation: RaceDeityPayload;
	races_kalashtar_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_kalashtar_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_kalashtar_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_kender_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_kender_id_to_deities_baravar_cloakshadow_id_relation: RaceDeityPayload;
	races_kender_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_kender_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_kender_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_kenku_id_to_deities_baravar_cloakshadow_id_relation: RaceDeityPayload;
	races_kenku_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_kenku_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_kenku_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_kenku_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_kobold_id_to_deities_kurtulmak_id_relation: RaceDeityPayload;
	races_kobold_id_to_deities_moradin_id_relation: RaceDeityPayload;
	races_kobold_id_to_deities_dugmaren_brightmantle_id_relation: RaceDeityPayload;
	races_kobold_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_kobold_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_leonin_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_leonin_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_leonin_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_leonin_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_leonin_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_lizardfolk_id_to_deities_sseth_id_relation: RaceDeityPayload;
	races_lizardfolk_id_to_deities_merrshaulk_id_relation: RaceDeityPayload;
	races_lizardfolk_id_to_deities_myrkul_id_relation: RaceDeityPayload;
	races_lizardfolk_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_lizardfolk_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_loxodon_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_loxodon_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_loxodon_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_loxodon_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_loxodon_id_to_deities_corellon_larethian_id_relation: RaceDeityPayload;
	races_minotaur_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_minotaur_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_minotaur_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_minotaur_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_minotaur_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_orc_id_to_deities_gruumsh_one_eye_id_relation: RaceDeityPayload;
	races_orc_id_to_deities_luthic_id_relation: RaceDeityPayload;
	races_orc_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_orc_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_orc_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_owlin_id_to_deities_sehanine_moonbow_id_relation: RaceDeityPayload;
	races_owlin_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_owlin_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_owlin_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_owlin_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_plasmoid_id_to_deities_istishia_id_relation: RaceDeityPayload;
	races_plasmoid_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_plasmoid_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_plasmoid_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_plasmoid_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_reborn_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_reborn_id_to_deities_myrkul_id_relation: RaceDeityPayload;
	races_reborn_id_to_deities_jergal_id_relation: RaceDeityPayload;
	races_reborn_id_to_deities_shar_id_relation: RaceDeityPayload;
	races_reborn_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_satyr_id_to_deities_sehanine_moonbow_id_relation: RaceDeityPayload;
	races_satyr_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_satyr_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_satyr_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_satyr_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_shifter_id_to_deities_sehanine_moonbow_id_relation: RaceDeityPayload;
	races_shifter_id_to_deities_baervan_wildwanderer_id_relation: RaceDeityPayload;
	races_shifter_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_shifter_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_shifter_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_simic_hybrid_id_to_deities_istishia_id_relation: RaceDeityPayload;
	races_simic_hybrid_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_simic_hybrid_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_simic_hybrid_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_simic_hybrid_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_tabaxi_id_to_deities_sehanine_moonbow_id_relation: RaceDeityPayload;
	races_tabaxi_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_tabaxi_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_tabaxi_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_tabaxi_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_thri_kreen_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_thri_kreen_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_thri_kreen_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_thri_kreen_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_thri_kreen_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_tortle_id_to_deities_istishia_id_relation: RaceDeityPayload;
	races_tortle_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_tortle_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_tortle_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_tortle_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_vedalken_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_vedalken_id_to_deities_jergal_id_relation: RaceDeityPayload;
	races_vedalken_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_vedalken_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_vedalken_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_warforged_id_to_deities_moradin_id_relation: RaceDeityPayload;
	races_warforged_id_to_deities_dugmaren_brightmantle_id_relation: RaceDeityPayload;
	races_warforged_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_warforged_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_warforged_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_myrkul_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_shar_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_aasimar_id_to_deities_jergal_id_relation: RaceDeityPayload;
	races_dragonborn_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_dragonborn_id_to_deities_myrkul_id_relation: RaceDeityPayload;
	races_dragonborn_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_dragonborn_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_dragonborn_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_yondalla_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_myrkul_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_dwarf_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_baervan_wildwanderer_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_shar_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_myrkul_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_beshaba_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_bane_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_kelemvor_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_istishia_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_valkur_id_relation: RaceDeityPayload;
	races_genasi_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_genasi_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_genasi_id_to_deities_moradin_id_relation: RaceDeityPayload;
	races_genasi_id_to_deities_dugmaren_brightmantle_id_relation: RaceDeityPayload;
	races_genasi_id_to_deities_tempus_id_relation: RaceDeityPayload;
	races_gnome_id_to_deities_sehanine_moonbow_id_relation: RaceDeityPayload;
	races_gnome_id_to_deities_tymora_id_relation: RaceDeityPayload;
	races_gnome_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_gnome_id_to_deities_dugmaren_brightmantle_id_relation: RaceDeityPayload;
	races_gnome_id_to_deities_lathander_id_relation: RaceDeityPayload;
	races_halfling_id_to_deities_baravar_cloakshadow_id_relation: RaceDeityPayload;
	races_halfling_id_to_deities_selune_id_relation: RaceDeityPayload;
	races_halfling_id_to_deities_sehanine_moonbow_id_relation: RaceDeityPayload;
	races_orc_id_to_deities_bahgtru_id_relation: RaceDeityPayload;
	races_orc_id_to_deities_ilneval_id_relation: RaceDeityPayload;
	races_orc_id_to_deities_shargaas_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_eilistraee_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_hanali_celanil_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_labelas_enoreth_id_relation: RaceDeityPayload;
	races_elf_id_to_deities_solonor_thelandira_id_relation: RaceDeityPayload;
	races_goblin_id_to_deities_maglubiyet_id_relation: RaceDeityPayload;
	races_goblin_id_to_deities_khurgorbaeyag_id_relation: RaceDeityPayload;
	races_goblin_id_to_deities_nomog_geaya_id_relation: RaceDeityPayload;
	races_goblin_id_to_deities_bargrivyek_id_relation: RaceDeityPayload;
	races_lizardfolk_id_to_deities_sekolah_id_relation: RaceDeityPayload;
	races_lizardfolk_id_to_deities_bargrivyek_id_relation: RaceDeityPayload;
	races_lizardfolk_id_to_deities_urogalan_id_relation: RaceDeityPayload;
	races_shifter_id_to_deities_the_raven_queen_id_relation: RaceDeityPayload;
	races_shifter_id_to_deities_corellon_larethian_id_relation: RaceDeityPayload;
	races_shifter_id_to_deities_mystra_id_relation: RaceDeityPayload;
	races_halfling_id_to_deities_urogalan_id_relation: RaceDeityPayload;
}

interface RaceDeityParams {
	races: Races;
	deities: Deities;
}
export async function setRaceDeity(
	params: RaceDeityParams
): Promise<RaceDeity> {
	const { races, deities } = params;
	return {
		races_human_id_to_deities_tempus_id_relation: await db.createRaceDeity({
			id: 'races-human-id-to-deities-tempus-id-relation',
			raceId: races.human.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Humans favor Tempus for warfare and strategy.`,
		}),
		races_human_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-human-id-to-deities-lathander-id-relation',
				raceId: races.human.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Humans favor Lathander for renewal and hope.`,
			}),
		races_human_id_to_deities_tymora_id_relation: await db.createRaceDeity({
			id: 'races-human-id-to-deities-tymora-id-relation',
			raceId: races.human.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Humans favor Tymora for good fortune.`,
		}),
		races_human_id_to_deities_mystra_id_relation: await db.createRaceDeity({
			id: 'races-human-id-to-deities-mystra-id-relation',
			raceId: races.human.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Humans favor Mystra for arcane knowledge.`,
		}),
		races_human_id_to_deities_selune_id_relation: await db.createRaceDeity({
			id: 'races-human-id-to-deities-selune-id-relation',
			raceId: races.human.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Humans favor Selûne for guidance and navigation.`,
		}),
		races_human_id_to_deities_kelemvor_id_relation:
			await db.createRaceDeity({
				id: 'races-human-id-to-deities-kelemvor-id-relation',
				raceId: races.human.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Humans favor Kelemvor for judgment.`,
			}),
		races_human_id_to_deities_bane_id_relation: await db.createRaceDeity({
			id: 'races-human-id-to-deities-bane-id-relation',
			raceId: races.human.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Humans favor Bane for tyranny and conquest.`,
		}),
		races_human_id_to_deities_myrkul_id_relation: await db.createRaceDeity({
			id: 'races-human-id-to-deities-myrkul-id-relation',
			raceId: races.human.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Humans favor Myrkul for undeath.`,
		}),
		races_human_id_to_deities_beshaba_id_relation: await db.createRaceDeity(
			{
				id: 'races-human-id-to-deities-beshaba-id-relation',
				raceId: races.human.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Humans favor Beshaba for misfortune.`,
			}
		),
		races_dwarf_id_to_deities_moradin_id_relation: await db.createRaceDeity(
			{
				id: 'races-dwarf-id-to-deities-moradin-id-relation',
				raceId: races.dwarf.id,
				deityId: deities.moradin.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Dwarves favor Moradin as their creator.`,
			}
		),
		races_dwarf_id_to_deities_clangeddin_silverbeard_id_relation:
			await db.createRaceDeity({
				id: 'races-dwarf-id-to-deities-clangeddin-silverbeard-id-relation',
				raceId: races.dwarf.id,
				deityId: deities.clangeddin_silverbeard.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Dwarves favor Clangeddin Silverbeard for their warrior traditions.`,
			}),
		races_dwarf_id_to_deities_berronar_truesilver_id_relation:
			await db.createRaceDeity({
				id: 'races-dwarf-id-to-deities-berronar-truesilver-id-relation',
				raceId: races.dwarf.id,
				deityId: deities.berronar_truesilver.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Dwarves favor Berronar Truesilver for their strong family values.`,
			}),
		races_dwarf_id_to_deities_dugmaren_brightmantle_id_relation:
			await db.createRaceDeity({
				id: 'races-dwarf-id-to-deities-dugmaren-brightmantle-id-relation',
				raceId: races.dwarf.id,
				deityId: deities.dugmaren_brightmantle.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dwarves favor Dugmaren Brightmantle for discovery and invention.`,
			}),
		races_dwarf_id_to_deities_vergadain_id_relation:
			await db.createRaceDeity({
				id: 'races-dwarf-id-to-deities-vergadain-id-relation',
				raceId: races.dwarf.id,
				deityId: deities.vergadain.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dwarves favor Vergadain for trade and wealth.`,
			}),
		races_elf_id_to_deities_corellon_larethian_id_relation:
			await db.createRaceDeity({
				id: 'races-elf-id-to-deities-corellon-larethian-id-relation',
				raceId: races.elf.id,
				deityId: deities.corellon_larethian.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Elves favor Corellon Larethian as their creator.`,
			}),
		races_elf_id_to_deities_sehanine_moonbow_id_relation:
			await db.createRaceDeity({
				id: 'races-elf-id-to-deities-sehanine-moonbow-id-relation',
				raceId: races.elf.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Elves favor Sehanine Moonbow for their connection to nature and dreams.`,
			}),
		races_elf_id_to_deities_mystra_id_relation: await db.createRaceDeity({
			id: 'races-elf-id-to-deities-mystra-id-relation',
			raceId: races.elf.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Elves favor Mystra for their magical abilities.`,
		}),
		races_elf_id_to_deities_selune_id_relation: await db.createRaceDeity({
			id: 'races-elf-id-to-deities-selune-id-relation',
			raceId: races.elf.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Elves favor Selûne for guidance and navigation.`,
		}),
		races_elf_id_to_deities_tymora_id_relation: await db.createRaceDeity({
			id: 'races-elf-id-to-deities-tymora-id-relation',
			raceId: races.elf.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Elves favor Tymora for good fortune.`,
		}),
		races_half_elf_id_to_deities_corellon_larethian_id_relation:
			await db.createRaceDeity({
				id: 'races-half-elf-id-to-deities-corellon-larethian-id-relation',
				raceId: races.half_elf.id,
				deityId: deities.corellon_larethian.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Half-elves favor Corellon Larethian for their elven heritage.`,
			}),
		races_half_elf_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-half-elf-id-to-deities-lathander-id-relation',
				raceId: races.half_elf.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Half-elves favor Lathander for renewal and hope.`,
			}),
		races_half_elf_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-half-elf-id-to-deities-tymora-id-relation',
				raceId: races.half_elf.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Half-elves favor Tymora for good fortune.`,
			}),
		races_half_elf_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-half-elf-id-to-deities-mystra-id-relation',
				raceId: races.half_elf.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Half-elves favor Mystra for arcane knowledge.`,
			}),
		races_half_elf_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-half-elf-id-to-deities-selune-id-relation',
				raceId: races.half_elf.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Half-elves favor Selûne for guidance and navigation.`,
			}),
		races_half_elf_id_to_deities_sehanine_moonbow_id_relation:
			await db.createRaceDeity({
				id: 'races-half-elf-id-to-deities-sehanine-moonbow-id-relation',
				raceId: races.half_elf.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Half-elves favor Sehanine Moonbow for dreams and journeys.`,
			}),
		races_half_orc_id_to_deities_gruumsh_one_eye_id_relation:
			await db.createRaceDeity({
				id: 'races-half-orc-id-to-deities-gruumsh-one-eye-id-relation',
				raceId: races.half_orc.id,
				deityId: deities.gruumsh_one_eye.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Half-orcs favor Gruumsh One-Eye for their orcish heritage.`,
			}),
		races_half_orc_id_to_deities_tempus_id_relation:
			await db.createRaceDeity({
				id: 'races-half-orc-id-to-deities-tempus-id-relation',
				raceId: races.half_orc.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Half-orcs favor Tempus for warfare.`,
			}),
		races_half_orc_id_to_deities_luthic_id_relation:
			await db.createRaceDeity({
				id: 'races-half-orc-id-to-deities-luthic-id-relation',
				raceId: races.half_orc.id,
				deityId: deities.luthic.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Half-orcs favor Luthic for maternal protection.`,
			}),
		races_half_orc_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-half-orc-id-to-deities-tymora-id-relation',
				raceId: races.half_orc.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Half-orcs favor Tymora for luck.`,
			}),
		races_half_orc_id_to_deities_kelemvor_id_relation:
			await db.createRaceDeity({
				id: 'races-half-orc-id-to-deities-kelemvor-id-relation',
				raceId: races.half_orc.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Half-orcs favor Kelemvor for judgment.`,
			}),
		races_halfling_id_to_deities_yondalla_id_relation:
			await db.createRaceDeity({
				id: 'races-halfling-id-to-deities-yondalla-id-relation',
				raceId: races.halfling.id,
				deityId: deities.yondalla.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Halflings favor Yondalla for protection and fertility.`,
			}),
		races_halfling_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-halfling-id-to-deities-tymora-id-relation',
				raceId: races.halfling.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Halflings favor Tymora for luck.`,
			}),
		races_halfling_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-halfling-id-to-deities-lathander-id-relation',
				raceId: races.halfling.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Halflings favor Lathander for renewal.`,
			}),
		races_halfling_id_to_deities_arvoreen_id_relation:
			await db.createRaceDeity({
				id: 'races-halfling-id-to-deities-arvoreen-id-relation',
				raceId: races.halfling.id,
				deityId: deities.arvoreen.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Halflings favor Arvoreen for protection.`,
			}),
		races_halfling_id_to_deities_cyrrollalee_id_relation:
			await db.createRaceDeity({
				id: 'races-halfling-id-to-deities-cyrrollalee-id-relation',
				raceId: races.halfling.id,
				deityId: deities.cyrrollalee.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Halflings favor Cyrrollalee for home life.`,
			}),
		races_gnome_id_to_deities_garl_glittergold_id_relation:
			await db.createRaceDeity({
				id: 'races-gnome-id-to-deities-garl-glittergold-id-relation',
				raceId: races.gnome.id,
				deityId: deities.garl_glittergold.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Gnomes favor Garl Glittergold for luck and protection.`,
			}),
		races_gnome_id_to_deities_mystra_id_relation: await db.createRaceDeity({
			id: 'races-gnome-id-to-deities-mystra-id-relation',
			raceId: races.gnome.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Gnomes favor Mystra for magic.`,
		}),
		races_gnome_id_to_deities_baravar_cloakshadow_id_relation:
			await db.createRaceDeity({
				id: 'races-gnome-id-to-deities-baravar-cloakshadow-id-relation',
				raceId: races.gnome.id,
				deityId: deities.baravar_cloakshadow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Gnomes favor Baravar Cloakshadow for trickery.`,
			}),
		races_gnome_id_to_deities_baervan_wildwanderer_id_relation:
			await db.createRaceDeity({
				id: 'races-gnome-id-to-deities-baervan-wildwanderer-id-relation',
				raceId: races.gnome.id,
				deityId: deities.baervan_wildwanderer.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Gnomes favor Baervan Wildwanderer for forests and travel.`,
			}),
		races_gnome_id_to_deities_segojan_earthcaller_id_relation:
			await db.createRaceDeity({
				id: 'races-gnome-id-to-deities-segojan-earthcaller-id-relation',
				raceId: races.gnome.id,
				deityId: deities.segojan_earthcaller.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Gnomes favor Segojan Earthcaller for earth and protection.`,
			}),
		races_dragonborn_id_to_deities_bahamut_id_relation:
			await db.createRaceDeity({
				id: 'races-dragonborn-id-to-deities-bahamut-id-relation',
				raceId: races.dragonborn.id,
				deityId: deities.bahamut.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Dragonborn favor Bahamut for their dragon heritage.`,
			}),
		races_dragonborn_id_to_deities_tiamat_id_relation:
			await db.createRaceDeity({
				id: 'races-dragonborn-id-to-deities-tiamat-id-relation',
				raceId: races.dragonborn.id,
				deityId: deities.tiamat.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Dragonborn favor Tiamat for their dragon heritage.`,
			}),
		races_dragonborn_id_to_deities_tempus_id_relation:
			await db.createRaceDeity({
				id: 'races-dragonborn-id-to-deities-tempus-id-relation',
				raceId: races.dragonborn.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Dragonborn favor Tempus for strategy and battle.`,
			}),
		races_dragonborn_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-dragonborn-id-to-deities-lathander-id-relation',
				raceId: races.dragonborn.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dragonborn favor Lathander for renewal and hope.`,
			}),
		races_dragonborn_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-dragonborn-id-to-deities-tymora-id-relation',
				raceId: races.dragonborn.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dragonborn favor Tymora for good fortune.`,
			}),
		races_tiefling_id_to_deities_asmodeus_id_relation:
			await db.createRaceDeity({
				id: 'races-tiefling-id-to-deities-asmodeus-id-relation',
				raceId: races.tiefling.id,
				deityId: deities.asmodeus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tieflings favor Asmodeus for their infernal heritage.`,
			}),
		races_tiefling_id_to_deities_bane_id_relation: await db.createRaceDeity(
			{
				id: 'races-tiefling-id-to-deities-bane-id-relation',
				raceId: races.tiefling.id,
				deityId: deities.bane.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tieflings favor Bane for tyranny and conquest.`,
			}
		),
		races_tiefling_id_to_deities_myrkul_id_relation:
			await db.createRaceDeity({
				id: 'races-tiefling-id-to-deities-myrkul-id-relation',
				raceId: races.tiefling.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tieflings favor Myrkul for undeath.`,
			}),
		races_tiefling_id_to_deities_shar_id_relation: await db.createRaceDeity(
			{
				id: 'races-tiefling-id-to-deities-shar-id-relation',
				raceId: races.tiefling.id,
				deityId: deities.shar.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Tieflings favor Shar for secrets and darkness.`,
			}
		),
		races_tiefling_id_to_deities_beshaba_id_relation:
			await db.createRaceDeity({
				id: 'races-tiefling-id-to-deities-beshaba-id-relation',
				raceId: races.tiefling.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Tieflings favor Beshaba for misfortune.`,
			}),
		races_genasi_id_to_deities_akadi_id_relation: await db.createRaceDeity({
			id: 'races-genasi-id-to-deities-akadi-id-relation',
			raceId: races.genasi.id,
			deityId: deities.akadi.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Genasi favor Akadi for air.`,
		}),
		races_genasi_id_to_deities_grumbar_id_relation:
			await db.createRaceDeity({
				id: 'races-genasi-id-to-deities-grumbar-id-relation',
				raceId: races.genasi.id,
				deityId: deities.grumbar.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Genasi favor Grumbar for earth.`,
			}),
		races_genasi_id_to_deities_kossuth_id_relation:
			await db.createRaceDeity({
				id: 'races-genasi-id-to-deities-kossuth-id-relation',
				raceId: races.genasi.id,
				deityId: deities.kossuth.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Genasi favor Kossuth for fire.`,
			}),
		races_genasi_id_to_deities_istishia_id_relation:
			await db.createRaceDeity({
				id: 'races-genasi-id-to-deities-istishia-id-relation',
				raceId: races.genasi.id,
				deityId: deities.istishia.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Genasi favor Istishia for water.`,
			}),
		races_genasi_id_to_deities_mystra_id_relation: await db.createRaceDeity(
			{
				id: 'races-genasi-id-to-deities-mystra-id-relation',
				raceId: races.genasi.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Genasi favor Mystra for arcane knowledge.`,
			}
		),
		races_genasi_id_to_deities_selune_id_relation: await db.createRaceDeity(
			{
				id: 'races-genasi-id-to-deities-selune-id-relation',
				raceId: races.genasi.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Genasi favor Selûne for guidance and navigation.`,
			}
		),
		races_gith_id_to_deities_gith_id_relation: await db.createRaceDeity({
			id: 'races-gith-id-to-deities-gith-id-relation',
			raceId: races.gith.id,
			deityId: deities.gith.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Gith favor Gith for their traditional deity.`,
		}),
		races_gith_id_to_deities_vlaakith_id_relation: await db.createRaceDeity(
			{
				id: 'races-gith-id-to-deities-vlaakith-id-relation',
				raceId: races.gith.id,
				deityId: deities.vlaakith.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Gith favor Vlaakith for their traditional deity.`,
			}
		),
		races_gith_id_to_deities_tempus_id_relation: await db.createRaceDeity({
			id: 'races-gith-id-to-deities-tempus-id-relation',
			raceId: races.gith.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Gith favor Tempus for strategy and battle.`,
		}),
		races_gith_id_to_deities_kelemvor_id_relation: await db.createRaceDeity(
			{
				id: 'races-gith-id-to-deities-kelemvor-id-relation',
				raceId: races.gith.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Gith favor Kelemvor for judgment.`,
			}
		),
		races_gith_id_to_deities_tymora_id_relation: await db.createRaceDeity({
			id: 'races-gith-id-to-deities-tymora-id-relation',
			raceId: races.gith.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Gith favor Tymora for luck.`,
		}),
		races_yuan_ti_id_to_deities_sseth_id_relation: await db.createRaceDeity(
			{
				id: 'races-yuan-ti-id-to-deities-sseth-id-relation',
				raceId: races.yuan_ti.id,
				deityId: deities.sseth.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Yuan-Ti favor Sseth for their serpent deity.`,
			}
		),
		races_yuan_ti_id_to_deities_merrshaulk_id_relation:
			await db.createRaceDeity({
				id: 'races-yuan-ti-id-to-deities-merrshaulk-id-relation',
				raceId: races.yuan_ti.id,
				deityId: deities.merrshaulk.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Yuan-Ti favor Merrshaulk for their serpent deity.`,
			}),
		races_yuan_ti_id_to_deities_myrkul_id_relation:
			await db.createRaceDeity({
				id: 'races-yuan-ti-id-to-deities-myrkul-id-relation',
				raceId: races.yuan_ti.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Yuan-Ti favor Myrkul for undeath.`,
			}),
		races_yuan_ti_id_to_deities_bane_id_relation: await db.createRaceDeity({
			id: 'races-yuan-ti-id-to-deities-bane-id-relation',
			raceId: races.yuan_ti.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Yuan-Ti favor Bane for tyranny and power.`,
		}),
		races_yuan_ti_id_to_deities_beshaba_id_relation:
			await db.createRaceDeity({
				id: 'races-yuan-ti-id-to-deities-beshaba-id-relation',
				raceId: races.yuan_ti.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Yuan-Ti favor Beshaba for misfortune.`,
			}),
		races_triton_id_to_deities_umberlee_id_relation:
			await db.createRaceDeity({
				id: 'races-triton-id-to-deities-umberlee-id-relation',
				raceId: races.triton.id,
				deityId: deities.umberlee.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tritons favor Umberlee for the sea's power.`,
			}),
		races_triton_id_to_deities_valkur_id_relation: await db.createRaceDeity(
			{
				id: 'races-triton-id-to-deities-valkur-id-relation',
				raceId: races.triton.id,
				deityId: deities.valkur.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tritons favor Valkur for protection and navigation.`,
			}
		),
		races_triton_id_to_deities_deep_sashelas_id_relation:
			await db.createRaceDeity({
				id: 'races-triton-id-to-deities-deep-sashelas-id-relation',
				raceId: races.triton.id,
				deityId: deities.deep_sashelas.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tritons favor Deep Sashelas for creativity.`,
			}),
		races_triton_id_to_deities_selune_id_relation: await db.createRaceDeity(
			{
				id: 'races-triton-id-to-deities-selune-id-relation',
				raceId: races.triton.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Tritons favor Selûne for guidance and navigation.`,
			}
		),
		races_triton_id_to_deities_tymora_id_relation: await db.createRaceDeity(
			{
				id: 'races-triton-id-to-deities-tymora-id-relation',
				raceId: races.triton.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Tritons favor Tymora for luck.`,
			}
		),
		races_aarakocra_id_to_deities_akadi_id_relation:
			await db.createRaceDeity({
				id: 'races-aarakocra-id-to-deities-akadi-id-relation',
				raceId: races.aarakocra.id,
				deityId: deities.akadi.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Aarakocra favor Akadi for air and wind.`,
			}),
		races_aarakocra_id_to_deities_valkur_id_relation:
			await db.createRaceDeity({
				id: 'races-aarakocra-id-to-deities-valkur-id-relation',
				raceId: races.aarakocra.id,
				deityId: deities.valkur.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Aarakocra favor Valkur for protection and navigation.`,
			}),
		races_aarakocra_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-aarakocra-id-to-deities-tymora-id-relation',
				raceId: races.aarakocra.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Aarakocra favor Tymora for luck.`,
			}),
		races_aarakocra_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-aarakocra-id-to-deities-lathander-id-relation',
				raceId: races.aarakocra.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Aarakocra favor Lathander for renewal and hope.`,
			}),
		races_aarakocra_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-aarakocra-id-to-deities-selune-id-relation',
				raceId: races.aarakocra.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Aarakocra favor Selûne for guidance and navigation.`,
			}),
		races_aasimar_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-aasimar-id-to-deities-lathander-id-relation',
				raceId: races.aasimar.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Aasimar favor Lathander for renewal and hope.`,
			}),
		races_aasimar_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-aasimar-id-to-deities-tymora-id-relation',
				raceId: races.aasimar.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Aasimar favor Tymora for good fortune.`,
			}),
		races_aasimar_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-aasimar-id-to-deities-selune-id-relation',
				raceId: races.aasimar.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Aasimar favor Selûne for guidance and navigation.`,
			}),
		races_aasimar_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-aasimar-id-to-deities-mystra-id-relation',
				raceId: races.aasimar.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Aasimar favor Mystra for arcane knowledge.`,
			}),
		races_aasimar_id_to_deities_corellon_larethian_id_relation:
			await db.createRaceDeity({
				id: 'races-aasimar-id-to-deities-corellon-larethian-id-relation',
				raceId: races.aasimar.id,
				deityId: deities.corellon_larethian.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Aasimar favor Corellon Larethian for elven magic.`,
			}),
		races_autognome_id_to_deities_garl_glittergold_id_relation:
			await db.createRaceDeity({
				id: 'races-autognome-id-to-deities-garl-glittergold-id-relation',
				raceId: races.autognome.id,
				deityId: deities.garl_glittergold.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Autognomes favor Garl Glittergold for protection and luck.`,
			}),
		races_autognome_id_to_deities_dugmaren_brightmantle_id_relation:
			await db.createRaceDeity({
				id: 'races-autognome-id-to-deities-dugmaren-brightmantle-id-relation',
				raceId: races.autognome.id,
				deityId: deities.dugmaren_brightmantle.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Autognomes favor Dugmaren Brightmantle for discovery and invention.`,
			}),
		races_autognome_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-autognome-id-to-deities-mystra-id-relation',
				raceId: races.autognome.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Autognomes favor Mystra for arcane knowledge.`,
			}),
		races_autognome_id_to_deities_baravar_cloakshadow_id_relation:
			await db.createRaceDeity({
				id: 'races-autognome-id-to-deities-baravar-cloakshadow-id-relation',
				raceId: races.autognome.id,
				deityId: deities.baravar_cloakshadow.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Autognomes favor Baravar Cloakshadow for trickery and illusions.`,
			}),
		races_autognome_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-autognome-id-to-deities-tymora-id-relation',
				raceId: races.autognome.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Autognomes favor Tymora for luck.`,
			}),
		races_bugbear_id_to_deities_gruumsh_one_eye_id_relation:
			await db.createRaceDeity({
				id: 'races-bugbear-id-to-deities-gruumsh-one-eye-id-relation',
				raceId: races.bugbear.id,
				deityId: deities.gruumsh_one_eye.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Bugbears favor Gruumsh One-Eye for strength and conquest.`,
			}),
		races_bugbear_id_to_deities_luthic_id_relation:
			await db.createRaceDeity({
				id: 'races-bugbear-id-to-deities-luthic-id-relation',
				raceId: races.bugbear.id,
				deityId: deities.luthic.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Bugbears favor Luthic for protection and fertility.`,
			}),
		races_bugbear_id_to_deities_bane_id_relation: await db.createRaceDeity({
			id: 'races-bugbear-id-to-deities-bane-id-relation',
			raceId: races.bugbear.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Bugbears favor Bane for tyranny and power.`,
		}),
		races_bugbear_id_to_deities_tempus_id_relation:
			await db.createRaceDeity({
				id: 'races-bugbear-id-to-deities-tempus-id-relation',
				raceId: races.bugbear.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Bugbears favor Tempus for strategy and battle.`,
			}),
		races_bugbear_id_to_deities_beshaba_id_relation:
			await db.createRaceDeity({
				id: 'races-bugbear-id-to-deities-beshaba-id-relation',
				raceId: races.bugbear.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Bugbears favor Beshaba for misfortune.`,
			}),
		races_centaur_id_to_deities_sehanine_moonbow_id_relation:
			await db.createRaceDeity({
				id: 'races-centaur-id-to-deities-sehanine-moonbow-id-relation',
				raceId: races.centaur.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Centaurs favor Sehanine Moonbow for dreams and journeys.`,
			}),
		races_centaur_id_to_deities_baervan_wildwanderer_id_relation:
			await db.createRaceDeity({
				id: 'races-centaur-id-to-deities-baervan-wildwanderer-id-relation',
				raceId: races.centaur.id,
				deityId: deities.baervan_wildwanderer.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Centaurs favor Baervan Wildwanderer for forests and travel.`,
			}),
		races_centaur_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-centaur-id-to-deities-selune-id-relation',
				raceId: races.centaur.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Centaurs favor Selûne for navigation and wanderers.`,
			}),
		races_centaur_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-centaur-id-to-deities-tymora-id-relation',
				raceId: races.centaur.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Centaurs favor Tymora for luck.`,
			}),
		races_centaur_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-centaur-id-to-deities-lathander-id-relation',
				raceId: races.centaur.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Centaurs favor Lathander for renewal and hope.`,
			}),
		races_changeling_id_to_deities_baravar_cloakshadow_id_relation:
			await db.createRaceDeity({
				id: 'races-changeling-id-to-deities-baravar-cloakshadow-id-relation',
				raceId: races.changeling.id,
				deityId: deities.baravar_cloakshadow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Changelings favor Baravar Cloakshadow for trickery and illusions.`,
			}),
		races_changeling_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-changeling-id-to-deities-mystra-id-relation',
				raceId: races.changeling.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Changelings favor Mystra for arcane knowledge.`,
			}),
		races_changeling_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-changeling-id-to-deities-tymora-id-relation',
				raceId: races.changeling.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Changelings favor Tymora for luck.`,
			}),
		races_changeling_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-changeling-id-to-deities-selune-id-relation',
				raceId: races.changeling.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Changelings favor Selûne for guidance and navigation.`,
			}),
		races_changeling_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-changeling-id-to-deities-lathander-id-relation',
				raceId: races.changeling.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Changelings favor Lathander for renewal and hope.`,
			}),
		races_dhampir_id_to_deities_kelemvor_id_relation:
			await db.createRaceDeity({
				id: 'races-dhampir-id-to-deities-kelemvor-id-relation',
				raceId: races.dhampir.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Dhampirs favor Kelemvor for judgment.`,
			}),
		races_dhampir_id_to_deities_myrkul_id_relation:
			await db.createRaceDeity({
				id: 'races-dhampir-id-to-deities-myrkul-id-relation',
				raceId: races.dhampir.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Dhampirs favor Myrkul for undeath.`,
			}),
		races_dhampir_id_to_deities_shar_id_relation: await db.createRaceDeity({
			id: 'races-dhampir-id-to-deities-shar-id-relation',
			raceId: races.dhampir.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Dhampirs favor Shar for secrets and darkness.`,
		}),
		races_dhampir_id_to_deities_beshaba_id_relation:
			await db.createRaceDeity({
				id: 'races-dhampir-id-to-deities-beshaba-id-relation',
				raceId: races.dhampir.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dhampirs favor Beshaba for misfortune.`,
			}),
		races_dhampir_id_to_deities_jergal_id_relation:
			await db.createRaceDeity({
				id: 'races-dhampir-id-to-deities-jergal-id-relation',
				raceId: races.dhampir.id,
				deityId: deities.jergal.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dhampirs favor Jergal for records of the dead.`,
			}),
		races_fairy_id_to_deities_sehanine_moonbow_id_relation:
			await db.createRaceDeity({
				id: 'races-fairy-id-to-deities-sehanine-moonbow-id-relation',
				raceId: races.fairy.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Fairies favor Sehanine Moonbow for dreams and journeys.`,
			}),
		races_fairy_id_to_deities_corellon_larethian_id_relation:
			await db.createRaceDeity({
				id: 'races-fairy-id-to-deities-corellon-larethian-id-relation',
				raceId: races.fairy.id,
				deityId: deities.corellon_larethian.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Fairies favor Corellon Larethian for elven magic.`,
			}),
		races_fairy_id_to_deities_tymora_id_relation: await db.createRaceDeity({
			id: 'races-fairy-id-to-deities-tymora-id-relation',
			raceId: races.fairy.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Fairies favor Tymora for luck.`,
		}),
		races_fairy_id_to_deities_selune_id_relation: await db.createRaceDeity({
			id: 'races-fairy-id-to-deities-selune-id-relation',
			raceId: races.fairy.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Fairies favor Selûne for guidance and navigation.`,
		}),
		races_fairy_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-fairy-id-to-deities-lathander-id-relation',
				raceId: races.fairy.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Fairies favor Lathander for renewal and hope.`,
			}),
		races_firbolg_id_to_deities_sehanine_moonbow_id_relation:
			await db.createRaceDeity({
				id: 'races-firbolg-id-to-deities-sehanine-moonbow-id-relation',
				raceId: races.firbolg.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Firbolgs favor Sehanine Moonbow for dreams and journeys.`,
			}),
		races_firbolg_id_to_deities_baervan_wildwanderer_id_relation:
			await db.createRaceDeity({
				id: 'races-firbolg-id-to-deities-baervan-wildwanderer-id-relation',
				raceId: races.firbolg.id,
				deityId: deities.baervan_wildwanderer.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Firbolgs favor Baervan Wildwanderer for forests and travel.`,
			}),
		races_firbolg_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-firbolg-id-to-deities-selune-id-relation',
				raceId: races.firbolg.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Firbolgs favor Selûne for navigation and wanderers.`,
			}),
		races_firbolg_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-firbolg-id-to-deities-tymora-id-relation',
				raceId: races.firbolg.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Firbolgs favor Tymora for luck.`,
			}),
		races_firbolg_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-firbolg-id-to-deities-lathander-id-relation',
				raceId: races.firbolg.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Firbolgs favor Lathander for renewal and hope.`,
			}),
		races_giff_id_to_deities_tempus_id_relation: await db.createRaceDeity({
			id: 'races-giff-id-to-deities-tempus-id-relation',
			raceId: races.giff.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Giff favor Tempus for strategy and battle.`,
		}),
		races_giff_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-giff-id-to-deities-lathander-id-relation',
				raceId: races.giff.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Giff favor Lathander for renewal and hope.`,
			}),
		races_giff_id_to_deities_tymora_id_relation: await db.createRaceDeity({
			id: 'races-giff-id-to-deities-tymora-id-relation',
			raceId: races.giff.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Giff favor Tymora for luck.`,
		}),
		races_giff_id_to_deities_bane_id_relation: await db.createRaceDeity({
			id: 'races-giff-id-to-deities-bane-id-relation',
			raceId: races.giff.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Giff favor Bane for tyranny and power.`,
		}),
		races_giff_id_to_deities_kelemvor_id_relation: await db.createRaceDeity(
			{
				id: 'races-giff-id-to-deities-kelemvor-id-relation',
				raceId: races.giff.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Giff favor Kelemvor for judgment.`,
			}
		),
		races_goblin_id_to_deities_gruumsh_one_eye_id_relation:
			await db.createRaceDeity({
				id: 'races-goblin-id-to-deities-gruumsh-one-eye-id-relation',
				raceId: races.goblin.id,
				deityId: deities.gruumsh_one_eye.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Goblins favor Gruumsh One-Eye for strength and conquest.`,
			}),
		races_goblin_id_to_deities_luthic_id_relation: await db.createRaceDeity(
			{
				id: 'races-goblin-id-to-deities-luthic-id-relation',
				raceId: races.goblin.id,
				deityId: deities.luthic.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Goblins favor Luthic for protection and fertility.`,
			}
		),
		races_goblin_id_to_deities_beshaba_id_relation:
			await db.createRaceDeity({
				id: 'races-goblin-id-to-deities-beshaba-id-relation',
				raceId: races.goblin.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Goblins favor Beshaba for misfortune.`,
			}),
		races_goblin_id_to_deities_bane_id_relation: await db.createRaceDeity({
			id: 'races-goblin-id-to-deities-bane-id-relation',
			raceId: races.goblin.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Goblins favor Bane for tyranny and power.`,
		}),
		races_goblin_id_to_deities_tymora_id_relation: await db.createRaceDeity(
			{
				id: 'races-goblin-id-to-deities-tymora-id-relation',
				raceId: races.goblin.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Goblins favor Tymora for luck.`,
			}
		),
		races_goliath_id_to_deities_tempus_id_relation:
			await db.createRaceDeity({
				id: 'races-goliath-id-to-deities-tempus-id-relation',
				raceId: races.goliath.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Goliaths favor Tempus for strategy and battle.`,
			}),
		races_goliath_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-goliath-id-to-deities-lathander-id-relation',
				raceId: races.goliath.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Goliaths favor Lathander for renewal and hope.`,
			}),
		races_goliath_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-goliath-id-to-deities-tymora-id-relation',
				raceId: races.goliath.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Goliaths favor Tymora for luck.`,
			}),
		races_goliath_id_to_deities_kelemvor_id_relation:
			await db.createRaceDeity({
				id: 'races-goliath-id-to-deities-kelemvor-id-relation',
				raceId: races.goliath.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Goliaths favor Kelemvor for judgment.`,
			}),
		races_goliath_id_to_deities_bane_id_relation: await db.createRaceDeity({
			id: 'races-goliath-id-to-deities-bane-id-relation',
			raceId: races.goliath.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Goliaths favor Bane for tyranny and power.`,
		}),
		races_hadozee_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-hadozee-id-to-deities-tymora-id-relation',
				raceId: races.hadozee.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Hadozee favor Tymora for luck.`,
			}),
		races_hadozee_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-hadozee-id-to-deities-lathander-id-relation',
				raceId: races.hadozee.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Hadozee favor Lathander for guidance and hope.`,
			}),
		races_hadozee_id_to_deities_tempus_id_relation:
			await db.createRaceDeity({
				id: 'races-hadozee-id-to-deities-tempus-id-relation',
				raceId: races.hadozee.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Hadozee favor Tempus for strategy and battle.`,
			}),
		races_hadozee_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-hadozee-id-to-deities-selune-id-relation',
				raceId: races.hadozee.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Hadozee favor Selûne for guidance and navigation.`,
			}),
		races_hadozee_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-hadozee-id-to-deities-mystra-id-relation',
				raceId: races.hadozee.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Hadozee favor Mystra for arcane knowledge.`,
			}),
		races_hadozee_id_to_deities_kelemvor_id_relation:
			await db.createRaceDeity({
				id: 'races-hadozee-id-to-deities-kelemvor-id-relation',
				raceId: races.hadozee.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Hadozee favor Kelemvor for judgment.`,
			}),
		races_harengon_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-harengon-id-to-deities-tymora-id-relation',
				raceId: races.harengon.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Harengons favor Tymora for luck.`,
			}),
		races_harengon_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-harengon-id-to-deities-lathander-id-relation',
				raceId: races.harengon.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Harengons favor Lathander for renewal and hope.`,
			}),
		races_harengon_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-harengon-id-to-deities-selune-id-relation',
				raceId: races.harengon.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Harengons favor Selûne for guidance and navigation.`,
			}),
		races_harengon_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-harengon-id-to-deities-mystra-id-relation',
				raceId: races.harengon.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Harengons favor Mystra for arcane knowledge.`,
			}),
		races_harengon_id_to_deities_corellon_larethian_id_relation:
			await db.createRaceDeity({
				id: 'races-harengon-id-to-deities-corellon-larethian-id-relation',
				raceId: races.harengon.id,
				deityId: deities.corellon_larethian.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Harengons favor Corellon Larethian for elven magic.`,
			}),
		races_hexblood_id_to_deities_shar_id_relation: await db.createRaceDeity(
			{
				id: 'races-hexblood-id-to-deities-shar-id-relation',
				raceId: races.hexblood.id,
				deityId: deities.shar.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Hexbloods favor Shar for secrets and darkness.`,
			}
		),
		races_hexblood_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-hexblood-id-to-deities-mystra-id-relation',
				raceId: races.hexblood.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Hexbloods favor Mystra for arcane knowledge.`,
			}),
		races_hexblood_id_to_deities_beshaba_id_relation:
			await db.createRaceDeity({
				id: 'races-hexblood-id-to-deities-beshaba-id-relation',
				raceId: races.hexblood.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Hexbloods favor Beshaba for misfortune.`,
			}),
		races_hexblood_id_to_deities_myrkul_id_relation:
			await db.createRaceDeity({
				id: 'races-hexblood-id-to-deities-myrkul-id-relation',
				raceId: races.hexblood.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Hexbloods favor Myrkul for undeath.`,
			}),
		races_hexblood_id_to_deities_kelemvor_id_relation:
			await db.createRaceDeity({
				id: 'races-hexblood-id-to-deities-kelemvor-id-relation',
				raceId: races.hexblood.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Hexbloods favor Kelemvor for judgment.`,
			}),
		races_hobgoblin_id_to_deities_gruumsh_one_eye_id_relation:
			await db.createRaceDeity({
				id: 'races-hobgoblin-id-to-deities-gruumsh-one-eye-id-relation',
				raceId: races.hobgoblin.id,
				deityId: deities.gruumsh_one_eye.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Hobgoblins favor Gruumsh One-Eye for strength and conquest.`,
			}),
		races_hobgoblin_id_to_deities_bane_id_relation:
			await db.createRaceDeity({
				id: 'races-hobgoblin-id-to-deities-bane-id-relation',
				raceId: races.hobgoblin.id,
				deityId: deities.bane.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Hobgoblins favor Bane for tyranny and power.`,
			}),
		races_hobgoblin_id_to_deities_tempus_id_relation:
			await db.createRaceDeity({
				id: 'races-hobgoblin-id-to-deities-tempus-id-relation',
				raceId: races.hobgoblin.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Hobgoblins favor Tempus for strategy and battle.`,
			}),
		races_hobgoblin_id_to_deities_luthic_id_relation:
			await db.createRaceDeity({
				id: 'races-hobgoblin-id-to-deities-luthic-id-relation',
				raceId: races.hobgoblin.id,
				deityId: deities.luthic.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Hobgoblins favor Luthic for protection and fertility.`,
			}),
		races_hobgoblin_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-hobgoblin-id-to-deities-tymora-id-relation',
				raceId: races.hobgoblin.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Hobgoblins favor Tymora for luck.`,
			}),
		races_kalashtar_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-kalashtar-id-to-deities-mystra-id-relation',
				raceId: races.kalashtar.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Kalashtar favor Mystra for arcane knowledge.`,
			}),
		races_kalashtar_id_to_deities_jergal_id_relation:
			await db.createRaceDeity({
				id: 'races-kalashtar-id-to-deities-jergal-id-relation',
				raceId: races.kalashtar.id,
				deityId: deities.jergal.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Kalashtar favor Jergal for records and fate.`,
			}),
		races_kalashtar_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-kalashtar-id-to-deities-tymora-id-relation',
				raceId: races.kalashtar.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Kalashtar favor Tymora for luck.`,
			}),
		races_kalashtar_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-kalashtar-id-to-deities-selune-id-relation',
				raceId: races.kalashtar.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Kalashtar favor Selûne for guidance and navigation.`,
			}),
		races_kalashtar_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-kalashtar-id-to-deities-lathander-id-relation',
				raceId: races.kalashtar.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Kalashtar favor Lathander for renewal and hope.`,
			}),
		races_kender_id_to_deities_tymora_id_relation: await db.createRaceDeity(
			{
				id: 'races-kender-id-to-deities-tymora-id-relation',
				raceId: races.kender.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Kender favor Tymora for luck.`,
			}
		),
		races_kender_id_to_deities_baravar_cloakshadow_id_relation:
			await db.createRaceDeity({
				id: 'races-kender-id-to-deities-baravar-cloakshadow-id-relation',
				raceId: races.kender.id,
				deityId: deities.baravar_cloakshadow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Kender favor Baravar Cloakshadow for trickery and illusions.`,
			}),
		races_kender_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-kender-id-to-deities-lathander-id-relation',
				raceId: races.kender.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Kender favor Lathander for renewal and hope.`,
			}),
		races_kender_id_to_deities_selune_id_relation: await db.createRaceDeity(
			{
				id: 'races-kender-id-to-deities-selune-id-relation',
				raceId: races.kender.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Kender favor Selûne for guidance and navigation.`,
			}
		),
		races_kender_id_to_deities_mystra_id_relation: await db.createRaceDeity(
			{
				id: 'races-kender-id-to-deities-mystra-id-relation',
				raceId: races.kender.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Kender favor Mystra for arcane knowledge.`,
			}
		),
		races_kenku_id_to_deities_baravar_cloakshadow_id_relation:
			await db.createRaceDeity({
				id: 'races-kenku-id-to-deities-baravar-cloakshadow-id-relation',
				raceId: races.kenku.id,
				deityId: deities.baravar_cloakshadow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Kenku favor Baravar Cloakshadow for trickery and illusions.`,
			}),
		races_kenku_id_to_deities_tymora_id_relation: await db.createRaceDeity({
			id: 'races-kenku-id-to-deities-tymora-id-relation',
			raceId: races.kenku.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kenku favor Tymora for luck.`,
		}),
		races_kenku_id_to_deities_mystra_id_relation: await db.createRaceDeity({
			id: 'races-kenku-id-to-deities-mystra-id-relation',
			raceId: races.kenku.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Kenku favor Mystra for arcane knowledge.`,
		}),
		races_kenku_id_to_deities_selune_id_relation: await db.createRaceDeity({
			id: 'races-kenku-id-to-deities-selune-id-relation',
			raceId: races.kenku.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Kenku favor Selûne for guidance and navigation.`,
		}),
		races_kenku_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-kenku-id-to-deities-lathander-id-relation',
				raceId: races.kenku.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Kenku favor Lathander for renewal and hope.`,
			}),
		races_kobold_id_to_deities_kurtulmak_id_relation:
			await db.createRaceDeity({
				id: 'races-kobold-id-to-deities-kurtulmak-id-relation',
				raceId: races.kobold.id,
				deityId: deities.kurtulmak.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Kobolds favor Kurtulmak for their traditional deity.`,
			}),
		races_kobold_id_to_deities_moradin_id_relation:
			await db.createRaceDeity({
				id: 'races-kobold-id-to-deities-moradin-id-relation',
				raceId: races.kobold.id,
				deityId: deities.moradin.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Kobolds favor Moradin for creation and craftsmanship.`,
			}),
		races_kobold_id_to_deities_dugmaren_brightmantle_id_relation:
			await db.createRaceDeity({
				id: 'races-kobold-id-to-deities-dugmaren-brightmantle-id-relation',
				raceId: races.kobold.id,
				deityId: deities.dugmaren_brightmantle.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Kobolds favor Dugmaren Brightmantle for discovery and invention.`,
			}),
		races_kobold_id_to_deities_tymora_id_relation: await db.createRaceDeity(
			{
				id: 'races-kobold-id-to-deities-tymora-id-relation',
				raceId: races.kobold.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Kobolds favor Tymora for luck.`,
			}
		),
		races_kobold_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-kobold-id-to-deities-lathander-id-relation',
				raceId: races.kobold.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Kobolds favor Lathander for renewal and hope.`,
			}),
		races_leonin_id_to_deities_tempus_id_relation: await db.createRaceDeity(
			{
				id: 'races-leonin-id-to-deities-tempus-id-relation',
				raceId: races.leonin.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Leonin favor Tempus for strategy and battle.`,
			}
		),
		races_leonin_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-leonin-id-to-deities-lathander-id-relation',
				raceId: races.leonin.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Leonin favor Lathander for renewal and hope.`,
			}),
		races_leonin_id_to_deities_tymora_id_relation: await db.createRaceDeity(
			{
				id: 'races-leonin-id-to-deities-tymora-id-relation',
				raceId: races.leonin.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Leonin favor Tymora for luck.`,
			}
		),
		races_leonin_id_to_deities_bane_id_relation: await db.createRaceDeity({
			id: 'races-leonin-id-to-deities-bane-id-relation',
			raceId: races.leonin.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Leonin favor Bane for tyranny and power.`,
		}),
		races_leonin_id_to_deities_kelemvor_id_relation:
			await db.createRaceDeity({
				id: 'races-leonin-id-to-deities-kelemvor-id-relation',
				raceId: races.leonin.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Leonin favor Kelemvor for judgment.`,
			}),
		races_lizardfolk_id_to_deities_sseth_id_relation:
			await db.createRaceDeity({
				id: 'races-lizardfolk-id-to-deities-sseth-id-relation',
				raceId: races.lizardfolk.id,
				deityId: deities.sseth.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Lizardfolk favor Sseth for their traditional deity.`,
			}),
		races_lizardfolk_id_to_deities_merrshaulk_id_relation:
			await db.createRaceDeity({
				id: 'races-lizardfolk-id-to-deities-merrshaulk-id-relation',
				raceId: races.lizardfolk.id,
				deityId: deities.merrshaulk.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Lizardfolk favor Merrshaulk for their serpent god.`,
			}),
		races_lizardfolk_id_to_deities_myrkul_id_relation:
			await db.createRaceDeity({
				id: 'races-lizardfolk-id-to-deities-myrkul-id-relation',
				raceId: races.lizardfolk.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Lizardfolk favor Myrkul for death and decay.`,
			}),
		races_lizardfolk_id_to_deities_bane_id_relation:
			await db.createRaceDeity({
				id: 'races-lizardfolk-id-to-deities-bane-id-relation',
				raceId: races.lizardfolk.id,
				deityId: deities.bane.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Lizardfolk favor Bane for tyranny and power.`,
			}),
		races_lizardfolk_id_to_deities_beshaba_id_relation:
			await db.createRaceDeity({
				id: 'races-lizardfolk-id-to-deities-beshaba-id-relation',
				raceId: races.lizardfolk.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Lizardfolk favor Beshaba for misfortune.`,
			}),
		races_loxodon_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-loxodon-id-to-deities-lathander-id-relation',
				raceId: races.loxodon.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Loxodon favor Lathander for renewal and hope.`,
			}),
		races_loxodon_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-loxodon-id-to-deities-tymora-id-relation',
				raceId: races.loxodon.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Loxodon favor Tymora for luck.`,
			}),
		races_loxodon_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-loxodon-id-to-deities-selune-id-relation',
				raceId: races.loxodon.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Loxodon favor Selûne for guidance and navigation.`,
			}),
		races_loxodon_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-loxodon-id-to-deities-mystra-id-relation',
				raceId: races.loxodon.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Loxodon favor Mystra for arcane knowledge.`,
			}),
		races_loxodon_id_to_deities_corellon_larethian_id_relation:
			await db.createRaceDeity({
				id: 'races-loxodon-id-to-deities-corellon-larethian-id-relation',
				raceId: races.loxodon.id,
				deityId: deities.corellon_larethian.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Loxodon favor Corellon Larethian for elven magic.`,
			}),
		races_minotaur_id_to_deities_tempus_id_relation:
			await db.createRaceDeity({
				id: 'races-minotaur-id-to-deities-tempus-id-relation',
				raceId: races.minotaur.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Minotaurs favor Tempus for strategy and battle.`,
			}),
		races_minotaur_id_to_deities_bane_id_relation: await db.createRaceDeity(
			{
				id: 'races-minotaur-id-to-deities-bane-id-relation',
				raceId: races.minotaur.id,
				deityId: deities.bane.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Minotaurs favor Bane for tyranny and power.`,
			}
		),
		races_minotaur_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-minotaur-id-to-deities-tymora-id-relation',
				raceId: races.minotaur.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Minotaurs favor Tymora for luck.`,
			}),
		races_minotaur_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-minotaur-id-to-deities-lathander-id-relation',
				raceId: races.minotaur.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Minotaurs favor Lathander for renewal and hope.`,
			}),
		races_minotaur_id_to_deities_kelemvor_id_relation:
			await db.createRaceDeity({
				id: 'races-minotaur-id-to-deities-kelemvor-id-relation',
				raceId: races.minotaur.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Minotaurs favor Kelemvor for judgment.`,
			}),
		races_orc_id_to_deities_gruumsh_one_eye_id_relation:
			await db.createRaceDeity({
				id: 'races-orc-id-to-deities-gruumsh-one-eye-id-relation',
				raceId: races.orc.id,
				deityId: deities.gruumsh_one_eye.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Orcs favor Gruumsh One-Eye for strength and conquest.`,
			}),
		races_orc_id_to_deities_luthic_id_relation: await db.createRaceDeity({
			id: 'races-orc-id-to-deities-luthic-id-relation',
			raceId: races.orc.id,
			deityId: deities.luthic.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Orcs favor Luthic for protection and fertility.`,
		}),
		races_orc_id_to_deities_bane_id_relation: await db.createRaceDeity({
			id: 'races-orc-id-to-deities-bane-id-relation',
			raceId: races.orc.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Orcs favor Bane for tyranny and power.`,
		}),
		races_orc_id_to_deities_tempus_id_relation: await db.createRaceDeity({
			id: 'races-orc-id-to-deities-tempus-id-relation',
			raceId: races.orc.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Orcs favor Tempus for strategy and battle.`,
		}),
		races_orc_id_to_deities_beshaba_id_relation: await db.createRaceDeity({
			id: 'races-orc-id-to-deities-beshaba-id-relation',
			raceId: races.orc.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Orcs favor Beshaba for misfortune.`,
		}),
		races_owlin_id_to_deities_sehanine_moonbow_id_relation:
			await db.createRaceDeity({
				id: 'races-owlin-id-to-deities-sehanine-moonbow-id-relation',
				raceId: races.owlin.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Owlin favor Sehanine Moonbow for dreams and journeys.`,
			}),
		races_owlin_id_to_deities_selune_id_relation: await db.createRaceDeity({
			id: 'races-owlin-id-to-deities-selune-id-relation',
			raceId: races.owlin.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Owlin favor Selûne for guidance and navigation.`,
		}),
		races_owlin_id_to_deities_tymora_id_relation: await db.createRaceDeity({
			id: 'races-owlin-id-to-deities-tymora-id-relation',
			raceId: races.owlin.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Owlin favor Tymora for luck.`,
		}),
		races_owlin_id_to_deities_mystra_id_relation: await db.createRaceDeity({
			id: 'races-owlin-id-to-deities-mystra-id-relation',
			raceId: races.owlin.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Owlin favor Mystra for arcane knowledge.`,
		}),
		races_owlin_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-owlin-id-to-deities-lathander-id-relation',
				raceId: races.owlin.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Owlin favor Lathander for renewal and hope.`,
			}),
		races_plasmoid_id_to_deities_istishia_id_relation:
			await db.createRaceDeity({
				id: 'races-plasmoid-id-to-deities-istishia-id-relation',
				raceId: races.plasmoid.id,
				deityId: deities.istishia.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Plasmoids favor Istishia for water and fluidity.`,
			}),
		races_plasmoid_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-plasmoid-id-to-deities-mystra-id-relation',
				raceId: races.plasmoid.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Plasmoids favor Mystra for arcane knowledge.`,
			}),
		races_plasmoid_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-plasmoid-id-to-deities-tymora-id-relation',
				raceId: races.plasmoid.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Plasmoids favor Tymora for luck.`,
			}),
		races_plasmoid_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-plasmoid-id-to-deities-selune-id-relation',
				raceId: races.plasmoid.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Plasmoids favor Selûne for guidance and navigation.`,
			}),
		races_plasmoid_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-plasmoid-id-to-deities-lathander-id-relation',
				raceId: races.plasmoid.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Plasmoids favor Lathander for renewal and hope.`,
			}),
		races_reborn_id_to_deities_kelemvor_id_relation:
			await db.createRaceDeity({
				id: 'races-reborn-id-to-deities-kelemvor-id-relation',
				raceId: races.reborn.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Reborn favor Kelemvor for judgment.`,
			}),
		races_reborn_id_to_deities_myrkul_id_relation: await db.createRaceDeity(
			{
				id: 'races-reborn-id-to-deities-myrkul-id-relation',
				raceId: races.reborn.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Reborn favor Myrkul for undeath.`,
			}
		),
		races_reborn_id_to_deities_jergal_id_relation: await db.createRaceDeity(
			{
				id: 'races-reborn-id-to-deities-jergal-id-relation',
				raceId: races.reborn.id,
				deityId: deities.jergal.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Reborn favor Jergal for records of the dead.`,
			}
		),
		races_reborn_id_to_deities_shar_id_relation: await db.createRaceDeity({
			id: 'races-reborn-id-to-deities-shar-id-relation',
			raceId: races.reborn.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Reborn favor Shar for secrets and darkness.`,
		}),
		races_reborn_id_to_deities_beshaba_id_relation:
			await db.createRaceDeity({
				id: 'races-reborn-id-to-deities-beshaba-id-relation',
				raceId: races.reborn.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Reborn favor Beshaba for misfortune.`,
			}),
		races_satyr_id_to_deities_sehanine_moonbow_id_relation:
			await db.createRaceDeity({
				id: 'races-satyr-id-to-deities-sehanine-moonbow-id-relation',
				raceId: races.satyr.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Satyrs favor Sehanine Moonbow for dreams and journeys.`,
			}),
		races_satyr_id_to_deities_tymora_id_relation: await db.createRaceDeity({
			id: 'races-satyr-id-to-deities-tymora-id-relation',
			raceId: races.satyr.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Satyrs favor Tymora for luck.`,
		}),
		races_satyr_id_to_deities_selune_id_relation: await db.createRaceDeity({
			id: 'races-satyr-id-to-deities-selune-id-relation',
			raceId: races.satyr.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Satyrs favor Selûne for guidance and navigation.`,
		}),
		races_satyr_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-satyr-id-to-deities-lathander-id-relation',
				raceId: races.satyr.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Satyrs favor Lathander for renewal and hope.`,
			}),
		races_satyr_id_to_deities_mystra_id_relation: await db.createRaceDeity({
			id: 'races-satyr-id-to-deities-mystra-id-relation',
			raceId: races.satyr.id,
			deityId: deities.mystra.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Satyrs favor Mystra for arcane knowledge.`,
		}),
		races_shifter_id_to_deities_sehanine_moonbow_id_relation:
			await db.createRaceDeity({
				id: 'races-shifter-id-to-deities-sehanine-moonbow-id-relation',
				raceId: races.shifter.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Shifters favor Sehanine Moonbow for dreams and journeys.`,
			}),
		races_shifter_id_to_deities_baervan_wildwanderer_id_relation:
			await db.createRaceDeity({
				id: 'races-shifter-id-to-deities-baervan-wildwanderer-id-relation',
				raceId: races.shifter.id,
				deityId: deities.baervan_wildwanderer.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Shifters favor Baervan Wildwanderer for forests and travel.`,
			}),
		races_shifter_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-shifter-id-to-deities-selune-id-relation',
				raceId: races.shifter.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Shifters favor Selûne for navigation and wanderers.`,
			}),
		races_shifter_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-shifter-id-to-deities-tymora-id-relation',
				raceId: races.shifter.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Shifters favor Tymora for luck.`,
			}),
		races_shifter_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-shifter-id-to-deities-lathander-id-relation',
				raceId: races.shifter.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Shifters favor Lathander for renewal and hope.`,
			}),
		races_simic_hybrid_id_to_deities_istishia_id_relation:
			await db.createRaceDeity({
				id: 'races-simic-hybrid-id-to-deities-istishia-id-relation',
				raceId: races.simic_hybrid.id,
				deityId: deities.istishia.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Simic Hybrids favor Istishia for water and fluidity.`,
			}),
		races_simic_hybrid_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-simic-hybrid-id-to-deities-mystra-id-relation',
				raceId: races.simic_hybrid.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Simic Hybrids favor Mystra for arcane knowledge.`,
			}),
		races_simic_hybrid_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-simic-hybrid-id-to-deities-tymora-id-relation',
				raceId: races.simic_hybrid.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Simic Hybrids favor Tymora for luck.`,
			}),
		races_simic_hybrid_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-simic-hybrid-id-to-deities-selune-id-relation',
				raceId: races.simic_hybrid.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Simic Hybrids favor Selûne for guidance and navigation.`,
			}),
		races_simic_hybrid_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-simic-hybrid-id-to-deities-lathander-id-relation',
				raceId: races.simic_hybrid.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Simic Hybrids favor Lathander for renewal and hope.`,
			}),
		races_tabaxi_id_to_deities_sehanine_moonbow_id_relation:
			await db.createRaceDeity({
				id: 'races-tabaxi-id-to-deities-sehanine-moonbow-id-relation',
				raceId: races.tabaxi.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tabaxi favor Sehanine Moonbow for dreams and journeys.`,
			}),
		races_tabaxi_id_to_deities_tymora_id_relation: await db.createRaceDeity(
			{
				id: 'races-tabaxi-id-to-deities-tymora-id-relation',
				raceId: races.tabaxi.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tabaxi favor Tymora for luck.`,
			}
		),
		races_tabaxi_id_to_deities_selune_id_relation: await db.createRaceDeity(
			{
				id: 'races-tabaxi-id-to-deities-selune-id-relation',
				raceId: races.tabaxi.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tabaxi favor Selûne for guidance and navigation.`,
			}
		),
		races_tabaxi_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-tabaxi-id-to-deities-lathander-id-relation',
				raceId: races.tabaxi.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Tabaxi favor Lathander for renewal and hope.`,
			}),
		races_tabaxi_id_to_deities_mystra_id_relation: await db.createRaceDeity(
			{
				id: 'races-tabaxi-id-to-deities-mystra-id-relation',
				raceId: races.tabaxi.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Tabaxi favor Mystra for arcane knowledge.`,
			}
		),
		races_thri_kreen_id_to_deities_tempus_id_relation:
			await db.createRaceDeity({
				id: 'races-thri-kreen-id-to-deities-tempus-id-relation',
				raceId: races.thri_kreen.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Thri-kreen favor Tempus for strategy and battle.`,
			}),
		races_thri_kreen_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-thri-kreen-id-to-deities-lathander-id-relation',
				raceId: races.thri_kreen.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Thri-kreen favor Lathander for renewal and hope.`,
			}),
		races_thri_kreen_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-thri-kreen-id-to-deities-tymora-id-relation',
				raceId: races.thri_kreen.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Thri-kreen favor Tymora for luck.`,
			}),
		races_thri_kreen_id_to_deities_bane_id_relation:
			await db.createRaceDeity({
				id: 'races-thri-kreen-id-to-deities-bane-id-relation',
				raceId: races.thri_kreen.id,
				deityId: deities.bane.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Thri-kreen favor Bane for tyranny and power.`,
			}),
		races_thri_kreen_id_to_deities_kelemvor_id_relation:
			await db.createRaceDeity({
				id: 'races-thri-kreen-id-to-deities-kelemvor-id-relation',
				raceId: races.thri_kreen.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Thri-kreen favor Kelemvor for judgment.`,
			}),
		races_tortle_id_to_deities_istishia_id_relation:
			await db.createRaceDeity({
				id: 'races-tortle-id-to-deities-istishia-id-relation',
				raceId: races.tortle.id,
				deityId: deities.istishia.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tortles favor Istishia for water and fluidity.`,
			}),
		races_tortle_id_to_deities_selune_id_relation: await db.createRaceDeity(
			{
				id: 'races-tortle-id-to-deities-selune-id-relation',
				raceId: races.tortle.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tortles favor Selûne for guidance and navigation.`,
			}
		),
		races_tortle_id_to_deities_tymora_id_relation: await db.createRaceDeity(
			{
				id: 'races-tortle-id-to-deities-tymora-id-relation',
				raceId: races.tortle.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Tortles favor Tymora for luck.`,
			}
		),
		races_tortle_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-tortle-id-to-deities-lathander-id-relation',
				raceId: races.tortle.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Tortles favor Lathander for renewal and hope.`,
			}),
		races_tortle_id_to_deities_mystra_id_relation: await db.createRaceDeity(
			{
				id: 'races-tortle-id-to-deities-mystra-id-relation',
				raceId: races.tortle.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Tortles favor Mystra for arcane knowledge.`,
			}
		),
		races_vedalken_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-vedalken-id-to-deities-mystra-id-relation',
				raceId: races.vedalken.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Vedalken favor Mystra for arcane knowledge.`,
			}),
		races_vedalken_id_to_deities_jergal_id_relation:
			await db.createRaceDeity({
				id: 'races-vedalken-id-to-deities-jergal-id-relation',
				raceId: races.vedalken.id,
				deityId: deities.jergal.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Vedalken favor Jergal for records and fate.`,
			}),
		races_vedalken_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-vedalken-id-to-deities-tymora-id-relation',
				raceId: races.vedalken.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Vedalken favor Tymora for luck.`,
			}),
		races_vedalken_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-vedalken-id-to-deities-selune-id-relation',
				raceId: races.vedalken.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Vedalken favor Selûne for guidance and navigation.`,
			}),
		races_vedalken_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-vedalken-id-to-deities-lathander-id-relation',
				raceId: races.vedalken.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Vedalken favor Lathander for renewal and hope.`,
			}),
		races_warforged_id_to_deities_moradin_id_relation:
			await db.createRaceDeity({
				id: 'races-warforged-id-to-deities-moradin-id-relation',
				raceId: races.warforged.id,
				deityId: deities.moradin.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Warforged favor Moradin for creation and craftsmanship.`,
			}),
		races_warforged_id_to_deities_dugmaren_brightmantle_id_relation:
			await db.createRaceDeity({
				id: 'races-warforged-id-to-deities-dugmaren-brightmantle-id-relation',
				raceId: races.warforged.id,
				deityId: deities.dugmaren_brightmantle.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Warforged favor Dugmaren Brightmantle for discovery and invention.`,
			}),
		races_warforged_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-warforged-id-to-deities-mystra-id-relation',
				raceId: races.warforged.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Warforged favor Mystra for arcane knowledge.`,
			}),
		races_warforged_id_to_deities_tymora_id_relation:
			await db.createRaceDeity({
				id: 'races-warforged-id-to-deities-tymora-id-relation',
				raceId: races.warforged.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Warforged favor Tymora for luck.`,
			}),
		races_warforged_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-warforged-id-to-deities-lathander-id-relation',
				raceId: races.warforged.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Warforged favor Lathander for renewal and hope.`,
			}),
		races_aasimar_id_to_deities_tempus_id_relation:
			await db.createRaceDeity({
				id: 'races-aasimar-id-to-deities-tempus-id-relation',
				raceId: races.aasimar.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Aasimar favor Tempus for strategy and battle.`,
			}),
		races_aasimar_id_to_deities_bane_id_relation: await db.createRaceDeity({
			id: 'races-aasimar-id-to-deities-bane-id-relation',
			raceId: races.aasimar.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Aasimar favor Bane for tyranny and power.`,
		}),
		races_aasimar_id_to_deities_kelemvor_id_relation:
			await db.createRaceDeity({
				id: 'races-aasimar-id-to-deities-kelemvor-id-relation',
				raceId: races.aasimar.id,
				deityId: deities.kelemvor.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Aasimar favor Kelemvor for judgment.`,
			}),
		races_aasimar_id_to_deities_myrkul_id_relation:
			await db.createRaceDeity({
				id: 'races-aasimar-id-to-deities-myrkul-id-relation',
				raceId: races.aasimar.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Aasimar favor Myrkul for undeath.`,
			}),
		races_aasimar_id_to_deities_shar_id_relation: await db.createRaceDeity({
			id: 'races-aasimar-id-to-deities-shar-id-relation',
			raceId: races.aasimar.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Aasimar favor Shar for secrets and darkness.`,
		}),
		races_aasimar_id_to_deities_beshaba_id_relation:
			await db.createRaceDeity({
				id: 'races-aasimar-id-to-deities-beshaba-id-relation',
				raceId: races.aasimar.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Aasimar favor Beshaba for misfortune.`,
			}),
		races_aasimar_id_to_deities_jergal_id_relation:
			await db.createRaceDeity({
				id: 'races-aasimar-id-to-deities-jergal-id-relation',
				raceId: races.aasimar.id,
				deityId: deities.jergal.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Aasimar favor Jergal for records of the dead.`,
			}),
		races_dragonborn_id_to_deities_bane_id_relation:
			await db.createRaceDeity({
				id: 'races-dragonborn-id-to-deities-bane-id-relation',
				raceId: races.dragonborn.id,
				deityId: deities.bane.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Dragonborn favor Bane for tyranny and power.`,
			}),
		races_dragonborn_id_to_deities_myrkul_id_relation:
			await db.createRaceDeity({
				id: 'races-dragonborn-id-to-deities-myrkul-id-relation',
				raceId: races.dragonborn.id,
				deityId: deities.myrkul.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dragonborn favor Myrkul for undeath.`,
			}),
		races_dragonborn_id_to_deities_beshaba_id_relation:
			await db.createRaceDeity({
				id: 'races-dragonborn-id-to-deities-beshaba-id-relation',
				raceId: races.dragonborn.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dragonborn favor Beshaba for misfortune.`,
			}),
		races_dragonborn_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-dragonborn-id-to-deities-selune-id-relation',
				raceId: races.dragonborn.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dragonborn favor Selûne for guidance and navigation.`,
			}),
		races_dragonborn_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-dragonborn-id-to-deities-mystra-id-relation',
				raceId: races.dragonborn.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dragonborn favor Mystra for arcane knowledge.`,
			}),
		races_dwarf_id_to_deities_tymora_id_relation: await db.createRaceDeity({
			id: 'races-dwarf-id-to-deities-tymora-id-relation',
			raceId: races.dwarf.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Dwarves favor Tymora for luck.`,
		}),
		races_dwarf_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-dwarf-id-to-deities-lathander-id-relation',
				raceId: races.dwarf.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dwarves favor Lathander for renewal and hope.`,
			}),
		races_dwarf_id_to_deities_yondalla_id_relation:
			await db.createRaceDeity({
				id: 'races-dwarf-id-to-deities-yondalla-id-relation',
				raceId: races.dwarf.id,
				deityId: deities.yondalla.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dwarves favor Yondalla for protection and fertility.`,
			}),
		races_dwarf_id_to_deities_tempus_id_relation: await db.createRaceDeity({
			id: 'races-dwarf-id-to-deities-tempus-id-relation',
			raceId: races.dwarf.id,
			deityId: deities.tempus.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Dwarves favor Tempus for strategy and battle.`,
		}),
		races_dwarf_id_to_deities_myrkul_id_relation: await db.createRaceDeity({
			id: 'races-dwarf-id-to-deities-myrkul-id-relation',
			raceId: races.dwarf.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Dwarves favor Myrkul for undeath.`,
		}),
		races_dwarf_id_to_deities_bane_id_relation: await db.createRaceDeity({
			id: 'races-dwarf-id-to-deities-bane-id-relation',
			raceId: races.dwarf.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Dwarves favor Bane for tyranny and power.`,
		}),
		races_dwarf_id_to_deities_beshaba_id_relation: await db.createRaceDeity(
			{
				id: 'races-dwarf-id-to-deities-beshaba-id-relation',
				raceId: races.dwarf.id,
				deityId: deities.beshaba.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Dwarves favor Beshaba for misfortune.`,
			}
		),
		races_elf_id_to_deities_baervan_wildwanderer_id_relation:
			await db.createRaceDeity({
				id: 'races-elf-id-to-deities-baervan-wildwanderer-id-relation',
				raceId: races.elf.id,
				deityId: deities.baervan_wildwanderer.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Elves favor Baervan Wildwanderer for forests and travel.`,
			}),
		races_elf_id_to_deities_lathander_id_relation: await db.createRaceDeity(
			{
				id: 'races-elf-id-to-deities-lathander-id-relation',
				raceId: races.elf.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Elves favor Lathander for renewal and hope.`,
			}
		),
		races_elf_id_to_deities_shar_id_relation: await db.createRaceDeity({
			id: 'races-elf-id-to-deities-shar-id-relation',
			raceId: races.elf.id,
			deityId: deities.shar.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Elves favor Shar for secrets and darkness.`,
		}),
		races_elf_id_to_deities_myrkul_id_relation: await db.createRaceDeity({
			id: 'races-elf-id-to-deities-myrkul-id-relation',
			raceId: races.elf.id,
			deityId: deities.myrkul.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Elves favor Myrkul for undeath.`,
		}),
		races_elf_id_to_deities_beshaba_id_relation: await db.createRaceDeity({
			id: 'races-elf-id-to-deities-beshaba-id-relation',
			raceId: races.elf.id,
			deityId: deities.beshaba.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Elves favor Beshaba for misfortune.`,
		}),
		races_elf_id_to_deities_bane_id_relation: await db.createRaceDeity({
			id: 'races-elf-id-to-deities-bane-id-relation',
			raceId: races.elf.id,
			deityId: deities.bane.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Elves favor Bane for tyranny and power.`,
		}),
		races_elf_id_to_deities_kelemvor_id_relation: await db.createRaceDeity({
			id: 'races-elf-id-to-deities-kelemvor-id-relation',
			raceId: races.elf.id,
			deityId: deities.kelemvor.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Elves favor Kelemvor for judgment.`,
		}),
		races_elf_id_to_deities_istishia_id_relation: await db.createRaceDeity({
			id: 'races-elf-id-to-deities-istishia-id-relation',
			raceId: races.elf.id,
			deityId: deities.istishia.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Elves favor Istishia for water and fluidity.`,
		}),
		races_elf_id_to_deities_valkur_id_relation: await db.createRaceDeity({
			id: 'races-elf-id-to-deities-valkur-id-relation',
			raceId: races.elf.id,
			deityId: deities.valkur.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Elves favor Valkur for protection and navigation.`,
		}),
		races_genasi_id_to_deities_tymora_id_relation: await db.createRaceDeity(
			{
				id: 'races-genasi-id-to-deities-tymora-id-relation',
				raceId: races.genasi.id,
				deityId: deities.tymora.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Genasi favor Tymora for luck.`,
			}
		),
		races_genasi_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-genasi-id-to-deities-lathander-id-relation',
				raceId: races.genasi.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Genasi favor Lathander for renewal and hope.`,
			}),
		races_genasi_id_to_deities_moradin_id_relation:
			await db.createRaceDeity({
				id: 'races-genasi-id-to-deities-moradin-id-relation',
				raceId: races.genasi.id,
				deityId: deities.moradin.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Genasi favor Moradin for creation and craftsmanship.`,
			}),
		races_genasi_id_to_deities_dugmaren_brightmantle_id_relation:
			await db.createRaceDeity({
				id: 'races-genasi-id-to-deities-dugmaren-brightmantle-id-relation',
				raceId: races.genasi.id,
				deityId: deities.dugmaren_brightmantle.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Genasi favor Dugmaren Brightmantle for discovery and invention.`,
			}),
		races_genasi_id_to_deities_tempus_id_relation: await db.createRaceDeity(
			{
				id: 'races-genasi-id-to-deities-tempus-id-relation',
				raceId: races.genasi.id,
				deityId: deities.tempus.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Genasi favor Tempus for strategy and battle.`,
			}
		),
		races_gnome_id_to_deities_sehanine_moonbow_id_relation:
			await db.createRaceDeity({
				id: 'races-gnome-id-to-deities-sehanine-moonbow-id-relation',
				raceId: races.gnome.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Gnomes favor Sehanine Moonbow for dreams and journeys.`,
			}),
		races_gnome_id_to_deities_tymora_id_relation: await db.createRaceDeity({
			id: 'races-gnome-id-to-deities-tymora-id-relation',
			raceId: races.gnome.id,
			deityId: deities.tymora.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Gnomes favor Tymora for luck.`,
		}),
		races_gnome_id_to_deities_selune_id_relation: await db.createRaceDeity({
			id: 'races-gnome-id-to-deities-selune-id-relation',
			raceId: races.gnome.id,
			deityId: deities.selune.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Gnomes favor Selûne for guidance and navigation.`,
		}),
		races_gnome_id_to_deities_dugmaren_brightmantle_id_relation:
			await db.createRaceDeity({
				id: 'races-gnome-id-to-deities-dugmaren-brightmantle-id-relation',
				raceId: races.gnome.id,
				deityId: deities.dugmaren_brightmantle.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Gnomes favor Dugmaren Brightmantle for discovery and invention.`,
			}),
		races_gnome_id_to_deities_lathander_id_relation:
			await db.createRaceDeity({
				id: 'races-gnome-id-to-deities-lathander-id-relation',
				raceId: races.gnome.id,
				deityId: deities.lathander.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Gnomes favor Lathander for renewal and hope.`,
			}),
		races_halfling_id_to_deities_baravar_cloakshadow_id_relation:
			await db.createRaceDeity({
				id: 'races-halfling-id-to-deities-baravar-cloakshadow-id-relation',
				raceId: races.halfling.id,
				deityId: deities.baravar_cloakshadow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Halflings favor Baravar Cloakshadow for trickery and illusions.`,
			}),
		races_halfling_id_to_deities_selune_id_relation:
			await db.createRaceDeity({
				id: 'races-halfling-id-to-deities-selune-id-relation',
				raceId: races.halfling.id,
				deityId: deities.selune.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Halflings favor Selûne for guidance and navigation.`,
			}),
		races_halfling_id_to_deities_sehanine_moonbow_id_relation:
			await db.createRaceDeity({
				id: 'races-halfling-id-to-deities-sehanine-moonbow-id-relation',
				raceId: races.halfling.id,
				deityId: deities.sehanine_moonbow.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Halflings favor Sehanine Moonbow for dreams and journeys.`,
			}),
		races_orc_id_to_deities_bahgtru_id_relation: await db.createRaceDeity({
			id: 'races-orc-id-to-deities-bahgtru-id-relation',
			raceId: races.orc.id,
			deityId: deities.bahgtru.id,
			relationType: DeityRecommendationType.PRIMARY,
			reasoning: `Orcs favor Bahgtru for strength and endurance.`,
		}),
		races_orc_id_to_deities_ilneval_id_relation: await db.createRaceDeity({
			id: 'races-orc-id-to-deities-ilneval-id-relation',
			raceId: races.orc.id,
			deityId: deities.ilneval.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Orcs favor Ilneval for tactical wisdom.`,
		}),
		races_orc_id_to_deities_shargaas_id_relation: await db.createRaceDeity({
			id: 'races-orc-id-to-deities-shargaas-id-relation',
			raceId: races.orc.id,
			deityId: deities.shargaas.id,
			relationType: DeityRecommendationType.SECONDARY,
			reasoning: `Orcs favor Shargaas for guidance through darkness.`,
		}),
		races_elf_id_to_deities_eilistraee_id_relation:
			await db.createRaceDeity({
				id: 'races-elf-id-to-deities-eilistraee-id-relation',
				raceId: races.elf.id,
				deityId: deities.eilistraee.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Elves favor Eilistraee for her connection to nature and dance.`,
			}),
		races_elf_id_to_deities_hanali_celanil_id_relation:
			await db.createRaceDeity({
				id: 'races-elf-id-to-deities-hanali-celanil-id-relation',
				raceId: races.elf.id,
				deityId: deities.hanali_celanil.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Elves favor Hanali Celanil for beauty and love.`,
			}),
		races_elf_id_to_deities_labelas_enoreth_id_relation:
			await db.createRaceDeity({
				id: 'races-elf-id-to-deities-labelas-enoreth-id-relation',
				raceId: races.elf.id,
				deityId: deities.labelas_enoreth.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Elves favor Labelas Enoreth for wisdom and time mastery.`,
			}),
		races_elf_id_to_deities_solonor_thelandira_id_relation:
			await db.createRaceDeity({
				id: 'races-elf-id-to-deities-solonor-thelandira-id-relation',
				raceId: races.elf.id,
				deityId: deities.solonor_thelandira.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Elves favor Solonor Thelandira for archery and hunting.`,
			}),
		races_goblin_id_to_deities_maglubiyet_id_relation:
			await db.createRaceDeity({
				id: 'races-goblin-id-to-deities-maglubiyet-id-relation',
				raceId: races.goblin.id,
				deityId: deities.maglubiyet.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Goblins favor Maglubiyet as their primary war god.`,
			}),
		races_goblin_id_to_deities_khurgorbaeyag_id_relation:
			await db.createRaceDeity({
				id: 'races-goblin-id-to-deities-khurgorbaeyag-id-relation',
				raceId: races.goblin.id,
				deityId: deities.khurgorbaeyag.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Goblins favor Khurgorbaeyag for slavery and oppression.`,
			}),
		races_goblin_id_to_deities_nomog_geaya_id_relation:
			await db.createRaceDeity({
				id: 'races-goblin-id-to-deities-nomog-geaya-id-relation',
				raceId: races.goblin.id,
				deityId: deities.nomog_geaya.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Goblins favor Nomog-Geaya for his connection to goblin society.`,
			}),
		races_goblin_id_to_deities_bargrivyek_id_relation:
			await db.createRaceDeity({
				id: 'races-goblin-id-to-deities-bargrivyek-id-relation',
				raceId: races.goblin.id,
				deityId: deities.bargrivyek.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Goblins favor Bargrivyek for community guidance.`,
			}),
		races_lizardfolk_id_to_deities_sekolah_id_relation:
			await db.createRaceDeity({
				id: 'races-lizardfolk-id-to-deities-sekolah-id-relation',
				raceId: races.lizardfolk.id,
				deityId: deities.sekolah.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Lizardfolk favor Sekolah for his connection to water and hunting.`,
			}),
		races_lizardfolk_id_to_deities_bargrivyek_id_relation:
			await db.createRaceDeity({
				id: 'races-lizardfolk-id-to-deities-bargrivyek-id-relation',
				raceId: races.lizardfolk.id,
				deityId: deities.bargrivyek.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Lizardfolk favor Bargrivyek for community guidance.`,
			}),
		races_lizardfolk_id_to_deities_urogalan_id_relation:
			await db.createRaceDeity({
				id: 'races-lizardfolk-id-to-deities-urogalan-id-relation',
				raceId: races.lizardfolk.id,
				deityId: deities.urogalan.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Lizardfolk favor Urogalan for death and the underworld.`,
			}),
		races_shifter_id_to_deities_the_raven_queen_id_relation:
			await db.createRaceDeity({
				id: 'races-shifter-id-to-deities-the-raven-queen-id-relation',
				raceId: races.shifter.id,
				deityId: deities.the_raven_queen.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Shifters favor The Raven Queen for her connection to fate and death.`,
			}),
		races_shifter_id_to_deities_corellon_larethian_id_relation:
			await db.createRaceDeity({
				id: 'races-shifter-id-to-deities-corellon-larethian-id-relation',
				raceId: races.shifter.id,
				deityId: deities.corellon_larethian.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Shifters favor Corellon Larethian for their elven heritage.`,
			}),
		races_shifter_id_to_deities_mystra_id_relation:
			await db.createRaceDeity({
				id: 'races-shifter-id-to-deities-mystra-id-relation',
				raceId: races.shifter.id,
				deityId: deities.mystra.id,
				relationType: DeityRecommendationType.SECONDARY,
				reasoning: `Shifters favor Mystra for arcane knowledge.`,
			}),
		races_halfling_id_to_deities_urogalan_id_relation:
			await db.createRaceDeity({
				id: 'races-halfling-id-to-deities-urogalan-id-relation',
				raceId: races.halfling.id,
				deityId: deities.urogalan.id,
				relationType: DeityRecommendationType.PRIMARY,
				reasoning: `Halflings favor Urogalan for his connection to death and the afterlife.`,
			}),
	};
}