'use strict';

angular.module('frontend', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'rails'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('users', {
      	url: '/users',
      	templateUrl : 'app/components/users/users.html',
      	controller: 'UserCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl : 'app/components/users/login.html',
        controller: 'UserLoginCtrl'
      })
      .state('register', {
        url: '/registers',
        templateUrl : 'app/components/register/registers.html',
        controller: 'RegisterCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
