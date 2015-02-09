angular.module('App', [])

	.directive('people', function () {
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			scope: {
				name: '@title'
			},
			controller: function ($scope) {
				$scope.numberOfPeople = 0;

				this.addPerson = function (person) {
					$scope.numberOfPeople++;
				}
			},
			templateUrl: 'tpl/people.tpl.html'
		}
	})

	.directive('person', function () {
		return {
			require: '^people',
			replace: true,
			restrict: 'E',
			transclude: true,
			scope: {
				person: "="
			},
			link: function (scope, element, attrs, controller) {
				controller.addPerson(scope);
			},
			templateUrl: "tpl/person.tpl.html"
		}
	})

	.directive('address', function () {
		return {
			replace: true,
			restrict: 'E',
			scope: {
				city: '@',
				street: '@'
			},
			templateUrl: 'tpl/address.tpl.html'
		}
	})

;