import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import MyReviewItem from './MyReviewItem';
import Swal from 'sweetalert2';
import useSetTitle from '../../hooks/useSetTitle';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { InfinitySpin } from  'react-loader-spinner'

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviewLoading, setReviewLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false);
    useSetTitle('My Review')

    useEffect(() => {
        if(!user?.email){
            return
        }
        fetch(`https://haircat-salon.vercel.app/api/hairbox/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('hairboxToken')}`
            }
        })
        .then(res => {
            // if(res.status === 401 || res.status === 403) {
            //     return userLogout()
            // }
            return res.json()
        })
        .then(data => {
            setReviews(data)
            setReviewLoading(false)
        })
    }, [user?.email, refresh])

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
                fetch(`https://haircat-salon.vercel.app/api/hairbox/review/${ reviewId }`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('hairboxToken')}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if(data.success){
                        setRefresh(!refresh)
                    }
                })
                .catch(err => toast.error(err.message))
            }
        })
        
    }

    return (
        <div className='px-[15px] md:px-0 mx-auto container py-20'>
            <div>
                {
                    reviewLoading ? 
                    <div className='flex justify-center'>
                        <InfinitySpin width='200' color="#FF9302" />
                    </div>
                    :
                    <div>
                        {
                            reviews.length === 0 ?
                            <Link to='/services'>
                                <div className='w-full text-center py-40 md:py-60 lg:py-72'>
                                    <h3 className='text-3xl text-theme-body/30'>No reviews were added!</h3>
                                </div>
                            </Link>
                            :
                            <div className='mt-10'>
                                {
                                    reviews.map(review => (
                                        <MyReviewItem key={review._id} review={review} handleReviewDelete={handleReviewDelete} />
                                    ))
                                }
                            </div>
                        }
                    </div>
                }
            </div>
            
        </div>
    );
};

export default MyReview;