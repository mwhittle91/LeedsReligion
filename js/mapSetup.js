var map
var latlng


function initmap() {

	// Provide your access token
	L.mapbox.accessToken = 'pk.eyJ1IjoibXdoaXR0bGU5MSIsImEiOiJyRDlsTVRrIn0.ZwklL-QMfQE9j4kKJxnLuA';
	// Create a map in the div #map
	map = L.mapbox.map('map', 'mapbox.streets')
	.setView([53.7998731, -1.5486437], 13);
  
	// style for the ward geojson
	var wardStyle = {
		"color": 'black',
		"weight": 2,
		"opacity": 0.9
	};
	
	/* add the ward geojson 
	L.geoJson(wards, {
		style: wardStyle
	}).addTo(map);
	*/
	
	// markes for different religions
	var Christian = L.icon({
		iconUrl: 'icons/christian.svg',
		iconSize: [30, 30],
	})
	var Muslim = L.icon({
		iconUrl: 'icons/muslim.svg',
		iconSize: [30, 30],
	})
	var Sikh = L.icon({
		iconUrl: 'icons/sikh.svg',
		iconSize: [30, 30],
	})
	var Jewish = L.icon({
		iconUrl: 'icons/jewish.svg',
		iconSize: [30, 30],
	})

	// get the geojson into an array to make querying easier
	var geoplaces = places
	var placefeatures = []
	placefeatures = geoplaces.features
	//Set up markerclusterer 
	var markers = new L.MarkerClusterGroup()
	// Set up arrays for religion dropdown
	var religionArray = []
	var uniqueReligion
	
	var popup
	// for loop to search through data 
	for (ID in placefeatures) {
	
		// Remove duplicates of Religion to create an array with no duplicates
		religionArray.push(placefeatures[ID].properties.Religion)
		uniqueReligion = religionArray.filter(function(elem, pos) {
			return religionArray.indexOf(elem) == pos;
		});
		
		
		popup = "<H3>" + placefeatures[ID].properties.Organisation + "</H3>" 
				+ "<BR>" + "<p>" + "<b>Religion: </b>" + placefeatures[ID].properties.Religion
				+ "<BR>" + "<b>Denomination: </b>" + placefeatures[ID].properties.Denomination
				+ "<BR>" + "<b>Address: </b>" + placefeatures[ID].properties.Address_Line_1 
					+ "<BR>" + placefeatures[ID].properties.Address_Line_2 
					+ "<BR>" + placefeatures[ID].properties.Area 
					+ "<BR>" + placefeatures[ID].properties.City 
					+ "<BR>" +  placefeatures[ID].properties.Postcode 
				+ "<BR>"+ "<b>Telephone: </b>" +  placefeatures[ID].properties.Telephone 
				+ "<BR>"+ "<b>Website: </b>" +  '<a href="http://"'+placefeatures[ID].properties.Website+ '">' +placefeatures[ID].properties.Website+ '</a>'
				+ "<BR>"+ "<b>email: </b>" +  placefeatures[ID].properties.email 
				

		
		// create the location for the marker 
		latlng = [placefeatures[ID].geometry.coordinates[1],placefeatures[ID].geometry.coordinates[0]]
		// create markers and add them to the clusterer
		if  (placefeatures[ID].properties.Religion === 'Christian') {
			var Cmarker  = new L.Marker(latlng, {icon: Christian}).bindPopup(popup);
			markers.addLayer(Cmarker);
		} else if (placefeatures[ID].properties.Religion === 'Muslim')  {
			var Mmarker = new L.Marker(latlng, {icon: Muslim}).bindPopup(popup);
			markers.addLayer(Mmarker);
		}else if (placefeatures[ID].properties.Religion === 'Sikh')  {
			var Smarker = new L.Marker(latlng, {icon: Sikh}).bindPopup(popup);
			markers.addLayer(Smarker);
		} else if (placefeatures[ID].properties.Religion === 'Jewish')  {
			var Jmarker = new L.Marker(latlng, {icon: Jewish}).bindPopup(popup);
			markers.addLayer(Jmarker);
		}
		map.addLayer(markers);
	}
	
	$.each(uniqueReligion, function(val, text) {
		$('#religion-select').append(
		$('<option></option>').val(text).html(text)
		); 
	});
	
	$("#email").hide();

	$(document).ready(
    function(){
        $("#button").click(function () {
            $("#email").show("fast");
        });
	console.log("clicked")
    });



} 






