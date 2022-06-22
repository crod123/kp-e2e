import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "tests/cypress/support/e2e.{js,jsx,ts,tsx}"
  },
  downloadsFolder: "tests/cypress/downloads",
  fixturesFolder: "tests/cypress/e2e",
  supportFolder: "tests/cypress/support",
  screenshotsFolder: "tests/cypress/screenshots",
  videosFolder: "tests/cypress/videos",
  env: {
    "host": "https://healthy.kaiserpermanente.org/vaccinemonitor/"
  },
});
