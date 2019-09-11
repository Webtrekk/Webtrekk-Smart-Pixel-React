var gulp = require('gulp'),
    path = require('path'),
    rollup = require('gulp-rollup'),
    rename = require('gulp-rename'),
    babel = require('rollup-plugin-babel'),
    fs = require('fs-extra'),
    runSequence = require('run-sequence');

const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, 'lib');
const buildFolder = path.join(rootFolder, '.build');
const distFolder = path.join(rootFolder, 'dist');

function deleteFolder(folder) {
    return fs.removeSync(folder);
}

gulp.task('clean:dist', function () {
    return fs.emptyDirSync(distFolder);
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
                'react',
                'react-router-dom',
                'prop-types',
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
            plugins: [
                babel({
                    exclude: 'node_modules/**'
                })
            ],
            input: `${buildFolder}/index.js`,
            allowRealFiles: true,
            external: [
                'react',
                'react-router-dom',
                'prop-types',
                'webtrekk-smart-pixel'
            ],
            output: {
                name: 'webtrekk-smart-pixel-react',
                globals: {
                    'react': 'React',
                    'react-router-dom': 'reactRouterDom',
                    'prop-types': 'PropTypes',
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
            plugins: [
                babel({
                    exclude: 'node_modules/**'
                })
            ],
            input: `${buildFolder}/index.js`,
            allowRealFiles: true,
            external: [
                'react',
                'react-router-dom',
                'prop-types',
                'webtrekk-smart-pixel'
            ],
            output: {
                name: 'webtrekk-smart-pixel-react',
                globals: {
                    'react': 'React',
                    'react-router-dom': 'reactRouterDom',
                    'prop-types': 'PropTypes',
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
            plugins: [
                babel({
                    exclude: 'node_modules/**'
                })
            ],
            input: `${buildFolder}/index.js`,
            allowRealFiles: true,
            external: [
                'react',
                'react-router-dom',
                'prop-types',
                'webtrekk-smart-pixel'
            ],
            output: {
                name: 'webtrekk-smart-pixel-react',
                globals: {
                    'react': 'React',
                    'react-router-dom': 'reactRouterDom',
                    'prop-types': 'PropTypes',
                    'webtrekk-smart-pixel': 'wtSmart'
                },
                format: 'cjs',
                exports: 'named'
            }
        }))
        .pipe(rename('webtrekk-smart-pixel-react.cjs.js'))
        .pipe(gulp.dest(distFolder));
});

gulp.task('copy:build', function () {
    return gulp.src([`${buildFolder}/**/*`, `!${buildFolder}/**/*.js`]).pipe(gulp.dest(distFolder));
});

gulp.task('compile', function () {
    runSequence(
        'clean:dist',
        'copy:source',
        'rollup:esm',
        'rollup:umd',
        'rollup:amd',
        'rollup:cjs',
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
    runSequence('clean:dist', 'clean:build', callback);
});

gulp.task('build', function (callback) {
    runSequence('clean', 'compile', callback);
});
