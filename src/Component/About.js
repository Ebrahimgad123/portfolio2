import React from 'react';
import './About.css'; // استيراد ملف CSS لتنسيق الكمبوننت
import { Col, Row } from 'react-bootstrap';
import picForMe from './picForMe.jpg'
const About = () => {
  return (
    <Row style={{backgroundColor:'black'}} >
      <Col lg={9} sm={4}md={11} >
      
      <h2 className="about-title "color='white'>About Me</h2>
      <p style={{color:'white'}} className="about-description">Welcome to my portfolio! I am a passionate designer with a love for creativity and innovation.</p>
      <p style={{color:'white'}} className="about-description">My goal is to create visually stunning and user-friendly designs that leave a lasting impression.</p>
      <p style={{color:'white'}} className="about-description">With a keen eye for detail and a strong understanding of design principles, I strive to deliver </p>
      <p style={{color:'white'}} className="about-description">exceptional results for every project.Feel free to browse through my portfolio and get in touch.</p>

    
 </Col>
 <Col lg={1} style={{textAlign:'center'}}>


  <img  id="personalImg"style={{borderRadius:'50%'}} src={picForMe} alt='hb'></img>
 
 </Col>
    </Row>
 
  );
}

export default About;