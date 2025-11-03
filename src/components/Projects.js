import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import {ProjectCard} from './ProjectCards';
import colorSharp2 from "../assets/img/color-sharp2.png"
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";

export const Projects = () => {
    const projects = [
        /*
        {
            title: "Fitness App",
            description: "Android mobile app that tracks your physical and mental health",
            imgUrl: projImg1
        },
        {
            title: "Traffic Photo-Analysis App",
            description: "Android mobile app that accesses your phone camera and sends pictures to ChatGPT for analysis",
            imgUrl: projImg2
        }*/

    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>What I've Built</h2>
                        <p>This is soon to be filled with my personal projects.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>Meowmeowmeow</p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )

}