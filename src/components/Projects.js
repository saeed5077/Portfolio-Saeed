import React from "react";
import { Container, Row, Col, Nav,Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/Project/React-todo.png";
import projImg2 from "../assets/Project/React-Snake-Game.png";
import projImg3 from "../assets/Project/Tailwind FB.png";
import projImg4 from "../assets/Project/Mailchimp.png";
import projImg5 from "../assets/Project/React-KBC.png";
import projImg6 from "../assets/Project/cssproject.png"


import  colorSharp2 from "../assets/img/color-sharp2.png"

import sqlCerti from"../assets/certificates/sql certificate.png"
import cn from "../assets/certificates/CN.jpg"
import cisco from "../assets/certificates/cisco.jpg"
import spm from "../assets/certificates/spm.jpg"
import rtype from "../assets/certificates/rttype.jpg"
import prosolve from "../assets/certificates/prosol.jpg"

import acv1 from "../assets/Achievement/achievement1.avif"

function Projects() {

  const certi = [
    {
      title:"Coding Ninjas",
      description:"DSA With Java",
      imgUrl:cn
    },
    {
      title:"HackerRank",
      description:"Problem Solving",
      imgUrl:prosolve
    },
    {
      title:"Cisco",
      description:"Cyber Security",
      imgUrl:cisco
    },
    {
      title:"HackerRank",
      description:"Sql Basic Certificate",
      imgUrl:sqlCerti
    },
    {
      title:"Rata Type",
      description:"Typing Gold 60wpm",
      imgUrl:rtype
    },
    {
      title:"Parul University",
      description:"Speech Master 2.0",
      imgUrl:spm
    }

  ]

  const projects = [
    {
      title: "Todo-List",
      description: <a style={{color:"white"}} href="https://github.com/saeed5077/React-todo-list.git">React Project</a>,
      imgUrl: projImg1,
    },
    {
      title: "Snake Game",
      description: <a style={{color:"white"}} href="https://github.com/saeed5077/React-Snake-Game.git">JavaScript Logic with React</a>,
      imgUrl: projImg2,
    },
    {
      title: "Learning Tailwind",
      description:<a style={{color:"white"}} href="https://github.com/saeed5077/Tailwind-fb-login-page.git">Tailwind Project</a>,
      imgUrl: projImg3,
    },
    {
      title: "Newsletter SignUp webApp",
      description:<a style={{color:"white"}} href="https://github.com/saeed5077/Mailchimp_NewsLetter_Signup.git">Node Project</a>,
      imgUrl: projImg4,
    },
    {
      title: "KBC Game",
      description:<a style={{color:"white"}} href="https://github.com/saeed5077/React-KBC-Game.git">React Project</a> ,
      imgUrl: projImg5,
    },
    {
      title: "Landing Page",
      description: <a style={{color:"white"}} href="https://github.com/saeed5077/Css-singup.git">Simple Css Project</a>,
      imgUrl: projImg6,
    },
  ];

  const Acvm = [
    {
      title:"Codechef",
      description:"2 ⭐ coder",
      imgUrl:acv1
    }
  ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt, repellendus soluta. Voluptates ullam deserunt blanditiis
              atque accusamus veniam, nobis quos fuga provident. Suscipit
              obcaecati illum doloremque libero eaque officiis delectus?
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" defaultActiveKey="/home" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Certificates</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" >
                  Achievement
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project,index)=>{
                              return(
                                              
                                <ProjectCard

                                key={index}
                                {...project}
                                />
                              )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                        {
                            certi.map((project,index)=>{
                              return(
                                              
                                <ProjectCard

                                key={index}
                                {...project}
                                />
                              )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                        {
                            Acvm.map((project,index)=>{
                              return(
                                              
                                <ProjectCard

                                key={index}
                                {...project}
                                />
                              )
                            })
                        }
                    </Row>

                </Tab.Pane>
                
                

            </Tab.Content>
                
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
}

export default Projects;
