'use strict';

angular.module('frontend')
.controller('NavbarCtrl', [ '$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.user = {
		name : '',
	}
	
	// $rootScope.$on('auth:login-success', function(evt, user){
	// 	$scope.user = user;
	// });

	// $scope.signOut = function(){
	// 	$auth.signOut()
 //        .then(function(resp) {
 //        	console.log(resp);
 //        })
 //        .catch(function(resp) {
 //        	console.log('error in signOut', resp);
 //        });
	// }
}]);
