var champaign = new google.maps.LatLng(40.106831, -88.227425);

$(document).ready(function()
{
	google.maps.event.addDomListener(window, 'load', initialize);
	initialize();

});
function initialize() {
  var mapOptions = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: champaign
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
}
