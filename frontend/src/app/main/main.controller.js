'use strict';

angular.module('frontend')
.controller('MainCtrl', [ '$state', 'CurrentUser', 'Roles', function ($state, CurrentUser, Roles) {
	console.log('main');
	var role = CurrentUser.user().role;
	$state.go('public.home');
}]);
