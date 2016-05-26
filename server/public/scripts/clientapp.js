var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/kingofspades', {
      templateUrl: '/views/kingofspades.html',
      controller: "kingofspadesController"
    })
    .when('/queenofspades', {
      templateUrl: '/views/queenofspades.html',
      controller: "queenofspadesController"
    })
    .when('/jackofspades', {
      templateUrl: '/views/jackofspades.html',
      controller: "jackofspadesController"
    })
    .when('/aceofspades', {
      templateUrl: '/views/aceofspades.html',
      controller: "aceofspadesController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
