var App = angular.module('App', [])

		.directive('itemJsTpl', function () {

			var template = 'Html from js';

			return {
				restrict: 'E',
				scope: {},
				template: template
			}
		})

		.directive('itemAjaxTpl', function () {
			return {
				restrict: 'E',
				scope: {},
				templateUrl: 'item.tpl.html'
			}
		})

		.directive('itemCacheTpl', function () {
			return {
				restrict: 'E',
				scope: {},
				templateUrl: 'item-cache.tpl.html'
			}
		})
	;