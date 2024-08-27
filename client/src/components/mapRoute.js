import SearchBar from "./searchbar";
import MapComponent from "./map";
import axios from "axios";
import React, { useState } from "react";

function MapRoute() {
  const url = "http://localhost:3001/location";
  const [data, setData] = useState({
    curr_location: "",
    dest_location: "",
    mode: "",
  });

  const [result, setResult] = useState({});

  async function submit(e) {
    e.preventDefault();
    const res = await axios.post(url, { loc: data });
    setResult(res?.data);
  }

  function handle(e) {
    const newData = { ...data };

    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <>
      <SearchBar data={data} submit={submit} handle={handle} />
      <MapComponent result={result} />
    </>
  );
}

export default MapRoute;
