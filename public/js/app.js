

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

var app = angular.module('BreweryApp', ['ngAnimate']);

app.controller('MainController', ['$http', function($http){
   this.showBrewerySearch = false;
   this.showHomePage = true;
   this.showBeerPage = false;
   this.isAdmin =false;
   this.currentBrewery = false;
   this.getBreweries = function(brew){
      console.log(brew);
      $http({
         method:"GET",
         url:"breweries/" + brew //error not Access-Control-Allow-Origin
      }).then(function(response){
         console.log(response);
      });
   };


   this.openHomePage = function(){
      this.showHomePage = true;
      this.showBrewerySearch = false;
      this.showLoginForm = false;
      this.showBeerPage = false;
      this.showBreweryPage = false;
   };
   this.openBrewerySearch = function(){
      this.showBrewerySearch = true;
      this.showLoginForm = false;
      this.showHomePage = false;
      this.showBeerPage = false;
      this.showBreweryPage = false;
   };
   this.openBeerSearch = function(){
      this.showHomePage = false;
      this.showBrewerySearch = false;
      this.showLoginForm = false;
      this.showBeerPage = true;
      this.showBreweryPage = false;
   };
   this.openLoginPage = function(){
      this.showBrewerySearch = false;
      this.showLoginForm = true;
      this.showHomePage = false;
      this.showBeerPage = false;
      this.showBreweryPage = false;
   };
   this.openThisBrewery = function(results, breweryCtrl){
      // console.log(breweryCtrl);
      // console.log(results.brewery);
      this.showBrewerySearch = false;
      this.showBreweryPage = true;
      breweryCtrl.currentBrewery1 = results;
      console.log(breweryCtrl.currentBrewery1);

      //enlarge selected brewery and add data
   };
}]);
>>>>>>> 4961dd80a4089fb5522235514a02222019b9926d
