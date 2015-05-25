'use strict';

angular.module('frontend.runner')
.controller('RunnerCtrl', ['$scope', 'Run',  function($scope, Run){
	Run.query(function(data){
		console.log(data);
	});
}]);