export function initMap() {
    const mapOptions = {
      center: { lat: 41.0097, lng: -111.9425 }, // Replace with your reception coordinates
      zoom: 15,
    };
  
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    const marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      title: "Reception Location",
    });
  }
  