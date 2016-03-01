(function() {
	'use strict';

	angular
		.module('tangent')
		.factory('endpoint', endpointsFactory);

	/** @ngInject */
	function endpointsFactory() {

		return {
			userEndpoint: {
				'host': 'http://userservice.staging.tangentmicroservices.com/',
				'url' : 'api-token-auth/'
			},
			projectEndpoint: {
				'host': 'http://projectservice.staging.tangentmicroservices.com:80',
				'url': '/api/v1/projects/'
			}
		};

	}
})();
