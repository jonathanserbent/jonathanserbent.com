import { Col, Container, Image, Row } from "react-bootstrap";

type WelcomeProps = {
    heading: String;
    paragraph: String;
    imageURL: string;
};

export const Welcome : React.FC<WelcomeProps> = (props) => (
    <div>
        <Container >
            <Row className="py-5 justify-content-center">
                <Col md={6} className="my-auto">
                    <h4 className="display-4">{props.heading}</h4>
                    <p className=" p-2">{props.paragraph}</p>
                </Col>
                <Col md={6} className="my-auto">
                    <Image className="rounded shadow" fluid src={props.imageURL}/>
                </Col>
            </Row>
        </Container>
    </div>
);
