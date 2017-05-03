
var app = angular.module('BreweryApp', ['ngAnimate', 'ngCookies']);

app.controller('MainController', ['$http', function($http){
   this.showBrewerySearch = false;
   this.showHomePage = true;
   this.showBeerPage = false;
   this.isAdmin =false;
   this.currentBrewery = false;
   this.controller = this;
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
      console.log('currentUser in app.js: ', currentUser);  // testing purpose
   };
   this.openBeerSearch = function(){
      this.showHomePage = false;
      this.showBrewerySearch = false;
      this.showLoginForm = false;
      this.showBeerPage = true;
      this.showBreweryPage = false;
      this.showBreweries = false;
      console.log('currentUser in app.js: ', currentUser);  // testing purpose
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
   this.fromBeerToBrewery = function(name) {
     var urlStr = 'breweries/proxy/v2/breweries?name=' + name;
     var controller = this;
     $http({
      method: 'GET',
      url: urlStr
     }).then( function(response) {
      controller.brewery = response.data.data[0].name;
      console.log(controller.breweries);
     }, function(response) {
      console.log("fromBeerToBrewery failed:", response);
     });
   };
}]);
