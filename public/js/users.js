
angular.module('BreweryApp').controller('UserController',['$http', '$cookies',"$window",  function($http, $cookies, $window){
  this.currentUser = {};
  var controller = this;
  controller.showGreeting = false;
  this.userName ="";
  this.password ="";
  this.showRegisterForm = false;
  this.showLoginForm = true;
  this.isAdmin =false;
  this.logInSuccess = false;
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
        // copy loggedin user's info
        for(var i in response.data.currentuser) currentUser[i]=response.data.currentuser[i];
        for(var ii in response.data.currentuser) controller.currentUser[ii]=response.data.currentuser[i];
        console.log("local currentUser", controller.currentUser);
        this.logInSuccess = true;
        controller.userName = currentUser.username;
        $cookies.put('logInSuccess', true);
        $cookies.put("username", response.data.currentuser.username);// set cookies username
        $cookies.put("showGreeting", true);
        $cookies.put("pwd", pwd); // set pwd for cookies
        controller.showGreeting = true;
        $cookies.putObject('globals', currentUser)
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
    $cookies.remove('globals')
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
//------------------------------------------------------
this.removeBeer = function (removeBeerName){
  console.log('current user hold beers', currentUser.beers);
  var urlStr = '/users/beers/remove/' + currentUser._id;
  var _beers = currentUser.beers;
  for (var i = 0; i < _beers. length; i ++){
    if (_beers[i].name === removeBeerName){
      _beers.splice(i,1);
      break;
    }
  }
  console.log("beers after remove ", _beers);
   $http({
     method: 'PUT',
     url: urlStr,
     data: {beers:  this.selectedBeer }
   }).then(function(response) {
     console.log("beer is removed");
   }, function(response) {
     console.log("failed to delete beer", response);
   })
}

  //------------------------------------------------------
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
