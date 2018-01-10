var app = angular.module('fragranticaApp');

app.factory('fragranticaService', function($http){
	var fragranticaApi = {};
	
	fragranticaApi.getPerfumeHouses = function(){
		return $http.get("http://localhost:8080/FragraticaAngular/resources/houses.json");
	};
	
	fragranticaApi.getPerfumeHouseDetails = function(id){
		return $http.get("http://localhost:8080/FragraticaAngular/resources/houses/"+id+".json");
	};
	
	fragranticaApi.getPerfumeDetails = function(id){
		return $http.get("http://localhost:8080/FragraticaAngular/resources/perfumes/"+id+".json");
	};
	
	fragranticaApi.getAllPerfumes = function(id){
		return $http.get("http://localhost:8080/FragraticaAngular/resources/perfumes.json");
	};
	
	return fragranticaApi;
});