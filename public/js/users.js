console.clear();
// var app = angular.module('BreweryApp', ['ngCookies']);

// User Registration controller
// angular.module('BreweryApp').controller('BreweryDBController', ['$http', function($http) {
// app.controller('UserController', ['$http', '$cookies', '$window',function($http, $cookies, $window){

angular.module('BreweryApp').controller('UserController',['$http', '$cookies',"$window",  function($http, $cookies, $window){

  var controller = this;
  controller.showGreeting = false;
  this.userName ="";
  this.password ="";
  this.showRegisterForm = false;
  this.showLoginForm = true;
  this.isAdmin =false;

  this.addUser = function(){
    console.log('add user');
    $http({
      method:'POST',
      url:'/users',
      data: {
        username: this.registerUserName,
        password: this.registerPassword,
        isAdmin:  this.registIsAdmin
      }
    }).then(function(response){ //success
    }, function(error){ //fail
      alert('The user name is already taken....')
    });
    this.registerUserName = "";
    this.registerPassword = "";
    this.isAdmin  = false;

  };
  // log in section
  this.logIn = function(){
    console.log("controller pwd ", this.password);
    var pwd = this.password;
    $http({
      method:'POST',
      url:'/sessions',
      data: {
        username: this.userName,
        password: this.password,
      }
    }).then(function(response){ //success
      console.log("respnse from log in ", response);
      if(response.data == "Invalid") {
        alert('Invalid username/password');
        $window.location.reload();
      }
      else {
        controller.currentUser = response.data.currentuser; // get currrent user information
        $cookies.put('logInSuccess', true);
        $cookies.put("username", response.data.currentuser.username);// set cookies username
        $cookies.put("showGreeting", true);
        $cookies.put("pwd", pwd); // set pwd for cookies
        controller.showGreeting = true;
      }
    }, function(error){ //fail
      console.log("wrong user name or password");
      $window.location.reload();
    });
    this.userName = "";
    this.password = "";
  };

  this.logout = function(){
    // clean cookies
    alert('Are you sure you want to log out?');
    $cookies.remove('username');
    $cookies.remove('pwd');
    $cookies.remove('showGreeting');
    $cookies.remove('logInSuccess');
    $cookies.remove("showLoginForm");
    $http({
      method:'POST',
      url:'/sessions?_method=DELETE',
      data: {
        username: this.userName,
        password: this.password,
        isAdmin: this.isAdmin
      }
    }).then(function(response){ //success
    }, function(error){ //fail
      alert('can not delete the session');
    });
    this.userName = "";
    this.password = "";
    this.isAdmin  = false;
    console.log('try to reload');
    $window.location.href = '/';
    $window.location.reload();
  }// end of logout

  this.resetRegisterForm = function (){
    controller.showRegisterForm = !controller.showRegisterForm;
    controller.showLoginForm = !controller.showLoginForm;

  }

  this.resetLoginForm = function(){
    controller.showRegisterForm = !controller.showRegisterForm;
    controller.showLoginForm = !controller.showLoginForm;

  }

  //set cookie section
  if ($cookies.get('logInSuccess')){
    console.log("it is run again??");
    console.log($cookies.get("logInSuccess"));
    this.userName = $cookies.get("username");
    this.password = $cookies.get("pwd");
    this.showGreeting = $cookies.get("showGreeting");
    console.log( "show greeting ",  $cookies.get("showGreeting"));
    this.logIn();
  }


}]); // end of user controller
