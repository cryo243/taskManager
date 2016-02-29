(function() {
	'use strict';

	describe('controllers', function() {
		var vm;


		beforeEach(module('tangent'));
		beforeEach(inject(function(_$controller_) {
			vm = _$controller_('MainController');
		}));
		it('should have a form field', function() {
			expect(vm.form).toBeDefined();
		});
		it('should have a loginForm method', function() {
			expect(vm.form).toBeDefined();
		});
	});
})();
