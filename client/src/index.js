import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppNavBar from "./components/navbar";
import MapRoute from "./components/mapRoute";
import HelpComponent from "./components/HelpComponent";
import SearchBar from "./components/searchbar";
import HomeComponent from "./components/HomeComponent";
import TrafficComponent from "./components/TrafficComponent";
import Footer from "./components/footer";
import MapComponent from "./components/MapComponent"; // Import MapComponent
import FAQComponent from "./components/FAQComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<HomeComponent />} /> {/* Home route */}
        <Route path="/traffic" element={<TrafficComponent />} />{" "}
        {/* Traffic route */}
        <Route path="/help" element={<HelpComponent />} /> {/* Help route */}
        {/* Map routes */}
        <Route path="/map/east-west" element={<MapComponent mapId="3.1" />} />
        <Route path="/map/north-south" element={<MapComponent mapId="3.2" />} />
        <Route path="/map/north-east" element={<MapComponent mapId="3.3" />} />
        <Route path="/map/circle" element={<MapComponent mapId="3.4" />} />
        <Route path="/map/downtown" element={<MapComponent mapId="3.5" />} />
        <Route
          path="/map/thomson-east-coast"
          element={<MapComponent mapId="3.6" />}
        />
        <Route path="/map/full" element={<MapComponent mapId="3.7" />} />
        <Route path="/help" element={<HelpComponent />} />
        <Route path="/faq" element={<FAQComponent />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <AppNavBar />
    <MapRoute />
=======
    <App />
    <SearchBar />
>>>>>>> main
    <Footer />
  </React.StrictMode>
);
