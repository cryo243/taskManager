(function() {
  'use strict';

  angular
    .module('tangent')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'app/dashboard/dashboard.html',
			controller: 'DashboardController',
			controllerAs: 'dashboard',
			resolve: {
				projectsList: /** @ngInject */ function(project, $q) {
					return project.queryAll() || $q.reject({unAuthorized:true});
				}
			}
		});

    $urlRouterProvider.otherwise('/');
  }

})();
