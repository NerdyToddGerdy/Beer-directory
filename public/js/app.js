

var app = angular.module('BreweryApp', ['ngAnimate', 'ngCookies']);
this.currentUser = currentUser;

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
      this.showBreweries = false;
   };
   this.openBrewerySearch = function(){
      this.showBrewerySearch = true;
      this.showLoginForm = false;
      this.showHomePage = false;
      this.showBeerPage = false;
      this.showBreweryPage = false;
      this.showBreweries = true;
   };
   this.openBeerSearch = function(){
      this.showHomePage = false;
      this.showBrewerySearch = false;
      this.showLoginForm = false;
      this.showBeerPage = true;
      this.showBreweryPage = false;
      this.showBreweries = false;
   };
   this.openLoginPage = function(){
      this.showBrewerySearch = false;
      this.showLoginForm = true;
      this.showHomePage = false;
      this.showBeerPage = false;
      this.showBreweryPage = false;
      this.showBreweries = false;
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
