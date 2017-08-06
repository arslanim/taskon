module.exports = function(componentsModule) {
	angular.module('components.module')
		.component('statusTab', {
			template: require("./status-tab.template.html"),
			controller: ['AuthService', 'StateInbox', '$route', '$location', function(AuthService, StateInbox, $route, $location) {
				var controller = this;

				controller.isActive = function(currentRoute) {
					return currentRoute === $location.path();
				};
				controller.currentUser = AuthService.currentUser();
				controller.$route = $route;
				controller.inbox = StateInbox.getUserStateInbox({userId: controller.currentUser.id});
			}]
		});
};