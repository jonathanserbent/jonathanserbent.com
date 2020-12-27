import React from "react";
import { Col, Container, Row } from "react-bootstrap";


type JobInfo = {
    company: string,
    position: string,
    startDate: string,
    endDate: string,
    location: string,
    technologies: string[],
    bulletPoints: string[]
}

type ResumeExperienceProps = {
    jobs: JobInfo[]
};

const textBullet = "•";

export const ResumeExperience: React.FC<ResumeExperienceProps> = (props) => (
    <Container className="mb-1">
        <h2 className="font-weight-light mx-0 text-center text-md-left">Experience</h2>
        {props.jobs.map(job => (
            <Row key={job.company}>
                <Col className="my-0">
                    <div className="d-flex">
                        <h3 className="my-0 mr-4">{job.company}</h3>
                        <h3 className="font-weight-light my-0">{job.position}</h3>
                    </div>
                    <h6 className="my-0">{job.startDate} - {job.endDate} | {job.location}</h6>
                    <p className="my-0">{job.technologies.join(" "+textBullet+" ")}</p>
                    <ul>
                        {job.bulletPoints.map(info => (
                            <li key={info}>{info}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
        ))}
    </Container>
);