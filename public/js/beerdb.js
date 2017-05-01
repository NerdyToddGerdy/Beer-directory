angular.module('BreweryApp').controller('BeerDBController', ['$http', function($http) {
  var controller = this;
  this.beers = [];
  this.selectedBeer = "";

  this.getBeerByName = function(name) {
    var urlStr = '/breweries/proxy/v2/beers?name=' + name;

    $http({
      method: 'GET',
      url: urlStr
    }).then( function(response) {
      controller.beers = [];
      for (var i = 0; i < response.data.data.length; i++ ) {
        var newBeer = {
          name: response.data.data[i].name,
          description: response.data.data[i].style.description,
          style: response.data.data[i].style.shortName
        }
        controller.beers.push(newBeer)
      };
    }, function(response) {
      console.log("Get beer by name failed", response);
      controller.beers = [];
    }
  )};

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
