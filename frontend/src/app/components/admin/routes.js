'use strict';

angular.module('frontend.admin')
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'Roles',
		function ($stateProvider, $urlRouterProvider, $locationProvider, Roles) {
	$stateProvider
	.state('admin', {
		url: '/admin',
		abstract: true,
		templateUrl: 'app/components/admin/layout.html',
		data : {
			access : Roles.admin.level
		}
	})
	.state('admin.home', {
		url: '/home',
		templateUrl: 'app/components/admin/home.html',
		controller: 'AdminCtrl'
	})

	$locationProvider.html5Mode(true);

}]);