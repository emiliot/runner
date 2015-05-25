'use strict';

angular.module('frontend.runner')
.controller('StatsCtrl', ['$scope', 'Run',  function($scope, Run){
	$scope.runs = [];
	$scope.dataSet = {};

	$scope.labels = [];
	$scope.series = ['Average Speed', 'Average Distance'];
	$scope.data = [
		[],
		[]
	];

	Run.query(function(data){
		$scope.runs = data;
		console.log($scope.runs);

		for(var i=0, n=$scope.runs.length; i<n; ++i){
			var next = $scope.runs[i];
			var weekN = moment(next.date_run).week();
			var speed = next.distance_run / (next.time_run / 60);
			var distance = next.distance_run;

			if(!$scope.dataSet[weekN]){
				$scope.dataSet[weekN] = {
					speed : speed,
					distance : distance,
					n : 1
				};
			}else{
				var aux = $scope.dataSet[weekN];
				aux.speed += speed;
				aux.distance += distance;
				aux.n += 1;
			}
		}

		console.log($scope.dataSet);

		for (var property in $scope.dataSet) {
		    if ($scope.dataSet.hasOwnProperty(property)) {
		        $scope.labels.push('Week '+property);
		        $scope.data[0].push(Math.round((($scope.dataSet[property].speed / $scope.dataSet[property].n) * 100) / 100));
		        $scope.data[1].push(Math.round((($scope.dataSet[property].distance / $scope.dataSet[property].n) * 100) / 100));
		    }
		}
	});

	$scope.onClick = function (points, evt) {
		console.log(points, evt);
	};
}]);