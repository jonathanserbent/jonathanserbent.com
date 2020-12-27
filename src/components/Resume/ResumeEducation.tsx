import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";


type ResumeEducationInfo = {
    name: string,
    department: string,
    degree: string,
    graduation: string, //Really should be a date type of some kind, but its just for show
    location: string,
    gpa: string
}

type ResumeEducationProps = {
    schools: ResumeEducationInfo[]
};

export const ResumeEducation: React.FC<ResumeEducationProps> = (props) => (
    <Container className="mb-1">
        <h2 className="font-weight-light my-0 text-center text-md-left">Education</h2>
        <Row>
            {props.schools.map(school => (
                <Col xs={12} key={school.name} className="mb-1">
                    <h5 className="my-0">{school.name}</h5>
                    {school.degree !== "" && <p className="my-0">{school.degree}</p>}
                    <p className="my-0">Grad. {school.graduation} | {school.location}</p>
                    {school.department !== "" && <p className="font-weight-light my-0">{school.department}</p>}
                    {school.gpa !== "" && <p className="my-0">GPA: {school.gpa}</p>}
                </Col>
            ))}
        </Row>
    </Container>
);