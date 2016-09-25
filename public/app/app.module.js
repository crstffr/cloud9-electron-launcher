import angular from 'angular';
import {AppRoutes} from './app.routes';
import {AppController} from './app.controller';

let AppDeps = [
    AppRoutes
];

let app = angular
    .module('App', AppDeps)
    .controller('AppController', AppController)
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