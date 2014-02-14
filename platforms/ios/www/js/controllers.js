'use strict';

/* Controllers */

angular.module('iHappyHour.controllers', []).
  controller('businessList', ['$scope', '$http', function($scope, $http) {
    $http.get('http://localhost:3000/api/businesses.json').success(function (data) {
        $scope.businesses = data;
    })
  }])
  .controller('addSpecial', ['$scope', '$http', function($scope, $http) {
    $http.get('http://localhost:3000/api/specials.json').success(function (data) {
        $scope.businesses = data.businesses;
        $scope.event_types = data.event_types;
        $scope.event_tags = data.event_tags;
        $scope.special_tags = data.special_tags;
        $scope.items = data.items;
        $scope.days = data.days
        $scope.special = {days: {}, event_tags: {}, special_tags: {}};
    });

    $scope.autoComplete = function(text) {
        if (text.length > 2) {
            var key;
            $http.get('/figaro.json').success(function (data) {
                key = data['GOOGLE_PUBLIC_API_KEY'];
                var autocomplete_url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'
                autocomplete_url += 'key=' + key;
                autocomplete_url += '&input=' + text;
                autocomplete_url += '&sensor=false&location=30.261158,-97.774267&radius=24140&types=establishment';
                $http.get(autocomplete_url).success(function (data) {
                    $scope.businesses = data['predictions'];
                });
            });
        }
    };

    $scope.submit = function() {
        console.log(this.special);
        $http.post('http://localhost:3000/api/specials', this.special).success(function (data) {
            console.log(data);
        });
    }
}]);
