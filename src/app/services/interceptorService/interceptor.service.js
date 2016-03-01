(function() {
	'use strict';

	angular
		.module('tangent')
		.factory('interceptorFactory', interceptorFactory);

	/** @ngInject */
	function interceptorFactory($window, endpoint) {
        function injectTokenIntoHeader($window, config, projectHost){
			var token = $window.sessionStorage['token'];
			if(token && config.url.indexOf(projectHost) !== -1) {
				config.headers[ 'Authorization' ] = 'Token ' +  token;

			}
		}

		return {
			'request': function(config) {
				injectTokenIntoHeader($window, config, endpoint.projectEndpoint.host);
				return config;
			}


		};

	}
})();
