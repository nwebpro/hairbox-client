import React from 'react';
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { formatDistanceToNow,  } from 'date-fns'

const MyReviewItem = ({ review, handleReviewDelete }) => {
    const { _id, userName, reviewDetails, userImg, date, rating, serviceName } = review
    const addReviewTime = formatDistanceToNow (
        new Date(date),
        { includeSeconds: true }
    )
    return (
        <div className="flex flex-col divide-y rounded-md divide-gray-200" data-aos='fade-up' data-aos-duration='1000'>
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={ userImg } alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{ userName }</h4>
                        <span className="text-xs text-theme-body italic">{ addReviewTime }</span>
                        <div className='flex gap-3 items-center'>
                            <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                                <div className="flex">
                                    <span title="Rate 1 stars" aria-label="Rate 1 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <span className="text-theme-text italic">{ rating } out of 5</span>
                            </div>
                            <h3 className='text-theme-text italic'> - { serviceName }</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                    <button className='text-xl text-theme-default'>
                        <Link to={`/review/edit/${ _id }`} title='Review Edit'><FiEdit /></Link>
                    </button>
                    <button onClick={() => handleReviewDelete(_id)} title='Review Delete' className='text-xl text-red-600'>
                        <AiOutlineDelete />
                    </button>
                </div>
            </div>
            <div className="p-4 space-y-2 text-base text-theme-body">
                <p>{ reviewDetails }</p>
            </div>
        </div>
    );
};

export default MyReviewItem;