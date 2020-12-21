import React from 'react';

import {Welcome} from "../components/Home/Welcome/Welcome";
// import {Slideshow} from "../components/Home/Slideshow/Slideshow";
import {HomeDeck} from "../components/Home/HomeDeck/HomeDeck";

import {default as WelcomeData} from "../data/Home/Welcome.json";
// import {default as SlideshowData} from "../data/Home/Slideshow.json";
import {default as HomeDeckData} from "../data/Home/HomeDeck.json";

const Home = () => (
    <div>
        <Welcome {...WelcomeData}/>
        {/* <Slideshow {...SlideshowData}/> */}
        <HomeDeck {...HomeDeckData}/>
    </div>
);

export default Home;