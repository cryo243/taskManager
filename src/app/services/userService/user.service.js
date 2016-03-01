(function() {
	'use strict';

	angular
		.module('tangent')
		.factory('user', userFactory);

	/** @ngInject */
	function userFactory($http, endpoint, $window, $log) {

		return {
			endpoint: endpoint,
			authenticate: authenticate,
			isLoggedIn: isLoggedIn
		};
		function isLoggedIn() {
			return !!($window.sessionStorage['token']);
		}

		function authenticate(payload) {

			return $http.post(endpoint.userEndpoint.host + endpoint.userEndpoint.url, payload)
				.then(function(response) {
					return response.data;
				}).catch(function (error) {
					$log.error('XHR Failed to get stuff.\n' + angular.toJson(error.data, true));
				});

		}
	}
})();
