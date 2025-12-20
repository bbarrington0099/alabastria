/**
 * UploadThing Client Utilities
 * 
 * Generated components and hooks for file uploads on the client side.
 */

import {
    generateUploadButton,
    generateUploadDropzone,
    generateReactHelpers,
} from "@uploadthing/react";
import type { OurFileRouter } from "./uploadthing";

// Generate typed upload components
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// Generate React helpers (hooks)
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();

// Export endpoint types for type safety
export type UploadEndpoint = keyof OurFileRouter;

