import React from "react";
import "./Banner.css";
import { Container, Jumbotron } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Banner = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" >
            <Jumbotron fluid className="Banner m-0">
                <Container>
                    <h2 className="display-2 text-center ">Jonathan Serbent</h2>
                    <hr className="hr-nice"/>
                    <h5 className="text-center">Coder - Guitar Player - Singer - Wakeboarder - Longhorn</h5>
                </Container>
                
            </Jumbotron>
        </Route>
    </Switch>
    </BrowserRouter>
);