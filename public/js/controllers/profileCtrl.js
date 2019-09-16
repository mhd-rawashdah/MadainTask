loginApp.controller('profileCtrl', ['$scope', '$http', ($scope, $http) => {

  $scope.changePassword = () => {
    $http.post('/api/changePassword', {
      email: $scope.email,
      currentPassword: $scope.currentPassword,
      newPassword: $scope.currentPassword
    }).then(r => {
      $scope.successMessage = r.data.message;
    }, e => {
      $scope.errorMessage = e.data.message;
    });
  }
}]);