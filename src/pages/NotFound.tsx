import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

const NotFound = () => (
    <div>
        <Container className="text-center">
            <Row className = "justify-content-center">
                <Col md={6}>
                    <Image fluid src="/media/notFound.png" alt="404 image"/>
                </Col>
            </Row>
            <Row className = "justify-content-center">
                <Col>
                    <h4 className="display-4">404</h4>
                    <p>Looks like the page you were looking for doesn't exist.</p>
                </Col>
                
            </Row>
        </Container>
    </div>
);

export default NotFound;