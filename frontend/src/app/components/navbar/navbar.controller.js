'use strict';

angular.module('frontend')
.controller('NavbarCtrl', [ '$scope', '$rootScope', 'CurrentUser', 'AuthService', '$state',
	function ($scope, $rootScope, CurrentUser, AuthService, $state) {
	if(AuthService.isAuthenticated())
		$scope.user = CurrentUser.user();
	else
		$scope.user = {};


	$rootScope.$on('auth:successful-sign-in', function(){
		$scope.user = CurrentUser.user();
	});

	$scope.signOut = function(){
		AuthService.logout();
		$scope.user = {};
		$state.go('public.home');
	}
}]);
