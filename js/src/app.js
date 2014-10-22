var spikeApp = angular.module('spikeApp', ['ngRoute', 'spikeAppControllers']);

spikeApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.when('/widgets', {
			templateUrl: 'templates/widgets.html',
			controller: 'WidgetController'
		})
		.when('/widget/:id', {
			templateUrl: 'templates/widget.html',
			controller: 'SingleWidgetController'
		})
		.otherwise({
			redirectTo: '/home'
		});
}]);
