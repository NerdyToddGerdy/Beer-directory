angular.module('BreweryApp').controller('BreweryMap', ['$http', function($http) {

  ///////// driving mapp section setup
  // <!-- html -->
  // <div  class='row' id='map-container'>
  //  <div id="map_panel" ></div>
  //  <div id="directions_panel"></div>
  // </div>
  // </div>

  /*simple css for direction map for testing */
  // #map-container{
  //   width:  70%;
  //   height: auto;
  // }
  // #map_panel{
  //   width: 50%;
  //   height: 500px;
  //   float: left;
  // }
  // #directions_panel{
  //   width: 45%;
  //   float: right;
  // }
  //----------------------------------
  this.showStartInputText = false;     //  this control is used to show and hide startpoint input text box
  // show text box for starting point
  this.displayStartPointTextBox = function(destination/* brewery's address */){
    this.showStartInputText = !this.showStartInputText ;
    console.log("destination", destination);
    this.destination = destination;  // set destination
  }

  // This function will take starting address, and ending address to show routes by using google-driving-mode map
  //http://stackoverflow.com/questions/3896871/
  this.submit = function (){
    console.log('starting: ', this.startPoint);
    console.log('ending: ', this.destination);
    //this.startPoint: user typed in address
    //this.destination: brewery's address
    //drivingMap("1110 N Glebe Rd, Arlington, VA 22201, USA", "2000 Elden St #100, Herndon, VA 20170, USA"); //testing
    drivingMap(this.startPoint, this.destination);
    this.startPoint =""; // reset starting point
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
