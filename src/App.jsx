import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
    <div style={{ fontFamily: "Arial, sans-serif", color: "black" }}>
      {/* Menu Button */}

      <div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "30px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "black",
          }}
        >
          ☰
        </button>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "black",
              padding: "20px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <p>
              <Link to="/about" style={{ color: "white" }}>
                About Us
              </Link>
            </p>
            <p>
              <Link to="/contact" style={{ color: "white" }}>
                Contact Us
              </Link>
            </p>
            <p>
              <Link to="/policy" style={{ color: "white" }}>
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link to="/terms" style={{ color: "white" }}>
                Terms & Conditions
              </Link>
            </p>
          </motion.div>
        )}
      </div>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#1a2a44",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "40px", marginBottom: "20px", color: "#adb5bd" }}
        >
          Grow Your Business with Professional Cold Calling & Lead Generation
        </motion.h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto 30px",
            color: "#adb5bd",
          }}
        >
          At PrimeReach Solutions, we help businesses connect with potential
          customers through targeted cold calling and high quality lead
          generation. Our trained agents represent your brand professionally,
          reach the right prospects, and book qualified appointments so your
          sales team can focus on closing deals.
        </p>

        <p style={{ color: "#adb5bd" }}>✔ Professional Cold Calling</p>
        <p style={{ color: "#adb5bd" }}>✔ Targeted Lead Generation</p>
        <p style={{ color: "#adb5bd" }}>✔ Appointment Setting</p>
        <p style={{ color: "#adb5bd" }}>✔ Cost Effective Outsourcing</p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "12px",
            border: "none",
            background: "#1a2a44",
            color: "#adb5bd",
            cursor: "pointer",
            marginTop: "20px",
          }}
          onClick={() =>
            (window.location.href =
              "https://calendly.com/primereachsolutions23/30min")
          }
        >
          Book a Free Consultation
        </motion.button>
      </section>

      {/* Why Choose Us */}

      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#adb5bd",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>

        <p>
          <strong>Experienced Agents</strong>
        </p>

        <p>
          Our trained agents communicate professionally with prospects and
          represent your brand with confidence.
        </p>

        <p>
          <strong>Cost Effective Solution</strong>
        </p>

        <p>
          Hiring an in-house sales team is expensive. We provide skilled agents
          at a fraction of the cost.
        </p>

        <p>
          <strong>Consistent Lead Flow</strong>
        </p>

        <p>
          We generate qualified leads and schedule appointments to keep your
          sales pipeline full.
        </p>

        <p>
          <strong>Flexible Campaigns</strong>
        </p>

        <p>
          Our services can be customized to fit startups and established
          businesses.
        </p>
      </section>

      {/* Services */}

      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#6c757d",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>

        <p>
          <strong>Cold Calling</strong>
        </p>
        <p>
          We contact targeted prospects, introduce your services, and identify
          interested customers.
        </p>

        <p>
          <strong>Lead Generation</strong>
        </p>
        <p>
          Our team researches and finds potential clients that match your ideal
          customer profile.
        </p>

        <p>
          <strong>Appointment Setting</strong>
        </p>
        <p>
          We book qualified meetings directly with decision makers for your
          sales team.
        </p>
      </section>

      {/* Packages */}

      <section
  style={{
    padding: "80px 20px",
    textAlign: "center",
    background: "#adb5bd",
  }}
>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Our Packages
  </motion.h2>
</section>

      {/* Footer */}

      <footer
        style={{ textAlign: "center", padding: "30px", background: "#6c757d" }}
      >
        ©️ 2023 PrimeReach Solutions. All rights reserved.
      </footer>

      <Routes>
  <Route path="/" element={<div></div>} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/policy" element={<Policy />} />
  <Route path="/terms" element={<Terms />} />
</Routes>

    </div>
    </Router>
  );
  }