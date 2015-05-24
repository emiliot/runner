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

]).run(["$rootScope", "$state", "$location", function($rootScope, $state, $location){
	// $rootScope.$on('auth:login-success', function(evt, user){
	// 	if(user.admin)
	// 		$state.go('admin.home');
	// 	else
	// 		$state.go('runner.home');
	// });
}]);
