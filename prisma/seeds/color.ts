import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';

type ColorPayload = Prisma.ColorGetPayload<{}>;
export interface Colors {
    purple: ColorPayload;
    silver: ColorPayload;
    pink: ColorPayload;
    brown: ColorPayload;
    orange: ColorPayload;
    yellow: ColorPayload;
    steelGray: ColorPayload;
    blue: ColorPayload;
    green: ColorPayload;
    gold: ColorPayload;
    lightBlue: ColorPayload;
    white: ColorPayload;
    crimson: ColorPayload;
    dark: ColorPayload;
    black: ColorPayload;
    deepPurple: ColorPayload;
    bloodRed: ColorPayload;
    ashGray: ColorPayload;
    crimsonRed: ColorPayload;
    deepBlue: ColorPayload;
    darkPurple: ColorPayload;
    paleGold: ColorPayload;
    skyBlue: ColorPayload;
    softGray: ColorPayload;
    ivory: ColorPayload;
    inkBlack: ColorPayload;
    midnightBlue: ColorPayload;
    smokeGray: ColorPayload;
    darkBlue: ColorPayload;
    earthBrown: ColorPayload;
    goldenYellow: ColorPayload;
    paleBlue: ColorPayload;
    sicklyGreen: ColorPayload;
    venomYellow: ColorPayload;
    darkBrown: ColorPayload;
    mauve: ColorPayload;
    gray: ColorPayload;
    red: ColorPayload;
    darkGray: ColorPayload;
    boneWhite: ColorPayload;
    platinum: ColorPayload;
}

export async function seedColors(): Promise<Colors> {
    return {
        purple: await db.createColor({
            id: 'color-purple',
            name: 'Purple',
            hexValue: '#800080',
        }),
        silver: await db.createColor({
            id: 'color-silver',
            name: 'Silver',
            hexValue: '#C0C0C0',
        }),
        pink: await db.createColor({
            id: 'color-pink',
            name: 'Pink',
            hexValue: '#FFC0CB',
        }),
        brown: await db.createColor({
            id: 'color-brown',
            name: 'Brown',
            hexValue: '#7C4700',
        }),
        orange: await db.createColor({
            id: 'color-orange',
            name: 'Orange',
            hexValue: '#FFA500',
        }),
        yellow: await db.createColor({
            id: 'color-yellow',
            name: 'Yellow',
            hexValue: '#FFFF00',
        }),
        steelGray: await db.createColor({
            id: 'color-steel-gray',
            name: 'Steel Gray',
            hexValue: '#71797E',
        }),
        blue: await db.createColor({
            id: 'color-blue',
            name: 'Blue',
            hexValue: '#0000FF',
        }),
        green: await db.createColor({
            id: 'color-green',
            name: 'Green',
            hexValue: '#008000',
        }),
        gold: await db.createColor({
            id: 'color-gold',
            name: 'Gold',
            hexValue: '#EFBF0A',
        }),
        lightBlue: await db.createColor({
            id: 'color-light-blue',
            name: 'Light Blue',
            hexValue: '#ADD8E6',
        }),
        white: await db.createColor({
            id: 'color-white',
            name: 'White',
            hexValue: '#FFFFFF',
        }),
        crimson: await db.createColor({
            id: 'color-crimson',
            name: 'Crimson',
            hexValue: '#8B0000',
        }),
        dark: await db.createColor({
            id: 'color-dark',
            name: 'Dark',
            hexValue: '#1A1A1A',
        }),
        black: await db.createColor({
            id: 'color-black',
            name: 'Black',
            hexValue: '#000000',
        }),
        deepPurple: await db.createColor({
            id: 'color-deep-purple',
            name: 'Deep Purple',
            hexValue: '#4B0082',
        }),
        bloodRed: await db.createColor({
            id: 'color-blood-red',
            name: 'Blood Red',
            hexValue: '#8B0000',
        }),
        ashGray: await db.createColor({
            id: 'color-ash-gray',
            name: 'Ash Gray',
            hexValue: '#B2BEB5',
        }),
        crimsonRed: await db.createColor({
            id: 'color-crimson-red',
            name: 'Crimson Red',
            hexValue: '#DC143C',
        }),
        deepBlue: await db.createColor({
            id: 'color-deep-blue',
            name: 'Deep Blue',
            hexValue: '#00008B',
        }),
        darkPurple: await db.createColor({
            id: 'color-dark-purple',
            name: 'Dark Purple',
            hexValue: '#663399',
        }),
        paleGold: await db.createColor({
            id: 'color-pale-gold',
            name: 'Pale Gold',
            hexValue: '#EEE8AA',
        }),
        skyBlue: await db.createColor({
            id: 'color-sky-blue',
            name: 'Sky Blue',
            hexValue: '#87CEEB',
        }),
        softGray: await db.createColor({
            id: 'color-soft-gray',
            name: 'Soft Gray',
            hexValue: '#D3D3D3',
        }),
        ivory: await db.createColor({
            id: 'color-ivory',
            name: 'Ivory',
            hexValue: '#FFFFF0',
        }),
        inkBlack: await db.createColor({
            id: 'color-ink-black',
            name: 'Ink Black',
            hexValue: '#1B1B1B',
        }),
        midnightBlue: await db.createColor({
            id: 'color-midnight-blue',
            name: 'Midnight Blue',
            hexValue: '#191970',
        }),
        smokeGray: await db.createColor({
            id: 'color-smoke-gray',
            name: 'Smoke Gray',
            hexValue: '#848484',
        }),
        darkBlue: await db.createColor({
            id: 'color-dark-blue',
            name: 'Dark Blue',
            hexValue: '#00008B',
        }),
        earthBrown: await db.createColor({
            id: 'color-earth-brown',
            name: 'Earth Brown',
            hexValue: '#8B4513',
        }),
        goldenYellow: await db.createColor({
            id: 'color-golden-yellow',
            name: 'Golden Yellow',
            hexValue: '#FFDF00',
        }),
        paleBlue: await db.createColor({
            id: 'color-pale-blue',
            name: 'Pale Blue',
            hexValue: '#AFEEEE',
        }),
        sicklyGreen: await db.createColor({
            id: 'color-sickly-green',
            name: 'Sickly Green',
            hexValue: '#A9BA9D',
        }),
        venomYellow: await db.createColor({
            id: 'color-venom-yellow',
            name: 'Venom Yellow',
            hexValue: '#CCCC00',
        }),
        darkBrown: await db.createColor({
            id: 'color-dark-brown',
            name: 'Dark Brown',
            hexValue: '#654321',
        }),
        mauve: await db.createColor({
            id: 'color-mauve',
            name: 'Mauve',
            hexValue: '#E0B0FF',
        }),
        gray: await db.createColor({
            id: 'color-gray',
            name: 'Gray',
            hexValue: '#808080',
        }),
        red: await db.createColor({
            id: 'color-red',
            name: 'Red',
            hexValue: '#FF0000',
        }),
        darkGray: await db.createColor({
            id: 'color-dark-gray',
            name: 'Dark Gray',
            hexValue: '#A9A9A9',
        }),
        boneWhite: await db.createColor({
            id: 'color-bone-white',
            name: 'Bone White',
            hexValue: '#F9F6EE',
        }),
        platinum: await db.createColor({
            id: 'color-platinum',
            name: 'Platinum',
            hexValue: '#E5E4E2',
        }),
    };
}