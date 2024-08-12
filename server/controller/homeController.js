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
    let current_loc = req.body.loc.curr_location;
    let destination_loc = req.body.loc.dest_location;

    const current_loc_details = getLocationDetails(current_loc);
    const destination_loc_details = getLocationDetails(destination_loc);

    console.log(current_loc_details);
    console.log(destination_loc_details);

    console.log(current_loc);
    console.log(destination_loc);
  } catch (err) {
    next(err);
  }
};
