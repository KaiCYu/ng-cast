angular.module('video-player')

.directive('app', function() {

  return {
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      // console.log($scope);
      // debugger;
      // $scope.videos = window.exampleVideoData;
    },
    templateUrl: 'src/templates/app.html'
  };
});
