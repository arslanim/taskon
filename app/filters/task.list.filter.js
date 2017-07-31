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

			return function(input, nameFilter, personal, night, urgent) {
				var output = [];
				var letterMatch = new RegExp(nameFilter, 'i');
				console.log(nameFilter);

				angular.forEach(input, function(item) {
					if (searchByString(item.name, nameFilter) && searchByBoolean(item.personal, personal) && searchByBoolean(item.night, night) && searchByBoolean(item.urgent, urgent)) {
						output.push(item);
					}
				});

				return output;
			};
		});
};