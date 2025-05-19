#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

if (process.argv.length < 4) {
    console.error('Usage: node voices.js <sourceDir> <leader> <Nation>');
    process.exit(1);
}

const sourceDir = process.argv[2];
const leader = process.argv[3];
const nationName = process.argv[4];
const destDir = '../voices';

const filesToCopy = [
    { src: `${leader}_intro.mp3`, dest: `${nationName}.introduction.mp3` },
    { src: `${leader}intro.mp3`, dest: `${nationName}.introduction.mp3` },
    { src: `${leader}_defeated.mp3`, dest: `${nationName}.defeated.mp3` },
    { src: `${leader}defeated.mp3`, dest: `${nationName}.defeated.mp3` },
    { src: `${leader}_attacked.mp3`, dest: `${nationName}.attacked.mp3` },
    { src: `${leader}attacked.mp3`, dest: `${nationName}.attacked.mp3` },
    { src: `${leader}_neutral_hello.mp3`, dest: `${nationName}.neutralHello.mp3` },
    { src: `${leader}neutralhello.mp3`, dest: `${nationName}.neutralHello.mp3` },
    { src: `${leader}_hate_hello.mp3`, dest: `${nationName}.hateHello.mp3` },
    { src: `${leader}hatehello.mp3`, dest: `${nationName}.hateHello.mp3` },
    { src: `${leader}_request.mp3`, dest: `${nationName}.tradeRequest.mp3` },
    { src: `${leader}request.mp3`, dest: `${nationName}.tradeRequest.mp3` },
    { src: `${leader}traderequestneutral.mp3`, dest: `${nationName}.tradeRequest.mp3` },
    { src: `${leader}_declare_war.mp3`, dest: `${nationName}.declaringWar.mp3` },
    { src: `${leader}declarewar.mp3`, dest: `${nationName}.declaringWar.mp3` },
    { src: `${leader}declareswar.mp3`, dest: `${nationName}.declaringWar.mp3` },
];

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

filesToCopy.forEach(({ src, dest }) => {
    const srcPath = path.join(sourceDir, src);
    const destPath = path.join(destDir, dest);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${src} to ${destPath}`);
    } else {
        console.warn(`Warning: ${srcPath} does not exist.`);
    }
});