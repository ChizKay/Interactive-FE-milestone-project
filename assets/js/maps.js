function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {
            lat: 53.1424,
            lng: -7.6921
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 52.6541, lng: -7.2448 },
        { lat: 53.2707, lng: -9.0568 },
        { lat: 51.8985, lng: -8.4756},
        { lat: 54.6538, lng: -8.1096},
        { lat: 53.3498, lng: -6.2603},
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
