import React, { useState, useEffect } from 'react';
import '../styles/Menu.css';

// Import your menu item images
import menu1 from '../assets/menu-1.png';
import menu2 from '../assets/menu-2.png';
import menu3 from '../assets/menu-3.png';
import menu4 from '../assets/menu-4.png';
import menu5 from '../assets/menu-5.png'; 
import menu6 from '../assets/menu-6.png';
import menu7 from '../assets/menu-7.png';
import menu8 from '../assets/menu-8.png';
import menu9 from '../assets/menu-9.png';
import menu10 from '../assets/menu-10.png';
import menu11 from '../assets/menu-11.png';


 
function Menu() {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Menu Data without starters
  const menuItems = {
    breakfast: [
      { id: 1, name: "Classic Pancakes", description: "Fluffy buttermilk pancakes served with maple syrup and butter", price: "$9.95", image: menu6 },
      { id: 2, name: "Eggs Benedict", description: "Poached eggs on English muffins with ham and hollandaise sauce", price: "$12.95", image: menu2 },
      { id: 3, name: "Avocado Toast", description: "Sourdough toast with smashed avocado, cherry tomatoes, and microgreens", price: "$10.95", image: menu5 },
      { id: 4, name: "Breakfast Burrito", description: "Scrambled eggs, cheese, and sausage wrapped in a flour tortilla", price: "$11.95", image: menu4 },
      { id: 5, name: "New Breakfast Dish", description: "Tasty breakfast addition with fresh ingredients", price: "$8.95", image: menu11 } // New menu
    ],
    lunch: [
      { id: 1, name: "Grilled Chicken Salad", description: "Fresh greens with grilled chicken, vegetables, and house dressing", price: "$14.95", image: menu1 },
      { id: 2, name: "Gourmet Burger", description: "Angus beef patty with cheese, lettuce, tomato, and special sauce", price: "$16.95", image: menu7 },
      { id: 3, name: "Pasta Carbonara", description: "Spaghetti with creamy sauce, pancetta, and parmesan cheese", price: "$15.95", image: menu3 },
      { id: 4, name: "Club Sandwich", description: "Triple-decker sandwich with turkey, bacon, lettuce, and tomato", price: "$13.95", image: menu8 },
      { id: 5, name: "New Lunch Dish", description: "Delicious new lunch item to satisfy your cravings", price: "$12.95", image: menu5 } // New menu
    ],
    dinner: [
      { id: 1, name: "Grilled Salmon", description: "Atlantic salmon with lemon butter sauce and seasonal vegetables", price: "$24.95", image: menu9 },
      { id: 2, name: "Filet Mignon", description: "8oz tender beef filet with red wine reduction and mashed potatoes", price: "$32.95", image: menu2 },
      { id: 3, name: "Vegetable Risotto", description: "Creamy arborio rice with seasonal vegetables and parmesan", price: "$18.95", image: menu10 },
      { id: 4, name: "Herb Crusted Chicken", description: "Chicken breast with herb crust, roasted potatoes, and vegetables", price: "$22.95", image: menu4 },
      { id: 5, name: "New Dinner Dish", description: "A delightful dinner addition to end your day perfectly", price: "$20.95", image: menu5 } // New menu
    ]
  };

  // Testimonials Data
  const testimonials = [
    { id: 1, name: "Sarah Johnson", role: "Food Blogger", rating: 5, text: "The dining experience at CraveCorner is exceptional! Every dish is crafted with perfection and the service is outstanding." },
    { id: 2, name: "Michael Chen", role: "Regular Customer", rating: 5, text: "As someone who dines here weekly, I can confidently say CraveCorner never disappoints. The consistency in quality is amazing." },
    { id: 3, name: "Emily Rodriguez", role: "First-time Visitor", rating: 4, text: "Wonderful first experience! The grilled salmon was cooked perfectly and the staff was incredibly attentive." },
    { id: 4, name: "David Thompson", role: "Business Owner", rating: 5, text: "Perfect spot for business lunches. The professional service combined with exquisite food makes every meeting enjoyable." }
  ];

  // Auto-slide testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {/* Menu Header */}
        <div className="section-header text-center">
          <span className="section-tag">OUR MENU</span>
          <h2 className="section-title">
            CHECK OUR <span className="highlight">CRAVE MENU</span>
          </h2>
        </div>

        {/* Menu Categories */}
        <div className="menu-categories">
          {['breakfast', 'lunch', 'dinner'].map((category) => (
            <button 
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="menu-items-grid">
          {menuItems[activeCategory].map((item, index) => (
            <div key={item.id} className={`menu-item-wrapper ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="menu-item">
                {index % 2 === 0 ? (
                  <>
                    <div className="menu-item-image"><img src={item.image} alt={item.name} /></div>
                    <div className="menu-item-content">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-description">{item.description}</p>
                      <div className="item-price">{item.price}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="menu-item-content">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-description">{item.description}</p>
                      <div className="item-price">{item.price}</div>
                    </div>
                    <div className="menu-item-image"><img src={item.image} alt={item.name} /></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="menu-cta">
          <div className="cta-content">
            <h3>Crave Something Special?</h3>
            <p>Book your table today and experience the best dining in town</p>
            <button className="btn-book-now">Book a Table</button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <div className="section-header text-center">
            <span className="section-tag">TESTIMONIALS</span>
            <h2 className="section-title">
              WHAT ARE THEY <span className="highlight">SAYING ABOUT US</span>
            </h2>
          </div>
          <div className="testimonials-container">
            <div className="testimonial-content">
              <div className="rating">
                {'★'.repeat(testimonials[currentTestimonial].rating)}
                {'☆'.repeat(5 - testimonials[currentTestimonial].rating)}
              </div>
              <blockquote>"{testimonials[currentTestimonial].text}"</blockquote>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                <span className="author-role">{testimonials[currentTestimonial].role}</span>
              </div>
            </div>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
