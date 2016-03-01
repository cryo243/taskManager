(function() {
	'use strict';

	angular
		.module('tangent')
		.controller('MainController',  MainController);

	/** @ngInject */
	function MainController(user) {
		var vm = this;
		vm.formData = {}; //formData is an object holding the username and password

		vm.login = function(form) {

			if(form.$valid) {
              user.authenticate(vm.formData);
			}

		}

	}
})();
