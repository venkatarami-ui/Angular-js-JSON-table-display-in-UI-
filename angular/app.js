var app = angular.module('myAapp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'myController',
            templateUrl: 'angular/views/details.html'
        })
        .when('/person/:id', {
            controller: 'detailsController',
            templateUrl: 'angular/views/details.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});