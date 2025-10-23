import React from 'react';
import '../styles/About.css';
import interior_img from "../assets/about_interior.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          {/* Left Content - Text Section */}
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-header">
                <span className="section-tag">ABOUT US</span>
                <h1 className="section-title">
                  LEARN MORE <span className="highlight">ABOUT CRAVECORNER</span>
                </h1>
              </div>
              
              <p className="about-description">
                At CraveCorner, we believe in creating unforgettable dining experiences through 
                exceptional food, warm hospitality, and a welcoming atmosphere that feels like home.
              </p>

              <div className="features-checklist">
                <div className="check-item">
                  <div className="check-icon">
                    <span role="img" aria-label="Ingredients">{"🥕"}</span>
                  </div>
                  <div className="check-text">
                    Premium ingredients carefully selected from local farms and trusted suppliers
                  </div>
                </div>
                
                <div className="check-item">
                  <div className="check-icon">
                    <span role="img" aria-label="Passion">{"❤️"}</span>
                  </div>
                  <div className="check-text">
                    Expert chefs combining traditional recipes with modern culinary techniques
                  </div>
                </div>
                
                <div className="check-item">
                  <div className="check-icon">
                    <span role="img" aria-label="Hygiene">{"🧼"}</span>
                  </div>
                  <div className="check-text">
                    Commitment to food safety and hygiene following international quality standards
                  </div>
                </div>
              </div>

              <p className="about-conclusion">
                Our team of passionate chefs and friendly staff work together to ensure every visit 
                to CraveCorner is memorable. We take pride in serving dishes that not only satisfy 
                your cravings but also create lasting memories with every bite.
              </p>

              <div className="cta-section">
                <button className="btn btn-primary btn-book-table">
                  <i className="fas fa-calendar-alt"></i>
                  Book a Table
                </button>
                <div className="phone-number">
                  <i className="fas fa-phone"></i>
                  +91 9087654321
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="col-lg-6">
            <div className="image-section">
              <div className="restaurant-image-wrapper">
                <img 
                  src={interior_img} 
                  alt="CraveCorner Restaurant Interior"
                  className="restaurant-main-image"
                />
              </div>
              
              <div className="image-caption">
                <h3 className="caption-title">Experience the CraveCorner Difference</h3>
                <p className="caption-text">
                  Our restaurant combines modern elegance with warm hospitality to create 
                  the perfect setting for your dining experience. From intimate dinners to 
                  family celebrations, we provide the ideal atmosphere for every occasion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Feature Cards - Full Width */}
        <div className="row full-width-cards-section">
          <div className="col-12">
            <div className="feature-cards-row">
              {/* Card 1: Premium Quality Ingredients */}
              <div className="feature-card-full">
                <div className="card-full-content">
                  <div className="full-card-icon">
                    <span role="img" aria-label="Ingredients">{"🥕"}</span>
                  </div>
                  <div className="full-card-text">
                    <h3 className="full-card-title">Premium Quality Ingredients</h3>
                    <p className="full-card-description">
                      We source only the finest ingredients to ensure every dish meets our high standards of quality and taste.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Made with Passion */}
              <div className="feature-card-full">
                <div className="card-full-content">
                  <div className="full-card-icon">
                    <span role="img" aria-label="Passion">{"❤️"}</span>
                  </div>
                  <div className="full-card-text">
                    <h3 className="full-card-title">Made with Passion</h3>
                    <p className="full-card-description">
                      Every dish is prepared with love and attention to detail, reflecting our commitment to excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Expert Culinary Team */}
              <div className="feature-card-full">
                <div className="card-full-content">
                  <div className="full-card-icon">
                    <span role="img" aria-label="Chef Team">{"👨‍🍳"}</span>
                  </div>
                  <div className="full-card-text">
                    <h3 className="full-card-title">Expert Culinary Team</h3>
                    <p className="full-card-description">
                      Our skilled chefs bring years of experience and passion to create exceptional dining experiences.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
