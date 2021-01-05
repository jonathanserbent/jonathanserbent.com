import React from "react";
import { Button, Col, CardDeck, Card, Row } from "react-bootstrap";
import {Project} from "../ProjectProps";


export const MidTierProjects: React.FC<{projects: Project[]}> = (props) => (
    <Row className="justify-content-center my-3">
        <CardDeck as={Row} className="justify-content-center mx-0">
            {props.projects.map(project => (
                <Col md={6} key={project.title} className="my-3 d-flex">
                    <Card className="bg-dark">
                        {project.imageURL !== "" && <Card.Img variant="top" src={project.imageURL} /> }
                        <Card.Body className="">
                            <Card.Title className="text-center">{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <p>Languages: <code>{project.languages.join(", ")}</code></p>
                            <p>Tools: <code>{project.tools.join(", ")}</code></p>
                        </Card.Body>
                        {(project.gitURL !== "" || project.deployedURL!=="" ) && 
                        <Card.Footer as={Row} className="justify-content-center mx-0">
                            {project.gitURL!=="" && 
                                <Col xs={6} className="my-auto d-flex flex-column">
                                    <Button href={project.gitURL} target="_blank" className="align-self-center">Git Repo</Button>
                                </Col>
                            }
                            {project.deployedURL!=="" && 
                                <Col xs={6} className="my-auto d-flex flex-column">
                                    <Button href={project.deployedURL} target="_blank" className="align-self-center">See it live</Button>
                                </Col>
                            }
                        </Card.Footer>
                        }
                    </Card>
                </Col>                      
            ))}
        </CardDeck>
        {props.projects.length!==0 && <hr className="hr-nice"/>}        
    </Row>
);
