angular.module('grid', [])

	.directive('grid', function () {
		return {
			restrict: 'AE',
			replace: true,
			scope: {
				rows: '=',
				configuration: '='
			},
			controller: function ($scope) {

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

				$scope.sortBy = function(sortField, reverse){
					$scope.sortField = sortField;
					$scope.reverse = reverse;
				};

				$scope.rowTpl = function () {
					return './app/modules/common/grid/tpl/grid/row.' + $scope.configuration.gridConfig.rowType + '.html';
				};

				$scope.cellTpl = function (render) {
					return './app/modules/common/grid/tpl/grid/cell.' + render + '.html';
				};

			},
			templateUrl: './app/modules/common/grid/tpl/grid.tpl.html'
		}
	})

	.filter('render', function ($filter) {
		return function (input, filter, row) {
			if (filter === undefined) {
				return input;
			}
			return $filter(filter)(input, row);
		}
	})

	.filter('typeIcon', function () {
		return function (input) {
			if (input === 1) {
				return '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
			}
			if (input === 2) {
				return '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
			}
			return input;
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