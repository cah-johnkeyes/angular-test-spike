describe('Testing Spike App', function() {

	var controller, scope, noReturnCalled;

	var mockWidgetService = {
		list: function() {
			return [{id: 1, name: 'test'}];
		}, 
		noReturn: function() {
			noReturnCalled = true;
		}
	};

	beforeEach(function() {
		module('spikeApp');
	});

	describe('Home Controller', function() {

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope;
			controller = $controller('HomeController', { '$scope': scope });
		}));

		it('Should have "Home" as the title.', function(){
			expect(scope.title).toEqual('Home');
		});

	});

	describe('Widget Controller', function() {

		beforeEach(inject(function($rootScope, $controller) {
			noReturnCalled = false;
			scope = $rootScope;
			controller = $controller('WidgetController', { 
				'$scope': scope, 
				'WidgetService': mockWidgetService
			});
		}));

		it('Should have "Widgets" as the title.', function(){
			expect(scope.title).toEqual('Widgets');
		});

		it('Should get a list of widgets', function() {
			expect(scope.widgets[0].id).toEqual(1);
		});

		it('Should call the no return method', function() {
			expect(noReturnCalled).toEqual(true);
		})

	});

});