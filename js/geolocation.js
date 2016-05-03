var mainMap;



function initMap() {

	// Get a reference to the map container (div)
	var mapContainer = document.querySelector('#map-container');

	// Set some map options (object)
	var options = {
		center: {
			lat: -41.295009, 
			lng: 174.778649
		},
		zoom: 15
	};

	// Create a new Google map
	mainMap = new google.maps.Map(mapContainer, options);

	// Now we're ready to show the store markers
	placeStoreMarkers();

}

function placeStoreMarkers() {

	// Connect to database and get the locations
	var locations = [
		{
			title: "Hataitai Shop", 
			lat: -41.293679, 
			lng: 174.778976
		},
		{
			title: "Petone Shop",
			lat: -41.290512, 
			lng: 174.778837
		}
	];

	// Loop over each location
	for( var i=0; i<locations.length; i++) {

		// Create a new marker
		var marker = new google.maps.Marker({
			position: {
				lat: locations[i].lat,
				lng: locations[i].lng 
		
			},
			map: mainMap,
			title: locations[i].title
		});

	}


}















