import React from 'react';
import sqlvsnosql from '../../../assets/image/sqlvsnosql.jpg'
import jwt from '../../../assets/image/jwt.jpg'
import nodevsjs from '../../../assets/image/nodevsjs.jpg'
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const LatestBlog = () => {
    return (
        <div className='md:pt-10 pb-20'>
            <div className='flex flex-col items-center lg:max-w-2xl mx-auto text-center' data-aos='zoom-in' data-aos-duration='1000'>
                <h2 className='text-4xl text-theme-dark mb-3 font-bold'>Our Blog</h2>
                <p className='text-base text-theme-body'>A laoreet aliquam mauris porta maecenas felis, donec nec curabitur quis dui sit, et porta ultricies pretium semper.</p>
            </div>
            <div className="py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="min-h-[500px] lg:min-h-[550px] border overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm" data-aos='fade-right' data-aos-duration='1500'>
                        <PhotoProvider>
                            <PhotoView src={ sqlvsnosql }>
                                <img src={ sqlvsnosql } className="object-cover w-full object-center h-[210px]" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="p-5">
                            <Link
                            to="/blog/difference-between-sql-and-nosql"
                            title="Difference Between SQL and NoSQL"
                            className="inline-block mb-3 text-2xl font-bold leading-7 text-theme-dark"
                            >
                                Difference Between SQL and NoSQL
                            </Link>
                            <p className="mb-2 text-theme-body text-base">
                                When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. 
                            </p>
                            <Link
                            to="/blog/difference-between-sql-and-nosql"
                            className="inline-flex items-center font-semibold text-theme-default"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="min-h-[500px] lg:min-h-[550px] border overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm" data-aos='fade-up' data-aos-duration='1500'>
                        <PhotoProvider>
                            <PhotoView src={ jwt }>
                                <img src={ jwt } className="object-cover w-full object-center h-[210px]" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="p-5">
                            <Link
                            to="/blog/what-is-jwt-and-how-dose-it-work"
                            title="What is JWT, and how does it work"
                            className="inline-block mb-3 text-2xl font-bold leading-7 text-theme-dark"
                            >
                                What is JWT, and how does it work
                            </Link>
                            <p className="mb-2 text-theme-body text-base">
                                JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
                            </p>
                            <Link
                            to="/blog/what-is-jwt-and-how-dose-it-work"
                            className="inline-flex items-center font-semibold text-theme-default"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="min-h-[500px] lg:min-h-[550px] border overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm" data-aos='fade-left' data-aos-duration='1500'>
                        <PhotoProvider>
                            <PhotoView src={ nodevsjs }>
                                <img src={ nodevsjs } className="object-cover w-full object-center h-[210px]" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="p-5">
                            <Link
                            to="/blog/what-is-the-difference-between-javascript-and-node-js"
                            title="What is the difference between javascript and Node JS?"
                            className="inline-block mb-3 text-2xl font-bold leading-7 text-theme-dark"
                            >
                                What is the difference between javascript and Node JS
                            </Link>
                            <p className="mb-2 text-theme-body text-base">
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                            </p>
                            <Link
                            to="/blog/what-is-the-difference-between-javascript-and-node-js"
                            className="inline-flex items-center font-semibold text-theme-default"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center' data-aos='zoom-in' data-aos-duration='1000'>
                <Link to='/blog' className='inline-flex bg-theme-default py-4 px-10 rounded-lg text-white font-bold text-xl'>See All Blog</Link>
            </div>
        </div>
    );
};

export default LatestBlog;