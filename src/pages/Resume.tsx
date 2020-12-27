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

const Resume = () => (
    <Container className="bg-white text-dark my-5 rounded">
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
    
);

export default Resume;