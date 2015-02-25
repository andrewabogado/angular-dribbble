'use strict';

var controllers = angular.module('dabbble.controllers', []);

// define controllers as part of the module
controllers.controller('AppCtrl', function($scope) {

	$scope.name = "Module! To test out module";

});

controllers.controller('ShotsListCtrl', function($scope, $routeParams, $http) {

	var list = $routeParams.list;

	$http.jsonp(
		'http://api.dribbble.com/shots/' + list + '?callback=JSON_CALLBACK').then(
		function(data) {
			$scope.list = data.data;
		})

});

controllers.controller('ShotsCtrl', function($scope, $http) {

});
