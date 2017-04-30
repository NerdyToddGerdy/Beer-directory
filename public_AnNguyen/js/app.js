

console.clear();
var app = angular.module('MyApp', []);

// User Registration controller
app.controller('UserController', ['$http', function($http){
  this.showRegisterForm = false;
  this.showLoginForm = false;
  this.isAdmin =false;
  this.addUser = function(){
    // console.log('add user');
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
            console.log("angualr: err " , error);
            alert('The user name is already taken')
        });
        this.userName = "";
        this.password = "";
        this.isAdmin  = false;

    };

// log in section

 // login method
 this.logIn = function(){
  //  console.log("Log in as : ", this.userName);
   $http({
       method:'POST',
       url:'/sessions',
       data: {
           username: this.userName,
           password: this.password,
       }
   }).then(function(response){ //success
       console.log(response.data);
   }, function(error){ //fail
        console.log("wrong user name or password");
        alert("wrong user name or password")
   });
   this.userName = "";
   this.password = "";
 };



}]); // end of user controller
