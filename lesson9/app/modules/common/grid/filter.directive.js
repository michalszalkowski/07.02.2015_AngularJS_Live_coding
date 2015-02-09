angular.module('filter', [])

	.directive('filter', function () {
		return {
			restrict: 'AE',
			replace: true,
			scope: {
				rows: '=',
				configuration: '='
			},
			controller: function ($scope, $http) {
				$scope.doFilter = function () {
					$http.get($scope.configuration.filterConfig.apiUrl).success(function (response) {
						$scope.rows = response;
					});
				}
			},
			templateUrl: './app/modules/common/grid/tpl/filter.tpl.html'
		}
	})


;