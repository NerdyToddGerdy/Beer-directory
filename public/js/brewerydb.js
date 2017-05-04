angular.module('BreweryApp').controller('BreweryDBController', ['$http', function($http) {


  var controller = this;
  this.breweries = [];

  // Get a list of breweries in a zip code
  this.getBreweriesByZip = function(zipCode) {
    var urlStr = '/breweries/proxy/v2/locations?postalCode=' + zipCode;
    $http({
      method: 'GET',
      url: urlStr,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then( function(response) {
      controller.breweries = response.data.data;
    }, function(response) {
      console.log("Get by zip code failed", response);
      this.breweries = [];
    });
  };

  // Get a list of breweries in a state.
  // State must be full name, not abreviation. Use "Colorado" instead of "CO"
  this.getBreweriesByState = function(state){
    var urlStr = '/breweries/proxy/v2/locations?region=' + state;
    this.breweries = [];
    $http({
      method: 'GET',
      url: urlStr
    }).then( function(response) {
      if (response.data.hasOwnProperty('data')) {
        controller.breweries = response.data.data;
      }
    }, function( response) {
      console.log("getBreweriesByState failed: ", response);
    })
  }

  // Get a list of breweries by City, State
  this.getBreweriesByCityState = function( city, state) {
    this.breweries = [];
    var urlStr = '/breweries/proxy/v2/locations?region=' + state + "&locality=" + city;

    $http({
      method: 'GET',
      url: urlStr
    }).then( function( response) {
      if (response.data.hasOwnProperty('data')) {
        controller.breweries = response.data.data;
      }
    }, function( response) {
      console.log("getBreweriesByCityState failed: ", response);
    })
  }

  // get a brewery by its name
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

  // An Nguyen Added : for google map display service
  this.showDirectionOption = false;
  this.startPoint = "";
  this.getBreweryLocation = function(addressObj){
    this.showDirectionOption = true;
    this.destination = addressObj.streetAddress + " " + addressObj.region + " " + addressObj.postalCode;
  }
  this.setCurrentUserDirection = function(){
    //set global current user address
    currentUserDirection.start = this.startPoint;
    currentUserDirection.end = this.destination;
    this.showDirectionOption = false;
    // drivingMap (this.startPoint, this.destination)
  }
  // End map service
}]);
