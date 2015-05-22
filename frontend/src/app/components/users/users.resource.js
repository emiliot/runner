'use strict';

angular.module('frontend')
	.factory('User', [ 'railsResourceFactory',  function(railsResourceFactory){
		return railsResourceFactory({
			url: '/api/v1/users', 
			name: 'user'
		});
	}]);