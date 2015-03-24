angular.module('grid', [])

	.directive('grid', function (gridService) {
		return {
			restrict: 'AE',
			replace: true,
			scope: {
				rows: '=',
				configuration: '@'
			},
			controller: function ($scope, $http) {

				$http.get($scope.configuration).success(function (configuration) {
					$scope.configuration = configuration;
				});

				$scope.getCell = function (item, keys) {
					return gridService.resolveCell(item, keys);
				};

			},
			templateUrl: './app/modules/common/grid/tpl/grid.tpl.html'
		}
	})

	.service('gridService', function () {
		this.resolveCell = function (item, keys) {
			var p = keys.split(".");
			var _item = item;
			p.forEach(function (key) {
				_item = _item[key];
			});
			return _item;
		}
	})

;