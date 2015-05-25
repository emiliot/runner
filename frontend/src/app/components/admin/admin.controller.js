'use strict';

angular.module('frontend.admin')
.controller('AdminCtrl', ['$scope', 'User',  function($scope, User){
	$scope.users = [];

	User.query(function(data){
		$scope.users = data;
		console.log(data);
	});
}]);