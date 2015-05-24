'use strict';

angular.module('frontend')
	.controller('UserLoginCtrl', ['$scope','$http', 'APIUrl', function($scope, $http, APIUrl){
		$scope.user = {};
		$scope.newUser = {};

		$scope.submitLogin = function(user){
			$http.post(APIUrl.v1 + '/auth', { email : 'e@a.com', password : '12345678'}).
				success(function(data, status, headers, config) {
				    console.log(data);
				}).
				error(function(data, status, headers, config) {
				    console.log('error', data);
			});

			// $auth.submitLogin(user)
			// 	.then(function(resp){
			// 		console.log(resp);
			// 	})
			// 	.catch(function(resp){
			// 		console.log('error', resp);
			// 	});
		};

		$scope.registerUser = function(user){
			// $auth.submitRegistration(user)
			// 	.then(function(resp){
			// 		console.log(resp);
			// 	})
			// 	.catch(function(resp){
			// 		console.log('catch', resp);
			// 	});
		}
	}]);