import { faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { default as ContactPageData} from "../data/ContactPage.json";


type ContactParagraphs = {
    title: string,
    description: string,
    link: string,
    linkText: string
}

type ContactPageProps = {
    contactInfo: ContactParagraphs[]
}

const Contact: React.FC<ContactPageProps> = (props) => (
    <Container className="mt-3">
        <Container>
            <h3 className="display-3 text-center">My Socials</h3>
            <Row className="justify-content-center">
                <Col md={4}>
                    <h1 className="display-1 text-center"><a href="https://www.instagram.com/jonathanserbent/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></h1>
                </Col>
                <Col md={4}>
                    <h1 className="display-1 text-center"><a href="https://www.linkedin.com/in/jonathan-serbent-66134b174/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></h1>
                </Col>
                <Col md={4}>
                    <h1 className="display-1 text-center"><a href="https://www.youtube.com/channel/UCNK5LCV3on6B6q1Cr-sA2aA" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/></a></h1>
                </Col>

            </Row>
        </Container>
        <Container>
            <Row className="justify-content-center">
                {props.contactInfo.map(paragraph => (
                    <Col md={6} key={paragraph.title} className="my-3">
                        <h3>{paragraph.title}</h3>
                        <p>{paragraph.description}</p>
                        <Row className="justify-content-center">
                            {paragraph.linkText !== "" && <Button href={paragraph.link} target="_blank" className="justify-self-center">{paragraph.linkText}</Button>}
                        </Row>
                    </Col>
                ))}
                {/* <Col md={6}>
                    <h3>Tech Recruiters</h3>
                    <p>If you are a recruiter for a tech company looking to get in contact with me for hiring purposes, please reach out to me on <a className="font-weight-bold" href="https://www.linkedin.com/in/jonathan-serbent-66134b174/" target="_blank" rel="noreferrer">Linkedin</a>. If you already have my personal email, you can also reach me there.</p>
                </Col>
                <Col md={6}>
                    <h3>Music Inquiries</h3>
                    <p>If you want to reach me for music related inquiries, such as doing collaborations or booking gigs, please message my <a className="font-weight-bold" href="https://www.instagram.com/jonathanserbent/" target="_blank" rel="noreferrer">Instagram</a> account. Please note that I am currently located within the austin area, so I may</p>
                </Col>
                <Col md={6}>
                    <h1 className="display-1 text-center"><a href="https://www.youtube.com/channel/UCNK5LCV3on6B6q1Cr-sA2aA" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/></a></h1>
                </Col> */}

            </Row>
        </Container>
        
    </Container>
);

export const ContactPage = () =>{return Contact(ContactPageData);};