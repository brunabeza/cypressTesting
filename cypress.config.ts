import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: "cypress/e2e/**/_*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // Configurações para eventos do Node.js
      return config;
    },
    env: {
      apiUrl: "http://localhost:3000/api"
    }
  },
  fixturesFolder: "cypress/fixtures",
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
})