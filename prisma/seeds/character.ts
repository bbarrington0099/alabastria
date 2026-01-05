import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Classes, Continents, CreatureSizes, CreatureTypes, Deities, Languages, Races, Subclasses, Subraces, Towns } from "./index";

type CharacterPayload = Prisma.CharacterGetPayload<{}>;
export interface Characters {

}

interface SeedCharactersParams {
    races: Races
    subraces: Subraces
    classes: Classes
    subclasses: Subclasses
    languages: Languages
    deities: Deities
    continents: Continents
    towns: Towns
    creatureSizes: CreatureSizes
    creatureTypes: CreatureTypes
}
export async function seedCharacters(params: SeedCharactersParams): Promise<Characters> {
    const { races, subraces, classes, subclasses, languages, deities, continents, towns, creatureSizes, creatureTypes } = params;
    return {

    }
}