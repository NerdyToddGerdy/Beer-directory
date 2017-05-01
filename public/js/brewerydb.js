angular.module('BreweryApp').controller('BreweryDBController', ['$http', function($http) {


  var controller = this;
  this.breweries = [];

  this.getBreweriesByZip = function(zipCode) {
    var urlStr = '/breweries/proxy/v2/locations?postalCode=' + zipCode;
    console.log(zipCode);
    console.log(urlStr);
    $http({
      method: 'GET',
      url: urlStr,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then( function(response) {
      console.log('here is my log');
      controller.breweries = response.data.data;
    }, function(response) {
      console.log("Get by zip code failed", response);
      this.breweries = [];
    });
  };

  this.getBreweryByName = function(name) {
    var urlStr = 'breweries/proxy/v2/breweries?name=' + name;

    $http({
      method: 'GET',
      url: urlStr
    }).then( function(response) {
      controller.breweries = response.data;
    }, function(response) {
      console.log("getBreweryByName failed:", response);
   });
  };


}]);
