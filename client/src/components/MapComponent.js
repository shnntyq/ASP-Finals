import React from "react";

// Import the images from the assets folder
import eastWest from "../assets/east-west.png";
import northSouth from "../assets/north-south.png";
import northEast from "../assets/north-east.png";
import circle from "../assets/circle.png";
import downtown from "../assets/downtown.png";
import thomsonEastCoast from "../assets/thomson-east-coast.png";
import fullMap from "../assets/full-map.png";

const MapComponent = ({ mapId }) => {
  const imageUrls = {
    3.1: eastWest, // Local file for East-West
    3.2: northSouth, // Local file for North-South
    3.3: northEast, // Local file for North-East
    3.4: circle, // Local file for Circle
    3.5: downtown, // Local file for Downtown
    3.6: thomsonEastCoast, // Local file for Thomson-East Coast
    3.7: fullMap, // Local file for Full Map
  };

  return (
    <div>
      <img
        src={imageUrls[mapId]}
        width="1300px"
        height="780px"
        style={{ marginLeft: "106px", marginTop: "20px" }}
        alt={`Map ${mapId}`}
      />
    </div>
  );
};

export default MapComponent;
