'use strict';

/* Controllers */

var SongsApplication = angular.module('SongsApplication', ['ngRoute', 'ngSanitize']);


SongsApplication.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/data/song/:songId', {
                templateUrl: 'abc',
                controller: 'SongsShowCtrl'
            })
            .when('/', {
                redirectTo: '/data/song/1'
            })
    }
]);


SongsApplication.controller('SongsIndexCtrl', function($scope, $http) {

    $http.get('data/songs.json').success(function(data) {
        $scope.songs = data;
    });

});

SongsApplication.controller('SongsShowCtrl', ['$scope', '$routeParams', '$http',

    function($scope, $routeParams, $http) {

        $http.get('data/song/' + $routeParams.songId + '.json').success(function(data) {
            $scope.song = data;
        });

}]);

