module.exports = function(app) {
	app
		.config(['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider) {
			$locationProvider.hashPrefix('!');
			$routeProvider
				.when("/task-status/:statusId", {
					template: "<task-list></task-list>",
					activetab: '@statusId'
				})
				.otherwise({
					template: "<task-list></task-list>"
				});
		}]);
};