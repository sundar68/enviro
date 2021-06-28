import React from 'react';
 import './nav.css';
 import car from './car2.jpg';
 import log from './des.jpg';
 import a1 from './a2.jpg';
 import a2 from './a1.jpg';
 import a3 from './a3.jpg';
 import a4 from './a4.jpg';
 import a5 from './a5.jpg';
 import a6 from './a6.jpg';
 

const About = () => {
return (
	<div className="about" >
                <img src={car} alt="c" style={{ width: '100%',height: '100vh',}} />
			<div className="inner">
                    <h1>ABOUT US</h1>
                    <img src={log} alt="logo" style={{ position: 'absolute',paddingTop: '110px', width: '300px', height: '60px', left:"480px", }} />
                    <div className="mission">
                    <h2>Our Mission</h2>
                    <img src={a1} alt="a1" style={{ position: 'absolute', width: '400px', height: '300px', left:'66px',paddingTop: '250px',}} />
                    <p>Our mission is to enhance the lives of farmers and the people they serve, to ensure and provide an eco-friendly product to the customers without compromising on the quality. We thrive to promote, sustain and enhance the health of soil, plants, humans, animals and in turn the health of nature. We create and promote upcycling products, biodiesel and bio petrol and solar plants.</p>
			     </div>
                    <div className="vision">
                    <h2>Our Vision</h2>
                    <img src={a2} alt="a1" style={{position: 'absolute', width: '400px', height: '300px', left:'700px',paddingTop: '620px', }} />
                    <p>Our mission is to enhance the lives of farmers and the people they serve, to ensure and provide an eco-friendly product to the customers without compromising on the quality. We thrive to promote, sustain and enhance the health of soil, plants, humans, animals and in turn the health of nature. We create and promote upcycling products, biodiesel and bio petrol and solar plants.</p>
			     </div>
               </div>
               <div className="values">
                    <h1>Our values</h1>
                    <img src={log} alt="logo" style={{ position: 'absolute',paddingTop: '120px', width: '300px', height: '50px', left:"480px", }} />
                    <h2 style={{ paddingTop: '160px',}}>Integrity first</h2>
                    <div className="p1" >
                    <img src={a3} alt="a3" style={{ paddingTop:'200px', width: '150px', height: '140px', position: 'absolute', left: '200px', }} />
                    </div>
                    <p style={{ paddingTop: '200px',}}>We promise honesty and transparency. We uphold the highest standards of integrity and honor the commitments we make.</p>
                    <h2 style={{ paddingTop: '400px',}}>Customer Driven</h2>
                    <div className="p1" >
                    <img src={a4} alt="a3" style={{ paddingTop:'470px', width: '150px', height: '140px', position: 'absolute', left: '200px', }} />
                    </div>
                    <p style={{ paddingTop: '450px',}}>We win when our customers win. Our long-term strategic relationships provide unique insights and the ability to deliver exceptional customer experiences and solutions. We prioritize the interests of our customers and aim to provide personalized attention to their needs. Our policies are flexible in order to adhere to the conveniences of our customers.</p>
                    <h2 style={{ paddingTop: '750px',}}>Purpose Led</h2>
                    <div className="p1" >
                    <img src={a5} alt="a3" style={{ paddingTop:'820px', width: '150px', height: '140px', position: 'absolute', left: '200px', }} />
                    </div>
                    <p style={{ paddingTop: '800px',}}>We believe in doing well by doing good and hold ourselves accountable to make the world a better place through the solutions we provide, our engagement in society, the way we do business, and our commitment to protect people and the environment. With sustainable development being the need of the hour, we aim to shift the paradigm to eco-friendly and biodegradable products.</p>
                    <h2 style={{ paddingTop: '1100px',}}>Future Focused</h2>
                    <div className="p1" >
                    <img src={a6} alt="a3" style={{ paddingTop:'1160px', width: '150px', height: '140px', position: 'absolute', left: '200px', }} />
                    </div>
                    <p style={{ paddingTop: '1150px',}}>Our culture of innovation and continuous improvement drives us to solve today's challenges while constantly asking 'what's next.</p>
               </div>
               <div className="last">
                    <h1>Our Team</h1>
                    <img src={log} alt="logo" style={{ position: 'absolute',paddingTop: '100px', width: '300px', height: '60px', left:"480px", }} />
                    <p>We are one team, dedicated to working collaboratively together to create the purposeful solutions that propel the world forward. Our engagement with each other along with creative thinking inspires us to work and achieve more than we can think of. Afterall, it is rightly said by honourable Helen Keler "Alone we can do so little,together we can do so much".</p>
               </div>
     </div> 
);
};

export default About;
