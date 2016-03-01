(function() {
	'use strict';

	angular
		.module('tangent')
		.run(runBlock);

	/** @ngInject */
	function runBlock($log, $state, $rootScope, user, $location) {

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState){

			if (!user.isLoggedIn()) {

				if (fromState.name && toState.name.indexOf('home') ==-1) {
					event.preventDefault();
					$location.path($state.current.url);
					$state.go('home');
				}


			}



		});

		$log.debug('runBlock end');
	}

})();
