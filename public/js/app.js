

console.clear();
var app = angular.module('MyApp', []);

// User Registration controller
app.controller('CreateUserController', ['$http', function($http){

  this.showRegisterForm= false;
  this.isAdmin =false;

  this.addUser = function(){
    console.log('add user');
        $http({
            method:'POST',
            url:'/users',
            data: {
                username: this.userName,
                password: this.password,
                isAdmin: this.isAdmin
            }
        }).then(function(response){ //success
            console.log("this is respnse " , response);
        }, function(error){ //fail

        });
        this.userName = "";
        this.password = "";
        this.isAdmin  = false;
    }


}]);
//User login Controller
app.controller('UserLogInController', ['$http', function($http){

  this.showLoginForm = false;


}]);
