'use strict';

angular.module('frontend.public')
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	$stateProvider

        .state('public',{
            url: '/public',
            templateUrl: '<ui-view/>',
            abstract: true
        })
        
        .state('public.home', {
            url: "/home",
            controller: 'public.HomeController',
            templateUrl: 'main/main.html',
        })
    
        .state('public.login', {
            url: "/login",
            templateUrl: 'components/users/login.html',
            controller: 'LoginController'
        })
}]);