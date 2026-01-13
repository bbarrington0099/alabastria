import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { Characters, FamilyTrees } from './index';

type CharacterRelationshipPayload = Prisma.CharacterRelationshipGetPayload<{}>;
export interface CharacterRelationships {
    krakAndSabaakBrothers: CharacterRelationshipPayload;
    aurenAndIlikanParentChild: CharacterRelationshipPayload;
    aurenAndFionaParentChild: CharacterRelationshipPayload;
    ilikanAndFionaSpouse: CharacterRelationshipPayload;
}

interface SeedCharacterRelationshipsParams {
    characters: Characters;
    familyTrees: FamilyTrees;
}
export async function seedCharacterRelationships(params: SeedCharacterRelationshipsParams): Promise<CharacterRelationships> {
    const { characters, familyTrees } = params;
    return {
        krakAndSabaakBrothers: await db.createCharacterRelationship({
            id: 'characterrelationship-krak-sabaak-brothers',
            fromCharacterType: 'brother',
            fromCharacter: { connect: { id: characters.krakFrostmarchCompany.id } },
            toCharacterType: 'brother',
            toCharacter: { connect: { id: characters.sabaakFrostmarchCompany.id } },
            familyTree: { connect: { id: familyTrees.brothersOfZrar.id } },
            relationshipType: 'sibling',
        }),
        aurenAndIlikanParentChild: await db.createCharacterRelationship({
            id: 'characterrelationship-auren-ilikan-parentchild',
            fromCharacterType: 'father',
            fromCharacter: { connect: { id: characters.ilikanWildfist.id } },
            toCharacterType: 'son',
            toCharacter: { connect: { id: characters.aurenWildfist.id } },
            familyTree: { connect: { id: familyTrees.wildfist.id } },
            relationshipType: 'parent-child',
        }),
        aurenAndFionaParentChild: await db.createCharacterRelationship({
            id: 'characterrelationship-auren-fiona-parentchild',
            fromCharacterType: 'mother',
            fromCharacter: { connect: { id: characters.fionaWildfist.id } },
            toCharacterType: 'son',
            toCharacter: { connect: { id: characters.aurenWildfist.id } },
            familyTree: { connect: { id: familyTrees.wildfist.id } },
            relationshipType: 'parent-child',
        }),
        ilikanAndFionaSpouse: await db.createCharacterRelationship({
            id: 'characterrelationship-ilikan-fiona-spouse',
            fromCharacterType: 'husband',
            fromCharacter: { connect: { id: characters.ilikanWildfist.id } },
            toCharacterType: 'wife',
            toCharacter: { connect: { id: characters.fionaWildfist.id } },
            familyTree: { connect: { id: familyTrees.wildfist.id } },
            relationshipType: 'spouse',
        }),
    };
}