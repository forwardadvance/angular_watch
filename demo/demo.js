// We can watch a variable with $watch
// Variables are updated in the digest cycle
// We can watch multiple variables using the square brace syntax
// We can watch an object
// If we update a scope value outside Angular we can trigger a digest using $apply
// Maximum of 10 digests in a digest cycle

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






// $scope.$watch('firstName', $scope.makeFullName);
// $scope.$watch('surname', $scope.makeFullName);
// $scope.$watch('[firstName, surname]', $scope.makeFullName);
// $scope.$watch('surname', function() {
//   $scope.surname = Math.random();
// });


// $('a').click(function() {
//   $scope.$apply(function() {
//     $scope.hello = "Clicked!";
//   });
// });













//

// Initial state

// angular.module('app', [])
//   .controller('myController', function($scope) {

//     $scope.surname = $scope.firstName = "";
//     $scope.makeFullName = function(current,last) {
//       $scope.fullName = $scope.firstName + " " + $scope.surname
//     }
//     // $scope.$watch('firstName', $scope.makeFullName);
//     // $scope.$watch('surname', $scope.makeFullName);
//     // $scope.$watch('[firstName, surname]', $scope.makeFullName);
//     // $scope.$watch('surname', function() {$scope.surname = Math.random()});
//   });

// // $('a').click(function() {
// //   $scope.$apply(function() {
// //     $scope.hello = "Clicked!";
// //   });
// // });
