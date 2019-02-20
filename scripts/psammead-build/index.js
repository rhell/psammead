#!/usr/bin/env node

/* eslint-disable no-console */
const babel = require('@babel/core');
const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');

const regex = /\.(stories|test|spec).(js|jsx)$/;

const options = {
  configFile: path.resolve(__dirname, 'babel.config.js'),
};

const babelify = filename =>
  babel.transformFileAsync(filename, options).then(result => result.code);

const srcDir = `${process.cwd()}/src`;
const distDir = `${process.cwd()}/dist`;

const doThatThang = () => {
  glob(`${srcDir}/**/*.js*(x)`, {}, (er, files) => {
    const filteredFiles = files.filter(file => !regex.test(file));

    filteredFiles.forEach(filename => {
      babelify(filename)
        .then(result => {
          const writePath = filename
            .replace(srcDir, distDir)
            .replace('.jsx', '.js');

          fs.outputFile(writePath, result).catch(err => {
            console.error(err);
            process.exit(1);
          });
        })
        .catch(err => {
          console.err('err', err);
          process.exit(1);
        });
    });
  });
};

fs.remove(distDir)
  .then(() => {
    console.log('success!');
    doThatThang();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
