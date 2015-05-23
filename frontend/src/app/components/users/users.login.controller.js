'use strict';

angular.module('frontend')
	.controller('UserLoginCtrl', ['$scope', 'User','$auth', function($scope, User, $auth){
		$scope.user = {};
		$scope.newUser = {};

		$scope.submitLogin = function(user){
			$auth.submitLogin(user)
				.then(function(resp){
					console.log(resp);
				})
				.catch(function(resp){
					console.log('error', resp);
				});
		};

		$scope.registerUser = function(user){
			$auth.submitRegistration(user)
				.then(function(resp){
					console.log(resp);
				})
				.catch(function(resp){
					console.log('catch', resp);
				});
		}
	}]);