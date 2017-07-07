'use strict';

$.get("http://api.openweathermap.org/data/2.5/forecast/daily",{
	APPID: "d82583cede0414e303c1d718522690fd",
	q: "San Antonio, TX",
	cnt: 3,
	units: "imperial"
}).done(function(data){
	console.log(data);
	// var tmp = ''
	// for (var i = 0; i < data.list.length; i++) {
	data.list.forEach(function(day, i){
		$('#day' + (i + 1)).append(displayDate(day.dt) + "<br>" + Math.round(day.temp.max) + "°/" + Math.round(day.temp.min) + "°<br>" +
				"<img src='http://openweathermap.org/img/w/" + day.weather[0].icon + ".png'><br>" +
				day.weather[0].main + ": " + day.weather[0].description + "<br>Humidity: " +
				day.humidity + "<br>Wind: " + day.speed + "<br>Pressure: " + day.pressure);
	});
}).fail(function(request, status, error){
	console.log(status);
	console.log(error);
});

function displayDate(dt) {
	var date = new Date(dt * 1000);
	return date.toLocaleDateString('en-us', {weekday: "long", month: "long", day: "numeric"});
}

var chappalajalisco = {lat: 29.447285, lng: -98.49166};

var mapOptions = {
	zoom: 4,
	center: chappalajalisco
	// mapTypeId: google.maps.MapTypeId.SATELLITE
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);

var marker = new google.maps.Marker({
	position: chappalajalisco,
	map: map,
	draggable: true
})
