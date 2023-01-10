#!/usr/bin/env node
"use strict";
const { Command } = require("commander");
const figlet = require("figlet");
const program = new Command();
console.log(figlet.textSync("Timezone"));
program
    .version("1.0.0")
    .description("Timezone CLI for managing the times for remote team")
    .parse(process.argv);
const options = program.opts();
//# sourceMappingURL=index.js.map