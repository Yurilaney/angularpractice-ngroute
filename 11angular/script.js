// THIS DECLARES MY ANGULAR PROJECT: "newMexico"
var newMexico = angular.module('newMexico', ['ngRoute']);

// THESE ARE MY DIRECTIVES
// DIRECTIVE 1: FORM TO ADD HOUSEHOLD INFO
newMexico.directive('blah', function () {
  return {
    restrict: 'EA',
    template: '<h1>Add details of your partner</h1><hr>'+'<h3>Household Information</h3>'+'<form class="form-horizontal">'+'<div class="control-group">'+'<label class="control-label">First Name: </label>' +'<div class="controls">' +'<input type="text" ng-model="household.firstName" placeholder="Fred" class="input-large span6" id="firstName" name="firstName">' +'</div>'+'</div>'+'<div class="control-group">'+'<label class="control-label">Last Name: </label>'+'<div class="controls">'+'<input type="text" placeholder="Jones" ng-model="household.lastName" class="input-large span6" id="lastName" name="lastName">'+'</div>'+'</div>' + '</form>' + '<a class="btn btn-primary" onClick="saveDataToJson();">Add Name to JSON</a>'
  };
});
// DIRECTIVE 2: CHECKBOXES TO SELECT WHAT TYPE OF LIFE EVENT CHANGES
newMexico.directive('yoyo', function() {
  return {
    restrict: 'EA',
    template: '<h1>Select a Life Change Event</h1><hr>'+'<form class="form-horizontal">'+'<div class="control-group">'+'<label class="control-label">Marital Status: </label>' +'<div class="controls">' +'<input type="checkbox"id="marital" name="marital">' +'</div>'+'</div>'+'<div class="control-group">'+'<label class="control-label">Incarceration: </label>'+'<div class="controls">'+'<input type="checkbox"id="incarceration" name="incarceration" ng-model="moreIncar">'+'</div>'+'</div>' + '<div class="control-group">'+'<label class="control-label">Already saved in JSON object: </label>'+'<div class="controls">'+'<input type="checkbox"id="incarceration" name="incarceration">'+'</div>'+'</div>'+ '</form>'
  };
});
// DIRECTIVE 3:
newMexico.directive('moreIncarcerations', function() {
  return {
    restrict: 'EA',
    template: 'Heyyyy moreIncarcerations {{jsonObject}}'
  };
});

// IF YOU HAVE A COMPLETE SINGLE PAGE APP, YOU DON'T NECCESARLY NEED THE ROUTING...
// THIS IS THE ROUTING FOR WHEN I GO TO:
// ROUTE 1: LOCALHOST:3000/
newMexico.config(function($routeProvider) {
  $routeProvider
     //route for the home page
    .when('/', {
     templateUrl : 'pages/home.html',
     controller  : 'mainController'
    })

    // ROUTE 2: LOCALHOST:3000/INCARCERATION
    .when('/incarceration', {
      templateUrl : 'pages/incarceration.html',
      controller  : 'incarcerationController'
    })

    // ROUTE 3: LOCALHOST:3000/GAIN
    .when('/gain', {
      templateUrl : 'pages/gain.html',
      controller  : 'gainController'
    });
});


// THESE ARE CONTROLLERS FOR EACH ROUTE
// I THINK YOU NEED TO HAVE A CONTROLLER PER ROUTE
// CONTROLLER 1) MAINCONTROLLER - CORRESPONDS WITH ROUTE "/"
newMexico.controller('mainController', function($scope) {
  // create a message to display in our view
  $scope.message = 'Marital Status';
});

// CONTROLLER 2) MAINCONTROLLER - CORRESPONDS WITH ROUTE "/INCARCERATION"
newMexico.controller('incarcerationController', function($scope) {
  $scope.message = 'Incarceration';
});

// CONTROLLER 3) MAINCONTROLLER - CORRESPONDS WITH ROUTE "/GAIN"
newMexico.controller('gainController', function($scope) {
  $scope.message = 'Gain of Minimum Health Coverage';
});

 var jsonObject = [];
 function saveDataToJson() {

  alert("Will be saving to JSON object, yo!")
  var firstName =  $('#firstName').val();
  var lastName =  $('#lastName').val();
  var member = {};
  member.firstName = firstName;
  member.lastName = lastName;
  jsonObject.push(member);
  // debugger
  // alert(firstName+" "+lastName);
}
