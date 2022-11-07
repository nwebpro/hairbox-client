import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServicesItem = ({ service }) => {
    const { name, descrption, image, _id } = service
    return (
        <div className='p-5 bg-white shadow-lg rounded-lg'>
            <PhotoProvider>
                <PhotoView src={ image }>
                    <img src={ image } className='w-full h-52 object-fill mb-5 rounded-lg' alt="" />
                </PhotoView>
            </PhotoProvider>
            <h2 className='text-2xl font-bold text-theme-dark mb-3 leading-8'>{ name }</h2>
            <p>
                {
                    descrption.length > 100 ?
                    <>
                        {descrption.slice(0, 100) + '... '}
                        <Link to={`/service/${ _id }`} className='text-bold text-theme-default underline'>Read More</Link>
                    </>
                    :
                    descrption
                }
            </p>
        </div>
    );
};

export default ServicesItem;