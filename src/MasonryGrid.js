import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MasonryGrid.css"

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

  return (
    <div className="masonry">
      {pins.map((pin) => (

        <div className="masonry-item" key={pin.id}>
          <img src={pin.image} alt={pin.title} />
          <p>{pin.title}</p>
        </div>
      ))}
    </div>
  );
}
export default MasonryGrid;