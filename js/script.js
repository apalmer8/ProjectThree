function init() {
  //Set Variables
  var mp = document.getElementById("map");
  var locDefault = new google.maps.LatLng(51.554583, -97.386807);
  var locGPS = new google.maps.LatLng(44.524937, -110.838166);
  var locSky = new google.maps.LatLng(42.499129, -88.968893);
  var locET = new google.maps.LatLng(37.532294, -115.231748);
  var locArch = new google.maps.LatLng(38.740044, -109.570700);
  var locTor = new google.maps.LatLng(43.632922, -79.411811);
  var locGiants = new google.maps.LatLng(55.240564, -6.512272);
  var locAustin = new google.maps.LatLng(30.2475306,-97.7560694);
  var locNM = new google.maps.LatLng(33.338344, -104.333381);
  var locVan = new google.maps.LatLng(49.2806194,-123.1151333);
  var locTaco = new google.maps.LatLng(47.2466639,-122.5538333);
  var locHoreb = new google.maps.LatLng(43.008597, -89.735972);
  var locNOLA = new google.maps.LatLng(29.959422, -90.064886);
  var locHannibal = new google.maps.LatLng(39.711825, -91.357156);
  var locLasVegas = new google.maps.LatLng(36.168033, -115.138161);
  
  //Set Map Options
  var opt = {
    center: locDefault,
    zoom: 4,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_CENTER,
      mapTypeIds: ["roadmap", "hybrid", "terrain", "satellite"],
    },
     zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER,
    },
    streetViewControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
    },
  };
  //Generate Map
  var map = new google.maps.Map(mp, opt);
  var mq = window.matchMedia( "(max-width: 1366px)" );
    if (mq.matches) {
    map.setZoom(3);
    }
 
  //Marker 1
  var marker1 = new google.maps.Marker({
    position: locGPS,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentGPS =
    '<h2 id="yellowmap">Grand Prismatic Spring &#8211; Yellowstone National Park</h2><img id="yellowmapimg" src="media/yellowstonefull.jpg" alt="hotspring in yellowstone national park.">';
  var infoGPS = new google.maps.InfoWindow({
    content: contentGPS,
  });
  marker1.addListener('mouseover', function() {
    infoGPS.open(map, this);
  });
  marker1.addListener('mouseout', function() {
    infoGPS.close();
  });
  google.maps.event.addListener(marker1, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker1.getPosition());
  });
  
  //Marker 2
  var marker2 = new google.maps.Marker({
    position: locSky,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentSky =
    '<h2 id="skymap">Skydive The Rock - Beloit, WI</h2><img id="skymapimg" src="media/skydivingfull.jpg" alt="skydiving view of ground.">';
  var infoSky = new google.maps.InfoWindow({
    content: contentSky,
  });
  marker2.addListener('mouseover', function() {
    infoSky.open(map, this);
  });
  marker2.addListener('mouseout', function() {
    infoSky.close();
  });
  google.maps.event.addListener(marker2, 'click', function () {
    map.setZoom(17);
    map.setCenter(marker2.getPosition());
  });

  //Marker 3
  var marker3 = new google.maps.Marker({
    position: locET,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentET =
    '<h2 id="etmap">Extraterrestrial Highway - Rachel/Hiko, NV</h2><img id="etmapimg" src="media/rachel.jpg" alt="The Extraterresterial Highway sign, Outside Rachel, NV.">';
  var infoET = new google.maps.InfoWindow({
    content: contentET,
  });
   marker3.addListener('mouseover', function() {
    infoET.open(map, this);
  });
  marker3.addListener('mouseout', function() {
    infoET.close();
  });
  google.maps.event.addListener(marker3, 'click', function () {
    map.setZoom(17);
    map.setCenter(marker3.getPosition());
  });
  
  //Marker 4
  var marker4 = new google.maps.Marker({
    position: locArch,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentArch =
    '<h2 id="archmap">Arches National Park - Moab, UT</h2><img id="archmapimg" src="media/archesfull.jpg" alt="Arches Panoramic.">';
  var infoArch = new google.maps.InfoWindow({
    content: contentArch,
  });
  marker4.addListener('mouseover', function() {
    infoArch.open(map, this);
  });
  marker4.addListener('mouseout', function() {
    infoArch.close();
  });
  google.maps.event.addListener(marker4, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker4.getPosition());
  });
  
  //Marker 5
  var marker5 = new google.maps.Marker({
    position: locTor,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentTor =
    '<h2 id="tormap">Skyline &#8211; Toronto, Ontario, Canada.</h2><img id="tormapimg" src="media/torontofull.jpg" alt="Toronto skyline.">';
  var infoTor = new google.maps.InfoWindow({
    content: contentTor
  });
   marker5.addListener('mouseover', function() {
    infoTor.open(map, this);
  });
  marker5.addListener('mouseout', function() {
    infoTor.close();
  });
  google.maps.event.addListener(marker5, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker5.getPosition());
  });

  //Marker 6
  var marker6 = new google.maps.Marker({
    position: locGiants,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentGiants =
    '<h2 id="giamap">Giant&#39;s Causeway&#44; Bushmills&#44; Northern Ireland</h2><img id="giamapimg" src="media/irelandfull.jpg" alt="Cliffside view, Northern Ireland.">';
  var infoGiants = new google.maps.InfoWindow({
    content: contentGiants,
  });
  marker6.addListener('mouseover', function() {
    infoGiants.open(map, this);
  });
  marker6.addListener('mouseout', function() {
    infoGiants.close();
  });
  
  //Marker 7
  var marker7 = new google.maps.Marker({
    position: locAustin,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentAustin =
    '<h2 id="austinmap">Welcome To Austin Sign &#8211; Austin&#44; TX</h2><img id="austinmapimg" src="media/austin.jpg" alt="Welcome To Austin Sign &#8211; Austin&#44; TX.">';
  var infoAustin = new google.maps.InfoWindow({
    content: contentAustin,
  });
   marker7.addListener('mouseover', function() {
    infoAustin.open(map, this);
  });
  marker7.addListener('mouseout', function() {
    infoAustin.close();
  });
  google.maps.event.addListener(marker7, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker7.getPosition());
  });
  
  //Marker 8
  var marker8 = new google.maps.Marker({
    position: locNM,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentNM =
    '<h2 id="nmmap">Bottomless Lakes State Park&#44; NM</h2><img id="nmmapimg" src="media/nm.jpg" alt="Bottomless Lakes State Park&#44; NM.">';
  var infoNM = new google.maps.InfoWindow({
    content: contentNM,
  });
   marker8.addListener('mouseover', function() {
    infoNM.open(map, this);
  });
  marker8.addListener('mouseout', function() {
    infoNM.close();
  });
  google.maps.event.addListener(marker8, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker8.getPosition());
  });
  
  //Marker 9
  var marker9 = new google.maps.Marker({
    position: locVan,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentVan =
    '<h2 id="vanmap">Gassy Jack Statue &#8211; Vancouver&#44; BC&#44; Canada</h2><img id="vanmapimg" src="media/vancouver.jpg" alt="Gassy Jack Statue, Vancouver&#44; BC&#44; Canada">';
  var infoVan = new google.maps.InfoWindow({
    content: contentVan,
  });
   marker9.addListener('mouseover', function() {
    infoVan.open(map, this);
  });
  marker9.addListener('mouseout', function() {
    infoVan.close();
  });
  google.maps.event.addListener(marker9, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker9.getPosition());
  });  
  
    //Marker 10
  var marker10 = new google.maps.Marker({
    position: locTaco,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentTaco =
    '<h2 id="tacomap">Sunset &#8211; Tacoma&#44; WA</h2><img id="tacomapimg" src="media/tacoma.jpg" alt="Sunset Tacoma&#44; WA.">';
  var infoTaco = new google.maps.InfoWindow({
    content: contentTaco,
  });
   marker10.addListener('mouseover', function() {
    infoTaco.open(map, this);
  });
  marker10.addListener('mouseout', function() {
    infoTaco.close();
  });
  google.maps.event.addListener(marker10, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker10.getPosition());
  });
  
  //Marker 11
  var marker11 = new google.maps.Marker({
    position: locHoreb,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentHoreb =
    '<h2 id="horebmap">Troll Carvings &#8211; Mt. Horeb&#44; WI</h2><img id="horebmapimg" src="media/wisconsin.jpg" alt="Troll Carvings&#44; Mt. Horeb&#44; WI">';
  var infoHoreb = new google.maps.InfoWindow({
    content: contentHoreb,
  });
   marker11.addListener('mouseover', function() {
    infoHoreb.open(map, this);
  });
  marker11.addListener('mouseout', function() {
    infoHoreb.close();
  });
  google.maps.event.addListener(marker11, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker11.getPosition());
  }); 
  
   //Marker 12
  var marker12 = new google.maps.Marker({
    position: locNOLA,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentNOLA =
    '<h2 id="nolamap">Bourbon St. &#8211; Halloween&#44; New Orleans&#44; LA</h2><img id="nolamapimg" src="media/nola.jpg" alt="Bourbon St. &#8211; Halloween&#44; New Orleans&#44; LA">';
  var infoNOLA = new google.maps.InfoWindow({
    content: contentNOLA,
  });
   marker12.addListener('mouseover', function() {
    infoNOLA.open(map, this);
  });
  marker12.addListener('mouseout', function() {
    infoNOLA.close();
  });
  google.maps.event.addListener(marker12, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker12.getPosition());
  });  
  
  //Marker 13
  var marker13 = new google.maps.Marker({
    position: locHannibal,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentHannibal =
    '<h2 id="hannibalmap">Becky&#39;s Old Fashioned Ice Cream Parlor &#8211; Hannibal&#44; MO</h2><img id="hannibalmapimg" src="media/hannibal.jpg" alt="Becky&#39;s Old Fashioned Ice Cream Parlor &#8211; Hannibal&#44; MO">';
  var infoHannibal = new google.maps.InfoWindow({
    content: contentHannibal,
  });
   marker13.addListener('mouseover', function() {
    infoHannibal.open(map, this);
  });
  marker13.addListener('mouseout', function() {
    infoHannibal.close();
  });
  google.maps.event.addListener(marker13, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker13.getPosition());
  }); 
  
   //Marker 14
  var marker14 = new google.maps.Marker({
    position: locLasVegas,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var contentLasVegas =
    '<h2 id="lasvegasmap">Praying Mantis Sculpture &#8211; Las Vegas&#44; NV</h2><img id="lasvegasmapimg" src="media/vegas.jpg" alt="Praying Mantis Sculpture &#8211; Las Vegas&#44; NV">';
  var infoLasVegas = new google.maps.InfoWindow({
    content: contentLasVegas,
  });
   marker14.addListener('mouseover', function() {
    infoLasVegas.open(map, this);
  });
  marker14.addListener('mouseout', function() {
    infoLasVegas.close();
  });
  google.maps.event.addListener(marker14, 'click', function () {
    map.setZoom(20);
    map.setCenter(marker14.getPosition());
  });
  
  google.maps.event.addDomListener(window, 'load', init);
}
$(document).ready(function(){
    $('.slider').bxSlider({
    slideWidth: 900,
    adaptiveHeight: true,
    shrinkItems: true,
    controls: true,
    autoControls: true,
    auto: true,
    autoStart: true,
    autoHover: true,
    captions: true,
    });
});