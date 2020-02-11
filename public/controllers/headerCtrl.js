loginApp.controller('headerCtrl', ['$scope', 'userService', function ($scope, userService) {
    $scope.isLogged = userService.isLogged;
    userService.getIsLogged((isLogged) => {
        console.log(isLogged)
    })
}]);