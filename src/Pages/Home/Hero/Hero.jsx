import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../../../assets/image/aboutImage.jpg'

const Hero = () => {
    return (
        <section className='gap-16 items-center grid grid-cols-1 lg:grid-cols-2 py-20'>
            <div>
                <h1 className='text-[40px] lg:text-[40px] lg:max-w-fit font-bold leading-10 lg:leading-[50px] mb-5'>We are Passionate Beauticians and Makeup Artists Based in New York.</h1>
                <p className='text-lg font-medium text-theme-body mb-5 lg:mr-[100px]'>Looking for the best beauty and spa services in town? Our team of experienced beauticians offers all the beauty services you’ve been waiting for.</p>
                <Link to='/services' className='bg-theme-default text-white px-6 py-4 rounded-full inline-block'>Get Start Now</Link>
            </div>
            <div>
                <img src={aboutImage} alt="" />
            </div>
        </section>
    );
};

export default Hero;