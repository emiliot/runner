'use strict';

angular.module('frontend')
.factory('User', ['$resource','Api', function($resource, Api) {
	var res = $resource(Api.url + '/users/:id', {id: '@id'}, {
      	update: {
          	method: 'PUT',
      	}
    });

    return res;
}]);