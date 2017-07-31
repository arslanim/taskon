module.exports = function(componentsModule) {
	angular.module('components.module')
		.component('statusTab', {
			template: require("./status-tab.template.html"),
			controller: ['AuthService', 'StateInbox', '$route', function(AuthService, StateInbox, $route) {
				var controller = this;

				controller.currentUser = AuthService.currentUser();
				controller.$route = $route;
				controller.inbox = StateInbox.getUserStateInbox({userId: controller.currentUser.id});

				controller.activateTab = function($event, inboxId) {
					console.log($event.currentTarget);
				};
			}]
		});
};