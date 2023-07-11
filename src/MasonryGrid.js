import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MasonryGrid.css"
import Masonry from "react-masonry-css";

function MasonryGrid() {
  const [pins, setPins] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5001/pins");
      console.log(response.data);
      setPins(response.data);
    }
    fetchData();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };


  return (
    <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {pins.map((pin) => (
          <div key={pin.id}>
            <img src={pin.image} alt={pin.title} />
            <p>{pin.title}</p>
          </div>
        ))}
      </Masonry>
  );
}
export default MasonryGrid;