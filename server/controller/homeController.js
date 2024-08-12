const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getLocationDetails(location) {
  const data = JSON.stringify(false);
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open(
    "GET",
    `https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${location}&returnGeom=Y&getAddrDetails=Y`,
    true
  );

  xhr.send(data);

  return data;
}

exports.home = async (req, res, next) => {
  try {
    let curr_location = req.body.loc.curr_location;
    let dest_location = req.body.loc.dest_location;

    const curr_location_details = getLocationDetails(curr_location);
    const dest_location_details = getLocationDetails(dest_location);

    console.log(curr_location_details);
    console.log(dest_location_details);
  } catch (err) {
    next(err);
  }
};
