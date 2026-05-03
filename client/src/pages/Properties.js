import { useEffect, useState } from "react";
import API from "../services/api";
import "../css/properties.css";
import PropertyCard from "../components/PropertyCard";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    API.get("/properties")
      .then(res => setProperties(res.data))
      .catch(err => console.log(err));
  }, []);

  // 🔍 FILTER LOGIC (location + price)
  const filteredProperties = properties.filter(property => {
    const matchLocation = property.location
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchPrice = maxPrice
      ? property.price <= Number(maxPrice)
      : true;

    return matchLocation && matchPrice;
  });

  return (
    <div className="properties">
      <h2>Available Properties</h2>

      {/* 🔍 FILTER SECTION */}
      <div className="filter-container">

        {/* Search */}
        <input
          type="text"
          placeholder="Search by location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Max Price */}
        <input
          type="number"
          placeholder="Max Price (KES)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

      </div>

      {/* 🏘️ Property Grid */}
      <div className="grid">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <p className="no-results">No properties found</p>
        )}
      </div>
    </div>
  );
}

export default Properties;