angular.module('dashboard', ['myservice'])

	.controller('DashboardCtrl', function ($scope, testService) {

		$scope.title = "Dashboard";

		$scope.$watch(function (newName, oldName) {
			testService.setName($scope.newname);
		});
	})
;