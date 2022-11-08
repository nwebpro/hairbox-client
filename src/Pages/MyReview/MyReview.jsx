import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import MyReviewItem from './MyReviewItem';
import Swal from 'sweetalert2';
import useSetTitle from '../../hooks/useSetTitle';

const MyReview = () => {
    const [reviews, setReviews] = useState([])
    const { user, userLogout } = useContext(AuthContext)
    useSetTitle('My Review')

    useEffect(() => {
        fetch(`http://localhost:5000/api/online-basket/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('onlineBasket')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403) {
                userLogout()
            }
            res.json()
        })
        .then(data => {
            setReviews(data.data)
        })
    }, [user?.email, reviews, userLogout])
    console.log(reviews)

    const handleReviewDelete = reviewId => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                fetch(`http://localhost:5000/api/online-basket/review/${ reviewId }`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('onlineBasket')}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if(data.data.success) {
                        const remaining = reviews.filter(review => review._id !== reviewId)
                        setReviews(remaining)
                    }
                })
            }
        })
    }

    return (
        <div className='px-[15px] md:px-0 mx-auto container py-20'>
            <div className='mt-10'>
                {
                    reviews.map(review => (
                        <MyReviewItem key={review._id} review={review} handleReviewDelete={handleReviewDelete} />
                    ))
                }
            </div>
        </div>
    );
};

export default MyReview;