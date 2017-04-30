var app = angular.module('BreweryApp', []);

app.controller('MainController', ['$http', function($http){
   this.getBreweries = function(brew){
      console.log(brew);
      $http({
         method:"GET",
         url:"http://api.brewerydb.com/v2/locations?key=cbf87c44338b3c02f584632bf9a5cf01&postalCode=" + brew //error not Access-Control-Allow-Origin
      }).then(function(response){
         console.log(response);
      }),function(error){
         console.log(error);
      };
   };
}]);
