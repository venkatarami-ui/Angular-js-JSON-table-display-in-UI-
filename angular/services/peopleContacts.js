app.factory('people', ['$http', function($http) {
	return $http.get('../../data/people.json')
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		})
}]);