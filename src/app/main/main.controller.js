(function() {
  'use strict';

  angular
    .module('tangent')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.form = [];
  }
})();
