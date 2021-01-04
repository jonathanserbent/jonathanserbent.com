import { faInstagram, faItchIo, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Dates } from "../../app/Dates"

const copyrightSymbol = "©";

export const Footer = () => (
    <footer>

    
    <Container fluid className = "bg-dark mt-auto">
        <Row className="text-center pt-3">
            <Col xs={4} className="my-auto">
                <a href="/about-me">About Me</a> <br/>
                <a href="/music">My Music</a> <br/>
                <a href="/coding">My Coding</a> <br/>
                <a href="/games">Game Dev</a>
            </Col>
            <Col xs={4} className="my-auto">
                <a href="/">Home</a> <br/>
                <a href="/contact">Contact Me</a> <br/>
                <a href="/resume">Resume</a>
            </Col>
            <Col xs={4}>
                <a href="https://www.instagram.com/jonathanserbent/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a> <br/>
                <a href="https://www.linkedin.com/in/jonathan-serbent-66134b174/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a> <br/>
                <a href="https://www.youtube.com/channel/UCNK5LCV3on6B6q1Cr-sA2aA" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/></a> <br/>
                <a href="https://jonathan-serbent.itch.io" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faItchIo}/></a> <br/>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <p className="text-center my-0">{copyrightSymbol}{Dates.copyright}</p>
            </Col>
        </Row>
    </Container>
    </footer>
);