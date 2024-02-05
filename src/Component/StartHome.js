import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import pdf from './blue professional modern CV resume.pdf';
import Type from "./Type";

// Import the background image
import backgroundImg from './background.jpg'; // Update the path to your background image

function Start() {
  // Style object for the section with the background image
  const sectionStyle = {
    background: `url(${backgroundImg}) center/cover`, // Set the background image
     height: '100vh', // Adjust the height as needed
    display: 'flex',
    flexDirection: 'column', // Adjust the flex direction to column // Center the content vertically
    marginBottom: '200px',
  };


  // Style object for the button
  const buttonStyle = {
    backgroundColor: 'black',
    borderRadius:'50px',
    marginTop: '90px', // Adjust the margin-top as needed
    padding: '15px 30px',
    fontSize: '20px',
    textDecoration: 'none', // Remove the default anchor underline
    color: 'white', // Set text color to white
    display: 'inline-block',
    marginTop:'250px'
  };

  return (
    <section style={sectionStyle}>
      <Container>
        <Container>
          <Row>
            <Col md={7} style={{marginLeft:'40px',marginTop:'60px'}}>
                
              <div >
                <h1 style={{ paddingBottom: 15, color: 'white' }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
              </div>

              <h1 className="heading-name" style={{ color: 'white' }}>
                I'M
                <strong className="main-name " style={{ color: 'white' }}> Ibrahim Gad</strong>
              </h1>

              <div style={{ paddingBottom: "50px", textAlign: "left", color: 'white', fontSize: '30px' }}>
                <Type />
              </div>

              <div >
                <a style={buttonStyle} href={pdf} target="_blank" download="Ibrahim_Gad_CV.pdf">
                  Download CV
                </a>
              </div>

              <div style={{ marginTop: '50px' }}>
                {/* Your social media icons go here */}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Start;
