angular.module('video-player')

.directive('search', function() {
  return {
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      // console.log($scope);
    },
    templateUrl: 'src/templates/search.html'
  };
});
