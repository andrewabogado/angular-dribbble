'use strict';

var controllers = angular.module('dabbble.controllers', []);

// define controllers as part of the module
controllers.controller('AppCtrl', function($scope) {

  $scope.name = "Module! To test out module";

});

controllers.controller('ShotsListCtrl', function($scope, $http) {
  $scope.list;

  $http.jsonp('http://api.dribbble.com/shots/popular?callback=JSON_CALLBACK').then(function (data){
    $scope.list = data.data;
    console.log(data);
  })

});
