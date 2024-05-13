import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import gitHubIcon from '../assets/img/github.png';
import linkedInIcon from '../assets/img/linkedin.png';
import "98.css";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, hasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                hasScrolled(true);
            } 
            else {
                hasScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://github.com/AdrianaBot"><img src={gitHubIcon} alt=""/> </a>
                <a href="https://www.linkedin.com/in/adriana-fraz%C3%A3o-621a8921b/"><img src={linkedInIcon} alt=""/> </a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Connect with me! ♡</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


