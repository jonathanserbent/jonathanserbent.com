import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ProjectsProps} from "../Projects/ProjectProps"

const textBullet = "•";

export const ResumeProjects: React.FC<ProjectsProps> = (props) => {

    var filteredProjects = props.projects.filter(p => p.tags.includes("Resume"))

    return (
        <Container className="mb-1">
            <h2 className="font-weight-light mx-0 text-center text-md-left">Projects</h2>
            {filteredProjects.map(project => (
                <Row key={project.title} className="mb-2">
                    <Col className="my-0">
                        <h3 className="my-0">{project.title}</h3>
                        <p className="font-weight-light my-0">{project.languages.concat(project.tools).join(" "+textBullet+" ")}</p>
                        <p className="my-0">{project.description}</p>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}