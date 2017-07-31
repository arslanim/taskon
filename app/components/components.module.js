angular.module('components.module', [
	'ngRoute',
	'services.module'
]);

require('./status-tab')(angular.module('components.module'));