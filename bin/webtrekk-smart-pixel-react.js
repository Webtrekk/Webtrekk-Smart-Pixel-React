const path = require('path');
const fs = require('fs');
const spawn = require('child_process').spawn;
const rimraf = require('rimraf');

const root = process.cwd();
const version = process.env.REACT_VERSION;

const packagesToRemove = [
    'react',
    'react-dom',
    'react-test-renderer',
    'react-addons-test-utils',
    'react-router-dom',
    'enzyme-adapter-react-14',
    'enzyme-adapter-react-15',
    'enzyme-adapter-react-16'
].map(packageName => `./node_modules/${packageName}`);

const packagesToInstall = {
    '14': ['react@^0.14', 'react-dom@^0.14', 'react-router-dom@^5', 'react-addons-test-utils@^0.14', 'react-test-renderer@^1', 'enzyme-adapter-react-14'],
    '15': ['react@^15', 'react-dom@^15', 'react-router-dom@^5', 'react-addons-test-utils@^15', 'react-test-renderer@^15', 'enzyme-adapter-react-15'],
    '16': ['react@^16', 'react-dom@^16', 'react-router-dom@^5', 'react-test-renderer@^16', 'enzyme-adapter-react-16'],
    'alpha': ['react@alpha', 'react-dom@alpha', 'react-router-dom@^5', 'react-test-renderer@alpha', 'enzyme-adapter-react-16'],
    'latest': ['react@latest', 'react-dom@latest', 'react-router-dom@^5', 'react-test-renderer@latest', 'enzyme-adapter-react-16'],
    'next': ['react@next', 'react-dom@next', 'react-router-dom@^5', 'react-test-renderer@next', 'enzyme-adapter-react-16']
};

const promisify = fn => new Promise((res, rej) => {
    const done = (err, val) => (err ? rej(err) : res(val));
    fn(done);
});

const removePackage = packagePath => promisify((cb) => {
    console.log(`rm -rf ${packagePath}`);
    rimraf(packagePath, cb);
});

const isWindows = () => {
    return /^win/.test(process.platform);
};

const run = (cmd, ...args) => promisify((cb) => {
    if (isWindows()) {
        cmd += '.cmd'
    }

    console.log(cmd + ' ' + args.join(' '));
    const child = spawn(cmd, args, { cwd: root, stdio: 'inherit' });
    child.on('error', cb);
    child.on('exit', cb);
});

Promise.resolve()
    .then(() => Promise.all(packagesToRemove.map(packagePath => removePackage(packagePath))))
    .then(() => run('npm', 'install'))
    .then(() => {
        return run('npm', 'install', '--no-save', ...packagesToInstall[version]);
    })
    .catch(err => console.error(err));
