(function() {
	'use strict';

	angular
		.module('tangent')
		.controller('DashboardController', DashboardController);

	/** @ngInject */
	function DashboardController(projectsList, $window, $state) {
		var vm = this;
		vm.projects = projectsList.data;
		vm.signOut = function() {
			$window.sessionStorage.clear();
			$state.go('home');
		}
	}
})();
