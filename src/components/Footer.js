import {Col, Container, Row} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#linkedin"> <img src={navIcon1} alt="LinkedIn"/> </a>
                            <a href="#github"> <img src={navIcon2} alt="GitHub"/> </a>
                        </div>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}