'use strict';

angular.module('frontend', [
	'frontend.admin',
	'frontend.runner',
	'frontend.public',

	'ngAnimate', 
	'ngTouch', 
	'ngSanitize', 
	'ngResource', 
	'ui.router', 
	'ui.bootstrap', 

]).run(["$rootScope", "$state", "AuthService", function($rootScope, $state, AuthService){
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
		console.log(toState);
		if(!AuthService.authorize(toState.data.access)){
			event.preventDefault();
			$state.go('public.login');
		}
	});
}]);
