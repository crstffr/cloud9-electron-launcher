import $ from 'jquery';
import {DiHelper} from 'app/utils/dihelper';

let di = new DiHelper([
    '$timeout',
    'projectService'
]);

export class Controller {
    
    constructor() {
        di.init(arguments);
        this.projects = di.projectService.items;
    }
    
    init() {
        di.$timeout(() => {
            console.log($('.dimmable'));
            $('.dimmable').dimmer({
                on: 'hover',
                duration: {
                    show: 200,
                    hide: 200
                }
            });
        });
    }
    
}

Controller.$inject = di.$inject;