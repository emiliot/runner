'use strict';

angular.module('frontend')
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'app/components/public/home.html',
		controller: 'PublicCtrl'
	})

	.state('login', {
		url: '/login',
		templateUrl : 'app/components/users/login.html',
		controller: 'UserLoginCtrl'
	})

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

});