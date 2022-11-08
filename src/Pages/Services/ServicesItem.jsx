import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServicesItem = ({ service }) => {
    const { serviceName, price, serviceDetails, serviceImage, _id } = service
    return (
        <div className='p-5 bg-white shadow-lg rounded-lg'>
            <PhotoProvider>
                <PhotoView src={ serviceImage }>
                    <img src={ serviceImage } className='w-full h-80 object-fill mb-5 rounded-lg' alt="" />
                </PhotoView>
            </PhotoProvider>
            <h2 className='text-2xl font-bold text-theme-dark mb-3 leading-8'>{ serviceName }</h2>
            <h3 className='text-bold text-xl mb-2'>Price: ${ price }</h3>
            <p>
                {
                    serviceDetails.length > 100 ?
                    <>
                        {serviceDetails.slice(0, 100) + '... '}
                        <Link to={`/service/${ _id }`} className='text-bold text-theme-default underline'>Read More</Link>
                    </>
                    :
                    serviceDetails
                }
            </p>
        </div>
    );
};

export default ServicesItem;