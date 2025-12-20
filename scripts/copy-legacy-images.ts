/**
 * Copy Legacy Images Script
 * 
 * Copies images from the old AlabastriaCharacterAssistant app
 * to the public folder for the new app.
 * 
 * Usage: npx tsx scripts/copy-legacy-images.ts
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source and destination paths
const LEGACY_PATH = path.join(__dirname, "../../AlabastriaCharacterAssistant");
const PUBLIC_PATH = path.join(__dirname, "../public/images");

// Image directories to copy
const IMAGE_DIRS = [
    { source: "continent_images", dest: "continents" },
    { source: "flagImages", dest: "flags" },
    { source: "rulerImages", dest: "rulers" },
    { source: "staffImages", dest: "guild-staff" },
    { source: "memberImages", dest: "guild-members" },
    { source: "rankImages", dest: "ranks" },
];

// Individual files to copy
const INDIVIDUAL_FILES = [
    { source: "GuildEmblem.png", dest: "guild/emblem.png" },
    { source: "alabastriaFavicon.png", dest: "favicon.png" },
];

function ensureDir(dirPath: string) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function copyFile(src: string, dest: string) {
    const destDir = path.dirname(dest);
    ensureDir(destDir);
    fs.copyFileSync(src, dest);
}

function copyDirectory(srcDir: string, destDir: string) {
    if (!fs.existsSync(srcDir)) {
        console.log(`  ⚠️ Source directory not found: ${srcDir}`);
        return 0;
    }

    ensureDir(destDir);

    const files = fs.readdirSync(srcDir);
    let count = 0;

    for (const file of files) {
        const srcPath = path.join(srcDir, file);
        const destPath = path.join(destDir, file.toLowerCase());

        if (fs.statSync(srcPath).isFile()) {
            copyFile(srcPath, destPath);
            count++;
        }
    }

    return count;
}

async function main() {
    console.log("📁 Copying legacy images to public folder...\n");

    // Ensure base public/images directory exists
    ensureDir(PUBLIC_PATH);

    // Copy image directories
    for (const dir of IMAGE_DIRS) {
        const srcDir = path.join(LEGACY_PATH, dir.source);
        const destDir = path.join(PUBLIC_PATH, dir.dest);

        const count = copyDirectory(srcDir, destDir);
        console.log(`   ✓ ${dir.source} -> ${dir.dest} (${count} files)`);
    }

    // Copy individual files
    console.log("\n📄 Copying individual files...");
    for (const file of INDIVIDUAL_FILES) {
        const srcPath = path.join(LEGACY_PATH, file.source);
        const destPath = path.join(PUBLIC_PATH, file.dest);

        if (fs.existsSync(srcPath)) {
            copyFile(srcPath, destPath);
            console.log(`   ✓ ${file.source} -> ${file.dest}`);
        } else {
            console.log(`   ⚠️ Not found: ${file.source}`);
        }
    }

    console.log("\n✨ Legacy images copied successfully!");
    console.log("\nImage paths in the app should use:");
    console.log("  - /images/continents/[name].png");
    console.log("  - /images/flags/[name].png");
    console.log("  - /images/rulers/[name].png");
    console.log("  - /images/guild-staff/[name].png");
    console.log("  - /images/guild-members/[name].png");
    console.log("  - /images/ranks/[rank]_rank.png");
}

main().catch(console.error);

