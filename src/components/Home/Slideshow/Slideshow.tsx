import { Carousel, Container, Row } from "react-bootstrap";

type SlideshowProps = {
    "Slides": SlideData[]
};

type SlideData = {
    "label": String,
    "caption": String,
    "imageURL": string,
    "alt": string
};

export const Slideshow: React.FC<SlideshowProps> = (props) => (
    <Container fluid className="mx-0 bg-dark">
        <Row className="justify-content-center py-3">
            <Carousel className="rounded w-75 text-shadow" interval={999999999}>
                {props.Slides.map(slide => (
                    <Carousel.Item key={slide.imageURL} >
                        <img className="d-block w-100 rounded-lg border-brand4 border" src={slide.imageURL} alt={slide.alt}/>
                        <Carousel.Caption>
                            <h3>{slide.label}</h3>
                            <p>{slide.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Row>
    </Container>
);