import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#1a365d",
        color: "#e2e8f0",
        minHeight: "100vh"
      }}
    >
      <h2 style={{ color: "#63b3ed" }}>Contact Us</h2>

      <p>
        Tell us about your business and our team will help you generate more leads.
      </p>

      <p>
        <strong>Prime Reach Solutions</strong>
      </p>

      <p>Email: primereachsolutions23@gmail.com</p>

      <p>Website: primereachsolutions.com</p>

      <p>
        Our team will get back to you within 24 hours.
      </p>

      <p>Let us grow your business together.</p>

      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "30px",
          color: "#63b3ed",
          fontWeight: "bold"
        }}
      >
        Back to Home
      </Link>
    </motion.section>
  );
}