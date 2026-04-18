import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Find Your Dream Home</h1>
        <p>Explore the best properties in Kenya with Tuala Real Estate</p>

        <Link to="/properties">
          <button className="cta-btn">Browse Properties</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;