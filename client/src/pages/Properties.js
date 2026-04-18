import { useEffect, useState } from "react";
import API from "../services/api";
import "../css/properties.css";
import PropertyCard from "../components/PropertyCard";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get("/properties")
      .then(res => setProperties(res.data))
      .catch(err => console.log(err));
  }, []);

  // Filter properties by location
  const filteredProperties = properties.filter(property =>
    property.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="properties">
      <h2>Available Properties</h2>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      {/* 🏘️ Property Grid */}
      <div className="grid">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No properties found</p>
        )}
      </div>
    </div>
  );
}

export default Properties;