#!/usr/bin/env node

/* eslint-disable no-console */
const { CLIEngine } = require('eslint');
const { argv } = require('yargs');

const fix = !!argv.fix;

const cli = new CLIEngine({
  fix,
});

const report = cli.executeOnFiles([`${process.cwd()}/src/**/*.js?(x|on)`]);

if (fix) {
  CLIEngine.outputFixes(report);
}

const formatter = cli.getFormatter();

console.log(formatter(report.results));

if (report.errorCount >= 1) {
  process.exit(1);
}

// stylelint 'packages/**/*.js' 'packages/**/*.jsx' 'scripts/**/*.js'