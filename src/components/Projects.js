import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Javascript",
      description: "Basics",
      imgUrl: projImg1,
    },
    {
      title: "Java",
      description: "Basics",
      imgUrl: projImg2,
    },
    {
      title: "Spring Framework",
      description: "Advanced Java",
      imgUrl: projImg3,
    },
    {
      title: "React",
      description: "Advancing in Javascript",
      imgUrl: projImg4,
    },
    {
      title: "Node",
      description: "Advancing in Javascript",
      imgUrl: projImg5,
    },
    {
      title: "Web Devlopment",
      description: "Complete Javascript",
      imgUrl: projImg6,
    },
    {
    title: "SQL",
    description: "Understanding Databases",
    imgUrl: projImg7,
    },
    {
    title: "Java devloper",
    description: "Complete Java",
    imgUrl: projImg8,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certificates</h2>
                <p>Here you can see all of my certifications to know that I'm on track with your learning</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">College</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">To come</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">To come</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
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
                      <p>More is yet to come as I strive to embrace the mentality of continued learning</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More is yet to come as I strive to embrace the mentality of continued learning</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}