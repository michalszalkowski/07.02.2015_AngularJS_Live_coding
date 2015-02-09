angular.module('search', [])

	.controller('SearchCtrl', function ($scope, $http) {
		$scope.title = "Search";
		$scope.data = [];
	})
;