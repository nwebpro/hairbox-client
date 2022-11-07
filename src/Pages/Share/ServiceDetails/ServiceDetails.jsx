import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const servicesDetails = useLoaderData()
    const details = servicesDetails.data
    const { name, image, descrption } = details
    return (
        <div className='px-[15px] md:px-0 mx-auto container py-20'>
            <img src={ image } alt="" />
            <h2>{ name }</h2>
            <p>{ descrption }</p>
        </div>
    );
};

export default ServiceDetails;