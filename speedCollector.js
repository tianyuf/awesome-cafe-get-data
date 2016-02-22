function getMarkerColor() {
  var downloadSpeed = document.querySelector('share-speed share-download p')
    .innerText
    .replace("Mb/s", '');
    
  downloadSpeed = Number(downloadSpeed);
  var markerColor;
  if (0 <= downloadSpeed && downloadSpeed < 5) {
    markerColor = "#C24740";
  } else if (10 > downloadSpeed >= 5) {
    markerColor = "#F3AE1A";
  } else if (downloadSpeed >= 10) {
    markerColor = "#50C240";
  } else {
    alert(`cannot get marker color`);
  }
  alert(`your marker color is ${markerColor}`);

  return JSON.stringify({
    "下载速度": downloadSpeed + " Mbps",
    "参考价格": "yourPrice",
    "Speedtest 链接": document.URL,
    "评论 (@yourname)": "Your comment",
    "marker-color": markerColor,
    "marker-symbol": "cafe"
  });
}
getMarkerColor();
