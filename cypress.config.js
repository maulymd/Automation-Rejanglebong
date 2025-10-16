const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: 'https://aps-rejanglebong.skwn.dev/dev/',
    env: {
      username: process.env.CYPRESS_TEST_USERNAME,
      password: process.env.CYPRESS_TEST_PASSWORD,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
