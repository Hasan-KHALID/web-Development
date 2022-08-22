
const x = document.getElementById("demo");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


function myFunction() {
  let text;
  if (document.getElementById("id1").validity.rangeOverflow) {
    text = "Value too large";
  } else {
    text = "Input OK";
  } 
  document.getElementById("demo").innerHTML = text;
}