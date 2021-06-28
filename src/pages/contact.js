import React from 'react';
import './nav.css';
import Adress from './adress.png';
import Mail from './mail1.png';
import Call from './call.png';
import Form from './for';
import car from './car4.jpg';

const Contact = () => {
return (
	<div className="contact" >
		        <img src={car} alt="c" style={{ width: '100%',height: '100vh',}} />
				<div  className="form">
				       <Form />
			    </div>
				<div className="inner">
					<h5>Send Message</h5>
					<p>Feel free to write us</p>
					<h1>Find Us</h1>
				    <img src={Adress}  alt="Adress" />
					<h2>5-3-68/9/4/3, Venkateshwara colony. Katedan Budwel Hyderbad Telangana 500077 CIN : U01100TG2020PTC139077</h2>
					 <img src={Mail}  alt="Mail" /> 
					 <h3><a href="Info.enviropromise@gmail.com">Info.enviropromise@gmail.com</a></h3>
					 <img src={Call}  alt="Call" />
					 <h4> <a href="tel:+91 9866485147"> Call : +91 9866485147</a> </h4>
				</div>
				
				
	</div>
);
};

export default Contact;
