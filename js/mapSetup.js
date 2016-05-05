var map
var latlng
var geoplaces
var placefeatures
var selectedText
var activityText
var clusters 
var popUp

var markersAll
function initmap() {

	// Provide your access token
	L.mapbox.accessToken = 'pk.eyJ1IjoibXdoaXR0bGU5MSIsImEiOiJyRDlsTVRrIn0.ZwklL-QMfQE9j4kKJxnLuA';
	// Create a map in the div #map
	map = L.mapbox.map('map', 'mapbox.streets')
	.setView([53.7998731, -1.5486437], 13);

	// get the geojson into an array to make querying easier
	geoplaces = places
	placefeatures = []
	placefeatures = geoplaces.features
	//Set up markerclusterer
	// Set up arrays for religion dropdown
	var religionArray = []
	var uniqueReligion
	
	clusters = new L.MarkerClusterGroup();

	// for loop to search through data
	for (ID in placefeatures) {

		// Remove duplicates of Religion to create an array with no duplicates
		religionArray.push(placefeatures[ID].properties.Religion)
		uniqueReligion = religionArray.filter(function(elem, pos) {
			return religionArray.indexOf(elem) == pos;
		});
	}

	$.each(uniqueReligion, function(val, text) {
		$('#religion-select').append(
		$('<option></option>').val(text).html(text)
		);
	});

}

function select() { 

	var relDrop =  document.getElementById("religion-select");
	var relValue = relDrop.options[relDrop.selectedIndex].value;
	
	var actDrop =  document.getElementById("activity-select");
	var actValue = actDrop.options[actDrop.selectedIndex].value;

	map.removeLayer(clusters);
	clusters = new L.MarkerClusterGroup();
	
	
	for (ID in placefeatures) {
		
		popUp = "<p><b>" + placefeatures[ID].properties.Organisation + "</b></p>"
				+ "<BR>" + "<p>" + "<b>Religion: </b>" + placefeatures[ID].properties.Religion
				+ "<BR>" + "<b>Address: </b>" + placefeatures[ID].properties.Address_Line_1
				+ "<BR>" + placefeatures[ID].properties.Area
				+ "<BR>" + placefeatures[ID].properties.City
				+ "<BR>" +  placefeatures[ID].properties.Postcode
				+ "<BR>"+ "<b>Telephone: </b>" +  placefeatures[ID].properties.Telephone
				+ "<BR>"+ "<b>Website: </b>" +  placefeatures[ID].properties.Website
				+ "<BR>"+ "<b>Activities: </b>" +  placefeatures[ID].properties.Activities
		
		if (relValue === "" && actValue === ""){
			plotPlaces()

		} else if (relValue === placefeatures[ID].properties.Religion && actValue === "") {
			plotPlaces()
		}else if (relValue === placefeatures[ID].properties.Religion && actValue === "Education/Languages") {
			plotEducation()
		}else if (relValue === placefeatures[ID].properties.Religion && actValue === "Outreach/Counselling") {
			plotOutreach()
		}else if (relValue === placefeatures[ID].properties.Religion && actValue === "Lunch Club") {
			plotLunchClub()
		}else if (relValue === placefeatures[ID].properties.Religion && actValue === "Youth Club") {
			plotYouthClub()
		}else if (relValue === placefeatures[ID].properties.Religion && actValue === "Fitness") {
			plotFitness()
		}else if (relValue === "" && actValue === "Education/Languages") {
			plotEducation()
		}else if (relValue === "" && actValue === "Outreach/Counselling") {
			plotOutreach()
		}else if (relValue === "" && actValue === "Lunch Club") {
			plotLunchClub()
		}else if (relValue === "" && actValue === "Youth Club") {
			plotYouthClub()
		}else if (relValue === "" && actValue === "Fitness") {
			plotFitness()
		}

	function plotEducation() { 
		
			if (placefeatures[ID].properties.Religion === 'Christian' && placefeatures[ID].properties.Education=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Muslim' && placefeatures[ID].properties.Education=== "Yes") {
			plotPlaces()
			}	
			else if (placefeatures[ID].properties.Religion === 'Sikh' && placefeatures[ID].properties.Education=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Hindu' && placefeatures[ID].properties.Education=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Jewish' && placefeatures[ID].properties.Education=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'All' && placefeatures[ID].properties.Education=== "Yes") {
			plotPlaces()
			}
			
		}
	
	function plotOutreach() { 
		
			if (placefeatures[ID].properties.Religion === 'Christian' && placefeatures[ID].properties.Outreach=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Muslim' && placefeatures[ID].properties.Outreach=== "Yes") {
			plotPlaces()
			}	
			else if (placefeatures[ID].properties.Religion === 'Sikh' && placefeatures[ID].properties.Outreach=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Hindu' && placefeatures[ID].properties.Outreach=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Jewish' && placefeatures[ID].properties.Outreach=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'All' && placefeatures[ID].properties.Outreach=== "Yes") {
			plotPlaces()
			}
		}
	
		function plotLunchClub() { 
		
			if (placefeatures[ID].properties.Religion === 'Christian' && placefeatures[ID].properties.LunchClub=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Muslim' && placefeatures[ID].properties.LunchClub=== "Yes") {
			plotPlaces()
			}	
			else if (placefeatures[ID].properties.Religion === 'Sikh' && placefeatures[ID].properties.LunchClub=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Hindu' && placefeatures[ID].properties.LunchClub=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Jewish' && placefeatures[ID].properties.LunchClub=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'All' && placefeatures[ID].properties.LunchClub=== "Yes") {
			plotPlaces()
			}
		}
		
		function plotYouthClub() { 
		
			if (placefeatures[ID].properties.Religion === 'Christian' && placefeatures[ID].properties.YouthClub=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Muslim' && placefeatures[ID].properties.YouthClub=== "Yes") {
			plotPlaces()
			}	
			else if (placefeatures[ID].properties.Religion === 'Sikh' && placefeatures[ID].properties.YouthClub=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Hindu' && placefeatures[ID].properties.YouthClub=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Jewish' && placefeatures[ID].properties.YouthClub=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'All' && placefeatures[ID].properties.YouthClub=== "Yes") {
			plotPlaces()
			}
		}
		
		function plotFitness() { 
		
			if (placefeatures[ID].properties.Religion === 'Christian' && placefeatures[ID].properties.Fitness=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Muslim' && placefeatures[ID].properties.Fitness=== "Yes") {
			plotPlaces()
			}	
			else if (placefeatures[ID].properties.Religion === 'Sikh' && placefeatures[ID].properties.Fitness=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Hindu' && placefeatures[ID].properties.Fitness=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'Jewish' && placefeatures[ID].properties.Fitness=== "Yes") {
			plotPlaces()
			}
			else if (placefeatures[ID].properties.Religion === 'All' && placefeatures[ID].properties.Fitness=== "Yes") {
			plotPlaces()
			}
		}
	
	}	
		function plotPlaces() { 
		

			latlng = [placefeatures[ID].geometry.coordinates[1],placefeatures[ID].geometry.coordinates[0]]
			
			if (placefeatures[ID].properties.Religion === 'Christian') {
			
				var christianIcon = L.icon({
				iconUrl: 'icons/christian.svg',
				iconSize: [30, 30],
				})
				marker = new L.Marker(latlng, { 
					icon: christianIcon
				})
				addMarker()
			}	
			
			else if (placefeatures[ID].properties.Religion === 'Muslim') {
			
				var muslimIcon = L.icon({
				iconUrl: 'icons/muslim.svg',
				iconSize: [30, 30],
				})
				marker = new L.Marker(latlng, { 
					icon: muslimIcon
				})
				addMarker()
			}	
			
			else if (placefeatures[ID].properties.Religion === 'Sikh') {
			
				var sikhIcon = L.icon({
				iconUrl: 'icons/sikh.svg',
				iconSize: [30, 30],
				})
				marker = new L.Marker(latlng, { 
					icon: sikhIcon
				})
				addMarker()
			}
			
			else if (placefeatures[ID].properties.Religion === 'Hindu') {
			
				var hinduIcon = L.icon({
				iconUrl: 'icons/hindu.svg',
				iconSize: [30, 30],
				})
				marker = new L.Marker(latlng, { 
					icon: hinduIcon
				})
				addMarker()
			}
			
			else if (placefeatures[ID].properties.Religion === 'Jewish') {
			
				var jewishIcon = L.icon({
				iconUrl: 'icons/jewish.svg',
				iconSize: [30, 30],
				})
				marker = new L.Marker(latlng, { 
					icon: jewishIcon
				})
				addMarker()
			}
			
			else if (placefeatures[ID].properties.Religion === 'All') {
			
				var allIcon = L.icon({
				iconUrl: 'icons/all.svg',
				iconSize: [30, 30],
				})
				marker = new L.Marker(latlng, { 
					icon: allIcon
				})
				addMarker()
			}
		
		}
	}

function addMarker() {

	clusters.addLayer(marker)
	map.addLayer(clusters);
	marker.bindPopup(popUp);
}

