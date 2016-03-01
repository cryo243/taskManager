(function() {
	'use strict';

	angular
		.module('tangent')
		.factory('user', userFactory);

	/** @ngInject */
	function userFactory($log, $http) {
		var endpoint = {
			host: 'http://userservice.staging.tangentmicroservices.com/',
			authenticate: 'api-token-auth/'
		};

		return {
			endpoint : endpoint,
			authenticate: authenticate
		};

		function authenticate(payload) {

			return $http.post(endpoint.host + endpoint.authenticate, payload)
				.then(function(response) {
					return response.data;
				})
				.catch(function(error) {
					$log.error('XHR Failed to get stuff.\n' + angular.toJson(error.data, true));
				});

		}
	}
})();
