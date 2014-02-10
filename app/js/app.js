'use strict';


// Declare app level module which depends on filters, and services
angular.module('iHappyHour', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    // delete header from client:
    // http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'businessList'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);