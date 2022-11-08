import React, { useEffect, useState } from 'react';
import ServicesItem from './ServicesItem';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/online-basket/all-services')
            .then(res => res.json())
            .then(data => setServices(data.data))
    }, [])

    return (
        <div className='px-[15px] md:px-0 mx-auto container py-20'>
            <div className='pt-16 pb-20'>
            <div className='flex flex-col items-center lg:max-w-2xl mx-auto mb-8 text-center'>
                <h2 className='text-4xl text-theme-dark mb-3 font-bold'>Our Services</h2>
                <p className='text-base text-theme-body'>There are many variations of passages of Lorem Ipsum available but the majority injected humour randomised words</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
                {
                    services.map(service => (
                        <ServicesItem key={service._id} service={service} />
                    ))
                }
            </div>
        </div>
        </div>
    );
};

export default Services;