var map;
var marker=null;
var geomarker=null;
var bounds = null;
// var directionsService = null;
// var directionsDisplay = null;


 var stops = [
      ['<img class="kate" src="images/kate.png">'+'<h2 id="firstHeading" class="firstHeading">Te Papa</h2>'+'<p id ="facts"> In 1869, Mary Anne Mueler wrote the pamphlet \'An appeal to the men of New Zealand.\' It is thought to be the first written document advocating the women\'s right to vote in our country.  Mary Anne Muller wrote the pamphlet under the pseudonym \'Femmina\' so that her husband and others who opposed her views would not know it was her.  Muller\'s efforts in the suffragette movement were recognised by the leader, Kate Sheppard, and she is now nationally recognised as a main contributor in gaining of New Zealand\'s woman political rights</p>', -41.29038375,174.78110235, 4],
      ['<img class="kate1" src="images/kate.png">'+'<h2 id="firstHeading" class="firstHeading">Civic Square</h2>'+'<p id ="facts">"During this time of political unrest, the Women\'s Christian Temperance Union of New Zealand jumped on board with the petitioning from women\'s rights. In 1891 the Union presented to parliament a petition in favour of the women\'s legal rights. the petition\'s organisation is largely attributed to Kate Sheppard.</p>', -41.2887477,174.7771535, 5],
      ['<img class="kate3" src="images/kate.png">'+'<h2 id="firstHeading" class="firstHeading1">Wellington Museum</h2>'+'<p id ="facts">Over 20 petitions advocating for the women\'s right to vote were presented to the House of Representatives. The New Zealand House of Representatives is a leading authority in the New Zealand Parliament. The House passes all laws, provides ministers to form a Cabinet, and supervises the work done by the Government.</p>', -41.2851032,174.7780803, 3],
      ['<img class="kate4" src="images/kate.png">'+'<h2 id="firstHeading" class="firstHeading">Parliament</h2>'+'<p id ="facts">During 1880\'s and onwards, Maori woman became particularly vocal in the suffragette movement. They supported the Women\'s Christian Temperance Union in their efforts gaining the right to vote for women, and they also petitioned the right to vote and to stand as members of the Māori Parliament.</p>', -41.277848,174.7763921, 2],
      ['<img class="kate2" src="images/kate.png">'+'<h2 id="firstHeading" class="firstHeading">City Council</h2>'+'<p id ="facts">On 19 September 1893 the governor, Lord Glasgow, signed a new Electoral Act into law. As a result of this legislation, New Zealand became the first self-governing country in the world in which all women had the right to vote in parliamentary elections. Suffragettes in other countries, such as Britain and the united states did gain the woman\'s right to vote until after the First World War.</p>', -41.289111,174.776918, 6],
      ['<img class="kate5" src="images/kate.png">'+'<h2 id="firstHeading" class="firstHeading1">Pipitea Law School</h2>'+'<p id ="facts">After the right to vote had been granted to women and New Zealand, the Women\'s Parliamentary Rights Act was passed with gave women the right to stand for Parliament. Three women contested seats at the 1919 general election, but none were successful until 1933 when The Labour Party\'s Elizabeth McCombs became the first female Member of Parliament, winning a by-election in the Lyttleton seat.</p>', -41.2788743,174.7785934, 7],
      ['<img class="kate6" src="images/kate.png">'+'<h2 id="firstHeading" class="firstHeading1">National Library</h2>'+'<p id ="facts">The Labour Party\'s Helen Clark became New Zealand\'s first elected female prime minister following the general election in November 1999. Clark would serve as Prime Minister for nine years, becoming New Zealand\'s 5th-longest-serving PM.</p>', -41.2768239,174.7779642, 1]
    ];



 var mapOptions = {
          center: {lat: -41.2865, lng: 174.7762},
          suppressInfoWindows: true,
          zoom: 15

        };

  


function initialize() {

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    bounds = new google.maps.LatLngBounds();

var stopinfowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < stops.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(stops[i][1], stops[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          stopinfowindow.setContent(stops[i][0]);
          ib.setContent(stops[i][0]);
          // ib.open(map, this);
          // stopinfowindow.open(map, marker);
        }
      })(marker, i));
     
        google.maps.event.addListener(marker, 'click', function() {
          map.panTo(this.getPosition());
          map.setZoom(16);
        });

  var ib = new InfoBox(myOptions);

// var boxText = '<div id= "container-infobox"'

    var myOptions = {
    // content: boxText,
    disableAutoPan: false
    ,maxWidth: 10
    ,pixelOffset: new google.maps.Size(-125, -100)
    ,zIndex: null
    ,boxStyle: { 
    // border: "1px solid black"

    WebkitBorderRadius: "10px"
    ,padding: "10px 10px 10px 10px"
    ,WebkitBoxShadow: "3px 3px 5px 800px rgba(0,0,0,0.6)"
    ,background: "white"
    ,opacity: 1
    ,width: "250px"
    }
    ,closeBoxMargin: "2px 2px 2px 1px"
    ,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
    ,infoBoxClearance: new google.maps.Size(1, 1)
    ,isHidden: false
    ,pane: "floatPane"
    ,enableEventPropagation: false
    };

    google.maps.event.addListener(marker, "click", function (e) {
    ib.open(map, this);
    });

// ib.open(map, marker);
}



    // Create the DIV to hold the control and call the constructor passing in this DIV
    var geolocationDiv;
    var geolocationControl = new GeolocationControl(geolocationDiv, map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(geolocationDiv);
      directionsService = new google.maps.DirectionsService;
      directionsDisplay = new google.maps.DirectionsRenderer;
}


   


var x = document.getElementById("startWalking");



function GeolocationControl(controlDiv, map) {

        var controlUI = document.getElementById('mapbutt');

        google.maps.event.addDomListener(controlUI, 'click', geolocate);
}



 // var optn = {
 //            enableHighAccuracy: true,
 //            timeout: Infinity,
 //            maximumAge:0

 //        };



function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


function geolocate() {

    if (navigator.geolocation) {

       
 var optn = {
            enableHighAccuracy: true,
            timeout: Infinity,
            maximumAge:0

        };

   function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

 var image = {
        url: 'images/finished_katebody.png', 
        scaledSize: new google.maps.Size(31, 60), 
    
        };



        const watchId= navigator.geolocation.watchPosition(function (position, showError) {
        window.localStorage.setItem('lastWatch', watchId);
        console.log('Set watchId', watchId);

            var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            // Create a marker and center map on user location
            if (geomarker==null){
            geomarker = new google.maps.Marker({
                position: pos,
                icon: image,
                draggable: false,
                animation: google.maps.Animation.DROP,
                map: map

            });

            geomarker.setMap(map);
           
        }
         else{
                geomarker.setPosition(pos);

            }

            function onLocationChange(pos) {
            const { latitude, longitude } = coordinates.coords;
            console.log('Changed coordinates: ', latitude, longitude);
            }
            
           

            map.setCenter(pos);
            launch_toast();

            document.getElementById("myNav").style.width = "0%";
            document.getElementById("mapbutt").style.display = "none";
            

     

        });
      


        
    } 



var directionsService = new google.maps.DirectionsService();


  var locations = [
  ['Te Papa', -41.29038375,174.78110235, 1],
  ['Civic Square', -41.2887477,174.7771535, 2],
  ['Wellington Museum', -41.2851032,174.7780803, 3],
  ['Parliament', -41.277848,174.7763921, 4],
  ['National Library ', -41.2768239,174.7779642, 5]
];

var directionsDisplay = new google.maps.DirectionsRenderer({
  suppressMarkers:true,
  infoWindow: myInfoWindow,
  map: map
});

 directionsDisplay.setMap(map);

 var myInfoWindow = new google.maps.InfoWindow();
  
  var infowindow = new google.maps.InfoWindow();

  var marker, i;
  var request = {
    travelMode: google.maps.TravelMode.DRIVING
  };
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {

        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));

    if (i == 0) request.origin = marker.getPosition();
    else if (i == locations.length - 1) request.destination = marker.getPosition();
    else {
      if (!request.waypoints) request.waypoints = [];
      request.waypoints.push({
        location: marker.getPosition(),
        stopover: true,
       
      });
    }

  }
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });


}

initialize();


// Get the modal
  var modal = document.getElementById('myModal');
  var btn = document.getElementById("modalbutton");
  var span = document.getElementsByClassName("closemodal")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }




