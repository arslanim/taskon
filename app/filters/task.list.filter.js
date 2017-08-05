module.exports = function(filtersModule) {
	filtersModule
		.filter('taskList', function() {
			var searchByString = function(sourceString, searchString) {
					var matchRegExp;

					searchString = searchString.trim().replace(/[\s{2,}]+/g, ' ');
					matchRegExp = new RegExp(searchString, 'i');

					return (searchString) ? (matchRegExp.test(sourceString)) : (true);
				},
				searchByBoolean = function(sourceBool, searchBool) {
					return (searchBool) ? (sourceBool == searchBool) : (true);
				};

			return function(input, taskListFilter) {
				var output = [];

				angular.forEach(input, function(item) {
					if (searchByString(item.name, taskListFilter.name) && searchByBoolean(item.personal, taskListFilter.personal) && searchByBoolean(item.night, taskListFilter.night) && searchByBoolean(item.urgent, taskListFilter.urgent)) {
						output.push(item);
					}
				});

				return output;
			};
		});
};