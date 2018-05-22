// function myMap() {
  
//   var position1 = new google.maps.LatLng(-41.2904017,174.7686615);
//   var position2 = new google.maps.LatLng(-41.2905022,174.7817372);
//   var position3 = new google.maps.LatLng(-41.2790335,174.778878);
  
  
//   var mapCanvas = document.getElementById("map");
  
//   var mapView = {center: position1,position2,position3, 
//     zoom: 13,

//   };
  
//   var map = new google.maps.Map(mapCanvas, mapView);
  
//   var marker1 = new google.maps.Marker({position:position1, });
//   marker1.setMap(map);
//   google.maps.event.addListener(marker1,'click',function() {
    
//     var infowindow = new google.maps.InfoWindow({
//       content:"Victoria University of Wellington, Kelburn Campus"
//     });
//   infowindow.open(map,marker1);
//   });
  
//     var marker2 = new google.maps.Marker({position:position2, });
//   marker2.setMap(map);
//   google.maps.event.addListener(marker2,'click',function() {
    
//     var infowindow = new google.maps.InfoWindow({
//       content:"Museum of New Zealand, Te Papa Tongarewa"
//     });
//   infowindow.open(map,marker2);
//   });
  
//    var marker3 = new google.maps.Marker({position:position3, });
//   marker3.setMap(map);
//   google.maps.event.addListener(marker3,'click',function() {
    
//     var infowindow = new google.maps.InfoWindow({
//       content:"Victoria University of Wellington, Pipitea Campus"
//     });
//   infowindow.open(map,marker3);
//   });
// }

if (navigator.geolocation) { //Checks if browser supports geolocation
   navigator.geolocation.getCurrentPosition(function (position) {                                                              //This gets the
     var latitude = position.coords.latitude;                    //users current
     var longitude = position.coords.longitude;                 //location
     var coords = new google.maps.LatLng(latitude, longitude); //Creates variable for map coordinates
     var directionsService = new google.maps.DirectionsService();
     var directionsDisplay = new google.maps.DirectionsRenderer();
     var mapOptions = //Sets map options
     {
       zoom: 15,  //Sets zoom level (0-21)
       center: coords, //zoom in on users location
       mapTypeControl: true, //allows you to select map type eg. map or satellite
       navigationControlOptions:
       {
         style: google.maps.NavigationControlStyle.SMALL //sets map controls size eg. zoom
       },
       mapTypeId: google.maps.MapTypeId.ROADMAP //sets type of map Options:ROADMAP, SATELLITE, HYBRID, TERRIAN
     };
     map = new google.maps.Map( /*creates Map variable*/ document.getElementById("map"), mapOptions /*Creates a new map using the passed optional parameters in the mapOptions parameter.*/);
  



     directionsDisplay.setMap(map);
     directionsDisplay.setPanel(document.getElementById('panel'));

     var request = {
       origin: coords,
       destination: '105 Majoribanks St, Wellington, New Zealand',
       travelMode: google.maps.DirectionsTravelMode.WALKING
     };

     directionsService.route(request, function (response, status) {
       if (status == google.maps.DirectionsStatus.OK) {
         directionsDisplay.setDirections(response);
       }
     });

     //directionsService = new google.maps.DirectionsService();
        directionsDisplay2 = new google.maps.DirectionsRenderer({
          suppressMarkers: false,
          suppressInfoWindows: true
        });
        directionsDisplay2.setMap(map);

        var request = {
          origin: '105 Majoribanks St, Wellington, New Zealand', 
          destination: 'Mt Victoria Lookout, Wellington, New Zealand',
          travelMode: google.maps.DirectionsTravelMode.WALKING
        };
        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay2.setDirections(response);
          }
        });


      
      
        
        



      google.maps.event.addDomListener(window, 'load', initialise);



   });
 }