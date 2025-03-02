import React, { useEffect, useState } from "react";
import axios from "axios";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/properties").then((res) => setProperties(res.data));
  }, []);

  return (
    <div>
      <h2>Property Listings</h2>
      {properties.map((property) => (
        <div key={property._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{property.name}</h3>
          <p>{property.description}</p>
          <div>
            {property.images.map((img, index) => (
              <img key={index} src={`http://localhost:5000${img}`} alt="Property" style={{ width: "100px", height: "100px", margin: "5px" }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
