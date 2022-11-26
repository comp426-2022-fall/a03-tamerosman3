#!/usr/bin/env node
import minimist from "minimist"
import rolls from "../lib/roll.js"
var args= minimist(process.argv.slice(2));
console.log(rolls(args.side, args.dice, args.rolls));
