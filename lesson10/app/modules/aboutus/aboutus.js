angular.module('aboutus', ['myservice'])

	.controller('AboutUsCtrl', function ($scope, testService) {
		$scope.title = "About Us";
		$scope.name = testService.getName();
	})
;