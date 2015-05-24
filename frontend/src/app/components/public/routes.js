'use strict';

angular.module('frontend.public')
.config(['$stateProvider','Roles', function($stateProvider, Roles){
	$stateProvider
        .state('public',{
            url: '/public',
            templateUrl: 'app/components/public/layout.html',
            abstract: true,
            data: {
                access: Roles.anon.level
            }
        })
        .state('public.home', {
            url: "/home",
            controller: 'PublicCtrl',
            templateUrl: 'app/components/public/home.html',
        })
        .state('public.login', {
            url: "/login",
            templateUrl: 'app/components/users/login.html',
            controller: 'LoginCtrl'
        })
}]);