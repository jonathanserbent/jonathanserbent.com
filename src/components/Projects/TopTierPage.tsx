import React from "react";
import { Container, Row, Col, Image, ResponsiveEmbed, Button } from "react-bootstrap";
import { Project } from "./ProjectProps";

export const TopTierPage: React.FC<Project> = (props) => {


    return (
        <Container>
            <Row className="mt-5">
                <Col xs={12} >
                    <h3 className="display-3 text-center">{props.title}</h3>
                </Col>
            </Row>
            <Row className="">
                <Col md={6} className="">
                    <Image className="rounded" fluid src={props.imageURL}/>
                </Col>
                <Col md={6} className="my-auto d-flex flex-column">
                    <p>{props.description}</p>
                    <p>Languages: <code>{props.languages.join(", ")}</code></p>
                    <p>Tools: <code>{props.tools.join(", ")}</code></p>
                    <Row className="justify-content-center mx-0 flex-shrink">
                            {props.gitURL!=="" && 
                                <Col xs={4} className="my-auto d-flex flex-column">
                                    <Button href={props.gitURL} target="_blank" className="align-self-center">Git Repo</Button>
                                </Col>
                            }
                            {props.deployedURL!=="" && 
                                <Col xs={4} className="my-auto d-flex flex-column">
                                    <Button href={props.deployedURL} target="_blank" className="align-self-center">See it live</Button>
                                </Col>
                            }
                        </Row>
                </Col>
            </Row>

            { props.videoURL !== "" && 
                <Row className="my-3">
                    <Col xs={12} >
                        <h3 className="text-center">Video</h3>
                        <Row className="justify-content-center">
                            <Col lg={8}>
                                <ResponsiveEmbed aspectRatio="16by9" >
                                    <iframe title="Project Video" src={props.videoURL} allowFullScreen/>
                                </ResponsiveEmbed>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }
                
            
            { props.additionalParagraphs.length!==0 && 
                <Row className="justify-content-center my-3 ">
                    <Col xs={12} className="bg-dark rounded py-2">
                        {props.additionalParagraphs.map(paragraph => (
                            <p key={paragraph.length}>
                                {paragraph}
                            </p>
                        ))}
                    </Col>
                </Row>
            }
        </Container>
    );
};