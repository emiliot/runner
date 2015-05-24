'use strict';

angular.module('frontend.runner')
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'Roles',
		function ($stateProvider, $urlRouterProvider, $locationProvider, Roles) {
	$stateProvider
	.state('runner', {
		url: '/runner',
		abstract: true,
		templateUrl: 'app/components/runner/layout.html',
		data: {
			access: Roles.runner.level
		}
	})
	.state('runner.home', {
		url: '/home',
		templateUrl: 'app/components/runner/home.html',
		controller: 'RunnerCtrl'
	})
	.state('runner.account', {
		url: '/account',
		templateUrl: 'app/components/users/account.html'
	});

	$locationProvider.html5Mode(true);

}]);