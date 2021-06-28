import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
display: flex;
position: fixed;
background-color: #a0e999;
overflow: auto;
justify-content: space-between;
padding: 0rem calc((100vw - 1000px) / 1);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: #000000;

overflow: auto;
position: flex;
display: flex;
float:left;
align-items: right;
text-decoration: none;
padding: 10px 20px;
height: 100%;
cursor: grab;
&:hover {
	color: green;
	transition: 200ms ease-in;
}
&.active {
	color: #000000;
}
@media (max-width: 700px) {
	padding: 10px 20px;
}
`;

export const Bars = styled(FaBars)`
position: fixed;
margin: 20px;

width: auto;
display: none;
color: #77d8d8;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 5;
	left: 0;
	transform: translate(-100%, 75%);
	font-size: 1rem;
	cursor: pointer;
}
`;



export const NavMenu = styled.div`
position: fixed;
display: fixed;
overflow: auto;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: table-cell;
	padding: 10px 20px;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
