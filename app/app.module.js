/*angular*/
require('angular');
require('angular-route');

/*bootstrap*/
require('bootstrap/dist/js/bootstrap.js');
require('bootstrap/dist/css/bootstrap.css');

/*custom css*/
require('./css/navbar.css');
require('./css/task-status-navbar.css');
require('./css/task-table.css');
require('./css/tasks-filter.css');
require('./css/components.css');

angular.module('app', [
	'ngRoute',
	'components.module'
]);

require('./configuration/app.config')(angular.module('app'));
require('./components/components.module');
require('./services/services.module');