const fs = require('fs');
const istanbul = require('istanbul');
const collector = new istanbul.Collector();
const reporter = istanbul.Report.create('lcov', {
    type: 'lcov',
    dir: 'coverage/all'
});

const directories = ['14', '15', '16'];

directories.map(dir => {
    collector.add(JSON.parse(fs.readFileSync(`./coverage/${dir}/coverage-final.json`)));
});

reporter.writeReport(collector, true);
