import React, { useState, useEffect } from 'react';
import '../styles/Menu.css';

// Breakfast Images
import classicPancakes from '../assets/classicPancakes.png';
import avocadoToast from '../assets/avocadoToast.png';
import vegetableOmelette from '../assets/vegetableOmelette.png';
import fruitParfait from '../assets/fruitParfait.png';
import bananaWaffles from '../assets/bananaWaffles.png';
import greekYogurtBowl from '../assets/greekYogurtBowl.png';
import tofuScramble from '../assets/tofuScramble.png';
import vegetarianBurrito from '../assets/vegetarianBurrito.png';

// Lunch Images
import grilledVegetableSalad from '../assets/grilledVegetableSalad.png';
import paneerWrap from '../assets/paneerWrap.png';
import vegetablePasta from '../assets/vegetablePasta.png';
import capreseSandwich from '../assets/capreseSandwich.png';
import falafelPita from '../assets/falafelPita.png';
import veggieBurger from '../assets/veggieBurger.png';
import paneerButterMasala from '../assets/paneerButterMasala.png';
import mediterraneanGrainBowl from '../assets/mediterraneanGrainBowl.png';

// Dinner Images
import vegetableRisotto from '../assets/vegetableRisotto.png';
import paneerTikka from '../assets/paneerTikka.png';
import stuffedZucchiniBoats from '../assets/stuffedZucchiniBoats.png';
import stuffedBellPeppers from '../assets/stuffedBellPeppers.png';
import vegetarianLasagna from '../assets/vegetarianLasagna.png';
import chickpeaCurry from '../assets/chickpeaCurry.png';
import mushroomStroganoff from '../assets/mushroomStroganoff.png';
import stuffedPastaShells from '../assets/stuffedPastaShells.png';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Menu Items
  const menuItems = {
    breakfast: [
      { id: 1, name: "Classic Pancakes", description: "Fluffy buttermilk pancakes served with maple syrup and butter", price: "$9.95", image: classicPancakes },
      { id: 2, name: "Avocado Toast", description: "Sourdough toast with smashed avocado, cherry tomatoes, and microgreens", price: "$10.95", image: avocadoToast },
      { id: 3, name: "Vegetable Omelette", description: "Three-egg omelette with bell peppers, onions, mushrooms, and cheese", price: "$11.95", image: vegetableOmelette },
      { id: 4, name: "Fruit Parfait", description: "Layers of yogurt, granola, and fresh seasonal fruits", price: "$8.95", image: fruitParfait },
      { id: 5, name: "Banana Waffles", description: "Crispy waffles topped with fresh bananas and chocolate drizzle", price: "$10.95", image: bananaWaffles },
      { id: 6, name: "Greek Yogurt Bowl", description: "Greek yogurt with honey, nuts, and seasonal fruits", price: "$9.95", image: greekYogurtBowl },
      { id: 7, name: "Tofu Scramble", description: "Scrambled tofu with spinach, bell peppers, and spices", price: "$11.95", image: tofuScramble },
      { id: 8, name: "Vegetarian Breakfast Burrito", description: "Scrambled eggs, beans, cheese, and veggies wrapped in a tortilla", price: "$11.50", image: vegetarianBurrito }
    ],
    lunch: [
      { id: 1, name: "Grilled Vegetable Salad", description: "Fresh greens with roasted vegetables, nuts, and house dressing", price: "$12.95", image: grilledVegetableSalad },
      { id: 2, name: "Paneer Wrap", description: "Grilled paneer, lettuce, and tomatoes wrapped in a tortilla", price: "$11.95", image: paneerWrap },
      { id: 3, name: "Vegetable Pasta", description: "Penne pasta with seasonal vegetables and creamy tomato sauce", price: "$13.95", image: vegetablePasta },
      { id: 4, name: "Caprese Sandwich", description: "Fresh mozzarella, tomatoes, and basil on artisan bread", price: "$12.95", image: capreseSandwich },
      { id: 5, name: "Falafel Pita", description: "Crispy falafel balls served in pita with lettuce, tomatoes, and tahini sauce", price: "$12.50", image: falafelPita },
      { id: 6, name: "Veggie Burger", description: "Grilled veggie patty with lettuce, tomato, onion, and cheese", price: "$14.50", image: veggieBurger },
      { id: 7, name: "Paneer Butter Masala with Rice", description: "Soft paneer cubes in creamy tomato gravy served with steamed rice", price: "$13.95", image: paneerButterMasala },
      { id: 8, name: "Mediterranean Grain Bowl", description: "Quinoa, chickpeas, roasted veggies, and hummus", price: "$13.50", image: mediterraneanGrainBowl }
    ],
    dinner: [
      { id: 1, name: "Vegetable Risotto", description: "Creamy arborio rice with seasonal vegetables and parmesan", price: "$18.95", image: vegetableRisotto },
      { id: 2, name: "Paneer Tikka", description: "Marinated paneer cubes grilled to perfection with spices", price: "$16.95", image: paneerTikka },
      { id: 3, name: "Stuffed Zucchini Boats", description: "Zucchini stuffed with quinoa, veggies, and herbs", price: "$17.95", image: stuffedZucchiniBoats },
      { id: 4, name: "Stuffed Bell Peppers", description: "Bell peppers stuffed with quinoa, veggies, and cheese", price: "$18.95", image: stuffedBellPeppers },
      { id: 5, name: "Vegetarian Lasagna", description: "Layers of pasta, ricotta, vegetables, and tomato sauce baked to perfection", price: "$19.95", image: vegetarianLasagna },
      { id: 6, name: "Chickpea Curry with Naan", description: "Spicy chickpea curry served with soft naan bread", price: "$16.50", image: chickpeaCurry },
      { id: 7, name: "Mushroom Stroganoff", description: "Sautéed mushrooms in creamy sauce served with eggless noodles", price: "$18.95", image: mushroomStroganoff },
      { id: 8, name: "Spinach & Cheese Stuffed Pasta Shells", description: "Pasta shells stuffed with ricotta and spinach in tomato sauce", price: "$17.95", image: stuffedPastaShells }
    ]
  };

  // Testimonials
  const testimonials = [
    { id: 1, name: "Sarah Johnson", role: "Food Blogger", rating: 5, text: "The dining experience at CraveCorner is exceptional! Every dish is crafted with perfection and the service is outstanding." },
    { id: 2, name: "Michael Chen", role: "Regular Customer", rating: 5, text: "As someone who dines here weekly, I can confidently say CraveCorner never disappoints. The consistency in quality is amazing." },
    { id: 3, name: "Emily Rodriguez", role: "First-time Visitor", rating: 4, text: "Wonderful first experience! The grilled salmon was cooked perfectly and the staff was incredibly attentive." },
    { id: 4, name: "David Thompson", role: "Business Owner", rating: 5, text: "Perfect spot for business lunches. The professional service combined with exquisite food makes every meeting enjoyable." }
  ];

  // Auto-slide testimonials
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
