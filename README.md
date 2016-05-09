# LeedsReligion

This Repo contains code and data to display places of worship in Leeds (Harehills and Chapeltown currently). 

The code uses mapbox tiling as the background map. When loaded the map uses data from a geojson layer and the leaflet plugin to load the
markers. The markers are then sorted into their various religions in order to assign the correct icon. 

There are two dropdown menus, the religion drop down menu is dynamic, reading any religion present in the geojson. However the activity
dropdown is not as these catergories are fixed and therefore are not required to be dynamic. Changing the value of the dropdown menus will
result in a method being called which removes the markers and only displays the markers of the selected criteria. 

To add to the map please add to the excel spreadsheet and then using GIS software such as QGIS or R create a geojson with the new additions

Map availible here http://www.personal.leeds.ac.uk/~gy14mw/LeedsReligion/
