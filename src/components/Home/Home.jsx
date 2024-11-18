import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The Book Nook | Home</title>
            </Helmet>
            <Banner></Banner>
            <Cards></Cards>    
        </div>
    );
};

export default Home;