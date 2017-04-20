var path = ""
function open_datascape(id) {
	switch (id) {
		case "footprintA":
			path = "datascapes/footprintA.html";
			break;
		case "footprintB":
			path = "datascapes/footprintB.html";
			break;
		case "biocapA":
			path = "datascapes/biocapacityA.html";
			break;
		case "biocap":
			path = "datascapes/biocapacity.html"
			break;
		case "carbonA":
			path = "datascapes/carbon_emissionsA.html"
			break;
		case "carbonB":
			path = "datascapes/carbon_emissionsB.html";
			break;
		case "forest":
			path = "datascapes/carbon_forest.html";
			break;
		case "energy":
			path = "datascapes/energy_footprint.html";
			break;
		case "foodscape":
			path = "datascapes/foodscape.html";
			break;
		case "urbanA":
			path = "datascapes/urban_growthA.html";
			break;
		case "urbanB":
			path = "datascapes/urban_growthB.html";
			break;
	}
	window.open(path, "", "width=1100");
};