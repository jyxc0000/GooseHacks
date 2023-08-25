// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoicmF5MDYwNzA4IiwiYSI6ImNsbHB2NWVpeDA5NmkzZHFyZGc4c3c0aDIifQ.iy5eIQe04Nga9OBN4v5_qA';

// Initialize the map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // You can change the map style
    center: [-70.3468, 55.1304], // Centered on Canada's coordinates
    zoom: 2.8 // Zoom level to show Canada
});

// Example conservation locations (longitude, latitude, name, description, url)
var conservationLocations = [
    [-59.366667, 53.4, 'Mealy Mountains National Park Reserve', 'Location: Labrador, Newfoundland and Labrador<br>Nearest City: Happy Valley-Goose Bay, Labrador<br>Coordinates: 53°24′00″N 59°22′00″W<br> Area: 10,700 sq km<br>Established: 31 July 2015<br>Governing Body: Parks Canada', 'https://en.wikipedia.org/wiki/Mealy_Mountains_National_Park_Reserve'],
    [-119.919444, 73.700278, 'Aulavik National Park', 'Location: Banks Island, Northwest Territories<br>Nearest city: Sachs Harbour, Yellowknife<br>Coordinates: 73°42′01″N 119°55′10″W<br>Area: 12,200 sq km<br>Established: 1992<br>Governing body: Parks Canada', 'https://en.wikipedia.org/wiki/Aulavik_National_Park'],
    [-65.9923, 67.3640, 'Auyuittuq National Park', 'Location: Nunavut, Canada<br>Nearest city: Pangnirtung, Qikiqtarjuaq<br>Coordinates: 67°53′N 65°01′W<br>Area: 21,470 sq km<br>Established: 1972<br>Governing body: Parks Canada', 'https://en.wikipedia.org/wiki/Auyuittuq_National_Park'],
    [-115.9281, 51.4968, 'Banff National Park', 'Location: Albertas Rockies, Alberta, Canada<br>Nearest town: Canmore, Alberta<br>Coordinates: 51.5°N 116.0°W<br>Area: 6,641 sq km<br>Established: 25 November 1885<br>Governing body: Parks Canada', 'https://en.wikipedia.org/wiki/Banff_National_Park'],
    [-81.5308, 45.2200, 'Bruce Peninsula National Park', 'Location: Ontario, Canada<br>Nearest city: Tobermory<br>Coordinates: 45°14′20″N 81°36′51″W<br>Area: 154 sq km<br>Established: 1987<br>Governing body: Parks Canada', 'https://en.wikipedia.org/wiki/Bruce_Peninsula_National_Park'],
    [-60.6510, 46.7383, 'Cape Breton Highlands National Park', 'Location: Ingonish, Nova Scotia<br>Nearest city: Baddek<br>Coordinates: 46°44′00″N 60°38′30″W<br>Area: 949 sq km<br>Established: 1936<br>Governing Body: Parks Canada', 'https://en.wikipedia.org/wiki/Cape_Breton_Highlands_National_Park'],
    [-112.8638, 53.6029, 'Elk Island National Park', 'Location: Alberta<br>Nearest city: Edmonton<br>Coordinates: 53°36′52″N 112°51′58″W<br>Area: 194 sq km<br>Established: 1913<br>Governing Body: Parks Canada', 'https://en.wikipedia.org/wiki/Elk_Island_National_Park'],
    [-64.35, 48.9, 'Forillon National Park', 'Location: Quebec<br>Nearest city: Gaspé, Quebec<br>Coordinates: 48°54′N 64°21′W<br>Area: 244 sq km<br>Established: 1970<br>Governing Body: Parks Canada', 'https://en.wikipedia.org/wiki/Forillon_National_Park'],
    [-64.953889, 45.595278, 'Fundy National Park', 'Location: New Brunswick<br>Nearest city: Alma, New Brunswick<br>Coordinates: 45°35′43″N 64°57′14″W<br>Area: 207 sq km<br>Established: 1948<br>Governing Body: Parks Canada', 'https://en.wikipedia.org/wiki/Fundy_National_Park'],
    [-79.874722, 44.877778, 'Georgian Bay Islands National Park', 'Location: Ontario<br>Nearest city: Midland, Ontario<br>Coordinates: 44°52′40″N 79°52′29″W<br>Area: 13.5 sq km<br>Established: 1929<br>Governing Body: Parks Canada', 'https://en.wikipedia.org/wiki/Georgian_Bay_Islands_National_Park'],
    [-117.518611, 51.3, 'Glacier National Park', 'Location: British Columbia<br>Nearest city: Revelstoke, British Columbia<br>Coordinates: 51°18′0″N 117°31′7″W<br>Area: 1,349 sq km<br>Established: 1886<br>Governing Body: Parks Canada', 'https://en.wikipedia.org/wiki/Glacier_National_Park_(Canada)'],
    [-107.716667, 49.2, 'Grasslands National Park', 'Location: Saskatchewan<br>Located along the borders with the American state of Montana, the park features an undisturbed mixed-grass prairie ecosystem and badlands where fossils from both the Frenchman and Bearpaw Formations were discovered including those of a Triceratops and a Tyrannosaurus.', 'https://en.wikipedia.org/wiki/Grasslands_National_Park'],
    [-57.733333, 49.683333, 'Gros Morn National Park', 'Location: Newfoundland and Labrador<br>A World Heritage Site due to its exposed mantle and crust as an example of plate tectonics, the park also includes Western Brook Pond, Lobster Cove, and Gros Morne mountain in the Long Range Mountains chain.', 'https://en.wikipedia.org/wiki/Gros_Morne_National_Park'],
    [-123.45, 48.85, 'Gulf Islands National Park Reserve', 'Location: British Columbia<br>Representative of the Strait of Georgia Lowlands, the park includes 6 km2 of marine environment and land on 15 islands.', 'https://en.wikipedia.org/wiki/Gulf_Islands_National_Park_Reserve'],
    [-131.466667, 52.383333, 'Gwaii Haanas National Park Reserve', 'Location: British Columbia<br>Forming the southern end of the Haida Gwaii archipelago, the park is on the far western end of Canada and includes 138 islands, inclusive of Ninstints World Heritage Site, Hotspring Island, and the southern tip of Moresby Island.', 'https://en.wikipedia.org/wiki/Gwaii_Haanas_National_Park_Reserve_and_Haida_Heritage_Site'],
    [-100.036111, 50.863889, 'Riding Mountain National Park', 'Location: Manitoba<br>Part of the Riding Mountain Biosphere Reserve,[43] the park features both boreal and aspen forests among the larger grassland prairie landscape, interspersed with pothole lakes and marshes. The park has an outdoor recreation focus and includes the community of Wasagaming, the East Gate National Historic Site, and formerly the Whitewater prisoners-of-war camp.', 'https://en.wikipedia.org/wiki/Riding_Mountain_National_Park']

];

// Add markers to the map
conservationLocations.forEach(function(location) {
    var marker = new mapboxgl.Marker()
        .setLngLat([location[0], location[1]])
        .setPopup(new mapboxgl.Popup().setHTML(
            '<b><a href="' + location[4] + '" target="_blank">' + location[2] + '</a></b><br>' + location[3]
        ))
        .addTo(map);
});

var cityLocations = [
    [-117.6593, 49.3237, 'BC Rockies', 'The overall forestfire index here is 5, there is a moderate forest fire risk.<br>Castlegar: 3<br>Creston: 5<br>Kootenay: 5<br>Nakusp: 1<br>Nelson: 3<br>Sparwood: 3<br>Trail: 5<br>Yoho: 5', 'orange'],
    [-124.2028, 57.9651, 'Northern BC', 'The overall forestfire index here is 3, there is a low forest fire risk.<br>PortHardy: 3<br>Puntzi Mountain: 3<br>Tetsa River: 3', 'yellow'],
    [-125.4494, 49.6506, 'The Islands', 'The overall forestfire index here is 5, there is a moderate forest fire risk.<br>EstevanPoint: 5', 'orange'],
    [-120.5000, 50.2500, 'Thompson Okanagon', 'The overall forestfire index here is 7, there is a high  forest fire risk.<br>Cranbrook: 3<br>GrandForks: 5<br>Lillooet: 5<br>Penticton: 7<br>Princeton: 5<br>Summerland: 3', 'red'],
    [-123.1207, 49.2827, 'Vancouver Coast & Mountains', 'The overall forestfire index here is 3, there is a low forest fire risk.<br>Pemberton: 3', 'yellow'],

];

// Add markers to the map with custom colors
cityLocations.forEach(function(location) {
    var marker = new mapboxgl.Marker({ color: location[4] })
        .setLngLat([location[0], location[1]])
        .setPopup(new mapboxgl.Popup().setHTML('<b>' + location[2] + '</b><br>' + location[3]))
        .addTo(map);
});
