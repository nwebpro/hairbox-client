import React from 'react';
import useSetTitle from '../../../hooks/useSetTitle';
import Counter from '../Counter/Counter';
import Hero from '../Hero/Hero';
import LatestBlog from '../LatestBlog/LatestBlog';
import LatestServices from '../LatestServices/LatestServices';
import WhatWeDo from '../WhatWeDo/WhatWeDo';

const Home = () => {
    useSetTitle('Home')
    return (
        <div className='px-[15px] md:px-0 mx-auto container'>
            <Hero />
            <LatestServices />
            <WhatWeDo />
            <Counter />
            <LatestBlog />
        </div>
    );
};

export default Home;