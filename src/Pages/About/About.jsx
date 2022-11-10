import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';
import Counter from '../Home/Counter/Counter';

const About = () => {
    useSetTitle('About')
    return (
        <div className='px-[15px] lg:px-0 mx-auto container pt-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
                <div data-aos='fade-up' data-aos-duration='1500'>
                    <h1 className='text-[40px] lg:text-[40px] lg:max-w-fit font-bold leading-10 lg:leading-[50px] mb-5'>About Us</h1>
                    <p className='text-lg font-medium text-theme-body mb-5 lg:mr-[100px]'>Hair Box is one of the best premium Men salon. Here we provide the best ever services. We believe in 100% customer satisfaction. Hairbox’s services run the gamut from- Hair Cut, Hair Color, Hair Treatment, Facial, Manicure, Pedicure, Body Scrub, Body Massage, and Steam Bath</p>
                    <p className='text-lg font-medium text-theme-body mb-5 lg:mr-[100px]'>Hairbox is more than just your regular makeover salon. All time we ensure that we take on board reliable beauty professionals so that our clients get best services. Hairbox team tries to make sure that you look your best anywhere, anytime, always</p>
                </div>
                <div className='flex gap-1 w-full' data-aos='fade-up' data-aos-duration='1500'>
                    <img src='https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/03/figure2.jpg' alt="" className='h-[400px] w-full object-fil' />
                    <img src='https://radiustheme.com/demo/wordpress/themes/salion/wp-content/uploads/2021/03/figure1.jpg' alt="" className='h-[400px] w-full object-fil hidden md:block' />
                </div>
            </div>
            <div className='py-5'>
                <Counter />
            </div>
        </div>
    );
};

export default About;