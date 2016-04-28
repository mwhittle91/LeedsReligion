var map
var latlng
var markers
var Cmarker
var Mmarker
var Smarker
var Hmarker
var Jmarker
var popup
var Christian
var Muslim
var Sikh
var Jewish
var hindu
var geoplaces
var placefeatures
var selectedText


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
	Christian = L.icon({
		iconUrl: 'icons/christian.svg',
		iconSize: [30, 30],
	})
	Muslim = L.icon({
		iconUrl: 'icons/muslim.svg',
		iconSize: [30, 30],
	})
	Sikh = L.icon({
		iconUrl: 'icons/sikh.svg',
		iconSize: [30, 30],
	})
	Jewish = L.icon({
		iconUrl: 'icons/jewish.svg',
		iconSize: [30, 30],
	})
	Hindu = L.icon({
		iconUrl: 'icons/hindu.svg',
		iconSize: [30, 30],
	})

	// get the geojson into an array to make querying easier
	geoplaces = places
	placefeatures = []
	placefeatures = geoplaces.features
	//Set up markerclusterer
	markers = new L.MarkerClusterGroup()
	// Set up arrays for religion dropdown
	var religionArray = []
	var uniqueReligion


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
			Cmarker  = new L.Marker(latlng, {icon: Christian}).bindPopup(popup);
			markers.addLayer(Cmarker);
		} else if (placefeatures[ID].properties.Religion === 'Muslim')  {
			Mmarker = new L.Marker(latlng, {icon: Muslim}).bindPopup(popup);
			markers.addLayer(Mmarker);
		} else if (placefeatures[ID].properties.Religion === 'Sikh')  {
			Smarker = new L.Marker(latlng, {icon: Sikh}).bindPopup(popup);
			markers.addLayer(Smarker);
		} else if (placefeatures[ID].properties.Religion === 'Hindu')  {
			Hmarker = new L.Marker(latlng, {icon: Sikh}).bindPopup(popup);
			markers.addLayer(Hmarker);
		}else if (placefeatures[ID].properties.Religion === 'Jewish')  {
			Jmarker = new L.Marker(latlng, {icon: Jewish}).bindPopup(popup);
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
    });
}

function religionDrop() {

		geoplaces = places
		placefeatures = []
		placefeatures = geoplaces.features
		map.removeLayer(markers);
		markers = new L.MarkerClusterGroup()
		// for loop to search through data
		for (ID in placefeatures) {

		skillsSelect = document.getElementById("religion-select");
		selectedText = skillsSelect.options[skillsSelect.selectedIndex].text
		latlng = [placefeatures[ID].geometry.coordinates[1],placefeatures[ID].geometry.coordinates[0]]


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


			if (selectedText === 'Christian' && placefeatures[ID].properties.Religion === 'Christian') {

					Cmarker  = new L.Marker(latlng, {icon: Christian}).bindPopup(popup);
					markers.addLayer(Cmarker);
			}else if (selectedText === 'Muslim' && placefeatures[ID].properties.Religion === 'Muslim') {

					Mmarker = new L.Marker(latlng, {icon: Muslim}).bindPopup(popup);
					markers.addLayer(Mmarker);
			}else if (selectedText === 'Sikh' && placefeatures[ID].properties.Religion === 'Sikh') {

					Smarker = new L.Marker(latlng, {icon: Sikh}).bindPopup(popup);
					markers.addLayer(Smarker);
			}else if (selectedText === 'Hindu' && placefeatures[ID].properties.Religion === 'Hindu') {

					Hmarker = new L.Marker(latlng, {icon: Hindu}).bindPopup(popup);
					markers.addLayer(Hmarker);
			}else if (selectedText === 'Jewish' && placefeatures[ID].properties.Religion === 'Jewish') {
					Jmarker = new L.Marker(latlng, {icon: Jewish}).bindPopup(popup);
					markers.addLayer(Jmarker);
			}map.addLayer(markers);
		}
	}

function activitySelect() {

	geoplaces = places
	placefeatures = []
	placefeatures = geoplaces.features



			var activity = document.getElementById('activity-select').value;
			var activity_value
			if (document.getElementById('a1').checked) {
  activity_value = document.getElementById('a1').value;
}




}
