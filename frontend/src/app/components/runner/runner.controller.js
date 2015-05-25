'use strict';

angular.module('frontend.runner')
.controller('RunnerCtrl', ['$scope', 'Run',  function($scope, Run){
	$scope.runs = [];

	Run.query(function(data){
		$scope.runs = data;
		console.log(data);
	});

	$scope.delete = function(run){
		console.log(run);
	};

	$scope.edit = function(run){
		console.log(run);
	}
}]);