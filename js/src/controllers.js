var controllers = angular.module('spikeAppControllers', []);

controllers.factory('WidgetService', function() {
	var widgetList = {
		'9230894': {
			id: 9230894,
			name: 'Engine'
		},
		'8230309': {
			id: 8230309,
			name: 'Wheel'
		}
	};

	return {
		list: function() {
			return widgetList;
		},
		get: function(id) {
			return widgetList[id];
		},
		noReturn: function() {

		}
	}
})

controllers.controller('HomeController', ['$scope', '$http', function($scope, $http) {
	$scope.title = "Home";

	_paq.push(['trackPageView']);
	owa_cmds.push(['trackPageView']);
}]);

controllers.controller('WidgetController', ['$scope', '$http', 'WidgetService',
	function($scope, $http, WidgetService) {
	$scope.title = "Widgets";
	$scope.widgets = WidgetService.list();
	WidgetService.noReturn();

	_paq.push(['trackPageView']);
	owa_cmds.push(['trackPageView']);
}]);

controllers.controller('SingleWidgetController', ['$scope', '$http', '$routeParams', 'WidgetService',
	function($scope, $http, $routeParams, WidgetService){
		var id = $routeParams.id;

		$scope.widget = WidgetService.get(id);

	_paq.push(['trackPageView']);
	owa_cmds.push(['trackPageView']);
	}]);
