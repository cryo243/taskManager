(function() {
  'use strict';

  angular
    .module('tangent')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
