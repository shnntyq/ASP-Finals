import React from "react";

const MapComponent = ({ mapId }) => {
  const imageUrls = {
    3.1: "https://cdn-cms.pgimgs.com/static/2019/07/east-west-line-ewl.png", // Example image URL for East-West
    3.2: "https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/rail_network/north_south_line/_jcr_content/par/image.img.png/1694749481658.png", // Replace with actual URL for North-South
    3.3: "https://mrtmapsingapore.com/wp-content/uploads/maps/north-east-line-map-2048x1547.png", // Replace with actual URL for North-East
    3.4: "https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/rail_network/circle_line/_jcr_content/par/image_791425922.img.png/1629711597138.png", // Replace with actual URL for Circle
    3.5: "https://mrtmapsingapore.com/wp-content/uploads/maps/downtown-line-map.png", // Replace with actual URL for Downtown
    3.6: "https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/rail_network/thomson_east_coast_line/_jcr_content/par/image.img.png/1580366965678.png", // Replace with actual URL for Thomson-East Coast
    3.7: "https://singaporemrtmaps.com/wp-content/uploads/2023/08/mrt-map-singapore-1030x674.png", // Replace with actual URL for Full Map
  };

  return (
    <div>
      <img
        src={imageUrls[mapId]}
        width="100%"
        height="600px"
        alt={`Map ${mapId}`}
      />
    </div>
  );
};

export default MapComponent;
