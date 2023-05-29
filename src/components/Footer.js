import { Container,Row,Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/icons8-github.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"


export const Footer=()=>{
    return(
        <footer className="footer">
              <Container>
                    <Row className="align-item-center">

                        {/* <MailchimpForm/> */}
                        <Col sm={6}>
                            {/* <img src={logo} alt="logo" /> */}
                            <div className="social-icon">
                            <a href="https://www.linkedin.com/in/saeed-anwar-ansari-516679232/" target='blank'><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/saeed5077" target="blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/i.saeed24/"><img src={navIcon3} alt="" /></a>
                            </div>
                        </Col>
                        <Col className="text-center text-sm-end">
                            
                            <p>Made with ♥ by Saeed.</p>
                        </Col>
                        
                    </Row>  
                
              </Container>  

        </footer>
    )
}