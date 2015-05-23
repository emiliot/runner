'use strict';

angular.module('frontend')
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'app/main/main.html',
		controller: 'MainCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl : 'app/components/users/login.html',
		controller: 'UserLoginCtrl'
	})
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
	.state('admin', {
		url: '/admin',
		templateUrl: 'app/components/users/users.html',
		controller: 'UserCtrl'
	})
	.state('runner.runs', {
		url: '/runs',
		templateUrl: 'app/components/runs/runs.html',
	})
	.state('runner.account', {
		url: '/account',
		templateUrl: 'app/components/users/account.html'
	});

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

});