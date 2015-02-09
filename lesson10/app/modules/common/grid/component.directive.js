angular.module('component', [])

	.directive('component', function () {
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: './app/modules/common/grid/tpl/component.tpl.html',
			scope: {
				configuration: '@'
			},
			controller: function ($scope, $http) {
				$scope.data = [];

				$http.get($scope.configuration).success(function (configuration) {
					$scope.configuration = configuration;
				});
			}
		}
	})
;