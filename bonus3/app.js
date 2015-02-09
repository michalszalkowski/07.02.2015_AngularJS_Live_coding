angular.module('app', [])

	.controller('TestController', function ($scope) {
		$scope.testStr = "aa bb cc dd";
		$scope.companies = [
			{name: "Google", vote: 99},
			{name: "Microsoft", vote: 66},
			{name: "Apple", vote: 33}
		];
	})

	.filter('addExclamationMark', function () {
		return function (input, prefix) {
			if (prefix == undefined) {
				return input + " !";
			}
			return prefix + ' ' + input + " !";
		}
	})

	.filter('revertWord', function () {
		return function (input) {
			var arr = input.split(" ");
			var newS = "";
			arr.reverse().forEach(function (item) {
				newS += " " + item;
			});
			return newS;
		}
	})
;
