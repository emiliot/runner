'use strict';

angular.module('frontend.public')
.config(['$stateProvider', function($stateProvider){
	$stateProvider
        .state('public',{
            url: '/public',
            templateUrl: 'app/components/public/layout.html',
            abstract: true,
            data: {
                access: 0
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