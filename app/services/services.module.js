require('angular-resource');

angular.module('services.module', [
	'ngResource'
]);

require('./state.inbox.service.js')(angular.module('services.module'));
require('./auth.service.js')(angular.module('services.module'));
require('./task.service.js')(angular.module('services.module'));