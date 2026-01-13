import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Characters, FamilyGenerations } from '../index';

interface CharacterFamilyGenerationsParams {
    characters: Characters;
    familyGenerations: FamilyGenerations;
}
export async function setCharacterFamilyGenerations(params: CharacterFamilyGenerationsParams) {
    const { characters, familyGenerations } = params;
    try {
        await db.setCharacterFamilyGeneration(characters.krakFrostmarchCompany.id, familyGenerations.brothersOfZrarGeneration1.id);
        await db.setCharacterFamilyGeneration(characters.sabaakFrostmarchCompany.id, familyGenerations.brothersOfZrarGeneration1.id);
        await db.setCharacterFamilyGeneration(characters.aurenWildfist.id, familyGenerations.wildfistGeneration2.id);
        await db.setCharacterFamilyGeneration(characters.ilikanWildfist.id, familyGenerations.wildfistGeneration1.id);
        await db.setCharacterFamilyGeneration(characters.fionaWildfist.id, familyGenerations.wildfistGeneration1.id);
    } catch (error) {
        console.error(`Error setting character family generations:`, error);
        process.exit(1);
    }
}