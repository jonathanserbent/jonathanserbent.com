import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {default as AboutPageData} from "../data/AboutPage.json";

type Paragraph = {
    title: string,
    content: string
};

type AboutPageProps = {
    photoURL: string,
    paragraphs: Paragraph[]
};


const About: React.FC<AboutPageProps> = (props) => {
    const p1 = props.paragraphs[0];
    var otherParagraphs=[];
    for (var i=1; i<props.paragraphs.length; i++){
        var tempP = props.paragraphs[i];
        otherParagraphs.push((
            <Col key={tempP.title} md={6}>
                <Container className="p-2 px-4 my-2 bg-dark rounded">
                    <h3>{tempP.title}</h3>
                    <p>{tempP.content}</p>
                </Container>
            </Col>
        ));
    }
    return (
    <div>
        <Container>
            <Row className="my-3 justify-content-center">
                <Col md={4} className="my-2">
                    <Image fluid src={props.photoURL} alt="pic of me" className="rounded"/>
                </Col>
                <Col md={8} className="my-2 bg-dark rounded">
                    <h3 className="display-3 text-center">About Me</h3>
                    <hr className="hr-nice"/>
                    <h3>{p1.title}</h3>
                    <p>{p1.content}</p>
                </Col>
                {otherParagraphs}
            </Row>
        </Container>
    </div>
)};

export const AboutPage = () => {return  About(AboutPageData)};