import React from 'react';
import { Link } from 'react-router-dom';
import reviewhero from '../../../assets/image/reviewHero.jpg'

const Hero = () => {
    return (
        <section className='gap-16 items-center grid grid-cols-1 lg:grid-cols-2 py-20'>
            <div>
                <h1 className='text-[40px] lg:text-[50px] lg:max-w-fit font-bold leading-10 lg:leading-[60px] mb-5'>All your service reviews in one place</h1>
                <p className='text-lg font-medium text-theme-body mb-5 lg:mr-[100px]'>Earn more revenue from your service with honest review on your faves.</p>
                <Link to='/services' className='bg-theme-default text-white px-6 py-4 rounded-full inline-block'>Get Start Now</Link>
            </div>
            <div>
                <img src={reviewhero} alt="" />
            </div>
        </section>
    );
};

export default Hero;