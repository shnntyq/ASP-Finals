var request = require('request');

function getBusArrival (busstopcode, callback) {
  var options = {
      'method': 'GET',
      'url': `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${busstopcode}`,
      'headers': {
          'AccountKey': 'b+8pVHKwRkyLKABbXVxmpQ=='
      }
  };
  request(options, function (error, response) {
      if (error) { throw new Error(error) }
      else {
          //console.log(response.body);
          return callback(null, JSON.parse(response.body))
      }
  });
};

function getAllBusServices (callback) {
    var options = {
        'method': 'GET',
        'url': `http://datamall2.mytransport.sg/ltaodataservice/BusServices`,
        'headers': {
            'AccountKey': 'b+8pVHKwRkyLKABbXVxmpQ=='
        }
    };
    request(options, function (error, response) {
        if (error) { throw new Error(error) }
        else {
            //console.log(response.body);
            return callback(null, JSON.parse(response.body))
        }
    });
  };

  function getBusRoutes (callback) {
    var options = {
        'method': 'GET',
        'url': `http://datamall2.mytransport.sg/ltaodataservice/BusRoutes`,
        'headers': {
            'AccountKey': 'b+8pVHKwRkyLKABbXVxmpQ=='
        }
    };
    request(options, function (error, response) {
        if (error) { throw new Error(error) }
        else {
            //console.log(response.body);
            return callback(null, JSON.parse(response.body))
        }
    });
  };

  function getBusStops (callback) {
    var options = {
        'method': 'GET',
        'url': `http://datamall2.mytransport.sg/ltaodataservice/BusStops`,
        'headers': {
            'AccountKey': 'b+8pVHKwRkyLKABbXVxmpQ=='
        }
    };
    request(options, function (error, response) {
        if (error) { throw new Error(error) }
        else {
            //console.log(response.body);
            return callback(null, JSON.parse(response.body))
        }
    });
  };

module.exports = getBusArrival;