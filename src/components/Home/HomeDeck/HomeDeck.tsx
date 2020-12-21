import React from "react";
import { Button, Card, CardColumns, Container} from "react-bootstrap";


type HomeCard = {
    title: string,
    imageURL: string,
    imageAlt: string,
    description: string,
    link: string,
    buttonText: string
};

type HomeDeckProps = {
    cards: HomeCard[]
};

export const HomeDeck: React.FC<HomeDeckProps> = (props) => (
    <Container >
        <CardColumns className="text-dark justify-content-center">
            {props.cards.map(card => (
                <Card key={card.title} className="my-3">
                    <Card.Img variant="top" src={card.imageURL} alt={card.imageAlt}/>
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href={card.link}>{card.buttonText}</Button>
                    </Card.Footer>
                </Card>
            ))}
        </CardColumns>
    </Container>
);