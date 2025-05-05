const { defineConfig } = require("cypress")
const { exec } = require('child_process')

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'http://localhost:3000', 
    baseUrl: 'https://www.wikipedia.org', 

    setupNodeEvents(on, config) {
      // Configurar o reporter Mochawesome
      on('after:run', () => {
        // Mesclar arquivos JSON de resultados dos testes
        exec('npx mochawesome-merge cypress/results/*.json > cypress/results/all-tests.json', (err, stdout, stderr) => {
          if (err) {
            console.error('Erro ao mesclar os relatórios:', stderr);
          } else {
            console.log(stdout);

            // Gerar o relatório HTML a partir do JSON mesclado
            exec('npx mochawesome-report-generator cypress/results/all-tests.json', (err, stdout, stderr) => {
              if (err) {
                console.error('Erro ao gerar o relatório:', stderr);
              } else {
                console.log(stdout);
              }
            });
          }
        });
      });

      return config;
    },

    // Definir o reporter como Mochawesome
    reporter: 'mochawesome',
    
    reporterOptions: {
      reportDir: 'cypress/results',  // Onde os relatórios serão salvos
      overwrite: true,               // Sobrescrever os relatórios antigos
      html: true,                    // Gerar relatório em HTML
      json: true                     // Gerar relatório em JSON
    },
  },
});
