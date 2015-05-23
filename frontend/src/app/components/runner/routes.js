'use strict';

angular.module('frontend.runner')
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('runner', {
		url: '/runner',
		abstract: true,
		template: '<ui-view/>',
		resolve: {
			auth: function($auth){
				return $auth.validateUser();
			}
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
	$urlRouterProvider.otherwise('/runner/home');

});