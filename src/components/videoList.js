angular.module('video-player')

.directive('videoList', function() {
  return {
    scope: {

    },
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      // debugger;
      // console.log($scope);
      $scope.videos = window.exampleVideoData;
      // $scope.videos.ngRepeat();
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
