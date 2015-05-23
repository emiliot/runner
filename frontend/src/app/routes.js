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

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

});