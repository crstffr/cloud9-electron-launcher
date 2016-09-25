import {DiHelper} from 'app/utils/dihelper';
import LauncherTemplate from './routes/launcher/launcher.html!text';
import {LauncherController} from './routes/launcher/launcher.ctrl';

let di = new DiHelper([
    '$stateProvider',
    '$urlRouterProvider'
]);

export function AppRoutes() {
    
    di.init(arguments);
    
    di.$stateProvider
        .state('launcher', {
            url: '/',
            template: LauncherTemplate,
            controller: LauncherController
        });
    
    di.$urlRouterProvider.otherwise('/');
}

AppRoutes.$inject = di.$inject;