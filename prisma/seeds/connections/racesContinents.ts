import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Races, Continents } from "../index";

type RaceContinentPayload = Prisma.RaceContinentGetPayload<{}>
export interface RacesContinents {
	gnome_kuriguer_relation: RaceContinentPayload;
	autognome_alatman_relation: RaceContinentPayload;
	human_skratonia_relation: RaceContinentPayload;
	warforged_alatman_relation: RaceContinentPayload;
	dwarf_maltman_relation: RaceContinentPayload;
	hobgoblin_bulsania_relation: RaceContinentPayload;
	goliath_bulsania_relation: RaceContinentPayload;
	orc_katman_relation: RaceContinentPayload;
	half_orc_katman_relation: RaceContinentPayload;
	lizardfolk_katman_relation: RaceContinentPayload;
	shifter_kuriguer_relation: RaceContinentPayload;
	tabaxi_skratonia_relation: RaceContinentPayload;
	dragonborn_bulsania_relation: RaceContinentPayload;
	aarakocra_bulsania_relation: RaceContinentPayload;
	triton_kuriguer_relation: RaceContinentPayload;
	centaur_skratonia_relation: RaceContinentPayload;
	genasi_kuriguer_relation: RaceContinentPayload;
	tiefling_skratonia_relation: RaceContinentPayload;
	halfling_skratonia_relation: RaceContinentPayload;
	aasimar_skratonia_relation: RaceContinentPayload;
	dwarf_bulsania_relation: RaceContinentPayload;
	firbolg_kuriguer_relation: RaceContinentPayload;
	goliath_maltman_relation: RaceContinentPayload;
	elf_kuriguer_relation: RaceContinentPayload;
	genasi_alatman_relation: RaceContinentPayload;
	satyr_kuriguer_relation: RaceContinentPayload;
	half_elf_skratonia_relation: RaceContinentPayload;
	fairy_kuriguer_relation: RaceContinentPayload;
	vedalken_skratonia_relation: RaceContinentPayload;
	kalashtar_skratonia_relation: RaceContinentPayload;
	reborn_skratonia_relation: RaceContinentPayload;
	hexblood_kuriguer_relation: RaceContinentPayload;
	leonin_skratonia_relation: RaceContinentPayload;
	changeling_kuriguer_relation: RaceContinentPayload;
	kenku_kuriguer_relation: RaceContinentPayload;
	dhampir_alatman_relation: RaceContinentPayload;
	goblin_skratonia_relation: RaceContinentPayload;
	owlin_kuriguer_relation: RaceContinentPayload;
	hadozee_skratonia_relation: RaceContinentPayload;
	kobold_maltman_relation: RaceContinentPayload;
	plasmoid_alatman_relation: RaceContinentPayload;
	yuan_ti_katman_relation: RaceContinentPayload;
}

interface RacesContinentsParams {
	races: Races;
	continents: Continents;
}
export async function setRacesContinents(params: RacesContinentsParams): Promise<RacesContinents> {
	const { races, continents } = params;
	return {
		gnome_kuriguer_relation: await db.createRaceContinent({
			id: "gnome-kuriguer-relation",
			raceId: races.gnome.id,
			continentId: continents.kuriguer.id,
			reasoning: `Clever Inventors In Coastal Towns`,
		}),
		autognome_alatman_relation: await db.createRaceContinent({
			id: "autognome-alatman-relation",
			raceId: races.autognome.id,
			continentId: continents.alatman.id,
			reasoning: `Mechanical Creations From Resource Workshops`,
		}),
		human_skratonia_relation: await db.createRaceContinent({
			id: "human-skratonia-relation",
			raceId: races.human.id,
			continentId: continents.skratonia.id,
			reasoning: `Dominant City-state Populace`,
		}),
		warforged_alatman_relation: await db.createRaceContinent({
			id: "warforged-alatman-relation",
			raceId: races.warforged.id,
			continentId: continents.alatman.id,
			reasoning: `Living Constructs Forged In Volcanic Forges`,
		}),
		dwarf_maltman_relation: await db.createRaceContinent({
			id: "dwarf-maltman-relation",
			raceId: races.dwarf.id,
			continentId: continents.maltman.id,
			reasoning: `Mountain Miners And Stoneworkers`,
		}),
		hobgoblin_bulsania_relation: await db.createRaceContinent({
			id: "hobgoblin-bulsania-relation",
			raceId: races.hobgoblin.id,
			continentId: continents.bulsania.id,
			reasoning: `Militarized In Icy Fortresses`,
		}),
		goliath_bulsania_relation: await db.createRaceContinent({
			id: "goliath-bulsania-relation",
			raceId: races.goliath.id,
			continentId: continents.bulsania.id,
			reasoning: `High Mountain Tribes`,
		}),
		orc_katman_relation: await db.createRaceContinent({
			id: "orc-katman-relation",
			raceId: races.orc.id,
			continentId: continents.katman.id,
			reasoning: `Swampy Tribal Strongholds`,
		}),
		half_orc_katman_relation: await db.createRaceContinent({
			id: "half-orc-katman-relation",
			raceId: races.half_orc.id,
			continentId: continents.katman.id,
			reasoning: `Swamp Frontier Clans`,
		}),
		lizardfolk_katman_relation: await db.createRaceContinent({
			id: "lizardfolk-katman-relation",
			raceId: races.lizardfolk.id,
			continentId: continents.katman.id,
			reasoning: `Natural Hunters In Swamps`,
		}),
		shifter_kuriguer_relation: await db.createRaceContinent({
			id: "shifter-kuriguer-relation",
			raceId: races.shifter.id,
			continentId: continents.kuriguer.id,
			reasoning: `Lycan-touched Of The Wild Woods`,
		}),
		tabaxi_skratonia_relation: await db.createRaceContinent({
			id: "tabaxi-skratonia-relation",
			raceId: races.tabaxi.id,
			continentId: continents.skratonia.id,
			reasoning: `Hunters Of The Plains`,
		}),
		dragonborn_bulsania_relation: await db.createRaceContinent({
			id: "dragonborn-bulsania-relation",
			raceId: races.dragonborn.id,
			continentId: continents.bulsania.id,
			reasoning: `Hardy And Militarized, Adapted To Harsh Cold`,
		}),
		aarakocra_bulsania_relation: await db.createRaceContinent({
			id: "aarakocra-bulsania-relation",
			raceId: races.aarakocra.id,
			continentId: continents.bulsania.id,
			reasoning: `Thrive On High Mountains And Icy Peaks`,
		}),
		triton_kuriguer_relation: await db.createRaceContinent({
			id: "triton-kuriguer-relation",
			raceId: races.triton.id,
			continentId: continents.kuriguer.id,
			reasoning: `Sea-folk Along Coasts`,
		}),
		centaur_skratonia_relation: await db.createRaceContinent({
			id: "centaur-skratonia-relation",
			raceId: races.centaur.id,
			continentId: continents.skratonia.id,
			reasoning: `Nomads Of Fertile Plains`,
		}),
		genasi_kuriguer_relation: await db.createRaceContinent({
			id: "genasi-kuriguer-relation",
			raceId: races.genasi.id,
			continentId: continents.kuriguer.id,
			reasoning: `Elementally Attuned To Its Magical Forests`,
		}),
		tiefling_skratonia_relation: await db.createRaceContinent({
			id: "tiefling-skratonia-relation",
			raceId: races.tiefling.id,
			continentId: continents.skratonia.id,
			reasoning: `Numerous Across City-states`,
		}),
		halfling_skratonia_relation: await db.createRaceContinent({
			id: "halfling-skratonia-relation",
			raceId: races.halfling.id,
			continentId: continents.skratonia.id,
			reasoning: `Farmers And Caravan Leaders`,
		}),
		aasimar_skratonia_relation: await db.createRaceContinent({
			id: "aasimar-skratonia-relation",
			raceId: races.aasimar.id,
			continentId: continents.skratonia.id,
			reasoning: `Blend Into Common City-states, Spiritual Leaders`,
		}),
		dwarf_bulsania_relation: await db.createRaceContinent({
			id: "dwarf-bulsania-relation",
			raceId: races.dwarf.id,
			continentId: continents.bulsania.id,
			reasoning: `Militarized Dwarven Strongholds`,
		}),
		firbolg_kuriguer_relation: await db.createRaceContinent({
			id: "firbolg-kuriguer-relation",
			raceId: races.firbolg.id,
			continentId: continents.kuriguer.id,
			reasoning: `Forest Giants Of The Magical Woods`,
		}),
		goliath_maltman_relation: await db.createRaceContinent({
			id: "goliath-maltman-relation",
			raceId: races.goliath.id,
			continentId: continents.maltman.id,
			reasoning: `Mountain Regions With Giant Influence`,
		}),
		elf_kuriguer_relation: await db.createRaceContinent({
			id: "elf-kuriguer-relation",
			raceId: races.elf.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Forests Enhance Wild Magic`,
		}),
		genasi_alatman_relation: await db.createRaceContinent({
			id: "genasi-alatman-relation",
			raceId: races.genasi.id,
			continentId: continents.alatman.id,
			reasoning: `Elemental Planes Influence The Region`,
		}),
		satyr_kuriguer_relation: await db.createRaceContinent({
			id: "satyr-kuriguer-relation",
			raceId: races.satyr.id,
			continentId: continents.kuriguer.id,
			reasoning: `Revelers Of Fey Glades`,
		}),
		half_elf_skratonia_relation: await db.createRaceContinent({
			id: "half-elf-skratonia-relation",
			raceId: races.half_elf.id,
			continentId: continents.skratonia.id,
			reasoning: `Bridge Between Human And Elf Society`,
		}),
		fairy_kuriguer_relation: await db.createRaceContinent({
			id: "fairy-kuriguer-relation",
			raceId: races.fairy.id,
			continentId: continents.kuriguer.id,
			reasoning: `Magical Glades And Enchanted Groves`,
		}),
		vedalken_skratonia_relation: await db.createRaceContinent({
			id: "vedalken-skratonia-relation",
			raceId: races.vedalken.id,
			continentId: continents.skratonia.id,
			reasoning: `Intellectuals In Scholarly Cities`,
		}),
		kalashtar_skratonia_relation: await db.createRaceContinent({
			id: "kalashtar-skratonia-relation",
			raceId: races.kalashtar.id,
			continentId: continents.skratonia.id,
			reasoning: `Spiritual Dream-walkers In Towns`,
		}),
		reborn_skratonia_relation: await db.createRaceContinent({
			id: "reborn-skratonia-relation",
			raceId: races.reborn.id,
			continentId: continents.skratonia.id,
			reasoning: `Souls Reborn In Populous Lands`,
		}),
		hexblood_kuriguer_relation: await db.createRaceContinent({
			id: "hexblood-kuriguer-relation",
			raceId: races.hexblood.id,
			continentId: continents.kuriguer.id,
			reasoning: `Fey-touched Individuals Of Cursed Woods`,
		}),
		leonin_skratonia_relation: await db.createRaceContinent({
			id: "leonin-skratonia-relation",
			raceId: races.leonin.id,
			continentId: continents.skratonia.id,
			reasoning: `Warrior Prides On Plains`,
		}),
		changeling_kuriguer_relation: await db.createRaceContinent({
			id: "changeling-kuriguer-relation",
			raceId: races.changeling.id,
			continentId: continents.kuriguer.id,
			reasoning: `Blend Into Diverse Magic Towns`,
		}),
		kenku_kuriguer_relation: await db.createRaceContinent({
			id: "kenku-kuriguer-relation",
			raceId: races.kenku.id,
			continentId: continents.kuriguer.id,
			reasoning: `Mimicry Thrives In Bustling Ports`,
		}),
		dhampir_alatman_relation: await db.createRaceContinent({
			id: "dhampir-alatman-relation",
			raceId: races.dhampir.id,
			continentId: continents.alatman.id,
			reasoning: `Forest Edges, Tied To Vampiric Legends`,
		}),
		goblin_skratonia_relation: await db.createRaceContinent({
			id: "goblin-skratonia-relation",
			raceId: races.goblin.id,
			continentId: continents.skratonia.id,
			reasoning: `Scavengers On The Plains`,
		}),
		owlin_kuriguer_relation: await db.createRaceContinent({
			id: "owlin-kuriguer-relation",
			raceId: races.owlin.id,
			continentId: continents.kuriguer.id,
			reasoning: `Nocturnal Forestfolk`,
		}),
		hadozee_skratonia_relation: await db.createRaceContinent({
			id: "hadozee-skratonia-relation",
			raceId: races.hadozee.id,
			continentId: continents.skratonia.id,
			reasoning: `Target Enemies From Cliffs And Heights`,
		}),
		kobold_maltman_relation: await db.createRaceContinent({
			id: "kobold-maltman-relation",
			raceId: races.kobold.id,
			continentId: continents.maltman.id,
			reasoning: `Underground Miners Near Dwarves`,
		}),
		plasmoid_alatman_relation: await db.createRaceContinent({
			id: "plasmoid-alatman-relation",
			raceId: races.plasmoid.id,
			continentId: continents.alatman.id,
			reasoning: `Strange Oozes Near Volcanic Swamps`,
		}),
		yuan_ti_katman_relation: await db.createRaceContinent({
			id: "yuan-ti-katman-relation",
			raceId: races.yuan_ti.id,
			continentId: continents.katman.id,
			reasoning: `Serpentfolk Hidden In Swamps`,
		}),
	}
}