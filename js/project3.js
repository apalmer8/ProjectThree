let myMap, infoWindow;

function init(){
  
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.83493702908194, -87.6269415289298);
  var mapOptions = {
    center: myLocation,
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  }
  var myMap = new google.maps.Map(el, mapOptions)

  var iconBase = 'https://maps.google.com/mapfiles/kml/pushpin/';
  var marker = new google.maps.Marker({
   position: myLocation,
   icon: iconBase + 'red-pushpin.png',
   myMap,
   title: "Hello World!",
   draggable: true,
  });
  myMap.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, myMap);
  });
  marker.setMap(myMap);

  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  myMap.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(myMap);
          myMap.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // If browser doesn't support geolocating. 
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(myMap);
}

function placeMarkerAndPanTo(latLng, myMap) {
  var iconBase = 'https://maps.google.com/mapfiles/kml/pushpin/';
  new google.maps.Marker({
    position: latLng,
    icon: iconBase + "grn-pushpin.png",
    map: myMap,
  });
  myMap.panTo(latLng);
}
google.maps.event.addDomListener(window, 'load', init);