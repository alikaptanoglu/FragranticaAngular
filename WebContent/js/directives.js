var app = angular.module('fragranticaApp');

app.directive('perfume', function(){
	return {
		templateUrl: 'partials/perfumeRow.html',
		restrict: 'E',
		scope: {
			perfume: '=perfume'
		}
	};
	
});

app.directive('feedback', function(){
	return {
		templateUrl: 'partials/perfumeFeedback.html',
		restrict: 'E',
		scope: {
			perfume: '=perfume'
		},
		controller: function($scope,$element){
			$scope.like = function(){
				$scope.perfume.like = 1;
			};
			
			$scope.love = function(){
				$scope.perfume.love = 1;
			};
			
			$scope.dislike = function(){
				$scope.perfume.dislike = 1;
			};
			
			$scope.hate = function(){
				$scope.perfume.hate = 1;
			};
		}
	};
	
});