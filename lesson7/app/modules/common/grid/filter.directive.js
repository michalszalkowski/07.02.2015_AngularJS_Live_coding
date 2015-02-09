angular.module('filter', [])

	.directive('filter', function () {
		return {
			restrict: 'AE',
			replace: true,
			scope: {
				rows: '='
			},
			controller: function ($scope, $http) {
				$scope.doFilter = function () {
					$http.get("./server/listA.json").success(function (response) {
						$scope.rows = response;
					});
				}
			},
			templateUrl: './app/modules/common/grid/tpl/filter.tpl.html'
		}
	})


;