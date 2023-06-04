import React from 'react'
import Carousel from 'react-multi-carousel'

import {Container,Row,Col} from 'react-bootstrap';
// import Col from 'react-bootstrap';
// import Row from 'react-bootstrap';

import "react-multi-carousel/lib/styles.css";
import metric1 from '../assets/img/meter1.svg'
import metric2 from '../assets/img/meter2.svg'
import metric3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'




function Skills() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }; 
  
  
    return (

  
    <section className='skill-slider' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>

                        </p>
                        <Carousel responsive={responsive}>
                            <div className="item">
                                <img src={metric1} alt="" />
                                <h5>Front End Web-Development</h5>
                            </div>
                            
                            <div className="item">
                                <img src={metric2} alt="" />
                                <h5>Problem Solving</h5>
                            </div>
                            
                            <div className="item">
                                <img src={metric3} alt="" />
                                <h5>React</h5>
                            </div>
                            
                            {/* <div className="item">
                                <img src={metric1} alt="" />
                                <h5>Web Development</h5>
                            </div> */}
                        </Carousel>
                        <img src={colorSharp} alt="" className="background-image-left" />
                    </div>
                
                </Col>
                
                </Row>   
           
         </Container>

    </section>

    
  )
}

export default Skills