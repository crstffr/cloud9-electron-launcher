import {DiHelper} from 'app/utils/dihelper';

let di = new DiHelper(['projectService']);

export class Controller {
    
    constructor() {
        di.init(arguments);
        this.projects = di.projectService.items;
    }
    
}

Controller.$inject = di.$inject;