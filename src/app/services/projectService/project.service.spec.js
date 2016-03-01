(function() {
	'use strict';

	describe('user service', function() {
		var project;

		beforeEach(module('tangent'));
		beforeEach(inject(function(_project_) {
			project = _project_;

		}));

		it('should be registered', function() {
			expect(project).not.toEqual(null);
		});

		describe('authenticate function', function() {

			it('should have a queryAll method defined', function() {
				expect(project.queryAll).toBeDefined();
			});
			it('should have a queryAll method defined', function() {
				expect(project.deleteById).toBeDefined();
			});

		});
	});
})();
