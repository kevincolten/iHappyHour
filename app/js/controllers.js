'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('businessList', ['$scope', '$http', function($scope, $http) {
    $http.get('http://localhost:3000/api/businesses.json').success(function(data){
        $scope.businesses = data;
        console.log(data);
    })
  }])
  .controller('businessDetail', [function() {

  }]);