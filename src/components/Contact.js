import React,{useState,useRef} from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import ContactImg from "../assets/img/contact-img.svg";

import emailjs from "@emailjs/browser"


function Contact() {

    const form = useRef();

    const formInitialDetails = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }

    const [formDetails,setFormDetails] = useState('');
    const [buttonText,setButtonText] = useState('send');
    const [status,setStatus] = useState({});

    const onFormUpdate=(para,value)=>{
        setFormDetails({
            ...formDetails,
            [para] : value
        }
        )
    }

    const handleSubmit= async (e)=>{
       

 
    e.preventDefault();
    setButtonText('Sending...');
    emailjs.sendForm('service_bjzo1uf', 'template_r3hfxpa', form.current, 'z3LxN-XQpPQLvmzjh')
      .then((result) => {
          console.log(result.text);
          setFormDetails(formInitialDetails)
          setButtonText("Send");
      }, (error) => {
          console.log(error.text);
          setButtonText("Send");
      }
       
      );
 

        // e.preventDefault();
        // setButtonText('Sending...');
        // let response = await fetch("https://localhost:5000/contact",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"Application/json;charset=utf-8",
        //     },
        //     body:JSON.stringify(formDetails),

        // });
        // setButtonText("Send");
        // let result = response.json();
        // setFormDetails(formInitialDetails)

        // if(result.code === 200)
        // {
        //     setStatus({success:true,message:"Message sent successfully"});
        // }else{
        //     setStatus({success:false,message:"Something went Wrong"});
        // }



    }

  return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={ContactImg} alt="" />

                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form ref={form} onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" name="from_name" value={formDetails.firstName} placeholder='First Name' onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" name="from_name2" value={formDetails.lastName} placeholder='Last Name' onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" name="emailid" value={formDetails.email} placeholder='E-mail' onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" name="contact" value={formDetails.phone} placeholder='Contact Number' onChange={(e)=>onFormUpdate('phone',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                               <textarea row="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
                               <button type="submit"><span>{buttonText}</span></button>
                               {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}> {status.message} </p>
                                </Col>
                               }
                            </Col>
                        </Row>

                    </form>
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Contact