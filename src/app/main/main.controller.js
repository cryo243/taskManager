(function() {
	'use strict';

	angular
		.module('tangent')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController(user, $state, $window, toastr) {
		var vm = this;
		vm.formData = {}; //formData is an object holding the username and password

		vm.login = function(form) {
			if (form.$valid) {
				user.authenticate(vm.formData).then(function(res) {
					$window.sessionStorage.setItem('token', res.token);  //store the token in session storage it clears when you close the tab
					$state.go('dashboard');
				}).catch(function() {
					toastr.error('Wrong credentials supplied', 'UnAuthorized!');
				});
			}
		}
	}
})();
