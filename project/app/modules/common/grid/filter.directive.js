angular.module('grid')

	.directive('filter', function () {
		return {
			restrict: 'E',
			transclude: true,
			replace: false,
			scope: {
				'configuration': '=',
				'data': '=',
				componentApi:'='
			},
			controller: function ($scope, $http, urlCreator) {

				$scope.filterForm = {};

				$scope.doFilter = function () {

					var url = urlCreator.getUrl(
						$scope.configuration.filterConfig.apiUrl,
						$scope.filterForm
					);

					//$http.get($scope.configuration.filterConfig.apiUrl, {params: $scope.filterForm})
					$http.get(url)
						.success(function (response) {
							$scope.componentApi.refreshGrid()
							$scope.data = response;
							angular.copy($scope.filterForm, $scope.configuration.filterConfig.filterForm);
							$scope.configuration.filterConfig.apiUrlParsed = url;
						}
					);
				};
			},
			templateUrl: './app/modules/common/grid/tpl/filter.html'
		};
	})
;