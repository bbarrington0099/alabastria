import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';

type FamilyTreePayload = Prisma.FamilyTreeGetPayload<{}>;
export interface FamilyTrees {
    wildfist: FamilyTreePayload;
    brothersOfZrar: FamilyTreePayload;
}

export async function seedFamilyTrees(): Promise<FamilyTrees> {
    return {
        wildfist: await db.createFamilyTree({
            id: 'familytree-wildfist',
            name: 'Wildfist Clan',
            description: 'The Wildfist Clan is a small family devoted to the Huntbound Order, known for their great skill and unwavering loyalty to their deity.',
        }),
        brothersOfZrar: await db.createFamilyTree({
            id: 'familytree-brothers-of-zrar',
            name: 'Brothers of Zrar',
            description: 'The Brothers of Zrar are two hobgoblins who forged a deep bond through shared hardship after being raised by the Frostmarch Company in Bulsania sharing mutual respect, standing together against all odds.',
        }),
    };
}
