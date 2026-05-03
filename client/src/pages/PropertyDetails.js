import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import "../css/propertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    API.get(`/properties/${id}`)
      .then(res => {
        setProperty(res.data);
        setMainImage(res.data.images?.[0] || res.data.image);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!property) {
    return <h2 className="loading">Loading property...</h2>;
  }

  const phoneNumber = "254794334958";

  const message = `Hello, I'm interested in this property:
🏡 ${property.title}
📍 ${property.location}
💰 KES ${property.price}`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="details">
      <div className="details-container">

        {/* IMAGE GALLERY */}
        <div className="details-image">
          <img src={mainImage} alt={property.title} className="main-img" />

          <div className="thumbnail-container">
            {(property.images || [property.image]).map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                className="thumbnail"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className="details-info">
          <h2>{property.title}</h2>

          <p className="price">
            KES {property.price.toLocaleString()}
          </p>

          <p className="location">📍 {property.location}</p>

          <p className="description">{property.description}</p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="contact-btn">
              📱 Contact via WhatsApp
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}

export default PropertyDetails;