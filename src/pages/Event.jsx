import React from 'react';
import '../styles/Event.css';

function Events() {
  const events = [
    {
      id: 1,
      title: "WEDDING CELEBRATIONS",
      price: "$899",
      description:
        "Celebrate your big day with elegance. Our wedding packages include curated menus, décor, and flawless coordination to make every moment unforgettable.",
      features: [
        "Customized wedding menu planning",
        "Elegant décor & floral setup",
        "Dedicated wedding coordinator",
        "Premium multi-course dining",
      ],
    },
    {
      id: 2,
      title: "PRIVATE PARTIES",
      price: "$289",
      description:
        "Whether it's a birthday, anniversary, or private dinner, our spaces and tailored menus make every occasion memorable and stress-free.",
      features: [
        "Exclusive private dining zones",
        "Customizable themed décor",
        "Professional serving staff",
        "Curated music & ambiance",
      ],
    },
    {
      id: 3,
      title: "BUSINESS EVENTS",
      price: "$499",
      description:
        "Host successful meetings and corporate gatherings with our seamless service, tasteful cuisine, and a sophisticated setting.",
      features: [
        "Professional meeting arrangements",
        "Audio-visual setup available",
        "Corporate dining packages",
        "On-site event coordinator",
      ],
    },
  ];

  return (
    <section id="events" className="events-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">OUR EVENTS</span>
          <h2 className="section-title">
            Make Every <span className="highlight">Moment Special</span>
          </h2>
          <p className="section-subtitle">
            From intimate gatherings to grand celebrations — we create events that leave lasting impressions.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-price">{event.price}</div>
              </div>

              <div className="event-content">
                <p className="event-description">{event.description}</p>

                <div className="event-features">
                  <h4 className="features-title">What's Included</h4>
                  <ul className="features-list">
                    {event.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <span className="feature-icon">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}

export default Events;
