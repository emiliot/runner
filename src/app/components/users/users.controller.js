'use strict';

angular.module('frontend')
	.controller('UserCtrl', ['$scope', 'User', function($scope, User){
		$scope.users = [];
		User.query().then(function(data){
			$scope.users = data;
		});
	}]);