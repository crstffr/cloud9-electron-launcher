
import angular from 'angular';
import ngStorage from 'ngstorage';
import {ProjectService} from './project.service'

export let ProjectServiceModule = angular
    .module('service.project', [ngStorage.name])
    .service('projectService', ProjectService)
    .name;