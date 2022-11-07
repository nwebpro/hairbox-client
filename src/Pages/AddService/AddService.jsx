import React from 'react';

const AddService = () => {
    const handleServiceAdd = e => {
        e.preventDefault()
    }
    return (
        <div className='px-[15px] md:px-0 mx-auto container py-20'>
            <form onSubmit={handleServiceAdd} className='lg:max-w-3xl mx-auto p-10 bg-white shadow-2xl rounded-xl'>
                <div className='mb-5'>
                    <label htmlFor="sname" className="block text-sm font-bold text-theme-dark">
                        Service Name
                    </label>
                    <input
                    type="text"
                    name="sname"
                    className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                    placeholder='Enter your service name'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="price" className="block text-sm font-bold text-theme-dark">
                        Service Price
                    </label>
                    <input
                    type="text"
                    name="price"
                    className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                    placeholder='Enter your services price'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="simage" className="block text-sm font-bold text-theme-dark">
                        Service Image
                    </label>
                    <input
                    type="text"
                    name="simage"
                    className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                    placeholder='Enter your image url'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="simage" className="block text-sm font-bold text-theme-dark">
                        Service Details
                    </label>
                    <textarea
                        name="sdetails"
                        rows={5}
                        className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                        placeholder="Service details"
                    />
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-theme-default py-2 px-4 text-sm font-bold text-white shadow-sm hover:bg-theme-default focus:outline-none"
                >
                    Add Service
                </button>
                </div>
            </form>
        </div>
    );
};

export default AddService;