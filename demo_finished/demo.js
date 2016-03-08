angular.module('app', [])
  .controller('myController', function($scope) {
    $scope.lookAtScope = function() {
      $scope
    }
    $scope.makeFullName = function() {
      $scope.fullName = $scope.firstName + " " + $scope.surname;
    }
    $scope.profile = {}
    $scope.$watch('profile', $scope.makeFullName, true);
    // $scope.$watch('surname', function() {
    //   $scope.surname = Math.random();
    // });
    // $('a').click(function() {
    //   $scope.hello = 'Hello from the jQuery';
    //   $scope.$apply();
    // });
  });
