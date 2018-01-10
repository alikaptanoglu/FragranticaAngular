var app = angular.module('fragranticaApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'partials/home.html',
		controller: 'mainController'
	})
	.when('/houses',{
		templateUrl: 'partials/houses.html',
		controller: 'mainController'
	})
	.when('/house/:id',{
		templateUrl: 'partials/house.html',
		controller: 'houseDetailController'
	})
	.when('/search',{
		templateUrl: 'partials/search.html',
		controller: 'searchPerfumesController'
	})
	.when('/perfumeDetail/:id',{
		templateUrl: 'partials/perfumeDetail.html',
		controller: 'perfumeDetailController'
	})
	.when('/notes',{
		templateUrl: 'partials/notes.html',
		controller: 'mainController'
	})
	.when('/aboutUs',{
		templateUrl: 'partials/aboutUs.html',
		controller: 'mainController'
	})
	.when('/contactUs',{
		templateUrl: 'partials/contactUs.html',
		controller: 'mainController'
	})
	.when('/suggest',{
		templateUrl: 'partials/suggest.html',
		controller: 'suggestMissingPerfumeController'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);