loginApp.controller('loginCtrl', ['$scope', 'userService', function ($scope, userService) {

  $scope.login = () => {
    const email =  $scope.email;
    const password =  $scope.password;

    if (!email || !password ) {
      $scope.errorMessage = 'Email and password are required';
      return
    }

    if (email && email.length < 10) {
      $scope.errorMessage = 'Please enter correct email';
      return
    }

    if (password && password.length < 8) {
      $scope.errorMessage = 'password should be at least 8 characters';
      return
    }
    // login by use login function in userService
    userService.login(email, password, (errorMessage) => {
      $scope.errorMessage = errorMessage;
    });
  }

}]);