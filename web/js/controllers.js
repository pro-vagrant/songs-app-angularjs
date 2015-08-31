'use strict';

/* Controllers */

var SongsApplication = angular.module('SongsApplication', ['ngRoute', 'ngSanitize']);


SongsApplication.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/show/song/:songId', {
                templateUrl: 'SongShowTemplate',
                controller: 'SongShowCtrl'
            })
            .when('/', {
                redirectTo: '/show/song/1'
            })
    }
]);


SongsApplication.controller('SongsIndexCtrl', function($scope, $http) {

    $http.get('data/songs.json').success(function(data) {
        $scope.songs = data;
    });

});

SongsApplication.controller('SongShowCtrl', ['$scope', '$routeParams', '$http',

    function($scope, $routeParams, $http) {

        $http.get('data/song/' + $routeParams.songId + '.json').success(function(data) {
            $scope.song = data;
        });

}]);

