'use strict';

angular.module('frontend.runner')
.factory('Run', ['$resource','Api', function($resource, Api) {
	var res = $resource(Api.url + '/runs/:id', {id: '@id'}, {
      	update: {
          	method: 'PUT',
      	}
    });

    return res;
}]);