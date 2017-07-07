'use strict';

var latLng = {lat: 29.419178086564326, lng: -98.49337661376956};

getWeather();
initMap();


function getWeather() {
	// var latLng = {lat: 29.447285, lng: -98.49166};
	$.get("http://api.openweathermap.org/data/2.5/forecast/daily",{
		APPID: "d82583cede0414e303c1d718522690fd",
		lat: latLng.lat,
		lon: latLng.lng,
		cnt: 3,
		units: "imperial"
	}).done(function(data){
		console.log(data);
		$('#location').html(data.city.name)
		data.list.forEach(function(day, i){
			$('#day' + (i + 1)).html("<h4><strong>" + displayDate(day.dt) + "</strong></h4>" + Math.round(day.temp.max) + "°/" + Math.round(day.temp.min) + "°<br>" +
			"<img src='http://openweathermap.org/img/w/" + day.weather[0].icon + ".png'><br><strong>" +
			day.weather[0].main + "</strong>: " + day.weather[0].description + "<br><strong>Humidity</strong>: " +
			day.humidity + "<br><strong>Wind</strong>: " + day.speed + "<br><strong>Pressure</strong>: " + day.pressure);
		});
	}).fail(function(request, status, error){
		console.log(status);
		console.log(error);
	});
}

function displayDate(dt) {
	var date = new Date(dt * 1000);
	return date.toLocaleDateString('en-us', {weekday: "long", month: "long", day: "numeric"});
}

function initMap(){
	// var latLng = {lat: 29.447285, lng: -98.49166};

	var mapOptions = {
		zoom: 4,
		center: latLng
		// mapTypeId: google.maps.MapTypeId.SATELLITE
	};

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var marker = new google.maps.Marker({
		position: latLng,
		map: map,
		draggable: true
	})

	marker.addListener('click', function(){
	setTimeout(function(){
	var infowindow;
	var infoContent = document.getElementById('day1').innerHTML
	var infowindow = new google.maps.InfoWindow({
		content: infoContent
	})

			infowindow.open(map, marker);
		})
	}, 1000)

	console.log(marker);
	console.log(mapOptions)

	marker.addListener('dragend', function(){
		latLng.lat = marker.position.lat();
		latLng.lng = marker.position.lng();
		getWeather();
	})

}

$('#search').click(search);

function search(){
	var address = $('#searchbar').val();

	var geocoder = new google.maps.Geocoder();

	geocoder.geocode({ "address": address }, function(results, status) {

	if (status == google.maps.GeocoderStatus.OK) {
			console.log("success");
			 latLng.lat = results[0].geometry.location.lat();
			 latLng.lng = results[0].geometry.location.lng();
			 initMap();
			 getWeather();
	 } else {
			 alert("Geocoding was not successful - STATUS: " + status);
	 }
	});
}
