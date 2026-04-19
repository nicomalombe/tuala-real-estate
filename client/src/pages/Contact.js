import { useState } from "react";
import API from "../services/api";
import "../css/contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // ✅ NEW

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);      // ✅ start loading
    setStatus("");

    try {
      await API.post("/contact", form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setStatus("Error sending message. Try again.");
    } finally {
      setLoading(false);   // ✅ stop loading
    }
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Have questions or want to book a property? Reach out to us.
        </p>

        {/* ✅ FORM FIRST */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          {/* ✅ BUTTON WITH LOADING */}
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="status">{status}</p>}
        </form>

        {/* ✅ CONTACT INFO NOW BELOW */}
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 794334958</p>
          <p>📧 nicomalombe4@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;