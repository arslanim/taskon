module.exports = function(servicesModule) {
	servicesModule
		.factory('Task', ['$resource', function($resource) {
			return $resource('/services/resources/task/:userId/:stateId/tasks.json', {}, {
				getUserTasksByState: {
					method: 'GET',
					params: {
						userId: '@userId',
						stateId: '@stateId'
					},
					isArray: true
				}
			});
		}]);
};