import angular from 'angular';
import 'angular-ui-router';

import {AppRoutes} from './app.routes';
import {AppController} from './app.controller';

let AppDeps = [
    'ui.router'
];

let app = angular
    .module('App', AppDeps)
    .controller('AppController', AppController)
    .config(AppRoutes)
    .config(AppConfig)
    .run(AppRun);

export let ng = angular;
export let name = app.name;

/**
 * Config Phase - Providers Only
 */
 
AppConfig.$inject = [];

function AppConfig() {
    
    
}


/**
 * Run Phase - All Services
 */
 
AppRun.$inject = [];

function AppRun() {
    
}