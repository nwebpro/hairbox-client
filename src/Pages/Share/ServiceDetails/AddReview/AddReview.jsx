import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Context/AuthContext/AuthProvider';

const AddReview = ({ details }) => {
    const { _id } = details
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
            date: new Date()
        }

        fetch('http://localhost:5000/api/hairbox/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
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
    return (
        <form onSubmit={handleReviewAdd} className='p-10 bg-white shadow-2xl rounded-xl'>
            <div className='mb-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
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