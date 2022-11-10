import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSetTitle from '../../hooks/useSetTitle';
import { SlStar } from 'react-icons/sl'

const colors = {
    orange: "#FF9302",
    grey: "#a9a9a9"
}

const ReviewEdit = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
    const { reviewId } = useParams()
    const [reviewUpdate, setReviewUpdate] = useState([])
    const navigate = useNavigate()
    useSetTitle('Update Your Review')

    useEffect(() => {
        fetch(`https://haircat-salon.vercel.app/api/hairbox/review/${ reviewId }`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setReviewUpdate(data.data);
                } else {
                    toast.error(data.error);
                }
            })
            .catch((err) => toast.error(err.message));
    }, [reviewId]);

    const handleReviewUpdate = async (e) => {
        e.preventDefault();
        const reviewUpdate = {
            userName: e.target.userName.value,
            userEmail: e.target.userEmail.value,
            reviewDetails: e.target.reviewDetails.value,
            serviceName: e.target.serviceName.value,
            rating: currentValue,
        }
    
        fetch(`https://haircat-salon.vercel.app/api/hairbox/review/${ reviewId }`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('hairboxToken')}`
            },
            body: JSON.stringify(reviewUpdate)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast.success(data.message)
                navigate("/my-review")
            } else {
                toast.error(data.error)
            }
        })
        .catch(err => toast.error(err.message))
    }

    // Add Review with Star Icon
    const handleClick = value => {
        setCurrentValue(value)
    }
    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    }
    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return (
        <div className='px-[15px] lg:px-0 mx-auto lg:max-w-4xl py-20' data-aos='fade-up' data-aos-duration='1000'>
            <form onSubmit={handleReviewUpdate} className='p-10 bg-white shadow-2xl rounded-xl'>
                <div className='flex justify-center mb-5'>
                    {
                        stars.map((_, index) => {
                            return (
                                <SlStar
                                    key={index}
                                    size={30}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    style={{
                                        marginRight: 8,
                                        cursor: "pointer",
                                    }}
                                />
                            )
                        })
                    }
                </div>
                <div className='mb-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
                <input
                    type="text"
                    name="userName"
                    defaultValue={reviewUpdate?.userName}
                    readOnly
                    className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                    placeholder='Enter your name'
                    />
                    <input
                    type="email"
                    name="userEmail"
                    defaultValue={reviewUpdate?.userEmail}
                    readOnly
                    className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                    placeholder='Enter your name'
                    />
                    <input
                    type="text"
                    name="serviceName"
                    defaultValue={ reviewUpdate?.serviceName }
                    readOnly
                    className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                    placeholder='Enter your name'
                    />
                </div>
                <div className='mb-5'>
                    <textarea
                        name="reviewDetails"
                        rows={5}
                        defaultValue={reviewUpdate?.reviewDetails}
                        className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                        placeholder="Write a review"
                    />
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-theme-default py-2 px-4 text-sm font-bold text-white shadow-sm hover:bg-theme-default focus:outline-none"
                >
                    Update Review
                </button>
                </div>
            </form>
        </div>
    );
};

export default ReviewEdit;