import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Menu Button */}
<div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>

<button
onClick={() => setMenuOpen(!menuOpen)}
style={{
fontSize: "30px",
background: "none",
border: "none",
cursor: "pointer"
}}
> 
☰
</button>

{menuOpen && (
<div
style={{
background: "white",
padding: "20px",
boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
borderRadius: "10px",
marginTop: "10px"
}}
>

<p><a href="#about">About Us</a></p>
<p><a href="#contact">Contact Us</a></p>
<p><a href="#policy">Privacy Policy</a></p>
<p><a href="#terms">Terms & Conditions</a></p>

</div>
)}

</div>
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#f8f9fa",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "40px", marginBottom: "20px" }}
        >
          Grow Your Business with Professional Cold Calling & Lead Generation
        </motion.h1>

        <p
          style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto 30px" }}
        >
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

        <button
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "12px",
            border: "none",
            background: "black",
            color: "white",
            cursor: "pointer",
            marginTop: "20px",
          }}
          onClick={() =>
            (window.location.href =
              "https://calendly.com/primereachsolutions23/30min")
          }
        >
          Book a Free Consultation
        </button>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>Why Choose Us</h2>

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

      {/* Services Section */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>Our Services</h2>

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

      {/* Industries */}
      <section style={{ padding: "80px 20px", textAlign: "center", background:"#f8f9fa" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
          Industries We Work With
        </h2>

        <p>• Real Estate</p>
        <p>• Marketing Agencies</p>
        <p>• SaaS Companies</p>
        <p>• Home Services</p>
        <p>• Insurance</p>
        <p>• Consulting Businesses</p>
      </section>

      {/* How It Works */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>How It Works</h2>

        <p>
          <strong>Step 1 – Consultation</strong>
        </p>
        <p>We understand your business, target audience, and goals.</p>

        <p>
          <strong>Step 2 – Campaign Setup</strong>
        </p>
        <p>Our team prepares scripts, call lists, and outreach strategies.</p>

        <p>
          <strong>Step 3 – Outreach & Lead Generation</strong>
        </p>
        <p>We start contacting prospects and generating leads for your business.</p>

        <p>
          <strong>Step 4 – Appointment Booking</strong>
        </p>
        <p>
          Qualified leads are scheduled directly with your sales team.
        </p>
      </section>

      {/* Packages */}
      <section style={{ padding: "80px 20px", textAlign: "center", background:"#f8f9fa" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>Our Packages</h2>

        <div
          style={{
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "300px",
              padding: "30px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
              borderRadius: "15px",
            }}
          >
            <h3>Appointment Setter</h3>
            <p>
              <strong>$10 per hour / per agent</strong>
            </p>
            <p>✔️Dialer Included</p>
            <p>✔️Professional Trainer</p>
            <p>✔️Dedicated Team Leader</p>
            <p>✔️Experienced agents</p>
            <p>✔️Quality Assurance</p>
            <p>✔️Daily reports</p>

            <button
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "black",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() =>
                (window.location.href =
                  "https://calendly.com/primereachsolutions23/30min")
              }
            >
              Set Appointment
            </button>
          </div>

          <div
            style={{
              width: "300px",
              padding: "30px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
              borderRadius: "15px",
            }}
          >
            <h3>Cold Caller</h3>
            <p>
              <strong>$7 per hour / per agent</strong>
            </p>
            <p>✔️Dialer Included</p>
            <p>✔️Professional Trainer</p>
            <p>✔️Dedicated Team Leader</p>
            <p>✔️Experienced agents</p>
            <p>✔️Quality Assurance</p>
            <p>✔️Daily reports</p>

            <button
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "black",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() =>
                (window.location.href =
                  "https://calendly.com/primereachsolutions23/30min")
              }
            >
              Set Appointment
            </button>
          </div>
        </div>
      </section>
      <section id="about" style={{ padding: "80px 20px", textAlign: "center" }}>
<h2>About Us</h2>

<p>
Prime Reach Solutions is a results-driven outsourcing company specializing in cold calling and lead generation services for businesses across the United States.
</p>

<p>
Our mission is simple: help companies reach more potential customers, generate qualified leads, and grow faster without the high cost of building an in-house sales team.
</p>

<p>
We provide trained agents with excellent English communication skills who represent your business professionally while engaging prospects and booking qualified appointments.
</p>

<p>• Cold Calling</p>
<p>• Lead Generation</p>
<p>• Appointment Setting</p>
<p>• Customer Outreach</p>

<p>
Our team works with dedication and proven scripts to ensure every call brings your business closer to its next customer.
</p>

<p>
We believe every conversation is an opportunity — and we make sure it counts.
</p>
</section>
<section id="contact" style={{ padding: "80px 20px", textAlign: "center", background:"#f8f9fa" }}>
<h2>Contact Us</h2>

<p>We’d love to hear about your business and how we can help you generate more leads.</p>

<p><strong>Prime Reach Solutions</strong></p>

<p>Email: primereachsolutions23@gmail.com</p>

<p>Website: primereachsolutions.com</p>

<p>
Or simply fill out the contact form and one of our team members will get back to you within 24 hours.
</p>

<p>Let’s grow your business together.</p>
</section>
<section id="policy" style={{ padding: "80px 20px", textAlign: "center" }}>
<h2>Privacy Policy</h2>

<p>
Prime Reach Solutions respects your privacy and is committed to protecting your personal information.
</p>

<p>
We collect only the information necessary to communicate with you and provide our services. This may include your name, email address, company name, and phone number.
</p>

<p>
Your information will never be sold, rented, or shared with third parties without your consent, except when required by law.
</p>

<p>
We use industry standard security measures to protect your data and ensure a safe experience when interacting with our website.
</p>
</section>
<section id="terms" style={{ padding: "80px 20px", textAlign: "center", background:"#f8f9fa" }}>
<h2>Terms & Conditions</h2>

<p>
By using this website, you agree to the following terms and conditions.
</p>

<p>
Prime Reach Solutions provides cold calling and lead generation services intended to support business growth.
</p>

<p>
While we strive to deliver high-quality leads and professional communication, results may vary depending on industry and campaign strategy.
</p>

<p>
All content on this website including text, branding, and materials is the property of Prime Reach Solutions and may not be copied without permission.
</p>

<p>
We reserve the right to update or modify these terms at any time.
</p>
</section>

      {/* Footer */}
      <footer
        style={{ textAlign: "center", padding: "30px", background: "#f1f1f1" }}
      >
        ©️ 2023 PrimeReach Solutions. All rights reserved.
      </footer>
    </div>
  );
}