angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      // console.log($scope);
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
