
angular.module('BreweryApp').controller('BreweryDBController', ['$http', function($http) {

  var controller = this;
  this.breweries = [];

  // Get a list of breweries in a zip code
  this.getBreweriesByZip = function(zipCode, callback) {
    console.log("breweries by zip called");
    var urlStr = '/breweries/proxy/v2/locations?postalCode=' + zipCode;
    $http({
      method: 'GET',
      url: urlStr,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then( function(response) {
      controller.breweries = response.data.data;
      console.log("getBreweriesByZip", controller.breweries);
      if (callback != undefined){
        callback();
      }
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
  this.getBreweryByName = function(name, breweryCtrl, main) {
    var urlStr = 'breweries/proxy/v2/breweries?name=' + name;
    var breweryCont = breweryCtrl;
    var mainCont = main;
    $http({
      method: 'GET',
      url: urlStr
    }).then( function(response) {
      controller.breweries2 = response.data.data[0];
      $http({
        method: 'GET',
        url: 'breweries/proxy/v2/brewery/' + controller.breweries2.id + '/locations'
      }).then(function(newResponse){
        controller.thisBreweryData = newResponse.data.data[0];

        controller.getBreweriesByZip(controller.thisBreweryData.postalCode, function() {

          for (var i = 0; i < controller.breweries.length; i++) {
            if(controller.thisBreweryData.streetAddress === controller.breweries[i].streetAddress){
              console.log(controller.breweries[i]);
              console.log('they are the same');
              controller.currentBrewery1 = controller.breweries[i];
              console.log(controller.currentBrewery1);
              main.openThisBrewery(controller.breweries[i], breweryCtrl, main);
              controller.breweries = []
              break;
            }
          }
        });

      });
    }, function(response) {
      console.log("getBreweryByName failed:", response);
    })
  };

  // this.displayAddress = function(brewery){
  //   console.log(brewery.address);
  //   this.initialize(brewery.address);
  // },
  // this.initialize = function (_address) {
  //   console.log('trying to display map with : ', _address);
  //   var geocoder;
  //   var map;
  //   var address = _address // test : 1060 West Addison Street, Chicago, IL
  //   geocoder = new google.maps.Geocoder();
  //   var latlng = new google.maps.LatLng(-34.397, 150.644);
  //   var myOptions = {
  //     zoom: 8,
  //     center: latlng,
  //     mapTypeControl: true,
  //     mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
  //     navigationControl: true,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   map = new google.maps.Map(document.getElementById("brewery_map"), myOptions);
  //   if (geocoder) {
  //     geocoder.geocode( { 'address': address}, function(results, status) {
  //       if (status == google.maps.GeocoderStatus.OK) {
  //         if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
  //           map.setCenter(results[0].geometry.location);
  //
  //           var infowindow = new google.maps.InfoWindow(
  //             { content: '<b>'+address+'</b>',
  //             size: new google.maps.Size(150,50)
  //           });
  //
  //           var marker = new google.maps.Marker({
  //             position: results[0].geometry.location,
  //             map: map,
  //             title:address
  //           });
  //           google.maps.event.addListener(marker, 'click', function() {
  //             infowindow.open(map,marker);
  //           });
  //
  //         } else {
  //           alert("No results found");
  //         }
  //       } else {
  //         alert("Geocode was not successful for the following reason: " + status);
  //       }
  //     });
  //   }
  // }


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
