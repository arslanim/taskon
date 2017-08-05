angular.module('filters.module', []);

require('./factories/task.list.filter.object.factory.js')(angular.module('filters.module'));
require('./task.list.filter.js')(angular.module('filters.module'));