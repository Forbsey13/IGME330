function init() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZm9yYnNleTEzIiwiYSI6ImNtM2FubTNxeTE1YmEyanB4M2Vqc3A3ZWgifQ.7G1_3Jelxj02WuYzgsD1dg';

    const geojson = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-77.032, 38.913]
                },
                'properties': {
                    'title': 'Mapbox',
                    'description': 'Washington, D.C.'
                }
            },
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.414, 37.776]
                },
                'properties': {
                    'title': 'Mapbox',
                    'description': 'San Francisco, California'
                }
            },
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-77.600680, 43.154780]
                },
                'properties': {
                    'title': 'Strong Museum Of Play',
                    'description': 'Rochester, NY'
                }
            }
        ]
    };

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-96, 37.8],
        zoom: 3
    });

    // add markers to map
    for (const feature of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML(
                        `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                    )
            )
            .addTo(map);
    }
}

export {init};