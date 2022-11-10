import React from 'react';
import sqlvsnosql from '../../assets/image/sqlvsnosql.jpg'
import useSetTitle from '../../hooks/useSetTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const BlogDetails1 = () => {
    useSetTitle('Difference Between SQL and NoSQL')
    return (
        <div className='px-[15px] md:px-0 mx-auto container py-20'>
            <div className='w-full lg:max-w-3xl mx-auto'>
                <PhotoProvider>
                    <PhotoView src={ sqlvsnosql }>
                        <img src={sqlvsnosql} alt="" className='w-full' data-aos='fade-up' data-aos-duration='1000' />
                    </PhotoView>
                </PhotoProvider>
                <h1 className='text-3xl font-bold text-theme-dark my-5' data-aos='fade-up' data-aos-duration='1000'>Difference Between SQL and NoSQL</h1>
                <div className='mb-5' data-aos='fade-up' data-aos-duration='1000'>
                    <h2 className='text-2xl font-bold text-theme-dark mb-2'>What is SQL</h2>
                    <p className='text-base text-theme-body mb-3 leading-7'>SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.</p>
                    <p className='text-base text-theme-body leading-7'>SQL is widely used by top tech companies like Facebook, Whatsapp, etc for data processing solutions. It is used for different types of RDBMS including Oracle, MySQL, SQLServer, etc. </p>
                    <ul className='mt-5 pl-10 list-disc'>
                        <li>Relational</li>
                        <li>Use structured query language and have a predefined schema.</li>
                        <li>Are vertically scalable are table based</li>
                        <li>Are better for multi-row transactions</li>
                    </ul>
                </div>
                <div className='mb-5' data-aos='fade-up' data-aos-duration='1000'>
                    <h2 className='text-2xl font-bold text-theme-dark mb-2'>What is NoSQL</h2>
                    <p className='text-base text-theme-body leading-7'>NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.</p>
                    <ul className='mt-5 pl-10 list-disc'>
                        <li>Non-Relational</li>
                        <li>NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>Are horizontally scalable. are document, key-value, graph or wide-column stores.</li>
                        <li>Are better for unstructured data like documents or JSON.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails1;