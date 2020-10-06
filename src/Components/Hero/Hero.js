import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import fakeData from '../../fakeData/fakeData.js';
import NavBar from '../Navbar/NavBar';
import Search from '../Search/Search';
import WorkCard from '../WorkCard/WorkCard';

const Hero = () => {
    const cardPics = fakeData;

    const [workCards, setWorkCards]=useState(cardPics[0]);


    return (

        <section>


        <NavBar></NavBar>
        <Search></Search>

        <Row>
            {
                cardPics.map(cardpic => <WorkCard cardpic={cardpic}></WorkCard> )

            }

        </Row>
        
       






    </section>

    );
};

export default Hero;