angular.module('grid', ['ngSanitize'])

	.filter('render', function ($filter) {
		return function (input, filter, row) {
			if (filter === undefined) {
				return input;
			}
			return $filter(filter)(input, row);
		}
	})

	.filter('wrapByLabel', function () {
		return function (input) {
			return '<span class="label label-success">' + input + '</span>';
		}
	})

	.filter('addHash', function () {
		return function (input) {
			return '#' + input;
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

	.filter('mathCeil', function () {
		return function (input) {
			return Math.ceil(input);
		}
	})

	.filter('addLinkById', function () {
		return function (input, row) {
			return '<a href="#' + row.id + '">goto</a>';
		}
	})

	.controller('checkBoxCtrl', function ($scope) {
		$scope.isCheck = function (chosenRow, row) {
			return angular.equals(chosenRow, row);
		};
	})

	.controller('dateFilterCtrl', function ($scope) {

		$scope.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.opened = true;
		};

	})
;