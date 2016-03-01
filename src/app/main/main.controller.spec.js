(function() {
	'use strict';

	describe('controllers', function() {
		var vm, userService;


		beforeEach(module('tangent'));
		beforeEach(function() {
			angular.mock.module(function($provide) {
				userService = jasmine.createSpyObj('userService', [ 'authenticate' ]);
				$provide.value('user', userService);
			});
		});
		beforeEach(inject(function(_$controller_, _$q_) {
			var response = _$q_.defer();
			userService.authenticate.and.returnValue(response .promise);
			response.resolve({data:'values'});
			vm = _$controller_('MainController');

		}));
		it('should initialize a formData object with empty fields', function() {
			expect(vm.formData).toBeDefined();
			expect(vm.formData.username).not.toBeDefined();
			expect(vm.formData.password).not.toBeDefined();
		});
		it('should have a login method', function() {
			expect(vm.login).toBeDefined();
		});
		describe('when the form is submitted and is $valid', function() {
			it('should set the username', function() {
				vm.formData.username = 'test';
				vm.formData.password = 'tester';
				var form = {
					'$valid' : true
				};
				//spyOn(userService, 'authenticate');
				vm.login(form);
				expect(userService.authenticate).toHaveBeenCalledWith(vm.formData);
			});

		});
	});
})();
