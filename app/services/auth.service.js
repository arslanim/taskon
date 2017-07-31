module.exports = function(serviceModule) {
	serviceModule
		.factory('AuthService', function() {
			var currentUser = {id: 1};
			return {
				currentUser: function() {
					return currentUser;
				}
			};
		});
};