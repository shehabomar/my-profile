import React from 'react';
import './style.css';
function Home() {
    return (
      <div className="home">
          <div className="container">
              <div className="home-information">
                  <h2 className="home-title margin-bottom">Omar Shehab</h2>
                  <h4 className="home-info">Creative Director</h4>
                  <p className="home-desc">
                      I am a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                  </p>
                  <button className="home-btn">Let's Begin</button>
              </div>
          </div>
      </div>
    );
}
export default Home;