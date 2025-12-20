/**
 * UploadThing Configuration
 * 
 * Defines file upload routes for different image types in the app.
 * Files are stored in the /uploads Docker volume.
 */

import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "./auth";

const f = createUploadthing();

/**
 * Define upload routes for different image types
 */
export const uploadRouter = {
    // Continent map images (admin only)
    continentImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(async () => {
            const session = await auth();
            if (!session?.user || session.user.role !== "ADMIN") {
                throw new UploadThingError("Unauthorized");
            }
            return { userId: session.user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Continent image uploaded by:", metadata.userId);
            console.log("File URL:", file.ufsUrl);
            return { url: file.ufsUrl };
        }),

    // Flag images (admin only)
    flagImage: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
        .middleware(async () => {
            const session = await auth();
            if (!session?.user || session.user.role !== "ADMIN") {
                throw new UploadThingError("Unauthorized");
            }
            return { userId: session.user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Flag image uploaded by:", metadata.userId);
            return { url: file.ufsUrl };
        }),

    // Ruler/NPC portrait images (admin only)
    portraitImage: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
        .middleware(async () => {
            const session = await auth();
            if (!session?.user || session.user.role !== "ADMIN") {
                throw new UploadThingError("Unauthorized");
            }
            return { userId: session.user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Portrait uploaded by:", metadata.userId);
            return { url: file.ufsUrl };
        }),

    // Guild emblem images (admin only)
    guildEmblem: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
        .middleware(async () => {
            const session = await auth();
            if (!session?.user || session.user.role !== "ADMIN") {
                throw new UploadThingError("Unauthorized");
            }
            return { userId: session.user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Guild emblem uploaded by:", metadata.userId);
            return { url: file.ufsUrl };
        }),

    // Faction emblem images (admin only)
    factionEmblem: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
        .middleware(async () => {
            const session = await auth();
            if (!session?.user || session.user.role !== "ADMIN") {
                throw new UploadThingError("Unauthorized");
            }
            return { userId: session.user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Faction emblem uploaded by:", metadata.userId);
            return { url: file.ufsUrl };
        }),

    // Character avatar images (authenticated users)
    characterAvatar: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
        .middleware(async () => {
            const session = await auth();
            if (!session?.user) {
                throw new UploadThingError("Unauthorized");
            }
            return { userId: session.user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Character avatar uploaded by:", metadata.userId);
            return { url: file.ufsUrl };
        }),

    // Town images (admin only)
    townImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(async () => {
            const session = await auth();
            if (!session?.user || session.user.role !== "ADMIN") {
                throw new UploadThingError("Unauthorized");
            }
            return { userId: session.user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Town image uploaded by:", metadata.userId);
            return { url: file.ufsUrl };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;

