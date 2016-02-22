function getLocation() {
  var venueName = document.querySelector("venueName").innerHTML;
  var venueLatitude = document.getElementsByTagName("meta")[23].content;
  var venueLongitude = document.getElementsByTagName("meta")[24].content;
  var venueCoordinates = `${venueLatitude}, ${venueLongitude}`;
  return JSON.stringify({
    "type": "Feature",
    "properties": {
      "名称": venueName,
    }
    "geometry": {
      "type": "Point",
      "coordinates": [
        venueLatitude,
        venueLongitude
      ]
    }
  });
}
getLocation();
