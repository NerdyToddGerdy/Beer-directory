
var app = angular.module('BreweryApp', ['ngCookies']);
app.controller('MainController', ['$http', function($http){
   this.showBrewerySearch = false;
   this.showHomePage = true;
   this.showBeerPage = false;
   this.isAdmin =false;
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
   };
   this.openBrewerySearch = function(){
      this.showBrewerySearch = true;
      this.showLoginForm = false;
      this.showHomePage = false;
      this.showBeerPage = false;
   };
   this.openBeerSearch = function(){
      this.showHomePage = false;
      this.showBrewerySearch = false;
      this.showLoginForm = false;
      this.showBeerPage = true;
   };
   this.openLoginPage = function(){
      this.showBrewerySearch = false;
      this.showLoginForm = true;
      this.showHomePage = false;
      this.showBeerPage = false;

   };
   this.openThisBrewery = function(){
      console.log('this brewery');
   };
}]);
