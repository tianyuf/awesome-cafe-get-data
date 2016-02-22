function getMarkerColor() {
  var downloadSpeed = document.getElementsByClassName("share-speed share-download")[0];
  downloadSpeed = downloadSpeed.getElementsByTagName("p")[0].innerHTML;
  downloadSpeed = downloadSpeed.replace("<span>", "");
  downloadSpeed = downloadSpeed.replace("</span>", "");
  downloadSpeed = downloadSpeed.replace("Mb/s", "");
  downloadSpeed = Number(downloadSpeed);
  var markerColor;
  if (0 <= downloadSpeed < 5) {
    markerColor = "#C24740";
  } else if (10 > downloadSpeed >= 5) {
    markerColor = "#F3AE1A";
  } else if (downloadSpeed >= 10) {
    markerColor = "#50C240";
  } else {
    alert(`cannot get marker color`);
  }
  alert(`your marker color is ${markerColor}`);
  var url = document.URL;
  var createGeojson = `
  "下载速度": "${downloadSpeed} Mbps",
  "参考价格": "yourPrice",
  "Speedtest 链接": "${url}",
  "评论 (@yourname)": "Your comment",
  "marker-color": "${markerColor}",
  "marker-symbol": "cafe"`
  return(createGeojson);
}
