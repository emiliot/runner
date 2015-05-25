'use strict';

angular.module('frontend.runner')
.controller('RunnerCtrl', ['$scope', 'Run', '$modal',  function($scope, Run, $modal){

	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	};

	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	$scope.format = 'dd-MMMM-yyyy';


	$scope.runs = [];
	$scope.run = {
	};

	Run.query(function(data){
		$scope.runs = data;
	});

	$scope.create = function(run){
		run.time_run = (run.time_run_h * 60) + run.time_run_m;
		var nextRun = new Run(run);
		nextRun.$save(function(data){
			$scope.runs.push(data);
		}, function(data){
			console.log('error');
		});
	};

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
		run.time_run_h = parseInt(run.time_run / 60);
		run.time_run_m = run.time_run % 60;

		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'app/components/runner/modal.html',
			controller: 'ModalInstanceCtrl',
			resolve: {
				run: function () {
					return run;
				}
			}
		});

		modalInstance.result.then(function (updatedRun) {
			updatedRun.$update(function(data){
			}, function(data){
				console.log('error');
			});
		});
	};
}])
.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'run', function($scope, $modalInstance, run){
	$scope.run = run;

	$scope.ok = function () {
	  $modalInstance.close($scope.run);
	};

	$scope.cancel = function () {
	  $modalInstance.dismiss('cancel');
	};
}]);