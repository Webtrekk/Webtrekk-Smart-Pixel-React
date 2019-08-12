module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        './lib/**/*.js',
        './lib/*.js'
    ],
    coverageDirectory: `./coverage/${process.env.REACT_VERSION}`,
    coverageThreshold: {
        "./lib/Components/": {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        },
        "./lib/Components/Data/": {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    }
};
