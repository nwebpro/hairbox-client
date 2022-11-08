import React from 'react';
import { Link } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';

const About = () => {
    useSetTitle('About')
    return (
        <div className='px-[15px] lg:px-0 mx-auto container py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
                <div>
                    <h1 className='text-[40px] lg:text-[40px] lg:max-w-fit font-bold leading-10 lg:leading-[50px] mb-5'>About Us</h1>
                    <p className='text-lg font-medium text-theme-body mb-5 lg:mr-[100px]'>There are many variations of passages Ipsum available but the majority have suffered alteration.</p>
                    <p className='text-lg font-medium text-theme-body mb-5 lg:mr-[100px]'>in that some injected is humour or randomised words the which don’t look slightly a believable. If you are Lorem and Ipsum you isn’t anything embarrassing.</p>
                    <Link to='/services' className='bg-theme-default text-white px-6 py-4 rounded-full inline-block'>Services</Link>
                </div>
                <div className='flex gap-5'>
                    <img src='https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/03/figure2.jpg' alt="" className='h-[400px] w-full object-fil' />
                    <img src='https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/03/figure1.jpg' alt="" className='h-[400px] w-full object-fil hidden md:block' />
                </div>
            </div>
        </div>
    );
};

export default About;