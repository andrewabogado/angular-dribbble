'use strict';

var controllers = angular.module('dabbble.controllers', []);

// define controllers as part of the module
controllers.controller('AppCtrl', function($scope) {

  $scope.name = "Module! To test out module";

});

// function AppCtrl ($scope) {
//   $scope.name = "World!";
//   $scope.updateName = function () {
//     $scope.name = "World from function!";
//   }
// }
