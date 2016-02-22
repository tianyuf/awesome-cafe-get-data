function getLocation() {
  var venueName = document.getElementsByClassName("venueName")[0].innerHTML;
  var venueLatitude = document.getElementsByTagName("meta")[23].content;
  var venueLongitude = document.getElementsByTagName("meta")[24].content;
  var venueCoordinates = `${venueLatitude}, ${venueLongitude}`;
  var createGeojson =
        `
        {
          "type": "Feature",
          "properties": {
            "名称": "${venueName}",
          }
          "geometry": {
            "type": "Point",
            "coordinates": [
              ${venueLatitude},
              ${venueLongitude}
            ]
        }`
  return(createGeojson);
}
getLocation();
