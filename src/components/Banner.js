import React, { useEffect, useState } from 'react'
import { Row,Col,Container } from 'react-bootstrap'

import { ArrowRightCircle } from 'react-bootstrap-icons'

import headerImg from "../assets/img/Programming-rafiki.svg"
import { set } from 'mongoose';


function Banner() {
    
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Web Developer","Problem Solver","Web Designer"]
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const period=2000;

    useEffect(()=>{

        //check this out after completion of project...
        let ticker = setInterval(()=>{
            tick();

        },delta);

        return ()=>{clearInterval(ticker)};


    },[text]);

    const tick=()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
        
        setText(updatedText);

        if(isDeleting)
        {
            setDelta(prevDelta => prevDelta/2);

        }

        if(!isDeleting && updatedText === fullText)
        {
            setIsDeleting(true);
            setDelta(period);

        }else if(isDeleting && updatedText === '')
        {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

  return (

    <section className="banner" id="home">
      <Container>
        <Row className='align-itmes-center'>
            <Col xs={12} md={16} xl={7}>

                <span className='tagline'>
                Welcome to my Protfolio     
                </span>    
                <h1>{`Hi I'm Saeed... `}
                <span className='wrap'>
                    {text}
                </span>
                </h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, omnis, vitae ex, a earum provident inventore ea necessitatibus eos rerum optio quasi impedit! Vel impedit rem laudantium, perspiciatis explicabo beatae fugiat! Asperiores, aliquam? Ratione illum iusto ea sunt! Veniam eum, aperiam velit odit quaerat facilis deleniti cupiditate sed magni eius.</p> 
               <button onClick={()=>console.log('connect')}>
                Lets Connect <ArrowRightCircle size={30}/>

               </button>

            </Col>
            <Col xs={12} md={6} xl={5}>

            <img src={headerImg} alt="" />

            </Col>
            
        </Row>
     </Container>
    </section>


  )
}

export default Banner   