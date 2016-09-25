import angular from 'angular';
import 'angular-ui-router';

import {DiHelper} from 'app/utils/dihelper';
import {LauncherRoute} from 'app/routes/launcher/launcher.route';

let routes = [
    'ui.router',
    LauncherRoute
];

export let AppRoutes = angular
    .module('app.routes', routes)
    .config(AppRouteConfig)
    .name;

let di = new DiHelper([
    '$urlRouterProvider'
]);

function AppRouteConfig() {
    di.init(arguments);
    di.$urlRouterProvider.otherwise('/');
}

AppRouteConfig.$inject = di.$inject;