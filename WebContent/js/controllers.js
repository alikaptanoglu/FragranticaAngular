var app = angular.module('fragranticaApp');

app.controller('mainController', function($scope, fragranticaService){
	fragranticaService.getPerfumeHouses()
	.then(function(response){
		$scope.perfumeHouses = response.data;
	}, function(error){
		$scope.error = error;
	});
});

app.controller('houseDetailController', function($scope, $routeParams, fragranticaService){
	var id =  $routeParams.id;
	
	fragranticaService.getPerfumeHouseDetails(id)
	.then(function(response){
		$scope.perfumeHouseDetails = response.data;
	}, function(error){
		$scope.error = error;
	});
	
	$scope.getRowClass = function(gender){
		if(gender == 'Men'){
			return 'bg-primary';
		}else if(gender == 'Women'){
			return 'bg-danger';
		}else{
			return 'bg-success';
		}
	};
	
});

app.controller('perfumeDetailController', function($scope, $routeParams, fragranticaService){
	fragranticaService.getPerfumeDetails($routeParams.id)
	.then(function(response){
		$scope.perfumeDetails = response.data;
	}, function(error){
		$scope.error = error;
	});
});

app.controller('searchPerfumesController', function($scope, fragranticaService){
	fragranticaService.getAllPerfumes()
	.then(function(response){
		$scope.perfumes = response.data;
	}, function(error){
		$scope.error = error;
	});
});

app.controller('suggestMissingPerfumeController', function($scope, fragranticaService){
	
});