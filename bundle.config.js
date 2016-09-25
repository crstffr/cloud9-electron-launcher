var path = require('path');
var pkg  = require('./package.json');
var root = require('app-root-path').toString() + '/';

module.exports = {

    baseURL: pkg.app.baseURL,
    dest: 'bundles',
    file: 'bundle.js',
    bust: true,

    builder: {
        minify: true,
        mangle: true,
        sourceMaps: true,
        lowResSourceMaps: false
    },

    bundles: {
        libs: {
            combine: false,
            items: ['angular', 'jquery']
        },
        semantic: {
            exclude: ['libs'],
            items: ['vendor/semantic']
        },
        app: {
            combine: true,
            exclude: ['libs', 'semantic'],
            items: [
                'app/app.module'
            ]
        }
        /*,
        routes: {
            combine: false,
            exclude: ['libs', 'semantic', 'app'],
            items: _getRoutes()
        }
        */
    }
};

/**
 * Retrieve the route paths from our app settings, collect their
 * source paths into an array. This is used to dynamically bundle
 * the individual routes.
 *
 * @returns {Array}
 * @private
 */
 
 /*
 function _getRoutes() {

    var settings;
    var filepath;
    var routes = [];
    var baseURL = pkg.app.baseURL;
    var filename = pkg.app.settings;
    var forEach = require('lodash/forEach');

    try {
        filepath = path.join(root, baseURL, filename);
        settings = require(filepath);
        forEach(settings.routes, function(route) {
            routes.push(route.src);
        });
    } catch(e) {
        console.log('Unable to load app route config', e);
        return [];
    }

    return routes;

}
*/