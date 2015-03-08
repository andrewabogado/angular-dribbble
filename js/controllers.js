'use strict';

var controllers = angular.module('dabbble.controllers', []);

// define controllers as part of the module
controllers.controller('AppCtrl', function($scope) {

  $scope.name = "Module! To test out module";

});

controllers.controller('ShotsListCtrl', function($scope, $routeParams, dribbble) {

  var list = $routeParams.list;

  dribbble.list(list).then(function(data) {
    $scope.list = data.data;
    console.log(data);
  })

});

controllers.controller('ShotsCtrl', function($scope, $routeParams, dribbble) {

  var id = $routeParams.id;

  dribbble.shot(id).then(function(data) {
    $scope.shot = data.data;
    console.log(data);
  })

});
