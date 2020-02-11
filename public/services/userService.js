loginApp.service('userService', ['$http', '$window', function ($http, $window) {

  let userInfo = {};
  let errorMessage = '';
  let isLogged = false;
  this.getUser = function () {
    return userInfo;
  }

  this.setUser = function (user) {
    userInfo = user;
  }

  this.getErrorMessage = function () {
    return errorMessage;
  }

  this.setErrorMessage = function (message) {
    errorMessage = message
  }

  this.getIsLogged = function (callback) {
    callback(isLogged)
  } 

  this.login = (email, password, error) => {
    $http.post('/api/login', { email, password})
      .then(r => {
        this.setUser(r.data)
        isLogged = true
        $window.location.href = '/#!/profile';
      }, e => {
        this.setErrorMessage(e.data.message);
        error(e.data.message)
      });
  }

  this.changePassword = ( email, currentPassword, newPassword, error) => {
    $http.post('/api/changePassword', {
      email, currentPassword, newPassword
    }).then(r => {
      error(r.data.message)
    }, e => {
      error(e.data.message)
    });
  }

}]);