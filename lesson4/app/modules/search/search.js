angular.module('search', [])

	.controller('SearchCtrl', function ($scope, $http) {
		$scope.title = "Search";

		$http.get("./server/listA.json").success(function (response) {
			$scope.data = response;
		});
	})
;