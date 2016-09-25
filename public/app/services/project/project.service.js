import {DiHelper} from 'app/utils/dihelper';

let di = new DiHelper(['$localStorage']);
let _items = [];

export class ProjectService {
    
    constructor() {
        
        di.init(arguments);
        
        _items = di.$localStorage.projects;
        
        if (!_items) {
            _items = [];
        }
        
        this.items = _items;
    }
    
    add(data) {
        _items.unshift(data);
    }
    
    remove(i) {
        _items.splice(i, 1);
    }
    
}

ProjectService.$inject = di.$inject;