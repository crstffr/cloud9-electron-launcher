import angular from 'angular';
import {AppController} from './app.controller';

let AppDeps = [
    
];

let app = angular
    .module('App', AppDeps)
    .controller('AppController', AppController)
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