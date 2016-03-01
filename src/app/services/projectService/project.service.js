(function() {
	'use strict';

	angular
		.module('tangent')
		.factory('project', projectFactory);

	/** @ngInject */
	function projectFactory($http, endpoint) {
		function queryAll() {
			return $http.get(endpoint.projectEndpoint.host + endpoint.projectEndpoint.url);
		}
		function deleteById(pk) {
			return $http({
				method: 'DELETE',
				url: endpoint.projectEndpoint.host + endpoint.projectEndpoint.url,
				data: pk
			});
		}
		return {
			queryAll : queryAll,
			deleteById: deleteById
		};

	}
})();
