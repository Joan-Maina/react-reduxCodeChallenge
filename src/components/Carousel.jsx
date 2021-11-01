import React from 'react'
import trialImage1 from '../images/rangeRover1.JPG';
import trialImage2 from '../images/rangeRover2.JPG';
import trialImage3 from '../images/passat1.JPG';
import trialImage4 from '../images/passat2.JPG';
import '../styles/Carousel.css';

function Carousel() {
    return (
    
          <div className="hero-section">
            <div className="hero-text">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>
            
                {/* <!-- Wrapper for slides --> */}
                <div className="carousel-inner">
            
                  <div className="item active">
                    <img src={trialImage1} alt="Comfort" className="imageOne" id = "imageOne"/>
                    <div className="carousel-caption">
                      <h3>Comfort</h3>
                      <p>Buy Comfort</p>
                      
                    </div>
                   
                  </div>
                
                  <div className="item">
                    <img src={trialImage3} alt="Relax" className="imageOne"/>
                    <div className="carousel-caption">
                      <h3>Relaxing</h3>
                      <p>Relax, take it easy</p>
                      
                    </div>
                    <img src={trialImage4} alt="Comfort" className="imageTwo"/>
                  </div>
              
                </div>
            
                {/* <!-- Left and right controls --> */}
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>  
    )
}

export default Carousel
