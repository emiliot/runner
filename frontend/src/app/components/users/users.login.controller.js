'use strict';

angular.module('frontend')
.controller('UserLoginCtrl', ['$scope',"Auth", "$rootScope", function($scope, Auth, $rootScope){
	$scope.user = {};
	$scope.newUser = {};

	$scope.submitLogin = function(user){
		Auth.login(user)
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