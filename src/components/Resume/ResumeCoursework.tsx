import React from "react";
import { Container, Row, Col } from "react-bootstrap";


type ResumeCourseworkProps = {
    courses: string[]
};

export const ResumeCoursework: React.FC<ResumeCourseworkProps> = (props) => (
    <Container className="mb-1">
        <h2 className="font-weight-light my-0 text-center text-md-left">Coursework</h2>
        <Row>
            <Col>
                <ul>
                    {props.courses.map(course => (
                        <li key={course}>{course}</li>
                    ))}
                </ul>
            </Col>
        </Row>
    </Container>
);