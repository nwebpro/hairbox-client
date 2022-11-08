import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LatestServicesItem from './LatestServicesItem';

const LatestServices = () => {
    const [latestServices, setLatestServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/online-basket/services')
            .then(res => res.json())
            .then(data => setLatestServices(data.data))
    }, [])

    return (
        <section className='pt-16 pb-20'>
            <div className='flex flex-col items-center lg:max-w-2xl mx-auto mb-8 text-center'>
                <h2 className='text-4xl text-theme-dark mb-3 font-bold'>Our Services</h2>
                <p className='text-base text-theme-body'>There are many variations of passages of Lorem Ipsum available but the majority injected humour randomised words</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-16'>
                {
                    latestServices.map(service => (
                        <LatestServicesItem key={service._id} service={service} />
                    ))
                }
            </div>
            <div className='text-center'>
                <Link to='/services' className='inline-flex bg-theme-default py-4 px-10 rounded-lg text-white font-bold text-xl'>See All Services</Link>
            </div>
        </section>
    );
};

export default LatestServices;