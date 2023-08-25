// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoicmF5MDYwNzA4IiwiYSI6ImNsbHB2NWVpeDA5NmkzZHFyZGc4c3c0aDIifQ.iy5eIQe04Nga9OBN4v5_qA';

// Initialize the map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // You can change the map style
    center: [-106.3468, 56.1304],
    zoom: 3.5
});

// Example conservation locations (longitude, latitude, name, description)
var conservationLocations = [
    [-0.09, 51.505, 'Conservation Area 1', 'Description 1'],
    [-74.0060, 40.7128, 'Conservation Area 2', 'Description 2'],
    [-118.2437, 34.0522, 'Conservation Area 3', 'Description 3']
];

// Add markers to the map
conservationLocations.forEach(function(location) {
    var marker = new mapboxgl.Marker()
        .setLngLat([location[0], location[1]])
        .setPopup(new mapboxgl.Popup().setHTML('<b>' + location[2] + '</b><br>' + location[3]))
        .addTo(map);
});
