import React from 'react';
import { Link } from 'react-router-dom';
import sqlvsnosql from '../../assets/image/sqlvsnosql.jpg'
import jwt from '../../assets/image/jwt.jpg'
import nodevsjs from '../../assets/image/nodevsjs.jpg'
import nodejs from '../../assets/image/nodejs.png'
import useSetTitle from '../../hooks/useSetTitle';

const Blog = () => {
    useSetTitle('Blog')
    return (
        <div className='px-[15px] md:px-0 mx-auto container py-20'>
            <div className='flex flex-col items-center lg:max-w-2xl mx-auto text-center'>
                <h2 className='text-4xl text-theme-dark mb-3 font-bold'>Our Blog</h2>
                <p className='text-base text-theme-body'>A laoreet aliquam mauris porta maecenas felis, donec nec curabitur quis dui sit, et porta ultricies pretium semper.</p>
            </div>
            <div className="py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="min-h-[500px] lg:min-h-[550px] border overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src={sqlvsnosql}
                            className="object-cover w-full object-center h-[210px]"
                            alt=""
                        />
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
                    <div className="min-h-[500px] lg:min-h-[550px] border overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src={jwt}
                            className="object-cover w-full object-center h-[210px]"
                            alt=""
                        />
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
                    <div className="min-h-[500px] lg:min-h-[550px] border overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src={nodevsjs}
                            className="object-cover w-full object-center h-[210px]"
                            alt=""
                        />
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
                    <div className="min-h-[500px] lg:min-h-[550px] border overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src={nodejs}
                            className="object-cover w-full object-center h-[210px]"
                            alt=""
                        />
                        <div className="p-5">
                            <Link
                            to="/blog/how-does-node-js-handle-multiple-requests-at-the-same-time"
                            title="Difference Between SQL and NoSQL"
                            className="inline-block mb-3 text-2xl font-bold leading-7 text-theme-dark"
                            >
                                How does Node JS handle multiple requests at the same time
                            </Link>
                            <p className="mb-2 text-theme-body text-base">
                                We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.  
                            </p>
                            <Link
                            to="/blog/how-does-node-js-handle-multiple-requests-at-the-same-time"
                            className="inline-flex items-center font-semibold text-theme-default"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;