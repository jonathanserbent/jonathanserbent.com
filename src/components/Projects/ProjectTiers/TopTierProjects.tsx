import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import {Project} from "../ProjectProps";


export const TopTierProjects: React.FC<{projects: Project[]}> = (props) => (
    <Row className="justify-content-center my-3">
        {props.projects.map(project => (
            <Col md={12} key={project.title} className="my-3">
                <h4 className="display-4 text-center">{project.title}</h4>
                <Row className="my-2">
                    <Col md={6} className="">
                        <Image fluid src={project.imageURL} className="rounded"/>
                    </Col>
                    <Col md={6} className="d-flex flex-column">
                        <p className="">{project.description}</p>
                        <p>Languages: <code>{project.languages.join(", ")}</code></p>
                        <p>Tools: <code>{project.tools.join(", ")}</code></p>
                        <Row className="justify-content-center mx-0 flex-shrink">
                            {project.gitURL!=="" && 
                                <Col xs={4} className="my-auto d-flex flex-column">
                                    <Button href={project.gitURL} target="_blank" className="align-self-center">Git Repo</Button>
                                </Col>
                            }
                            {project.deployedURL!=="" && 
                                <Col xs={4} className="my-auto d-flex flex-column">
                                    <Button href={project.deployedURL} target="_blank" className="align-self-center">See it live</Button>
                                </Col>
                            }
                            <Col xs={4} className="my-auto d-flex flex-column">
                                <Button href={"coding/"+project.title} className="align-self-center">More</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Col>
        ))}
        {props.projects.length!==0 && <hr className="hr-nice"/>}
    </Row>
);
