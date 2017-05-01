angular.module('BreweryApp').controller('BreweryDBController', ['$http', function($http) {

<<<<<<< HEAD
console.log("BreweryDBApp");





app.controller('BreweryDBController', ['$http', function($http) {
=======
>>>>>>> 54a1fdda6bb3d5f1603081fa407348e12610e73e
  var controller = this;
  this.breweries = [];

  this.getBreweriesByZip = function(zipCode) {
    var urlStr = '/breweries/proxy/v2/locations?postalCode=' + zipCode;

    $http({
      method: 'GET',
      url: urlStr,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then( function(response) {
      controller.breweries = response.data;
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
    })
  };


}]);
