import angular from 'angular';

import 'ng-file-input';
import './launcher.min.css!';
import Template from './launcher.html!text';
import {Controller} from './launcher.ctrl';
import {ProjectServiceModule} from 'app/services/project/project.module';

let routeDeps = [
    'ng-file-input',
    ProjectServiceModule
];

export let LauncherRoute = angular
    .module('route.launcher', routeDeps)
    .config(RouteConfig)
    .name;
    
RouteConfig.$inject = ['$stateProvider'];
    
function RouteConfig($stateProvider) {
    
    $stateProvider.state('launcher', {
        url: '/',
        template: Template,
        controller: Controller,
        controllerAs: 'ctrl'
    });
    
}