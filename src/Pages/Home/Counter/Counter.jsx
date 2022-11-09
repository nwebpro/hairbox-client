import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className='mt-10 mb-20 bg-theme-dark py-20 px-10 rounded'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='text-center p-5'>
                    <h3 className='text-theme-default text-4xl mb-2 font-bold'><CountUp delay={0} end={75} />+</h3>
                    <h4 className='text-lg font-bold text-white'>Healthy and happy customers</h4>
                </div>
                <div className='text-center p-5'>
                    <h3 className='text-theme-default text-4xl mb-2 font-bold'><CountUp delay={0} end={5} />+</h3>
                    <h4 className='text-lg font-bold text-white'>Professional barber specialist</h4>
                </div>
                <div className='text-center p-5'>
                    <h3 className='text-theme-default text-4xl mb-2 font-bold'><CountUp delay={0} end={7} />+</h3>
                    <h4 className='text-lg font-bold text-white'>Years of impeccable and successful work</h4>
                </div>
                <div className='text-center p-5'>
                    <h3 className='text-theme-default text-4xl mb-2 font-bold'><CountUp delay={0} end={15} />+</h3>
                    <h4 className='text-lg font-bold text-white'>Diplomas and awards of our barbershop</h4>
                </div>
            </div>
        </div>
    );
};

export default Counter;