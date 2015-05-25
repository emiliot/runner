'use strict';

angular.module('frontend.runner')
.controller('RunnerCtrl', ['$scope', 'Run',  function($scope, Run){
	$scope.runs = [];

	Run.query(function(data){
		$scope.runs = data;
		console.log(data);
	});

	$scope.delete = function(run){
		run.$delete(function(){
			for(var i=0, n=$scope.runs.length; i<n; ++i){
				if($scope.runs[i].id === run.id){
					$scope.runs.splice(i,1);
					break;
				}
			}
		});
	};

	$scope.edit = function(run){
		console.log(run);
	}
}]);