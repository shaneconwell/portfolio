import React from "react";
import "../styles/About.css";
import {Container, Row, Col, Image} from "react-bootstrap"

export default function About() {
  return (
<Container className="about-container">
<Row className="about-body overflow-auto">
<Col xs={12} s={10}md={3}> 
  <Image className="headshot" src="https://res.cloudinary.com/dllm7cfrg/image/upload/v1628196789/headshot_yn9u0g.jpg" rounded fluid />
  </Col>
  <Col  xs={12} md={9}>

          <h1>Hi, I'm Shane!</h1>
          <p>
          I'm a web developer with a background in studio photography. I’ve recently earned a certificate in Full Stack Development 
          from the University of Pennsylvania where I advanced my skills in responsive web design, JavaScript, MongoDB, Express.js, 
          React.js, and Node. I'm a self driven individual with a passion for developing innovative technologies. Hard work ethic, keen 
          attention to detail, and strong brand awareness. Motivated to combine the art of programming, with the passion to stay on 
          top of tech trends, experiment and learn new technologies. 
          </p>
          <p>
          Check out my projects page to see what i'm working on!
          </p>
   
  </Col>

</Row>
</Container>

    // <div className="about-body container">
    //   <div className="d-flex justify-content-center flex-row ">
    //     <img
    //       src="https://res.cloudinary.com/dllm7cfrg/image/upload/v1628196789/headshot_yn9u0g.jpg"
    //       className="headshot float-left"
    //       alt="..."
    //     ></img>
      //   <div className="p-4 ">
      //     <h1>Hi, I'm Shane!</h1>
      //     <p>
      //       Self motivated individual with a passion for developing innovative
      //       technologies. Full stack web developer whose professional career
      //       began as a studio <a className="link-light"href="https://www.shaneconwellmedia.com/">photographer</a>. Hard work ethic, keen attention to
      //       detail, and strong brand awareness. Motivated to combine the art of
      //       programming, with the passion to stay on top of tech trends,
      //       experiment with and learn new technologies.
      //     </p>
      //   </div>
      // </div>
    // </div>
  );
}
