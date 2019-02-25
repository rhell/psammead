#!/usr/bin/env node

const jest = require('jest-cli');

jest
  .runCLI(
    {
      transform: JSON.stringify({
        '^.+\\.jsx?$': require.resolve('./jest.transform.js'),
      }),
      testMatch: ['**/*.test.js?(x)'],
    },
    [process.cwd()],
  )
  .then(result => {
    if (result.results.numFailedTests >= 1) {
      process.exit(1);
    }
  })
  .catch(err => {
    console.log('lol', err);
  });
