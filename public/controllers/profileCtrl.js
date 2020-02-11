loginApp.controller('profileCtrl', ['$scope', '$http', 'userService', function ($scope, $http, userService) {

  $scope.user = userService.getUser();
  $scope.changePassword = () => {
    const currentPassword = $scope.currentPassword;
    const newPassword = $scope.newPassword;
    const rePassword = $scope.rePassword

    if (!currentPassword  || !newPassword || !rePassword) {
      $scope.message = 'Please fill the fields';
      return;
    }

    if ( currentPassword.length < 8  ||  newPassword.length < 8  || rePassword.length < 8) {
      $scope.message = 'Password should be at least 8 characters';
      return;
    }
    
    if (newPassword !== rePassword) {
      $scope.message = 'Password does not match';
      return;
    }

    userService.changePassword($scope.user.email, currentPassword, newPassword, (message) => {
      $scope.message = message;
    })
  }
}]);