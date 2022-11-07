import React from 'react';

const MyReview = () => {
    const handleReviewAdd = e => {
        e.preventDefault()
    }
    return (
        <div className='px-[15px] md:px-0 mx-auto container py-20'>
            <form onSubmit={handleReviewAdd} className='lg:max-w-3xl mx-auto p-10 bg-white shadow-2xl rounded-xl'>
                <div className='mb-5'>
                    <label htmlFor="reviewTitle" className="block text-sm font-bold text-theme-dark">
                        Review Title
                    </label>
                    <input
                    type="text"
                    name="reviewTitle"
                    className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                    placeholder='Enter your review title'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="reviewDetails" className="block text-sm font-bold text-theme-dark">
                        Review Details
                    </label>
                    <textarea
                        name="reviewDetails"
                        rows={5}
                        className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                        placeholder="Review details"
                    />
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-theme-default py-2 px-4 text-sm font-bold text-white shadow-sm hover:bg-theme-default focus:outline-none"
                >
                    Add Review
                </button>
                </div>
            </form>
        </div>
    );
};

export default MyReview;