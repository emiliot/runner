'use strict';

angular.module('frontend')
	.factory('User', [ 'railsResourceFactory',  function(railsResourceFactory){
		return railsResourceFactory({
			url: '/api/users', 
			name: 'user'
		});
	}]);