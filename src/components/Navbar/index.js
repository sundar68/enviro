import React from 'react';
import SocialFollow from "./icon";
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';
import log from './logo.png';

const Navbar = () =>{

	

return (
    <>
	<Nav >
		<Bars />
		<view>
             <img
               src={log} alt="Logo"
               style={{ width: '15%', height: 35, background: 'cover',position: 'fixed', left: 8,  top: 8,}}
             />		
		    </view>
		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>	
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/team' activeStyle>
			Our Team
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/buy' activeStyle>
			Buy now
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact
		</NavLink> 
		<SocialFollow />
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
