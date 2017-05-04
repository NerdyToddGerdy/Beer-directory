angular.module('BreweryApp').controller('BreweryMap', ['$http', function($http) {
  // This function will take starting address, and ending address to show routes by using google-driving-mode map
  //http://stackoverflow.com/questions/3896871/
  this.submit = function (){
     turnOnMap = true;
    console.log('starting: ', currentUserDirection.start);
    console.log('ending: ', currentUserDirection.end);
    console.log(turnOnMap);
    console.log(turnOnMap);
    drivingMap(currentUserDirection.start, currentUserDirection.end);
    currentUserDirection = {};
  }
}]);

// driving map
var drivingMap = function (start, end){
  // initilize google map direction services
  var directionsService = new google.maps.DirectionsService();
  // initilize google map direction display services
  var directionsDisplay = new google.maps.DirectionsRenderer();
  //initialize Goole Map
  var map = new google.maps.Map(document.getElementById('map_panel'), {
    zoom:7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  // reset direction panel
  document.getElementById("directions_panel").innerHTML = "";
  //display directions on map
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions_panel'));
  //google map direction services attributes
  var request = {
    origin: start,    // start point
    destination: end, // destination point
    travelMode: google.maps.DirectionsTravelMode.DRIVING // set traveling mode
  };
  // set up direction routes
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
};
