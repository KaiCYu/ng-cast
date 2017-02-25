angular.module('video-player')

.directive('videoList', function() {
  return {
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
