
var mymap = L.map('map').setView([38.8935, -77.0145], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VyZ2lvbHNobSIsImEiOiJja283YWs5bTkxbWNzMnVscmJudzEycjJnIn0.7qCgZZeQr-DkybGvbPmYkg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


$("button").on("click", function() {
  var ip = $("#ip-input").val();
    var api_key = "at_ac67UzPG45vQs8Ymd5lCJIDmz7CO1";
    $(function () {
       $.ajax({
           url: "https://geo.ipify.org/api/v1",
           data: {apiKey: api_key, ipAddress: ip},
           success: function(data) {
               //Logs the JSON file for the ip given
               //$("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
               //console.log(data);

               //get location and send it to the map
               var mapLat = data.location.lat;
               var mapLong = data.location.lng;
               mymap.setView([mapLat, mapLong], 13);

              //get information ip to send it to the site
               var locCity = data.location.city;
               var locCon = data.location.country;
               var timeZone = data.location.timezone;
               var provider = data.as.name;
               $("#ip-h1").text(ip);
               $("#location-h1").text(locCity + ", " + locCon);
               $("#timezone-h1").text("UTC: " + timeZone);
               $("#isp-h1").text(provider);
           }
       });
    });
});



//Mapbox API Key
//pk.eyJ1Ijoic2VyZ2lvbHNobSIsImEiOiJja283YWs5bTkxbWNzMnVscmJudzEycjJnIn0.7qCgZZeQr-DkybGvbPmYkg
