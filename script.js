mapboxgl.accessToken = 'pk.eyJ1IjoiY29reWFzYXJvbnVyIiwiYSI6ImNraGc2djAxcDB3bHcyemw2Njd1eGM4N28ifQ.S0pgUS7ysFxAeEU8b38OhQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {  
    enableHighAccuracy: true 
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-0.127758, 51.507351])
}

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
    });
    
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });
      
    map.addControl(directions, 'top-left');
}