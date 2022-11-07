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
    console.log(latestServices);

    return (
        <section className='pt-16 pb-20'>
            <div className='flex flex-col items-center lg:max-w-3xl mx-auto mb-8 text-center'>
                <h2 className='text-4xl text-theme-dark mb-3 font-bold'>Special food every time in our Service</h2>
                <p className='text-base text-theme-body'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
                {
                    latestServices.map(service => (
                        <LatestServicesItem key={service._id} service={service} />
                    ))
                }
            </div>
            <div className='text-center mt-8'>
                <Link to='/services' className='inline-flex bg-theme-default py-4 px-10 rounded-lg text-white font-bold text-xl'>See All Services</Link>
            </div>
        </section>
    );
};

export default LatestServices;