(function() {
	'use strict';

	angular
		.module('tangent')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController() {
		var vm = this;
		vm.form = {};
		vm.loginForm = function(form) {
			if(form.$valid) {

			}

		}

	}
})();
