'use strict';

angular.module('frontend')
.controller('LoginCtrl', ['$scope','AuthService', '$rootScope', '$state', function($scope, AuthService, $rootScope, $state){
	$scope.user = {};
	$scope.newUser = {};

	$scope.submitLogin = function(user){
		AuthService.login(user)
		.success(function(data){
			$rootScope.$broadcast('auth:successful-sign-in');
			$state.go('main');
		})
		.error(function(data){
			console.log('ERROR', data);
		});
	};

	$scope.registerUser = function(user){
		//TODO
	}
}]);