import React from "react";
import SocialFollow from "../components/Navbar/icon";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
  
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Enviropromise: Promising Nature - Promising Farmer
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <p style={{ color: 'white',}}>Enviropromise pvt ltd is startup company which follows Reduce,Reuse, Recycle principle and provide quality products</p>
          </Column>
          <Column>
            <Heading>Find us</Heading>
            <p style={{ color: 'white',}}>5-3-68/9/4/3 Venkateshwara colony Katedan Budwel Hyderbad Telangana 500077 CIN:U01100TG2020PTC139077 Email id: Info.enviropromise@gmail.com</p>
          </Column>
          <Column>
            <Heading>Useful links</Heading>
            <FooterLink href="./terms">Terms and Conditions</FooterLink>
            <FooterLink href="./privacy">Privacy policy</FooterLink>
            <FooterLink href="./buy">Buy now</FooterLink>
            <h3 style={{ color: 'white',}}>Follow us</h3>
            <SocialFollow />
          </Column>
          <Column>
            <Heading>Quick links</Heading>
            <FooterLink href="./home">Home</FooterLink>
            <FooterLink href="./about">About</FooterLink>
            <FooterLink href="./team">Our Team</FooterLink>
            <FooterLink href="./blogs">Blogs</FooterLink>
            <FooterLink href="./buy">Buy now</FooterLink>
            <FooterLink href="./contact">Contact</FooterLink>

            <FooterLink href="#top"> ^Go to top ^</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;