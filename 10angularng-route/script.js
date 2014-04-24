// script.js

  // create the module and name it seimithisCool
        // also include ngRoute for all our routing needs
  var seimithisCool = angular.module('seimithisCool', ['ngRoute']);

  seimithisCool.directive('blah', function () {
    return {
      restrict: 'EA',
      template: 'gotohell'
    };
  });

  seimithisCool.directive('yoyo', function() {
    return {
      restrict: 'EA',
      template: 'HOLY SHIIIIITs'
    };
  });

  // configure our routes
  seimithisCool.config(function($routeProvider) {
    $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
      })

      // route for the incarceration page
      .when('/incarceration', {
        templateUrl : 'pages/incarceration.html',
        controller  : 'incarcerationController'
      })

      // route for the gain page
      .when('/gain', {
        templateUrl : 'pages/gain.html',
        controller  : 'gainController'
      });
  });

  // create the controller and inject Angular's $scope
  seimithisCool.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Marital Status';
  });

  seimithisCool.controller('incarcerationController', function($scope) {
    $scope.message = 'Incarceration';
  });

  seimithisCool.controller('gainController', function($scope) {
    $scope.message = 'Gain of Minimum Health Coverage';
  });