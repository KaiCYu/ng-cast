angular.module('video-player')

.directive('videoListEntry', function() {
  return {
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      // console.log($scope);
      debugger;
    
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
