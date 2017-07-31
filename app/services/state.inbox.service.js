module.exports = function(servicesModule) {
	servicesModule
		.factory('StateInbox', ['$resource', function($resource) {
			return $resource('/services/resources/state-inbox/:userId.json', {}, {
				getUserStateInbox: {
					method: 'GET',
					params: {
						userId: '@userId'
					},
					isArray: true
				}
			});
		}]);
};
	