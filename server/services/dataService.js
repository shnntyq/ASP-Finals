const axios = require("axios");
require("dotenv").config();

const accKey = process.env.DATAMALL_API_KEY;

async function getBusArrival(busstopcode, callback) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://datamall2.mytransport.sg/ltaodataservice/v3/BusArrival?BusStopCode=${busstopcode}`,
    headers: {
      AccountKey: accKey,
    },
  };

  await axios
    .request(config)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((error) => {
      console.log(error);
      return callback(error);
    });
}

async function getAllBusServices(callback) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://datamall2.mytransport.sg/ltaodataservice/BusServices",
    headers: {
      AccountKey: accKey,
    },
  };

  await axios
    .request(config)
    .then((response) => {
      return callback(null, response.data);
    })
    .catch((error) => {
      console.log(error);
      return callback(error);
    });
}

async function getBusRoutes(callback) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://datamall2.mytransport.sg/ltaodataservice/BusRoutes",
    headers: {
      AccountKey: accKey,
    },
  };

  await axios
    .request(config)
    .then((response) => {
      return callback(null, response.data);
    })
    .catch((error) => {
      console.log(error);
      return callback(error);
    });
}

async function getBusStops(callback) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://datamall2.mytransport.sg/ltaodataservice/BusStops",
    headers: {
      AccountKey: accKey,
    },
  };

  await axios
    .request(config)
    .then((response) => {
      return callback(null, response.data);
    })
    .catch((error) => {
      console.log(error);
      return callback(error);
    });
}

async function getTrafficIncidents(callback) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents",
    headers: {
      AccountKey: accKey,
      accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  await axios
    .request(config)
    .then((response) => {
      return callback(null, response.data);
    })
    .catch((error) => {
      console.log(error);
      return callback(error);
    });
}

module.exports = {
  getBusArrival,
  getAllBusServices,
  getBusRoutes,
  getBusStops,
  getTrafficIncidents,
};
