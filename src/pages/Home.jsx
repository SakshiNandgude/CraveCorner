import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img from "../assets/hero-img.png";
import Navbar from '../components/Navbar';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <div className='home-section'id='home'>
        <div className='container'>
          <div className='row align-items-center min-vh-100'>
            <div className='col-lg-6'>
              <div className='hero-content'>
                <h1 className='hero-title'>
                  ENJOY YOUR HEALTHY<br />
                  <span className='highlight'>DELICIOUS FOOD</span>
                </h1>
                 <p className='hero-description'>
    Welcome to CraveCorner — where taste meets health.<br />
    Fresh ingredients, delicious recipes, and a cozy dining experience await you!
                 </p>
                <div className='hero-buttons'>
                  <button className='btn btn-primary btn-book'>Book a Table</button>
                  <a href='#watch' className='btn-watch'>
                    <span className='play-icon'>
                      <i className='fas fa-play'></i>
                    </span>
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='hero-image'>
                <img src={img} alt="Delicious Food" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;