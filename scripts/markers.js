function myMap() {
  
  var position1 = new google.maps.LatLng(-41.29038375,174.78110235);
  var position2 = new google.maps.LatLng(-41.2887477,174.7771535);
  var position3 = new google.maps.LatLng(-41.289111,174.776918);
  var position4 = new google.maps.LatLng(-41.2863277,174.778877);
  var position5 = new google.maps.LatLng(-41.2851032,174.7780803);
  var position6 = new google.maps.LatLng(-41.798551,174.7768211);
  var position7 = new google.maps.LatLng(-41.2788743,174.7785934);
  var position8 = new google.maps.LatLng(-41.277848,174.7763921);
  var position9 = new google.maps.LatLng(-41.2768239,174.7779642);
  
  var mapCanvas = document.getElementById("map");
  
  var mapView = {center: position1,position2,position3,position4,position5,position6,position7,position8,position9, 
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

  var marker4 = new google.maps.Marker({position:position4, });
  marker4.setMap(map);
  google.maps.event.addListener(marker4,'click',function() {
    
    var infowindow = new google.maps.InfoWindow({
      content:"Victoria University of Wellington, Pipitea Campus"
    });
  infowindow.open(map,marker4);
  });
 
  var marker5 = new google.maps.Marker({position:position5, });
  marker5.setMap(map);
  google.maps.event.addListener(marker5,'click',function() {
    
    var infowindow = new google.maps.InfoWindow({
      content:"Victoria University of Wellington, Pipitea Campus"
    });
  infowindow.open(map,marker5);
  });

  var marker6 = new google.maps.Marker({position:position6, });
  marker6.setMap(map);
  google.maps.event.addListener(marker6,'click',function() {
    
    var infowindow = new google.maps.InfoWindow({
      content:"Victoria University of Wellington, Pipitea Campus"
    });
  infowindow.open(map,marker6);
  });




}