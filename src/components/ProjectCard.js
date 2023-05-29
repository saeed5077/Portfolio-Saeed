import React from 'react'
import { Col } from 'react-bootstrap';

function ProjectCard({index,title,description,imgUrl}) {
   
  return (
    <Col sm={6} md={4} >
        <div className="proj-imgbx" key={index}>
            <img src={imgUrl} alt="" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>
                    {description}
                </span>
            </div>
        </div>
    </Col>

    )
}

export default ProjectCard