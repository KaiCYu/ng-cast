angular.module('video-player')

.directive('app', function() {

  return {
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },
    templateUrl: 'src/templates/app.html'
  };
});
