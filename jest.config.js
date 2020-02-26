module.exports = {
    verbose: true,
    testRegex: '/test/.*\\.(js|jsx)$',
    testPathIgnorePatterns: ['/node_modules/'],
    testURL: 'http://localhost:8070',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/lib/**/*.js',
    ],
    coverageDirectory: './coverage',
    reporters: [
        'default',
        ['./node_modules/jest-html-reporter', {
            pageTitle: 'Form Validation Problem Jest Unit Test Report',
        }],
    ],
};
