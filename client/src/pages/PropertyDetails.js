import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import "../css/propertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    API.get(`/properties/${id}`)
      .then(res => setProperty(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!property) {
    return <h2 className="loading">Loading property...</h2>;
  }

  // ✅ WhatsApp Integration
  const phoneNumber = "254794334958";

  const message = `Hello, I'm interested in this property:
🏡 ${property.title}
📍 ${property.location}
💰 KES ${property.price}`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="details">
      <div className="details-container">

        {/* Image Section */}
        <div className="details-image">
          <img src={property.image} alt={property.title} />
          <span className="badge">For Sale</span>
        </div>

        {/* Info Section */}
        <div className="details-info">
          <h2>{property.title}</h2>

          <p className="price">
            KES {property.price.toLocaleString()}
          </p>

          <p className="location">📍 {property.location}</p>

          <p className="description">{property.description}</p>

          {/* WhatsApp Button */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="contact-btn">
              📱 Contact agent via WhatsApp
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}

export default PropertyDetails;