const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
require("dotenv").config();
const axios = require("axios");

function getTime() {
  const dt = new Date();
  const currTime =
    dt.getHours() + "%3A" + dt.getMinutes() + "%3A" + dt.getSeconds();

  return currTime;
}

async function getLocationDetails(location) {
  const response = await axios.get(
    `https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${location}&returnGeom=Y&getAddrDetails=Y`
  );

  return response.data.results[0];
}

async function getRoute(
  startLat,
  startLong,
  endLat,
  endLong,
  transportMode,
  time
) {
  const response = await axios.get(
    `https://www.onemap.gov.sg/api/public/routingsvc/route?start=${startLat}%2C${startLong}&end=${endLat}%2C${endLong}&routeType=pt&date=08-26-2024&time=${time}&mode=${transportMode}&maxWalkDistance=1000&numItineraries=3`,
    { headers: { Authorization: process.env.ONEMAP_API_KEY } }
  );

  return response.data.plan.itineraries;
}

exports.home = async (req, res, next) => {
  try {
    let curr_location = req.body.loc.curr_location;
    let dest_location = req.body.loc.dest_location;
    let transport_mode = req.body.loc.mode || "TRANSIT";

    const curr_location_details = await getLocationDetails(curr_location);
    const dest_location_details = await getLocationDetails(dest_location);

    const routeOptions = await getRoute(
      curr_location_details.LATITUDE,
      curr_location_details.LONGITUDE,
      dest_location_details.LATITUDE,
      dest_location_details.LONGITUDE,
      transport_mode,
      getTime()
    );

    console.log(routeOptions[0].legs);

    res.json({
      startPostal: curr_location_details.POSTAL,
      endPostal: dest_location_details.POSTAL,
      endLat: dest_location_details.LATITUDE,
      endLong: dest_location_details.LONGITUDE,
      transportMode: transport_mode,
      route: routeOptions,
    });
  } catch (err) {
    next(err);
  }
};
