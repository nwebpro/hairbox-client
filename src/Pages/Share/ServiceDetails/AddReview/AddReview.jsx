import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Context/AuthContext/AuthProvider';
import { SlStar } from 'react-icons/sl'

const colors = {
    orange: "#FF9302",
    grey: "#a9a9a9"
}

const AddReview = ({ details, handleAutoReviewShow }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
    const { _id, serviceName } = details
    const { user } = useContext(AuthContext)

    const handleReviewAdd = e => {
        e.preventDefault()
        const from = e.target
        const review = {
            userName: from.userName.value,
            userEmail: from.userEmail.value,
            reviewDetails: from.reviewDetails.value,
            serviceId: _id,
            userImg: user?.photoURL,
            rating: currentValue,
            serviceName: serviceName,
            date: new Date()
        }

        fetch('https://haircat-salon.vercel.app/api/hairbox/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                handleAutoReviewShow(_id)
                toast.success(data.message)
            }else{
                toast.error(data.error)
            }
            from.reset()
        })
        .catch(err => {
            toast.error(err.message)
        })
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
        <form onSubmit={handleReviewAdd} className='p-10 bg-white shadow-2xl rounded-xl' data-aos='fade-up' data-aos-duration='1000'>
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
                                    cursor: "pointer"
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
                defaultValue={user?.displayName}
                readOnly
                className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                placeholder='Enter your name'
                />
                <input
                type="email"
                name="userEmail"
                defaultValue={user?.email}
                readOnly
                className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                placeholder='Enter your name'
                />
                <input
                type="text"
                name="serviceName"
                defaultValue={ serviceName }
                readOnly
                className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                placeholder='Enter your name'
                />
            </div>
            <div className='mb-5'>
                <textarea
                    name="reviewDetails"
                    rows={5}
                    className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                    required
                    placeholder="Write a review"
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
    );
};

export default AddReview;