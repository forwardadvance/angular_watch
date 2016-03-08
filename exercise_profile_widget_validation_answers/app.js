angular.module('app', [])
  .controller('ProfileController', function($scope) {
    $scope.name = "";
    $scope.url = "picture.jpg";
    $scope.errors = {}

    var validate = function() {
      if ($scope.name === "") {
        $scope.errors.name = "Please enter a name!";
      } else {
        delete($scope.errors.name);
      }
    }
    $scope.$watch('name', validate);
  });
