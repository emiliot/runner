'use strict';

angular.module('frontend')
.controller('LoginCtrl', ['$scope','AuthService', '$rootScope', '$state','User','LocalService',
	function($scope, AuthService, $rootScope, $state, User, LocalService){

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
		var next = new User(user);
		next.$save(function(data){
			var savedUser = {
				auth_token : data.auth_token,
				user : data.user
			};
			LocalService.set('auth_token', JSON.stringify(savedUser));
			$rootScope.$broadcast('auth:successful-sign-in');
			$state.go('main');
		});
	}
}]);