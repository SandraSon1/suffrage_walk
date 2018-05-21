function myMap() {
  
  var position1 = new google.maps.LatLng(-41.2904017,174.7686615);
  var position2 = new google.maps.LatLng(-41.2905022,174.7817372);
  var position3 = new google.maps.LatLng(-41.2790335,174.778878);
  
  
  var mapCanvas = document.getElementById("map");
  
  var mapView = {center: position1,position2,position3, 
    zoom: 13,

  };
  
  var map = new google.maps.Map(mapCanvas, mapView);
  
  var marker1 = new google.maps.Marker({position:position1, });
  marker1.setMap(map);
  google.maps.event.addListener(marker1,'click',function() {
    
    var infowindow = new google.maps.InfoWindow({
      content:"Victoria University of Wellington, Kelburn Campus"
    });
  infowindow.open(map,marker1);
  });
  
    var marker2 = new google.maps.Marker({position:position2, });
  marker2.setMap(map);
  google.maps.event.addListener(marker2,'click',function() {
    
    var infowindow = new google.maps.InfoWindow({
      content:"Museum of New Zealand, Te Papa Tongarewa"
    });
  infowindow.open(map,marker2);
  });
  
   var marker3 = new google.maps.Marker({position:position3, });
  marker3.setMap(map);
  google.maps.event.addListener(marker3,'click',function() {
    
    var infowindow = new google.maps.InfoWindow({
      content:"Victoria University of Wellington, Pipitea Campus"
    });
  infowindow.open(map,marker3);
  });
}