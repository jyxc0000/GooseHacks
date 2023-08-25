const apiKey = 'pk.eyJ1IjoicmF5MDYwNzA4IiwiYSI6ImNsbHB2NWVpeDA5NmkzZHFyZGc4c3c0aDIifQ.iy5eIQe04Nga9OBN4v5_qA'

const mymap = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(mymap);

const londonEye = L.marker([51.5033, -0.1195]).addTo(mymap);
londonEye.bindPopup("<b>London Eye</b><br>The London Eye is a giant Ferris wheel located on the South Bank of the River Thames in London.").openPopup();