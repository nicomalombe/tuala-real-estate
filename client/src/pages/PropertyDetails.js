import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/propertyDetails.css"; 
import API from "../services/api";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    API.get(`/properties/${id}`)
      .then(res => setProperty(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div>
      <h2>{property.title}</h2>
      <img src={property.image} alt={property.title} />
      <p>{property.location}</p>
      <p>KES {property.price}</p>
      <p>{property.description}</p>
    </div>
  );
}

export default PropertyDetails;