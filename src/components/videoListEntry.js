angular.module('video-player')

.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    restrict: 'E',
    bindToController: true,
    controller: function() {},
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
