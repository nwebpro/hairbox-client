import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import useSetTitle from '../../../hooks/useSetTitle';
import AddReview from './AddReview/AddReview';
import ReviewItem from './AddReview/ReviewItem';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)
    const serviceDetailsData = useLoaderData()
    const details = serviceDetailsData.data
    const { _id, serviceName, price, serviceDetails, serviceImage} = details
    useSetTitle(serviceName)

    useEffect(() => {
        fetch(`https://haircat-salon.vercel.app/api/hairbox/all-review?serviceId=${ _id }`)
        .then(res => res.json())
        .then(data => {setReviews(data.data)})
    }, [reviews, _id])

    return (
        <div className='px-[15px] lg:px-0 mx-auto lg:max-w-4xl py-20'>
            <div data-aos='fade-up' data-aos-duration='1000'>
                <img src={ serviceImage } className='w-full h-96 object-cover object-center rounded mb-3' alt="" />
                <h2 className='text-2xl font-bold text-theme-dark mb-2'>{ serviceName }</h2>
                <p className='text-theme-body text-base mb-5'>{ serviceDetails }</p>
                <button className='inline-flex font-bold bg-theme-default py-3 px-7 text-white text-xl rounded-full '>Price: ${ price }</button>
                <div className='mt-20 flex justify-between'>
                    
                    <div className="">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-semibold mb-2">Customer reviews</h2>
                            <p className="text-lg text-theme-dark">{reviews.length} ratings</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                {
                    user?.uid ?
                    <AddReview details={details} />
                    :
                    <Link to='/login'>
                        <div className='w-full text-center'>
                            <h3 className='text-3xl text-theme-body/30'>Please login to add a review</h3>
                        </div>
                    </Link>
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