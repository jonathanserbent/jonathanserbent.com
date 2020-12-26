import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {Project} from "../ProjectProps";


export const LowTierProjects: React.FC<{projects: Project[]}> = (props) => (
    <Row className="justify-content-center my-3">
        {props.projects.map(project => (
            <Col md={6} lg={4} key={project.title} className="my-3">
                <Container  className="bg-dark rounded py-3">
                    <h6 className="text-center">{project.title}</h6>
                    <p>{project.description}</p>
                    <p>Languages: <code>{project.languages.join(", ")}</code></p>
                    <p>Tools: <code>{project.tools.join(", ")}</code></p>
                    <Row className="justify-content-center mx-0">
                        {project.gitURL!=="" && 
                            <Col xs={6} className="my-auto d-flex flex-column">
                                <Button href={project.gitURL} className="align-self-center">Git Repo</Button>
                            </Col>
                        }
                        {project.deployedURL!=="" && 
                            <Col xs={6} className="my-auto d-flex flex-column">
                                <Button href={project.deployedURL} className="align-self-center">See it live</Button>
                            </Col>
                        }
                    </Row>
                </Container>
                
            </Col>
        ))}
    </Row>
);