import React from "react";
import Container from "react-bootstrap/esm/Container";


export type AboutMyCodingProps = {
    title: string,
    content: string,
}

export const AboutMyCoding: React.FC<AboutMyCodingProps> = (props) => (
    <div className="bg-dark p-3 my-3">
        <Container className="p-3">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </Container>
    </div>
);