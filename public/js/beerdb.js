
angular.module('BreweryApp').controller('BeerDBController', ['$http', function($http) {
  var controller = this;
  this.beers = [];
  this.selectedBeer = "";
  this.foundNoBeers = false;
  this.searchForBeer = "";
  this.searchByBrewery = "";

  this.clearSearchForm = function() {
    controller.searchForBeer = "";
    controller.beers = [];
    this.searchByBrewery = "";
  }

  this.addFoundBeersToList = function(data) {
    for (var i = 0; i < data.length; i++ ) {
      var newBeer = {
        name: data[i].name,
        description: data[i].description,
        style: data[i].style.shortName,
        abv: data[i].abv,
        ibu: data[i].ibu
      }
      controller.beers.push(newBeer);
    }
  }

  this.findBeer = function() {
    if (this.searchForBeer !== "") {
      this.getBeerByName();
    } else if (this.searchByBrewery !== "") {
      this.getBeersByBrewery();
    }
  }

  this.getBeerByName = function() {
    var urlStr = '/breweries/proxy/v2/beers?name=' + controller.searchForBeer;

    $http({
      method: 'GET',
      url: urlStr
    }).then( function(response) {
      controller.beers = [];

      if (response.data.hasOwnProperty('data')) {
        controller.foundNoBeers = false;
      }
      else {
        controller.foundNoBeers = true;
        return;
      }
      controller.addFoundBeersToList(response.data.data);
      controller.getBreweryByBeerID(response.data.data[0].id);
    }, function(response) {
      console.log("Get beer by name failed", response);
      controller.beers = [];
    }
    )};

  this.getBreweryByBeerID = function(beerID) {
    var urlStr = "/breweries/proxy/v2/beer/" + beerID + "/breweries";

    $http({
      method: 'GET',
      url: urlStr
    }).then( function(response) {
      if (response.data.hasOwnProperty('data') === true) {
        controller.beers[0].brewery = response.data.data[0].name;
      }
    }, function(response) {
      console.log("getBreweryByBeerID failed:", resonse);
    }
  )};

  this.getBeersByBrewery = function() {
    controller.beers = [];
    var urlStr = "/breweries/proxy/v2/breweries?name=" + controller.searchByBrewery;

    $http({
      method: 'GET',
      url: urlStr
    }).then( function(response) {
      if (response.data.hasOwnProperty('data')) {
        controller.getBreweryBeers(response.data.data[0].id);
      }
    }, function(response) {
      console.log("getBeersByBrewery failed", response);
    })
  }

  this.getBreweryBeers = function(breweryID) {
    var urlStr = "/breweries/proxy/v2/brewery/" + breweryID + "/beers";

    $http({
      method: 'GET',
      url: urlStr
    }).then(function(response) {
      if (response.data.hasOwnProperty('data')) {
        controller.foundNoBeers = false;
      } else {
        controller.foundNoBeers = true;
        return;
      }
      controller.addFoundBeersToList(response.data.data);
    }, function(response) {
      console.log("getBreweryBeers failed:", response);
    })
  }

}]);

angular.module('BreweryApp'). controller('BeerDisplayController', function() {
  this.showSearchForm = true;
  this.showDetailsForm = false;

  this.showDetails = function(ctrl, curBeer) {
    this.showSearchForm = false;
    this.showDetailsForm = true;
    ctrl.selectedBeer = curBeer;
  };

  this.backToSearchForm = function(){
    this.showDetailsForm = false;
    this.showSearchForm = true;
  };
})
