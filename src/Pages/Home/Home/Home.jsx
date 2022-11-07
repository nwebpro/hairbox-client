import React from 'react';
import Hero from '../Hero/Hero';
import LatestServices from '../LatestServices/LatestServices';

const Home = () => {
    return (
        <div className='px-[15px] md:px-0 mx-auto container'>
            <Hero />
            <LatestServices />
        </div>
    );
};

export default Home;