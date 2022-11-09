import React from 'react';
import nodejs from '../../assets/image/nodejs.png'
import useSetTitle from '../../hooks/useSetTitle';

const BlogDetails4 = () => {
    useSetTitle('How does Node JS handle multiple requests at the same time')
    return (
        <div className='px-[15px] md:px-0 mx-auto container py-20'>
            <div className='w-full lg:max-w-3xl mx-auto'>
                <img src={nodejs} alt="" className='w-full' />
                <h1 className='text-3xl font-bold text-theme-dark my-5'>How does Node JS handle multiple requests at the same time</h1>
                <div className='mb-5'>
                    <p className='text-base text-theme-body leading-7'>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. </p>
                </div>
                <div className='mb-5'>
                    <h2 className='text-2xl font-bold text-theme-dark mb-2'>How NodeJS handle multiple client requests</h2>
                    <p className='text-base text-theme-body leading-7 mb-3'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
                    <p className='text-base text-theme-body leading-7'>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails4;