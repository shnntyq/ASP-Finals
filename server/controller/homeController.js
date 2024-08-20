const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
require("dotenv").config();
const axios = require("axios");

async function getLocationDetails(location) {
  const response = await axios.get(
    `https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${location}&returnGeom=Y&getAddrDetails=Y`
  );

  return response.data.results[0];
}

async function getRoute(startLat, startLong, endLat, endLong) {
  const response = await axios.get(
    `https://www.onemap.gov.sg/api/public/routingsvc/route?start=${startLat}%2C${startLong}&end=${endLat}%2C${endLong}&routeType=walk&date=08-19-2024&time=07%3A35%3A00&mode=TRANSIT&maxWalkDistance=1000&numItineraries=3`,
    { headers: { Authorization: process.env.ONEMAP_API_KEY } }
  );

  return response;
}

exports.home = async (req, res, next) => {
  try {
    let curr_location = req.body.loc.curr_location;
    let dest_location = req.body.loc.dest_location;

    const curr_location_details = await getLocationDetails(curr_location);
    const dest_location_details = await getLocationDetails(dest_location);

    console.log(
      curr_location_details.POSTAL,
      dest_location_details.POSTAL,
      dest_location_details.LATITUDE,
      dest_location_details.LONGITUDE
    );

    res.json({
      startPostal: curr_location_details.POSTAL,
      endPostal: dest_location_details.POSTAL,
      endLat: dest_location_details.LATITUDE,
      endLong: dest_location_details.LONGITUDE,
    });
  } catch (err) {
    next(err);
  }
};
