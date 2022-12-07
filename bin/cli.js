#!/usr/bin/env node
import minimist from "minimist"
import roll from "../lib/roll.js"
var args= minimist(process.argv.slice(2));
console.log(rolls(args.sides, args.dice, args.rolls));
