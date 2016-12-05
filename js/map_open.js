var path = ""
function open_map(id) {
	switch (id) {
		case "seismic":
			path = "world_maps/world_maps_seismic_activity.html";
			break;
		case "ocean":
			path = "world_maps/world_maps_ocean_currents.html";
			break;
		case "biomes":
			path = "world_maps/world_maps_biomes.html";
			break;
		case "atmos":
			path = "world_maps/world_maps_atmospheric_currents.html"
			break;
		case "ecoregion":
			path = "world_maps/world_maps_ecoregions.html"
			break;
		case "anthromes":
			path = "world_maps/world_maps_anthromes.html";
			break;
		case "veg":
			path = "world_maps/world_maps_remnant_vegetation.html";
			break;
		case "mammal":
			path = "world_maps/world_maps_threatened_mammals.html";
			break;
		case "protect":
			path = "world_maps/world_maps_protected_areas.html";
			break;
		case "biological":
			path = "world_maps/world_maps_biological_hotspots.html";
			break;
		case "targets":
			path = "world_maps/world_maps_hotspots17.html";
			break;
		case "regions":
			path = "world_maps/world_maps_ecoregions17.html";
			break;
		case "soils":
			path = "world_maps/world_maps_soils.html";
			break;
		case "crops":
			path = "world_maps/world_maps_croplands.html";
			break;
		case "meat":
			path = "world_maps/world_maps_meat_map.html";
			break;
		case "degrade":
			path = "world_maps/world_maps_land_degradation.html";
			break;
		case "tropics":
			path = "world_maps/world_maps_tropics.html";
			break;
		case "deforest":
			path = "world_maps/world_maps_deforestation.html";
			break;
		case "rivers":
			path = "world_maps/world_maps_rivers.html";
			break;
		case "waters":
			path = "world_maps/world_maps_health_of_waters.html";
			break;
		case "access":
			path = "world_maps/world_maps_access_to_water.html";
			break;
		case "pre-evolve":
			path = "world_maps/world_maps_evolution_of_urbanization_pre.html";
			break;
		case "evolve":
			path = "world_maps/world_maps_evolution_of_urbanization.html";
			break;
		case "planet":
			path = "world_maps/world_maps_planetary_urbanism.html";
			break;
		case "mega":
			path = "world_maps/world_maps_megaregions.html";
			break;
		case "structures":
			path = "world_maps/world_maps_megastructures.html";
			break;
		case "earthwork":
			path = "world_maps/world_maps_megaearthworks.html";
			break;
		case "human":
			path = "world_maps/world_maps_human_movement.html";
			break;
		case "pressure":
			path = "world_maps/world_maps_population_pressure.html";
			break;
		case "world":
			path = "world_maps/world_maps_world_health.html";
			break;
		case "energy":
			path = "world_maps/world_maps_energy.html";
			break;
		case "nuclear":
			path = "world_maps/world_maps_nuclear_energy.html";
			break;
		case "climate":
			path = "world_maps/world_maps_climate_change.html";
			break;
		case "sea":
			path = "world_maps/world_maps_sea_level_rise.html";
			break;
		case "displace":
			path = "world_maps/world_maps_environmental_displacement.html";
			break;
		case "corrupt":
			path = "world_maps/world_maps_conflict_and_corruption.html";
			break;
		case "conflict":
			path = "world_maps/world_maps_conflict_and_displacement.html";
			break;
		case "planning":
			path = "world_maps/world_maps_biodiversity_planning.html";
			break;
		case "spend":
			path = "world_maps/world_maps_conservation_spending.html";
			break;
		case "corp":
			path = "world_maps/world_maps_corporations.html";
			break;
		case "perform":
			path = "world_maps/world_maps_environmental_performance.html";
			break;
		case "intell":
			path = "world_maps/world_maps_landscape_intelligence.html";
			break;
		case "tour":
			path = "world_maps/world_maps_ecotourism.html";
			break;
		case "zoos":
			path = "world_maps/world_maps_zoos_and_botanic_gardens.html";
			break;
		case "religion":
			path = "world_maps/world_maps_religion.html";
			break;
		case "utopia":
			path = "world_maps/world_maps_paradise_and_utopia.html";
			break;
		default:
			title = "nope!";
	}
	window.open(path, "", "width=980");
};