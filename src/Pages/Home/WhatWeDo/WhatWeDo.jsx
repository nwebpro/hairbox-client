import React from 'react';
import { BsScissors } from 'react-icons/bs';
import { GiRazor } from 'react-icons/gi';

const WhatWeDo = () => {
    return (
        <section className='pt-10 pb-20'>
            <div className='flex flex-col items-center lg:max-w-2xl mx-auto mb-8 text-center'>
                <h2 className='text-4xl text-theme-dark mb-3 font-bold'>What We Do</h2>
                <p className='text-base text-theme-body'>There are many variations of passages of Lorem Ipsum available but the majority have randomised words which look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex flex-col md:flex-row'>                   
                    <div className='flex justify-center items-center text-5xl text-white bg-theme-default md:w-[200px] lg:w-52 py-10 md:py-0 rounded-t-lg md:rounded-tl-xl md:rounded-bl-xl'>
                        <BsScissors />
                    </div>
                    <div className='bg-gray-100 p-8 rounded-b-lg md:rounded-tr-xl md:rounded-br-lg'>
                        <h3 className='text-theme-dark font-bold mb-3 text-2xl'>Haircut Style</h3>
                        <p className='text-base text-theme-text'>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more as more</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>                   
                    <div className='flex justify-center items-center text-5xl text-white bg-theme-default md:w-[200px] lg:w-52 py-10 md:py-0 rounded-t-lg md:rounded-tl-xl md:rounded-bl-xl'>
                        <GiRazor />
                    </div>
                    <div className='bg-gray-100 p-8 rounded-b-lg md:rounded-tr-xl md:rounded-br-lg'>
                        <h3 className='text-theme-dark font-bold mb-3 text-2xl'>Shaving Style</h3>
                        <p className='text-base text-theme-text'>There are many variations of passages Lorem Ipsu available but themajority a suffered alteratio some form more as more</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;