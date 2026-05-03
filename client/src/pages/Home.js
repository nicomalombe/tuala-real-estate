import { useEffect, useState } from "react";
import API from "../services/api";
import "../css/home.css";
import PropertyCard from "../components/PropertyCard";
import { Link } from "react-router-dom";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    API.get("/properties")
      .then(res => setProperties(res.data.slice(0, 3))) // show only 3
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home">

      {/* 🏠 HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Property</h1>
          <p>Trusted real estate solutions across Kenya</p>

          <Link to="/properties">
            <button className="hero-btn">Browse Properties</button>
          </Link>
        </div>
      </section>

      {/* 📊 STATS */}
      <section className="stats">
        <div className="stat">
          <h2>100+</h2>
          <p>Properties Listed</p>
        </div>

        <div className="stat">
          <h2>50+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat">
          <h2>20+</h2>
          <p>Locations Covered</p>
        </div>
      </section>

      {/* ⭐ FEATURED PROPERTIES */}
      <section className="featured">
        <h2>Featured Properties</h2>

        <div className="grid">
          {properties.map(property => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>

        <Link to="/properties">
          <button className="view-all">View All Properties</button>
        </Link>
      </section>

      {/* 🚀 CALL TO ACTION */}
      <section className="cta">
        <h2>Looking to Buy or Sell Property?</h2>
        <p>Contact us today and let us help you find the best deals</p>

        <Link to="/contact">
          <button className="cta-btn">Contact Us</button>
        </Link>
      </section>

    </div>
  );
}

export default Home;