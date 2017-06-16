function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>사용자의 브라우저는 지오로케이션을 지원하지 않습니다.</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    Cookies.set('latitude' , latitude );
    Cookies.set('longitude' , longitude);

    location.href='./map'

  };

  function error() {

    output.innerHTML = "사용자의 위치를 찾을 수 없습니다.";

  };


  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);

}
