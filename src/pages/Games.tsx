import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
// import {AboutMyCoding} from "../components/Projects/AboutMyCoding";
import {Projects} from "../components/Projects/Projects";
// import {default as AboutMyCodingData} from "../data/Projects/AboutMyCoding.json";
import {default as ProjectsData} from "../data/Projects/Projects.json";

const Games = () => {
    var games = ProjectsData.projects.filter(p => p.tags.includes("Game"))
    return (
        <div>
            <Container>
                <Row className="my-3">
                    <Col md={4} className="my-auto">
                        <Image className="rounded border" fluid src="/media/screenshot-GameLSM.png" />
                    </Col>
                    <Col md={4} className="my-auto">
                        <Image className="rounded border" fluid src="/media/controlsGame.png" />
                    </Col>
                    <Col md={4} className="my-auto">
                        <Image className="rounded border" fluid src="/media/terrainGenerator.png" />
                    </Col>
                </Row>
            </Container>
            <Projects projects={games} title="My Games"/>
        </div>
    )
};

export default Games;