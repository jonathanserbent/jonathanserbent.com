import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

const NotFound = () => (
    <div>
        <Container className="text-center">
            <Row className = "justify-content-center">
                <Col md={6}>
                    <Image fluid src="/media/underConstruction.png" alt="construction worker image"/>
                </Col>
            </Row>
            <Row className = "justify-content-center">
                <Col>
                    <h4 className="display-4">Under Construction</h4>
                    <p>Sorry! This page is still being created. Try checking again later</p>
                </Col>
                
            </Row>
        </Container>
    </div>
);

export default NotFound;