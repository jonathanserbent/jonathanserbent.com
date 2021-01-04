import React from "react";
import { Col, Container, Row } from "react-bootstrap";


type leadershipPosition = {
    org: string,
    position: string,
    date: string
}

type leadershipProps = {
    leadership: leadershipPosition[]
}

export const ResumeLeadership: React.FC<leadershipProps> = (props) => (
    <Container className="mb-1">
        <h2 className="font-weight-light my-0 text-center text-md-left">Leadership</h2>
        <Row>
            {props.leadership.map(position => (
                <Col xs={12} key={position.org}>
                    <h5 className="my-0">{position.org}</h5>
                    <p className="my-0">{position.position} | {position.date}</p>
                </Col>
            ))}
        </Row>
    </Container>
);