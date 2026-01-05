import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Subraces, Continents } from "../index";

type SubraceContinentPayload = Prisma.SubraceContinentGetPayload<{}>
export interface SubracesContinents {
	svirfneblin_maltman_relation: SubraceContinentPayload;
	rock_gnome_kuriguer_relation: SubraceContinentPayload;
	beasthide_shifter_kuriguer_relation: SubraceContinentPayload;
	longtooth_shifter_kuriguer_relation: SubraceContinentPayload;
	air_genasi_kuriguer_relation: SubraceContinentPayload;
	eladrin_kuriguer_relation: SubraceContinentPayload;
	shadar_kai_kuriguer_relation: SubraceContinentPayload;
	high_elf_kuriguer_relation: SubraceContinentPayload;
	duergar_maltman_relation: SubraceContinentPayload;
	protector_aasimar_skratonia_relation: SubraceContinentPayload;
	wood_elf_kuriguer_relation: SubraceContinentPayload;
	sea_elf_kuriguer_relation: SubraceContinentPayload;
	pallid_elf_kuriguer_relation: SubraceContinentPayload;
	fire_genasi_kuriguer_relation: SubraceContinentPayload;
	githyanki_katman_relation: SubraceContinentPayload;
	githzerai_kuriguer_relation: SubraceContinentPayload;
	earth_genasi_kuriguer_relation: SubraceContinentPayload;
	water_genasi_kuriguer_relation: SubraceContinentPayload;
	fallen_aasimar_skratonia_relation: SubraceContinentPayload;
	drow_maltman_relation: SubraceContinentPayload;
	scourge_aasimar_skratonia_relation: SubraceContinentPayload;
	gith_kuriguer_relation: SubraceContinentPayload;
}

interface SubracesContinentsParams {
	subraces: Subraces;
	continents: Continents;
}
export async function setSubracesContinents(params: SubracesContinentsParams): Promise<SubracesContinents> {
	const { subraces, continents } = params;
	return {
		svirfneblin_maltman_relation: await db.createSubraceContinent({
			id: "svirfneblin-maltman-relation",
			subraceId: subraces.gnome_svirfneblin.id,
			continentId: continents.maltman.id,
			reasoning: `Underground Allies Of Dwarves`,
		}),
		rock_gnome_kuriguer_relation: await db.createSubraceContinent({
			id: "rock-gnome-kuriguer-relation",
			subraceId: subraces.gnome_rock_gnome.id,
			continentId: continents.kuriguer.id,
			reasoning: `Clever Inventors In Coastal Towns`,
		}),
		beasthide_shifter_kuriguer_relation: await db.createSubraceContinent({
			id: "beasthide-shifter-kuriguer-relation",
			subraceId: subraces.shifter_beasthide_shifter.id,
			continentId: continents.kuriguer.id,
			reasoning: `Forest Brutes`,
		}),
		longtooth_shifter_kuriguer_relation: await db.createSubraceContinent({
			id: "longtooth-shifter-kuriguer-relation",
			subraceId: subraces.shifter_longtooth_shifter.id,
			continentId: continents.kuriguer.id,
			reasoning: `Feral Hunters`,
		}),
		air_genasi_kuriguer_relation: await db.createSubraceContinent({
			id: "air-genasi-kuriguer-relation",
			subraceId: subraces.genasi_air_genasi.id,
			continentId: continents.kuriguer.id,
			reasoning: `Coastal Winds`,
		}),
		eladrin_kuriguer_relation: await db.createSubraceContinent({
			id: "eladrin-kuriguer-relation",
			subraceId: subraces.elf_eladrin.id,
			continentId: continents.kuriguer.id,
			reasoning: `Fae-tied Magic Groves`,
		}),
		shadar_kai_kuriguer_relation: await db.createSubraceContinent({
			id: "shadar-kai-kuriguer-relation",
			subraceId: subraces.elf_shadar_kai.id,
			continentId: continents.kuriguer.id,
			reasoning: `Shadow-kin In Dangerous Woods`,
		}),
		high_elf_kuriguer_relation: await db.createSubraceContinent({
			id: "high-elf-kuriguer-relation",
			subraceId: subraces.elf_high_elf.id,
			continentId: continents.kuriguer.id,
			reasoning: `Native To Magic Forests And Coasts`,
		}),
		duergar_maltman_relation: await db.createSubraceContinent({
			id: "duergar-maltman-relation",
			subraceId: subraces.dwarf_duergar.id,
			continentId: continents.maltman.id,
			reasoning: `Subterranean Forges`,
		}),
		protector_aasimar_skratonia_relation: await db.createSubraceContinent({
			id: "protector-aasimar-skratonia-relation",
			subraceId: subraces.aasimar_protector_aasimar.id,
			continentId: continents.skratonia.id,
			reasoning: `Guardians In Populous Towns`,
		}),
		wood_elf_kuriguer_relation: await db.createSubraceContinent({
			id: "wood-elf-kuriguer-relation",
			subraceId: subraces.elf_wood_elf.id,
			continentId: continents.kuriguer.id,
			reasoning: `Deep Woodland Clans`,
		}),
		sea_elf_kuriguer_relation: await db.createSubraceContinent({
			id: "sea-elf-kuriguer-relation",
			subraceId: subraces.elf_sea_elf.id,
			continentId: continents.kuriguer.id,
			reasoning: `Coastal Dwellers`,
		}),
		pallid_elf_kuriguer_relation: await db.createSubraceContinent({
			id: "pallid-elf-kuriguer-relation",
			subraceId: subraces.elf_pallid_elf.id,
			continentId: continents.kuriguer.id,
			reasoning: `Eerie Twilight Forests`,
		}),
		fire_genasi_kuriguer_relation: await db.createSubraceContinent({
			id: "fire-genasi-kuriguer-relation",
			subraceId: subraces.genasi_fire_genasi.id,
			continentId: continents.kuriguer.id,
			reasoning: `Volatile Magical Hotspots`,
		}),
		githyanki_katman_relation: await db.createSubraceContinent({
			id: "githyanki-katman-relation",
			subraceId: subraces.gith_githyanki.id,
			continentId: continents.katman.id,
			reasoning: `Warlike Enclaves`,
		}),
		githzerai_kuriguer_relation: await db.createSubraceContinent({
			id: "githzerai-kuriguer-relation",
			subraceId: subraces.gith_githzerai.id,
			continentId: continents.kuriguer.id,
			reasoning: `Isolated Monasteries`,
		}),
		earth_genasi_kuriguer_relation: await db.createSubraceContinent({
			id: "earth-genasi-kuriguer-relation",
			subraceId: subraces.genasi_earth_genasi.id,
			continentId: continents.kuriguer.id,
			reasoning: `Rooted In Enchanted Groves`,
		}),
		water_genasi_kuriguer_relation: await db.createSubraceContinent({
			id: "water-genasi-kuriguer-relation",
			subraceId: subraces.genasi_water_genasi.id,
			continentId: continents.kuriguer.id,
			reasoning: `Coastal Rivers And Lakes`,
		}),
		fallen_aasimar_skratonia_relation: await db.createSubraceContinent({
			id: "fallen-aasimar-skratonia-relation",
			subraceId: subraces.aasimar_fallen_aasimar.id,
			continentId: continents.skratonia.id,
			reasoning: `Outcasts Among Humans`,
		}),
		drow_maltman_relation: await db.createSubraceContinent({
			id: "drow-maltman-relation",
			subraceId: subraces.elf_dark_elf_drow.id,
			continentId: continents.maltman.id,
			reasoning: `Subterranean Mines/caverns`,
		}),
		scourge_aasimar_skratonia_relation: await db.createSubraceContinent({
			id: "scourge-aasimar-skratonia-relation",
			subraceId: subraces.aasimar_scourge_aasimar.id,
			continentId: continents.skratonia.id,
			reasoning: `Zealots Within Mercenary Guilds`,
		}),
		gith_kuriguer_relation: await db.createSubraceContinent({
			id: "gith-kuriguer-relation",
			subraceId: subraces.gith_githzerai.id,
			continentId: continents.kuriguer.id,
			reasoning: `Gith Psionic Heritage And Mental Discipline Make Them Natural Mentalists In Kuriguer's Magical Environment.`,
		}),
	}
}