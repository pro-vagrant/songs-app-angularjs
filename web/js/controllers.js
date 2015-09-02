'use strict';

/* Controllers */

var SongsApplication = angular.module('SongsApplication', ['ngRoute', 'ngSanitize']);


SongsApplication.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/show/song/:songId', {
                templateUrl: 'SongShowTemplate',
                controller: 'SongShowController'
            })
            .when('/', {
                redirectTo: '/show/song/1'
            })
    }
]);


SongsApplication.controller('SongIndexController', function($scope, $http) {

    $http.get('/api/songs.json').success(function(data) {
        $scope.songs = data;
    });

});

SongsApplication.controller('SongShowController', ['$scope', '$routeParams', '$http',

    function($scope, $routeParams, $http) {

        $http.get('/api/song/' + $routeParams.songId + '.json').success(function(data) {
            $scope.song = data;
        });

}]);

