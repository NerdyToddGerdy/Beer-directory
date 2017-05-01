
angular.module('BreweryApp').controller('BeerDBController', ['$http', function($http) {
  var controller = this;
  this.beers = [];
  this.selectedBeer = "";
  this.foundNoBeers = false;

  this.addFoundBeersToList = function(data) {
    for (var i = 0; i < data.length; i++ ) {
      var newBeer = {
        name: data[i].name,
        description: data[i].style.description,
        style: data[i].style.shortName,
        abv: data[i].abv,
        ibu: data[i].ibu
      }
    }
    controller.beers.push(newBeer);
  }


  this.getBeerByName = function(name) {
    var urlStr = '/breweries/proxy/v2/beers?name=' + name;

    $http({
      method: 'GET',
      url: urlStr
    }).then( function(response) {
      controller.beers = [];

      console.log(response);
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
    var urlStr = "/breweries/proxy/v2/beer/" + beerID + "/breweries"


    $http({
      method: 'GET',
      url: urlStr
    }).then( function(response) {
      if (response.data.hasOwnProperty('data') === true) {
        controller.beers[0].brewery = response.data.data[0].name;
      };
    }), function(response) {
      console.log("getBreweryByBeerID failed:", err);
    };
  };

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
