module.exports = function(componentsModule) {
	componentsModule
		.component('taskList', {
			template: require("./task-list.template.html"),
			controller: ['$routeParams', 'Task', 'AuthService', function TaskListController($routeParams, Task, AuthService) {
				var controller = this;

				//init default task filter
				controller.filter = {
					nameFilter: '',
					personal: undefined,
					night: undefined,
					urgent: undefined
				};
				controller.stateId = $routeParams.statusId;
				controller.currentUser = AuthService.currentUser();
				//console.log(controller.statusId);
				//controller.taskList = Task.query();
				//controller.taskList = Task.get({stateId: controller.stateId});
				controller.taskList = Task.getUserTasksByState({userId: controller.currentUser.id, stateId: controller.stateId});
			}]
		});
};