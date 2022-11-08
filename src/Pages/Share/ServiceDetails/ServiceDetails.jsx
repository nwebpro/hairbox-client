import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import AddReview from './AddReview/AddReview';
import ReviewItem from './AddReview/ReviewItem';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)
    const [a, b, c, d] = user?.metadata?.creationTime.split(' ')
    const createTime = [b, c, d].join(' ')
    const servicesDetails = useLoaderData()
    const details = servicesDetails.data
    const { _id, serviceName, price, serviceDetails, serviceImage} = details

    useEffect(() => {
        fetch(`http://localhost:5000/api/online-basket/all-review?serviceId=${ _id }`)
        .then(res => res.json())
        .then(data => setReviews(data.data))
    }, [reviews, _id])

    return (
        <div className='px-[15px] lg:px-0 mx-auto lg:max-w-4xl py-20'>
            <img src={ serviceImage } className='w-full object-cover h-80 rounded mb-3' alt="" />
            <h2 className='text-2xl font-bold text-theme-dark mb-2'>{ serviceName }</h2>
            <p className='text-theme-body text-base mb-5'>{ serviceDetails }</p>
            <button className='inline-flex font-bold bg-theme-default py-3 px-7 text-white text-xl rounded-full '>Price: ${ price }</button>
            <div className='mt-20 flex justify-between'>
                <div className='flex gap-3 items-center'>
                    <div className='w-20 h-20'>
                        <img src={ user?.photoURL } className='w-full h-20 object-cover rounded-full' alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold text-theme-dark'>{ user?.displayName }</h2>
                        <p className='italic text-sm'>{ createTime }</p>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold">Customer reviews</h2>
                        <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                            <div className="flex">
                                <span title="Rate 1 stars" aria-label="Rate 1 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </span>
                                <span title="Rate 2 stars" aria-label="Rate 2 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </span>
                                <span title="Rate 3 stars" aria-label="Rate 3 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </span>
                                <span title="Rate 4 stars" aria-label="Rate 4 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-theme-text">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </span>
                                <span title="Rate 5 stars" aria-label="Rate 5 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-theme-text">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </span>
                            </div>
                            <span className="text-theme-text italic">3 out of 5</span>
                        </div>
                        <p className="text-sm text-theme-text capitalize">{reviews.length} total ratings</p>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                {
                    user?.uid ?
                    <AddReview details={details} />
                    :
                    <div className='w-full text-center'>
                        <h3 className='text-3xl text-theme-body/30'>Please login to add a review</h3>
                    </div>
                }
            </div>
            <div className='mt-10'>
                {
                    reviews.map(review => (
                        <ReviewItem key={review._id} review={review} />
                    ))
                }
            </div>
        </div>
    );
};

export default ServiceDetails;