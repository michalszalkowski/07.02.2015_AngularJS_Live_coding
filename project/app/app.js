angular.module('app', [

	'dashboard',
	'aboutus',
	'search',

	'grid',

	'ui.bootstrap',
	'ngRoute',
])
	.config(function ($routeProvider) {
		$routeProvider.
			when('/dashboard', {
				templateUrl: './app/modules/dashboard/index.tpl.html',
				controller: 'DashboardCtrl'
			})
			.when('/about-us', {
				templateUrl: './app/modules/aboutus/index.tpl.html',
				controller: 'AboutUsCtrl'
			})
			.when('/search', {
				templateUrl: './app/modules/search/index.tpl.html',
				controller: 'SearchCtrl'
			})
			.when('/search/:id', {
				templateUrl: './app/modules/search/details.tpl.html',
				controller: 'SearchDetailsCtrl'
			})
			.otherwise({
				redirectTo: '/dashboard'
			})
		;
	})
;