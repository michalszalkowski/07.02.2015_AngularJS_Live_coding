 angular.module('grid', [])

	.directive('grid', function () {
		return {
			restrict: 'AE',
			replace: true,
			scope: {
				rows: '=',
				configuration: '@'
			},
			controller: function ($scope, $http) {

				//part 1
				$scope.sortField = "type";
				$scope.reverse = false;

				//part 2
				$scope.currentPage = 0;
				$scope.pageSize = 10;
				$scope.numberOfPages = function () {
					if ($scope.rows == undefined) {
						return 0;
					}
					return Math.ceil($scope.rows.length / $scope.pageSize);
				}

				// configuration
				$http.get($scope.configuration).success(function (configuration) {
					$scope.configuration = configuration;
				});

				$scope.sortBy = function(sortField, reverse){
					$scope.sortField = sortField;
					$scope.reverse = reverse;
				}

			},
			templateUrl: './app/modules/common/grid/tpl/grid.tpl.html'
		}
	})

	.filter('startFrom', function () {
		return function (input, start) {
			if (input == undefined) {
				return;
			}
			start = +start; //parse to int
			return input.slice(start);
		}
	});

;