'use strict';

angular.module('frontend.admin')
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('admin', {
		url: '/admin',
		abstract: true,
		template: '<ui-view/>',
		resolve: {
			auth: function($auth){
				return $auth.validateUser();
			}
		}
	})
	.state('admin.home', {
		url: '/home',
		templateUrl: 'app/components/admin/home.html',
		controller: 'AdminCtrl'
	})

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/admin/home');

});