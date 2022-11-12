import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import hairboxx from '../../../assets/image/hairboxx.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='bg-theme-dark pt-20 lg:pt-32 text-white px-[15px] lg:px-0'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
                    <div className='lg:col-span-2 mb-b-30 lg:mb-0'>
                        <img src={hairboxx} alt="" className='w-48 mb-5' />
                        <p className='text-[#E8E8E8] text-base leading-6 font-normal mb-5 lg:w-2/3'>Hair Box is one of the best premium Men salon. Here we provide the best ever services. We believe in 100% customer satisfaction.</p>
                        <div className='flex gap-2'>
                            <FaFacebookF className='bg-[#2C2C2C] text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-theme-default hover:text-white transition-colors duration-200' />
                            <FaTwitter className='bg-[#2C2C2C] text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-theme-default hover:text-white transition-colors duration-200' />
                            <FaLinkedinIn className='bg-[#2C2C2C] text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-theme-default hover:text-white transition-colors duration-200' />
                            <FaInstagram className='bg-[#2C2C2C] text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-theme-default hover:text-white transition-colors duration-200' />
                        </div>
                    </div>
                    <div className='mb-b-30 lg:mb-0'>
                        <h3 className='mb-6 lg:mb-10 text-semibold text-xl leading-6'>Quick Links</h3>
                        <ul>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/services'>Services</Link>
                            </li>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='mb-b-30 lg:mb-0'>
                        <h3 className='mb-6 lg:mb-10 text-semibold text-xl leading-6'>Company</h3>
                        <ul>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/about'>About</Link>
                            </li>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/my-review'>My Review</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-6 lg:mb-10 text-semibold text-xl leading-6'>Support</h3>
                        <ul>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/'>Support Center</Link>
                            </li>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/'>Feedback</Link>
                            </li>
                            <li>
                                <Link className='text-base font-normal text-[#F3F3F3] leading-10' to='/'>Accessability</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 pb-16'>
                    <p className='text-center md:text-left'>Copyright © 2021 - { year } <Link to='/' className='text-theme-default'>Hairbox.</Link> All Rights Reserved.</p>
                    <p className='text-center md:text-right'>Developed & Maintained By  <a href='https://www.facebook.com/abnaeembsc' className='text-theme-default' target={'_blank'} rel="noreferrer">Ab Naeem.</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer