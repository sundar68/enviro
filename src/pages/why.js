import React from 'react';
import i3 from './why3.jpg';
import i2 from './why2.jpg';
import i1 from './why1.jpg';
import i4 from './why4.jpg';
import i5 from './why5.jpg';
import i6 from './why6.jpg';
import i7 from './log.png';
import i8 from './des.jpg';
import './nav.css';
import NameForm from './form';

const Why = () => {
return (
	<div>
        <div className="first">
           <img src={i7} alt="log" />
           <h1>Promising NAture - Promising Farmers</h1>
           <p>Enviropromise is an Indian start-up company which mainly deals with eco-friendly products, safeguarding the environment and enhancing the ecological balance. We had established in 2020. Currently working from Telangana and Punjab states of India. We are trying to join our forces and connect the states all over India</p>            
           <img src={i8} alt="des" style={{ paddingTop: '400px',}} />
        </div>
	      <div className="why">
           <div className="inner">
				      <h1>Why Enviropromise</h1>
				   <div className="i1"> 
			    	<img src={i1} alt="Reduce" />
                    <p> We aim to reduce the amount of waste generation by developing eco-friendly products that are durable and long-lasting.
					   </p>
                   </div>
                   <div className="i2">
					  <img src={i2} alt="Reuse"  />
                        <p> We promote reusing goods and come up with creative ideas to reuse products, as it is highly economical an environment friendly.	
					     </p>
                    </div>
                  <div className="i3">
					  <img src={i3} alt="Reuce" />
                    <p> We provide recycling pick-up services, recycle products, and sell them. We aim to turn waste into useful and lifestyle products. </p>
                  </div>
				  <div className="i4"> 
			    	<img src={i4} alt="Reduce" />
                    <p> We focus on sustainable development to protect our natural environment. human and ecological health, while driving innovation and not compromising our way of life.
					   </p>
                   </div>
                   <div className="i5">
					  <img src={i5} alt="Reuse"  />
                        <p> We commit to makour countrypollution-free bypromoting bio-diesel, bio-petrol, e-vehicles and many more.
					     </p>
                    </div>
                  <div className="i6">
					  <img src={i6} alt="Reuce" />
                    <p> We aim to produce food that are free of toxic chemicals, rich in nutrients and antioxidants, improve heart conditions and lead to better overall health</p>
                  </div>
				</div>
       </div>
       <div >
         <NameForm />
       </div>
	</div>
);
};

export default Why;