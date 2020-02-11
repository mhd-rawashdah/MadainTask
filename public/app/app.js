window.loginApp = angular.module('loginApp', ['ngRoute']);

loginApp.config(['$routeProvider',($routeProvider) => {
  $routeProvider
    .when('/login', {
     
      templateUrl: '../views/login.html',
      controller: 'loginCtrl'
    })
    .when('/profile', {
      templateUrl: '../views/profile.html',
      controller: 'profileCtrl'
    })
    .otherwise({
      redirectTo: '/login'
    })
}])