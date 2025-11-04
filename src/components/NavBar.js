import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/new-logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'

export const NavBar = () => {
    // Track which link is active
    const [activeLink, setActiveLink] = useState('home');
    // Track whether user has scrolled
    const [scrolled, setScrolled] = useState('false');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        // Clean up the listener
        return () => window.removeEventListener("scroll", onScroll);
    }, []) // Empty dependency array ensures that the effect only runs once (on mount/unmount) instead of every render

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    // For the styling, copy-paste from the react-bootstrap docs
    return (
        // If it's scrolled, give it the class name "scrolled"
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    {/* For the brand, insert Logo */}
                    <img src={logo} alt="Logo" style={{width: '100px', height: 'auto', maxHeight: 'none'}}/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon">

                    </span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Navigate through links */}
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        {/*<Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        */}
                    </Nav>
                    {/* Add additional links to social media*/}
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ho-thien-kim-nguyen-181b6a320" target="_blank" rel="noopener noreferrer"> <img src={navIcon1} alt="LinkedIn"/> </a>
                            <a href="https://github.com/kimm310" target="_blank" rel="noopener noreferrer"> <img src={navIcon2} alt="GitHub"/> </a>
                        </div>
                        <button className="vvd" onClick={() => {
                            const section = document.getElementById("connect");
                            if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        >
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


