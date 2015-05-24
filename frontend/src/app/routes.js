'use strict';

angular.module('frontend')
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'Roles', 
        function ($stateProvider, $urlRouterProvider, $locationProvider, Roles) {
	$stateProvider
	.state('main', {
        url: '/main',
        controller: 'MainCtrl',
        data: {
            access: Roles.anon.level
        }
    });

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/main');

}]);