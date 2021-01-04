import { Container, Row, Col } from "react-bootstrap";
import { ResumeEducation } from "../components/Resume/ResumeEducation";
import { ResumeCoursework } from "../components/Resume/ResumeCoursework";
import { ResumeSkills} from "../components/Resume/ResumeSkills";
import { ResumeExperience} from "../components/Resume/ResumeExperience";
import { ResumeProjects } from "../components/Resume/ResumeProjects";
import { default as ResumeEducationData } from "../data/Resume/ResumeEducation.json";
import { default as ResumeSkillsData } from "../data/Resume/ResumeSkills.json";
import { default as ResumeExperienceData } from "../data/Resume/ResumeExperience.json";
import { default as ProjectsData } from "../data/Projects/Projects.json";
import { Dates } from "../app/Dates";

const Resume = () => (
    <Container fluid>
        <Row className="justify-content-center mt-3">
            <Col lg={6}>
                <h3 className="text-center">My Resume</h3>
                <p>This section of my website is here so that recruiters can see a virtual version of my resume. Since this page may not always be completely up to date, it does not represent an official version of my resume. However, I will try to always keep this page up to date, and you can check when it was last updated below. </p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3 className="text-center">Last Updated</h3>
                <h4 className="text-center">{Dates.resume}</h4>
            </Col>
        </Row>
        <Container className="bg-white text-dark my-5 rounded">
            <h1 className="display-3 text-center">Jonathan Serbent</h1>
            <hr/>
            <Row>
                <Col md={4} className="mx-0 px-0">
                    <ResumeEducation {...ResumeEducationData}/>
                    <ResumeCoursework {...ResumeEducationData}/>
                    <ResumeSkills {...ResumeSkillsData}/>
                </Col>
                <Col md={8} className="mx-0 px-0">
                    <ResumeExperience {...ResumeExperienceData}/>
                    <ResumeProjects {...ProjectsData} />
                </Col>
            </Row>
            
        </Container>
    </Container>
    
    
);

export default Resume;