import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sectionStyle = (bg) => ({
    padding: "80px 20px",
    textAlign: "center",
    background: bg || "#1a2a44",
    color: bg === "#d7dce2" ? "black" : "#d7dce2",
    minHeight: "100vh",
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "black" }}>
      {/* Menu Button */}
      <div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  style={{
    fontSize: "30px",
    background: "#d7dce2",
    border: "2px solid black",
    borderRadius: "14px",
    cursor: "pointer",
    color: "black",
    padding: "10px 16px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
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
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <p
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => handleNavClick("about")}
            >
              About Us
            </p>
            <p
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => handleNavClick("contact")}
            >
              Contact Us
            </p>
            <p
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => handleNavClick("policy")}
            >
              Privacy Policy
            </p>
            <p
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => handleNavClick("terms")}
            >
              Terms & Conditions
            </p>
            <p
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => handleNavClick("home")}
            >
              Home
            </p>
          </motion.div>
        )}
      </div>

      {/* Home Section */}
      {activeSection === "home" && (
        <>
          {/* Hero Section */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            style={sectionStyle("#1a2a44")}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ fontSize: "40px", marginBottom: "20px", color: "#d7dce2" }}
            >
              Grow Your Business with Professional Cold Calling & Lead Generation
            </motion.h1>

            <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto 30px" }}>
              At PrimeReach Solutions, we help businesses connect with potential
              customers through targeted cold calling and high quality lead
              generation. Our trained agents represent your brand professionally,
              reach the right prospects, and book qualified appointments so your
              sales team can focus on closing deals.
            </p>

            <p>✔ Professional Cold Calling</p>
            <p>✔ Targeted Lead Generation</p>
            <p>✔ Appointment Setting</p>
            <p>✔ Cost Effective Outsourcing</p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                padding: "15px 30px",
                fontSize: "18px",
                borderRadius: "12px",
                border: "none",
                background: "#d7dce2",
                color: "black",
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
          </motion.section>

          {/* Why Choose Us Section */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            style={sectionStyle("#d7dce2")}
          >
            <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "black" }}>
              Why Choose Us
            </h2>
            <p><strong>Experienced Agents</strong></p>
            <p>Our trained agents communicate professionally with prospects and represent your brand with confidence.</p>

            <p><strong>Cost Effective Solution</strong></p>
            <p>Hiring an in-house sales team is expensive. We provide skilled agents at a fraction of the cost.</p>

            <p><strong>Consistent Lead Flow</strong></p>
            <p>We generate qualified leads and schedule appointments to keep your sales pipeline full.</p>

            <p><strong>Flexible Campaigns</strong></p>
            <p>Our services can be customized to fit startups and established businesses.</p>
          </motion.section>

          {/* Packages Section */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            style={sectionStyle("#adb5bd")}
          >
            <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "black" }}>
              Our Packages
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "30px",
                marginTop: "30px",
              }}
            >
              {/* Package 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "300px",
                  padding: "30px",
                  borderRadius: "15px",
                  background: "#dfecf7",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
                  color: "black",
                }}
              >
                <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>3 Agents</h3>
                <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>$10/hr</h2>
                <p>✔ Dialer</p>
                <p>✔ Trainer</p>
                <p>✔ Quality</p>
                <p>✔ Team Leader</p>
                <p>✔ Experienced Agents</p>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#28a745",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                  onClick={() =>
                    (window.location.href =
                      "https://calendly.com/primereachsolutions23/30min")
                  }
                >
                  Set Appointment
                </motion.button>
              </motion.div>

              {/* Package 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "300px",
                  padding: "30px",
                  borderRadius: "15px",
                  background: "#1a2a44",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
                  color: "#adb5bd",
                }}
              >
                <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>6 Agents</h3>
                <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>$8/hr</h2>
                <p>✔ Dialer</p>
                <p>✔ Trainer</p>
                <p>✔ Quality</p>
                <p>✔ Team Leader</p>
                <p>✔ Experienced Agents</p>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#28a745",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                  onClick={() =>
                    (window.location.href =
                      "https://calendly.com/primereachsolutions23/30min")
                  }
                >
                  Set Appointment
                </motion.button>
              </motion.div>

              {/* Package 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "300px",
                  padding: "30px",
                  borderRadius: "15px",
                  background: "#dfecf7",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
                  color: "black",
                }}
              >
                <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>10+ Agents</h3>
                <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>$6.5/hr</h2>
                <p>✔ Dialer</p>
                <p>✔ Trainer</p>
                <p>✔ Quality</p>
                <p>✔ Team Leader</p>
                <p>✔ Experienced Agents</p>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#28a745",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                  onClick={() =>
                    (window.location.href =
                      "https://calendly.com/primereachsolutions23/30min")
                  }
                >
                  Set Appointment
                </motion.button>
              </motion.div>
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            style={sectionStyle("#1a2a44")}
          >
            <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#d7dce2" }}>
              Our Services
            </h2>
            <p><strong>Cold Calling</strong></p>
            <p>We contact targeted prospects, introduce your services, and identify interested customers.</p>

            <p><strong>Lead Generation</strong></p>
            <p>Our team researches and finds potential clients that match your ideal customer profile.</p>

            <p><strong>Appointment Setting</strong></p>
            <p>We book qualified meetings directly with decision makers for your sales team.</p>
          </motion.section>
        </>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={sectionStyle("#d7dce2")}
        >
          <h2>About Us</h2>
          <p>Prime Reach Solutions is a results-driven outsourcing company specializing in cold calling and lead generation services for businesses across the United States.</p>
          <p>Our mission is simple: help companies reach more potential customers, generate qualified leads, and grow faster without the high cost of building an in-house sales team.</p>
          <p>We provide trained agents with excellent English communication skills who represent your business professionally while engaging prospects and booking qualified appointments.</p>
          <p>• Cold Calling</p>
          <p>• Lead Generation</p>
          <p>• Appointment Setting</p>
          <p>• Customer Outreach</p>
          <p>Our team works with dedication and proven scripts to ensure every call brings your business closer to its next customer.</p>
          <p>We believe every conversation is an opportunity — and we make sure it counts.</p>
        </motion.section>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={sectionStyle("#1a2a44")}
        >
          <h2 style={{ color: "#d7dce2" }}>Contact Us</h2>
          <p>We'd love to hear about your business and how we can help you generate more leads.</p>
          <p><strong>Prime Reach Solutions</strong></p>
          <p>Email: primereachsolutions23@gmail.com</p>
          <p>Website: primereachsolutions.com</p>
          <p>Or simply fill out the contact form and one of our team members will get back to you within 24 hours.</p>
          <p>Let's grow your business together.</p>
        </motion.section>
      )}

      {/* Policy Section */}
      {activeSection === "policy" && (
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={sectionStyle("#d7dce2")}
        >
          <h2>Privacy Policy</h2>
          <p>Prime Reach Solutions respects your privacy and is committed to protecting your personal information.</p>
          <p>We collect only the information necessary to communicate with you and provide our services. This may include your name, email address, company name, and phone number.</p>
          <p>Your information will never be sold, rented, or shared with third parties without your consent, except when required by law.</p>
          <p>We use industry standard security measures to protect your data and ensure a safe experience when interacting with our website.</p>
        </motion.section>
      )}

      {/* Terms Section */}
      {activeSection === "terms" && (
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={sectionStyle("#1a2a44")}
        >
          <h2 style={{ color: "#d7dce2" }}>Terms & Conditions</h2>
          <p>By using this website, you agree to the following terms and conditions.</p>
          <p>Prime Reach Solutions provides cold calling and lead generation services intended to support business growth.</p>
          <p>While we strive to deliver high-quality leads and professional communication, results may vary depending on industry and campaign strategy.</p>
          <p>All content on this website including text, branding, and materials is the property of Prime Reach Solutions and may not be copied without permission.</p>
          <p>We reserve the right to update or modify these terms at any time.</p>
        </motion.section>
      )}

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          background: "#6c757d",
          color: "black",
        }}
      >
        &copy; 2023 PrimeReach Solutions. All rights reserved.
      </footer>
    </div>
  );
}