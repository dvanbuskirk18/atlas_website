var path = ""
function open_hotspot(id) {
	switch (id) {
		case "atlantic":
			path = "hotspots/atlantic_forests.pdf";
			break;
		case "california":
			path = "hotspots/california_floristic_province.pdf";
			break;
		case "cape":
			path = "hotspots/cape_floristic_region.pdf";
			break;
		case "caribbean":
			path = "hotspots/caribbean_islands.pdf"
			break;
		case "caucasus":
			path = "hotspots/caucasus.pdf"
			break;
		case "cerrado":
			path = "hotspots/cerrado.pdf";
			break;
		case "chile":
			path = "hotspots/chilean_valdivian_forests.pdf";
			break;
		case "africa":
			path = "hotspots/coastal_forests_of_eastern_africa.pdf";
			break;
		case "melanesian":
			path = "hotspots/east_melanesian_islands.pdf";
			break;
		case "afromontane":
			path = "hotspots/eastern_afromontane.pdf";
			break;
		case "e_australia":
			path = "hotspots/forests_of_eastern_australia.pdf";
			break;
		case "guinean":
			path = "hotspots/guinean_forests_of_west_africa.pdf";
			break;
		case "himalaya":
			path = "hotspots/himalaya.pdf";
			break;
		case "horn":
			path = "hotspots/horn_of_africa.pdf";
			break;
		case "indo":
			path = "hotspots/indo-burma.pdf";
			break;
		case "irano":
			path = "hotspots/irano-anatolian.pdf";
			break;
		case "japan":
			path = "hotspots/japan.pdf";
			break;
		case "madagascar":
			path = "hotspots/madagascar.pdf";
			break;
		case "madrean":
			path = "hotspots/madrean_woodlands.pdf";
			break;
		case "albany":
			path = "hotspots/maputaland_pondoland_albany.pdf";
			break;
		case "basin":
			path = "hotspots/mediterranean_basin.pdf";
			break;
		case "meso":
			path = "hotspots/mesoamerica.pdf";
			break;
		case "asia":
			path = "hotspots/mountains_of_central_asia.pdf";
			break;
		case "china":
			path = "hotspots/mountains_of_southwest_china.pdf";
			break;
		case "caledonia":
			path = "hotspots/new_caledonia.pdf";
			break;
		case "zealand":
			path = "hotspots/new_zealand.pdf";
			break;
		case "philip":
			path = "hotspots/philippines.pdf";
			break;
		case "micro":
			path = "hotspots/polynesia-micronesia.pdf";
			break;
		case "s_australia":
			path = "hotspots/southwest_australia.pdf";
			break;
		case "karoo":
			path = "hotspots/succulent_karoo.pdf";
			break;
		case "sundaland":
			path = "hotspots/sundaland.pdf";
			break;
		case "andes":
			path = "hotspots/tropical_andes.pdf";
			break;
		case "tumbes":
			path = "hotspots/tumbes-choco-magdalena.pdf";
			break;
		case "wallacea":
			path = "hotspots/wallacea.pdf";
			break;
		case "ghats":
			path = "hotspots/western_ghats_sri_lanka.pdf";
			break;
	}
	window.open(path, "", "width=980", "titlebar=no");
};