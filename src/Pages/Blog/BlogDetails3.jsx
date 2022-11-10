import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import nodevsjs from '../../assets/image/nodevsjs.jpg'
import useSetTitle from '../../hooks/useSetTitle';

const BlogDetails3 = () => {
    useSetTitle('What is the difference between javascript and Node JS')
    return (
        <div className='px-[15px] md:px-0 mx-auto container py-20'>
            <div className='w-full lg:max-w-3xl mx-auto'>
                <PhotoProvider>
                    <PhotoView src={ nodevsjs }>
                        <img src={ nodevsjs } alt="" className='w-full' data-aos='fade-up' data-aos-duration='1000' />
                    </PhotoView>
                </PhotoProvider>
                <h1 className='text-3xl font-bold text-theme-dark my-5' data-aos='fade-up' data-aos-duration='1000'>What is the difference between javascript and Node JS</h1>
                <div className='mb-5' data-aos='fade-up' data-aos-duration='1000'>
                    <h2 className='text-2xl font-bold text-theme-dark mb-2'>What is Node JS</h2>
                    <p className='text-base text-theme-body leading-7'>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
                    <ul className='mt-5 pl-10 list-disc'>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>Nodejs does not have capability to add HTML tags.</li>
                        <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                        <li>Nodejs is used in server-side development.</li>
                        <li>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </li>
                        <li>Nodejs is written in C, C++ and Javascript.</li>
                    </ul>
                </div>
                <div className='mb-5' data-aos='fade-up' data-aos-duration='1000'>
                    <h2 className='text-2xl font-bold text-theme-dark mb-2'>What is JavaScript</h2>
                    <p className='text-base text-theme-body leading-7'>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                    <ul className='mt-5 pl-10 list-disc'>
                        <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                        <li>Javascript can only be run in the browsers.</li>
                        <li>It is basically used on the client-side.</li>
                        <li>Javascript is capable enough to add HTML and play with the DOM. </li>
                        <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </li>
                        <li>Javascript is used in frontend development.</li>
                        <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </li>
                        <li>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails3;