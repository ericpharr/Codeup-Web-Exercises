// (function(){

"use strict";


// var mapElement = document.getElementById('map');

var mapOptions = {
// Set the zoom level
	zoom: 1,

	// This sets the center of the map at our location
	center: {
	  lat:  29.447285,
	  lng: -98.49166
	},
	mapTypeId: google.maps.MapTypeId.SATELLITE
};


29.447285,-98.49166
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

var chappalajalisco = {lat: 29.447285, lng: -98.49166};

// var geocoder = new google.maps.Geocoder();

var marker = new google.maps.Marker({
	position: chappalajalisco,
	map: map,
	animation: google.maps.Animation.DROP,
	// label:{fontSize:"60", text:"🌮"},
	icon: "img/untitled.svg"
})

var infowindow = new google.maps.InfoWindow({
	content: "<h3>🌮Taqueria Chapala Jalisco🌮</h3><p>Some restaurants have a mariachi band playing while you eat. This is where the mariachi band eats.</p>",
	visible:false
});

marker.addListener("click", function(){
	marker.setAnimation(null);
	// map.setZoom(23);
	animateMapZoomTo(map, 24);

})

marker.addListener("dblclick", function() {
	infowindow.open(map, marker);
})

function animateMapZoomTo(map, targetZoom) {
    var currentZoom = arguments[2] || map.getZoom();
    if (currentZoom != targetZoom) {
        google.maps.event.addListenerOnce(map, 'zoom_changed', function (event) {
            animateMapZoomTo(map, targetZoom, currentZoom + (targetZoom > currentZoom ? 1 : -1));
       	map.setCenter(chappalajalisco);
        });
        setTimeout(function(){ map.setZoom(currentZoom) }, 80);
    }
}


// })
