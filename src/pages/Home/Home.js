import React from 'react';
import Banner from "./Banner/Banner";
import Slider from "./Slider/Slider";
import Selection from "./Selection/Selection";
import Bar from "./Bar/Bar";



const Home = () => {
    return (
        <main>
            <Bar/>
            <Banner/>
            <Slider/>
            <Selection/>
        </main>
    );
};

export default Home;