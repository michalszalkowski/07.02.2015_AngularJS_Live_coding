angular.module('grid')


	.directive('component', function () {
		return {
			scope: {
				configuration: '@',
				actions: '='
			},
			transclude: true,
			controller: function ($scope, $http) {

				$scope.collection = [];
				$scope.componentApi = {};

				$scope.buttonTplPath = $scope.actions.tpl ? $scope.actions.tpl : null;

				$http.get($scope.configuration).success(function (response) {
					$scope.configuration = response;
					$scope.componentTpl = './app/modules/common/grid/tpl/grid/' + response.componentTpl + '.html';
				});

			},
			templateUrl: './app/modules/common/grid/tpl/component.html'
		}
	})
;