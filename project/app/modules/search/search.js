angular.module('search', [])

	.controller('SearchCtrl', function ($scope, $modal, $location) {
		$scope.title = "Search";

		$scope.actionsApi = {
			details: function (chosenRow) {
				$location.path("search/" + chosenRow.id);
			},
			changeStatus: function (chosenRow) {
				$modal.open({
					templateUrl: './app/modules/search/change-status.part.popup.html',
					controller: function ($scope, dataForPopup) {
						$scope.chosenRow = dataForPopup.chosenRow;
					},
					size: 'lg',
					resolve: {
						dataForPopup: function () {
							return {
								chosenRow: chosenRow
							};
						}
					}
				}).result.then(function () {
					}, function () {
					}
				);
			}
		};

	})

	.controller('SearchDetailsCtrl', function ($scope, $routeParams, $http) {
		$scope.title = "Search details";
		console.log($routeParams);
	})
;