'use strict';

angular.module('frontend', [
	'frontend.common',
	'frontend.public',
	'frontend.admin',
	'frontend.runner',

	'ngAnimate', 
	'ngTouch', 
	'ngSanitize', 
	'ngResource', 
	'ui.router', 
	'ui.bootstrap', 

]).run(["$rootScope", "$state", "AuthService", function($rootScope, $state, AuthService){
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
		// console.log(toState);
		if(!AuthService.authorize(toState.data.access)){
			event.preventDefault();
			$state.go('public.login');
		}
	});
}]);
