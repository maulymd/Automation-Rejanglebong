const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: "https://aps-rejanglebong.skwn.dev/dev",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
