import "../css/about.css";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h2>About Tuala Real Estate</h2>

        <p className="intro">
          Tuala Real Estate is a trusted property company dedicated to helping
          individuals and families find their dream homes across Kenya.
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              We specialize in residential and commercial property listings,
              offering modern apartments, family homes, and luxury villas in
              prime locations.
            </p>

            <h3>Our Mission</h3>
            <p>
              Our mission is to provide reliable, affordable, and high-quality
              real estate services to our clients with transparency and trust.
            </p>

            <h3>Why Choose Us</h3>
            <ul>
              <li>✔ Wide range of verified properties</li>
              <li>✔ Trusted and experienced agents</li>
              <li>✔ Affordable pricing options</li>
              <li>✔ Excellent customer support</li>
            </ul>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Real Estate"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;