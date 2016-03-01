(function() {
	'use strict';

	describe('controllers', function() {
		var vm, $window, $state;

		beforeEach(module('tangent'));
		beforeEach(function() {
			angular.mock.module(function($provide) {
				var projects = jasmine.createSpyObj('projectList', [ 'data' ]);
				$provide.value('projectsList', projects);
			});
		});
		beforeEach(inject(function(_$controller_, _$window_, _$state_) {
			vm = _$controller_('DashboardController');
			$window = _$window_;
			$state =  _$state_

		}));
		it('should have a signOut method defined', function() {
			expect(vm.signOut).toBeDefined();
		});
		it('should call the session storage clear method when the signOut method is called', function() {
			spyOn($window.sessionStorage, 'clear');
			vm.signOut();
			expect($window.sessionStorage.clear).toHaveBeenCalled();
		});
		it('should call the state go method when the signOut method is called', function() {
			spyOn($state, 'go');
			vm.signOut();
			expect($state.go).toHaveBeenCalledWith('home');
		});

	});
})();
