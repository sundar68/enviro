import React from 'react';
import SimpleSlider from './carou';
import Why from './why';

const Hom = () => {
return (
	<div
	style={{
		paddingTop: '0px',
		overflow: 'hidden',
		bavkgroundSize: 'cover',
		
	}}
	>
	  <div>
		<SimpleSlider />
	  </div>
	  <div>	
		<Why />
	  </div>	
	</div>
);
};

export default Hom;
