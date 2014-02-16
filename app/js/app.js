'use strict';


// Declare app level module which depends on filters, and services
angular.module('iHappyHour', [
  'ngRoute',
  'iHappyHour.filters',
  'iHappyHour.services',
  'iHappyHour.directives',
  'iHappyHour.controllers'
]).
config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    // delete header from client:
    // http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $routeProvider.when('/', {templateUrl: 'partials/events.html', controller: 'eventList'});
  $routeProvider.when('/addspecial', {templateUrl: 'partials/addSpecial.html', controller: 'addSpecial'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);