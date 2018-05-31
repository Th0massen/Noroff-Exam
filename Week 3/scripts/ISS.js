
$(document).ready(function(){
    url = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	var map = L.map('map').setView([0, 0], 2);
	L.tileLayer(url, {
        maxZoom: 5,
        minZoom: 1,
	}).addTo(map);
    var iss = L.marker([0, 0], {icon: ISSIcon}).addTo(map);
    var isscirc = L.circle([0,0], 2200e3, {color: "#c22", opacity: 0.3, weight:1, fillColor: "#c22", fillOpacity: 0.1}).addTo(map);
    moveISS();
    function moveISS () {
        $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
            var lat = data['iss_position']['latitude'];
            var lon = data['iss_position']['longitude'];
            var ISSlat = document.getElementById("ISSlatitude");
            var ISSlon = document.getElementById("ISSlongitude");
                ISSlat.innerHTML ="ISS Latitude: "+lat;
                ISSlon.innerHTML = "ISS Longitude: "+lon;

            iss.setLatLng([lat, lon]);
            isscirc.setLatLng([lat, lon]);
            map.panTo([lat, lon], animate=true);
        });
        setTimeout(moveISS, 5000); 
    } 
    });
    var ISSIcon = L.icon({
        iconUrl: '../resources/ISSicon.png',
        iconSize: [80, 50],
});










