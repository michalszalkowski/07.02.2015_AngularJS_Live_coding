angular.module('app', [

	'dashboard',
	'aboutus',
	'search',

	'ngRoute'
])

	.config(function ($routeProvider) {
		$routeProvider
			.when('/dashboard', {
				controller: 'DashboardCtrl',
				templateUrl: './app/modules/dashboard/index.tpl.html'
			})
			.when('/about-us', {
				controller: 'AboutUsCtrl',
				templateUrl: './app/modules/aboutus/index.tpl.html'
			})
			.when('/search', {
				controller: 'SearchCtrl',
				templateUrl: './app/modules/search/index.tpl.html'
			})
			.otherwise({
				redirectTo: '/dashboard'
			})
	});

;