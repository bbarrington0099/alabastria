import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { FamilyTrees } from './familyTree';

type FamilyGenerationPayload = Prisma.FamilyGenerationGetPayload<{}>;
export interface FamilyGenerations {
    wildfistGeneration1: FamilyGenerationPayload;
    wildfistGeneration2: FamilyGenerationPayload;
    brothersOfZrarGeneration1: FamilyGenerationPayload;
}

interface SeedFamilyGenerationsParams {
    familyTrees: FamilyTrees;
}
export async function seedFamilyGenerations(params: SeedFamilyGenerationsParams): Promise<FamilyGenerations> {
    const { familyTrees } = params;
    return {
        wildfistGeneration1:  await db.createFamilyGeneration({
            id: 'familygeneration-wildfist-gen1',
            generationNumber: 1,
            familyTreeId: familyTrees.wildfist.id,
        }),
        wildfistGeneration2:  await db.createFamilyGeneration({
            id: 'familygeneration-wildfist-gen2',
            generationNumber: 2,
            familyTreeId: familyTrees.wildfist.id,
        }),
        brothersOfZrarGeneration1:  await db.createFamilyGeneration({
            id: 'familygeneration-brothers-of-zrar-gen1',
            generationNumber: 1,
            familyTreeId: familyTrees.brothersOfZrar.id,
        }),
    };
}