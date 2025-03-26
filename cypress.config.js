const { defineConfig } = require("cypress")
const webpack = require('@cypress/webpack-preprocessor')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
