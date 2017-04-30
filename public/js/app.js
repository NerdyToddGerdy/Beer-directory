var app = angular.module('BreweryApp', []);

app.controller('BreweryDBController', ['$http', function($http) {

  var controller = this;
  this.breweries = [];

  this.getBreweriesByZip = function(zipCode) {
    console.log("getBreweries");
    var urlStr = '/breweries/proxy/v2/locations?key=cbf87c44338b3c02f584632bf9a5cf01&postalCode=' + zipCode;

    $http({
      method: 'GET',
      url: urlStr,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then( function(response) {
      console.log("here");
      console.log(response.data);
      controller.breweries = response.data;
    }, function(response) {
      console.log("Get by zip code failed", response);
      this.breweries = [];
    });
  };

  this.getBreweryByName = function(name) {
    var urlStr = 'breweries/proxy/v2/breweries?key=cbf87c44338b3c02f584632bf9a5cf01&name=' + name;

    $http({
      method: 'GET',
      url: urlStr
    }).then( function(response) {
      controller.breweries = response.data;
    }, function(response) {
      console.log("getBreweryByName failed:", response);
    })
  };


}]);
