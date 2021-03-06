const cypress = require('cypress');
const marge = require('mochawesome-report-generator');
const { merge } = require('mochawesome-merge');
const { argv } = require('yargs');
const del = require('del');

const reporterOptions = {
    reportDir: `cypress/results/${argv.userAgent}`,
    overwrite: false,
    html: false,
    json: true,
    reportTitle: `Form Validation Problem Cypress ${argv.userAgent} tests`,
};

const removeReportsDir = async () => del(reporterOptions.reportDir);

const runTests = async () => cypress.run({
        env: {
            userAgent: argv.userAgent,
            RETRIES: 3,
        },
        reporter: 'mochawesome',
        reporterOptions,
    });

const generateReport = async (options) => {
    const report = await merge(options);
    return marge.create(report, options);
};

removeReportsDir()
    .then(async (paths) => {
        console.log('>>>>>>>>[run-cypress-tests] deleted: ', paths);
        const testResults = await runTests();
        console.log('>>>>>>>>[run-cypress-tests] testResults: ', testResults);
        await generateReport(reporterOptions);
        process.exit(0);
    })
    .catch((e) => {
        console.log('>>>>>>>>[run-cypress-tests] ERROR: ', e);
        process.exit(1);
    });
