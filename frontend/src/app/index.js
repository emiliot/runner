'use strict';

angular.module('frontend', [
	

	'ngAnimate', 
	'ngCookies', 
	'ngTouch', 
	'ngSanitize', 
	'ngResource', 
	'ui.router', 
	'ui.bootstrap', 
	'rails', 
	'ng-token-auth'

]).config(function($authProvider){
	$authProvider.configure({
		apiUrl: 'http://localhost:3000/api/v1'
	});
}).run(["$rootScope", "$state", "$location", function($rootScope, $state, $location){
	$rootScope.$on('auth:login-success', function(evt, user){
		console.log(user);
		$state.go('admin');
	});

	$rootScope.$on('auth:login-error', function(evt, reason){
		console.log(reason);
		$state.go('login');
	});
}]);
