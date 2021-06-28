import React from 'react';
import Slider from 'infinite-react-carousel';
import i1 from './car1.jpg';
import i2 from './car2.jpg';
import i3 from './car3.jpg';
import i4 from './car4.jpg';
import i5 from './car5.jpg';
import "./nav.css";

const SimpleSlider = () => (
 <div className="car">
  <Slider dots>
    <div className="i1">
      <img src={i5} alt="i1" />
      <h3>It`s show time</h3>
    </div>
    <div className="i2">
      <img src={i1} alt="i2" />
      <h3>Bagundhi anna.... nijamga bagundhi</h3>
    </div>
    <div className="i3">
      <img src={i2} alt="i3" />
      <h3>horn thesi *udhalo pedatha</h3>
    </div>
    <div className="i4">
      <img src={i4} alt="i1" />
      <h3>A boy is  no-one</h3>
    </div>
    <div className="i5">
      <img src={i3} alt="i1" />
      <h3>Winter is comming</h3>
    </div>
  </Slider>
 </div>  
);

export default SimpleSlider;