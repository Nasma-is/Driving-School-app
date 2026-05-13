// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
            <h1>Driving Lessons in Bristol</h1>
            <p>Automatic & Manual • DVSA Certified Instructors<br/>Avonmouth & Kingswood Test Centres</p>
            <Link to="/contact" className="cta">Book a Lesson</Link>
        </div>
      </section>

      {/* BENEFITS */}
    <section className="benefits">
      <h2>Why Choose Diverse Driving School</h2>
      <div className="benefit-list minimal">
        <div className="benefit-item">
          <img src="/images/instructor.jpg" alt="DVSA Certified Instructors" />
           <h3>DVSA Certified Instructors</h3>
            <p>All our instructors are fully DVSA approved and experienced in helping learners succeed.</p>
        </div>

        <div className="benefit-item">
           <img src="/images/manual-auto.png" alt="Flexible Lesson Schedules" />
          <h3>Automatic & Manual Options</h3>
          <p>Choose between automatic and manual cars, taught by specialist instructors for each.</p>
        </div>

         <div className="benefit-item">
          <img src="/images/local.jpg" alt="Automatic & Manual Options" />
           <h3>Local Knowledge of Test Centres</h3>
            <p>We know the Bristol test routes, including Avonmouth and Kingswood — giving you a real advantage.</p>
        </div>     
      </div>
    </section>

      {/* OFFERINGS */}
    <section className="lessons">
  <h2>Our Lesson Options</h2>
  <div className="lesson-list">
    <div className="lesson-card normal">
      <div className="lesson-overlay">
        <h3>Normal Lessons</h3>
      </div>
      <p>Flexible 1-hour sessions in automatic or manual cars — perfect for steady learning at your pace.</p>
      <Link to="/contact" className="cta">Book Now</Link>
    </div>

    <div className="lesson-card intensive">
      <div className="lesson-overlay">
        <h3>Intensive Courses</h3>
      </div>
      <p>Learn quickly with focused, back-to-back sessions designed to get you test-ready fast.</p>
      <Link to="/contact" className="cta">Book Now</Link>
    </div>

    <div className="lesson-card block">
      <div className="lesson-overlay">
        <h3>Block Booking</h3>
      </div>
      <p>Save money by booking multiple lessons at once — the best value for consistent learners.</p>
      <Link to="/contact" className="cta">Book Now</Link>
    </div>
  </div>
</section>

      {/* TESTIMONIALS */}
        <section className="reviews-section">
          <h2>What Our Learners Say</h2>
          <p className="reviews-subtitle">Real reviews from students across Bristol</p>

          <div className="reviews-grid">
            
            <div className="review-card">
              <img src="/images/user1.jpg" alt="Student" className="review-img" />
              <div className="stars">★★★★★</div>
              <p>"Amazing instructor! Helped me pass first time."</p>
              <span className="review-author">– Sarah, Avonmouth</span>
            </div>

            <div className="review-card">
              <img src="/images/user2.jpg" alt="Student" className="review-img" />
              <div className="stars">★★★★★</div>
              <p>"Very calm and reassuring. Highly recommend."</p>
              <span className="review-author">– Jamal, Kingswood</span>
            </div>

            <div className="review-card">
              <img src="/images/user3.jpg" alt="Student" className="review-img" />
              <div className="stars">★★★★★</div>
              <p>"Great lessons, flexible schedule, super clear teaching."</p>
              <span className="review-author">– Priya, Bristol</span>
            </div>

          </div>
        </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Ready to Start Your Journey?</h2>
        <Link to="/contact" className="cta">Book Your Lesson Today</Link>
      </section>

    </div>
  );
}

export default Home;

