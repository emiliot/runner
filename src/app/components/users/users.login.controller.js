'use strict';

angular.module('frontend')
	.controller('UserLoginCtrl', ['$scope', 'User', function($scope, User){
		User.query().then(function(data){
			console.log(data);
		});
	}]);