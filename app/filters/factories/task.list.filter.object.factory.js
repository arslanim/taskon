module.exports = function(filtersModule) {
	filtersModule
		.factory('TaskListFilterFactory', function() {
			var constructor = function(name, personal, night, urgent) {
				this.name = name ? name : '';
				this.personal = personal ? personal : undefined;
				this.night = night ? night : undefined;
				this.urgent = urgent ? urgent : undefined;
			};

			return constructor;
		});
}