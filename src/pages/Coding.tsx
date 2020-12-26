import { Row, Col, Container } from "react-bootstrap";
import {AboutMyCoding} from "../components/Projects/AboutMyCoding";
import {Projects} from "../components/Projects/Projects";
import {default as AboutMyCodingData} from "../data/Projects/AboutMyCoding.json";
import {default as ProjectsData} from "../data/Projects/Projects.json";

const Coding = () => (
    <div>
        <Container>
            <Row className="mt-5 pt-5">
                <Col xs={12}>
                    <h2 className="display-3 text-center">"Talk is cheap, show me the code"</h2>
                    <h6 className="text-right">-Linus Torvalds</h6>
                </Col>
            </Row>
        </Container>
        <AboutMyCoding {...AboutMyCodingData}/>
        <Projects {...ProjectsData}/>
    </div>
);

export default Coding;