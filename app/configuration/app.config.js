module.exports = function(app) {
	app
		.config(['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider) {
			$locationProvider.hashPrefix('!');
			$routeProvider
				.when("/task-status/:statusId", {
					template: "<task-list></task-list>",
					activeTab: 'active-item'
				})
				.otherwise({
					template: "<task-list></task-list>"
				});
		}]);
};