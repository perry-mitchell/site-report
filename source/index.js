#!/usr/bin/env node

const minimist = require("minimist");
const WindowManager = require("./WindowManager.js");

const ERR_URLS = 2;

const argv = minimist(process.argv.slice(2));
const {
    _: urls = []
} = argv;

if (urls.length === 0) {
    console.error("URL expected");
    process.exit(ERR_URLS);
}

const wm = new WindowManager();
wm.initialise();
