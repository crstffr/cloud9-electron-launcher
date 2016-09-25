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
            $('.dimmable').dimmer({
                on: 'hover',
                duration: {
                    show: 200,
                    hide: 200
                }
            });
        });
        this.reset();
    }
    
    browse() {
        $('input[type="file"]').click();
    }
    
    browseSelected() {
        this.form.location = this.form.file.webkitRelativePath;
    }
    
    add() {
        di.projectService.add({
            name: this.form.name,
            clone: this.form.clone,
            location: this.form.location,
            repo: this.form.repo
        });
        this.init();
    }
    
    launch(project) {
        console.log('launch it', project);
    }
    
    reset() {
        this.form = {}
    }
    
    remove(index) {
        di.projectService.remove(index);
    }
    
}

Controller.$inject = di.$inject;