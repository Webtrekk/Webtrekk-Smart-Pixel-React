var gulp = require('gulp'),
    path = require('path'),
    rollup = require('gulp-rollup'),
    rename = require('gulp-rename'),
    fs = require('fs-extra'),
    runSequence = require('run-sequence');

const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, 'lib');
const buildFolder = path.join(rootFolder, '.build');
const distFolder = path.join(rootFolder, 'dist');
const debugFolder = path.join(rootFolder, 'debug');

function deleteFolder(folder) {
    return fs.removeSync(folder);
}

gulp.task('clean:dist', function () {
    return fs.emptyDirSync(distFolder);
});

gulp.task('clean:debug', function () {
    return fs.emptyDirSync(debugFolder);
});

gulp.task('clean:build', function () {
    return deleteFolder(buildFolder);
});

gulp.task('copy:source', function () {
    return gulp.src([`${srcFolder}/**/*`, `!${srcFolder}/node_modules`]).pipe(gulp.dest(buildFolder));
});

gulp.task('rollup:esm', function () {
    return gulp.src(`${buildFolder}/**/*.js`)
        .pipe(rollup({
            input: `${buildFolder}/index.js`,
            allowRealFiles: true,
            external: [
                'webtrekk-smart-pixel'
            ],
            output: {
                name: 'webtrekk-smart-pixel-react',
                format: 'es',
                exports: 'named'
            }
        }))
        .pipe(rename('webtrekk-smart-pixel-react.esm.js'))
        .pipe(gulp.dest(distFolder));
});

gulp.task('rollup:umd', function () {
    return gulp.src(`${buildFolder}/**/*.js`)
        .pipe(rollup({
            input: `${buildFolder}/index.js`,
            allowRealFiles: true,
            external: [
                'webtrekk-smart-pixel'
            ],
            output: {
                name: 'webtrekk-smart-pixel-react',
                globals: {
                    'webtrekk-smart-pixel': 'wtSmart'
                },
                format: 'umd',
                exports: 'named'
            }
        }))
        .pipe(rename('webtrekk-smart-pixel-react.umd.js'))
        .pipe(gulp.dest(distFolder));
});

gulp.task('rollup:amd', function () {
    return gulp.src(`${buildFolder}/**/*.js`)
        .pipe(rollup({
            input: `${buildFolder}/index.js`,
            allowRealFiles: true,
            external: [
                'webtrekk-smart-pixel'
            ],
            output: {
                name: 'webtrekk-smart-pixel-react',
                globals: {
                    'webtrekk-smart-pixel': 'wtSmart'
                },
                format: 'amd',
                exports: 'named'
            }
        }))
        .pipe(rename('webtrekk-smart-pixel-react.amd.js'))
        .pipe(gulp.dest(distFolder));
});

gulp.task('rollup:cjs', function () {
    return gulp.src(`${buildFolder}/**/*.js`)
        .pipe(rollup({
            input: `${buildFolder}/index.js`,
            allowRealFiles: true,
            external: [
                'webtrekk-smart-pixel'
            ],
            output: {
                name: 'webtrekk-smart-pixel-react',
                globals: {
                    'webtrekk-smart-pixel': 'wtSmart'
                },
                format: 'cjs',
                exports: 'named'
            }
        }))
        .pipe(rename('webtrekk-smart-pixel-react.cjs.js'))
        .pipe(gulp.dest(distFolder));
});

gulp.task('rollup:esm-debug', function () {
    return gulp.src(`${buildFolder}/**/*.js`)
        .pipe(rollup({
            input: `${buildFolder}/debug.js`,
            allowRealFiles: true,
            external: [
                'webtrekk-smart-pixel/debug'
            ],
            output: {
                name: 'webtrekk-smart-pixel-react',
                format: 'es',
                exports: 'named'
            }
        }))
        .pipe(rename('webtrekk-smart-pixel-react.esm.js'))
        .pipe(gulp.dest(debugFolder));
});

gulp.task('rollup:umd-debug', function () {
    return gulp.src(`${buildFolder}/**/*.js`)
        .pipe(rollup({
            input: `${buildFolder}/debug.js`,
            allowRealFiles: true,
            external: [
                'webtrekk-smart-pixel/debug'
            ],
            output: {
                name: 'webtrekk-smart-pixel-react',
                globals: {
                    'webtrekk-smart-pixel/debug': 'wtSmart'
                },
                format: 'umd',
                exports: 'named'
            }
        }))
        .pipe(rename('webtrekk-smart-pixel-react.umd.js'))
        .pipe(gulp.dest(debugFolder));
});

gulp.task('rollup:amd-debug', function () {
    return gulp.src(`${buildFolder}/**/*.js`)
        .pipe(rollup({
            input: `${buildFolder}/debug.js`,
            allowRealFiles: true,
            external: [
                'webtrekk-smart-pixel/debug'
            ],
            output: {
                name: 'webtrekk-smart-pixel-react',
                globals: {
                    'webtrekk-smart-pixel/debug': 'wtSmart'
                },
                format: 'amd',
                exports: 'named'
            }
        }))
        .pipe(rename('webtrekk-smart-pixel-react.amd.js'))
        .pipe(gulp.dest(debugFolder));
});

gulp.task('rollup:cjs-debug', function () {
    return gulp.src(`${buildFolder}/**/*.js`)
        .pipe(rollup({
            input: `${buildFolder}/debug.js`,
            allowRealFiles: true,
            external: [
                'webtrekk-smart-pixel/debug'
            ],
            output: {
                name: 'webtrekk-smart-pixel-react',
                globals: {
                    'webtrekk-smart-pixel/debug': 'wtSmart'
                },
                format: 'cjs',
                exports: 'named'
            }
        }))
        .pipe(rename('webtrekk-smart-pixel-react.cjs.js'))
        .pipe(gulp.dest(debugFolder));
});

gulp.task('copy:build', function () {
    return gulp.src([`${buildFolder}/**/*`, `!${buildFolder}/**/*.js`]).pipe(gulp.dest(distFolder));
});

gulp.task('copy:manifest', function () {
    return gulp.src([`${srcFolder}/package-debug.json`])
        .pipe(rename('package.json'))
        .pipe(gulp.dest(debugFolder));
});

gulp.task('compile', function () {
    runSequence(
        'clean:dist',
        'clean:debug',
        'copy:source',
        'rollup:esm',
        'rollup:umd',
        'rollup:amd',
        'rollup:cjs',
        'rollup:esm-debug',
        'rollup:umd-debug',
        'rollup:amd-debug',
        'rollup:cjs-debug',
        'copy:manifest',
        'copy:build',
        'clean:build',
        function (err) {
            if (err) {
                console.log('ERROR:', err.message);
                deleteFolder(distFolder);
                deleteFolder(buildFolder);
            } else {
                console.log('Compilation finished succesfully');
            }
        });
});

gulp.task('clean', function (callback) {
    runSequence('clean:dist', 'clean:debug', 'clean:build', callback);
});

gulp.task('build', function (callback) {
    runSequence('clean', 'compile', callback);
});