var SystemBuilder = require('systemjs-builder');
var argv = require('yargs').argv;
var builder = new SystemBuilder();

  builder.loadConfig('src/systemjs.config.js')
    .then(function() {
        /**** Bundle Common Files into common bundle ****/
        var depOutputFile = argv.prod ? 'dist/common.min.js' : 'dist/common.js';
        return builder.bundle('(wp1 & wp2)', depOutputFile, {
            minify: argv.prod,
            mangle: argv.prod,
            sourceMaps: argv.prod,
            sourceMaps: true,
            rollup: argv.prod
        });
    })
    .then(function() {
        /**** Bundle ProdMode Files into prodMode bundle ****/
        var appSource = argv.prod ? 'prodMode - dist/common.min.js' : 'prodMode - dist/common.js';
        var appOutputFile = argv.prod ? 'dist/prodMode.min.js' : 'dist/prodMode.js';
        return builder.bundle(appSource, appOutputFile, {
            minify: argv.prod,
            mangle: argv.prod,
            //sourceMaps: argv.prod,
            sourceMaps: true,
            rollup: argv.prod
        });
    })
    .then(function() {
        /**** Bundle WP1 Files into wp1 bundle ****/
        var appSource = argv.prod ? 'wp1 - dist/common.min.js' : 'wp1 - dist/common.js';
        var appOutputFile = argv.prod ? 'dist/wp1.min.js' : 'dist/wp1.js';
        return builder.bundle(appSource, appOutputFile, {
            minify: argv.prod,
            mangle: argv.prod,
            //sourceMaps: argv.prod,
            sourceMaps: true,
            rollup: argv.prod
        });
    })
    .then(function() {
        /**** Bundle WP2 Files into wp2 bundle ****/
        var appSource = argv.prod ? 'wp2 - dist/common.min.js' : 'wp2 - dist/common.js';
        var appOutputFile = argv.prod ? 'dist/wp2.min.js' : 'dist/wp2.js';
        return builder.bundle(appSource, appOutputFile, {
            minify: argv.prod,
            mangle: argv.prod,
            //sourceMaps: argv.prod,
            sourceMaps: true,
            rollup: argv.prod
        });
    })
    .then(function() {
        console.log('bundle built successfully');
    });
