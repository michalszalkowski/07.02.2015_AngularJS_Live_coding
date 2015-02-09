angular.module('grid')

	.directive('grid', function () {
		return {
			restrict: 'E',
			transclude: true,
			replace: false,
			scope: {
				configuration: '=',
				rows: '=data',
				componentApi:'='
			},
			controller: function ($scope) {

				$scope.headers = $scope.configuration.gridConfig.headers;
				$scope.sortField = $scope.configuration.gridConfig.defaultSortField;
				$scope.sortReverse = false;
				$scope.currentPage = 1;
				$scope.queryFilter = {value: null};
				// smaczek, by miec do tego dostep w ng-repeat musi to być objekt
				$scope.pageSize = $scope.configuration.gridConfig.pageSize;

				$scope.sortBy = function (field, sortReverse) {
					$scope.sortField = field;
					$scope.sortReverse = sortReverse;
				};

				$scope.componentApi.refreshGrid = function () {
					$scope.configuration.chosenRow = null;
					$scope.sortReverse = false;
					$scope.sortField = $scope.configuration.gridConfig.defaultSortField;
					$scope.currentPage = 1;
					$scope.queryFilter = {value: null};
				};

				$scope.rowTpl = function () {
					return './app/modules/common/grid/tpl/grid/row.' + $scope.configuration.gridConfig.rowType + '.html';
				};

				$scope.cellTpl = function (render) {
					return './app/modules/common/grid/tpl/grid/cell.' + render + '.html';
				};
			},
			templateUrl: './app/modules/common/grid/tpl/grid.html'
		};
	})

	.filter('startFrom', function () {
		return function (input, start) {
			start = +start; //parse to int
			return input.slice(start);
		}
	})
;