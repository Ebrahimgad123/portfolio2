import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import img from './movies.png';
import img1 from './pin.jpg';

const Projects = () => {
  const project1 = {
    title: 'Movies app',
    image: img,
    demoLink: 'https://ebrahimgad123.github.io/Movies/',
  };
   const project2 = {
    title: 'Shopping Cart ',
    image: img1,
    demoLink: '#',
  };

  return (
    <div className='container' style={{ backgroundColor: 'black', marginLeft: '30px', textAlign: 'center' }}>
      <h1 style={{ color: '#ff6f61', textAlign: 'center' }}>Projects</h1>

       
          <Card className='custom-card' style={{marginBottom:'30px'}}>
            <div className='card-image'>
              <Card.Img variant='top' src={project1.image} style={{ height: 'auto', maxWidth: '100%', borderRadius: '5%' }} />
              <div className='hover-overlay'></div>
            </div>
            <Card.Body style={{ backgroundColor: 'black' }}>
              <Card.Title style={{ color: 'white', marginBottom: '20px' }}>{project1.title}</Card.Title>
              <Card.Text style={{ color: 'white' }}>{project1.description}</Card.Text>
            </Card.Body>
            <a href={project1.demoLink} style={{ backgroundColor: 'red', padding: '10px 20px', border: 'none', color: 'white', borderRadius: '20px', textDecoration: 'none', left: '50%', transform: 'translateX(-50%)' }}>View Demo</a>
          </Card>
        
       
          <Card className='custom-card'>
            <div className='card-image'>
              <Card.Img variant='top' src={project2.image} style={{ height: 'auto', maxWidth: '100%', borderRadius: '5%' }} />
              <div className='hover-overlay'></div>
            </div>
            <Card.Body style={{ backgroundColor: 'black' }}>
              <Card.Title style={{ color: 'white', marginBottom: '20px' }}>{project2.title}</Card.Title>
              <Card.Text style={{ color: 'white' }}>{project2.description}</Card.Text>
            </Card.Body>
            <a href={project2.demoLink} style={{ backgroundColor: 'red', padding: '10px 20px', border: 'none', color: 'white', borderRadius: '20px', textDecoration: 'none', position: 'absolute', bottom: '100px', left: '50%', transform: 'translateX(-50%)' }}>View Demo</a>
          </Card>
      
    
    </div>
  );
};

export default Projects;
