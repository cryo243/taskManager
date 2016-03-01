(function() {
	'use strict';

	describe('controllers', function() {
		var vm, userService;


		beforeEach(module('tangent'));

		beforeEach(inject(function(_$controller_, _user_) {
			vm = _$controller_('MainController');
			userService = _user_;
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
				var form = {
					'$valid' : true
				};
				spyOn(userService, 'authenticate');
				vm.login(form);
				expect(userService.authenticate).toHaveBeenCalledWith(vm.formData);
			});

		});
	});
})();
