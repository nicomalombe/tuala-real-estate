import { Link } from "react-router-dom";
import "../css/properties.css";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />

      <div className="property-info">
        <h3>{property.title}</h3>
        <p className="location">{property.location}</p>
        <p className="price">KES {property.price.toLocaleString()}</p>

        <Link to={`/property/${property._id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;