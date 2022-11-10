import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import facebook from '../../../assets/image/socialLogin/facebook.svg'
import google from '../../../assets/image/socialLogin/google.svg'
import linkedin from '../../../assets/image/socialLogin/linkedin.svg'
import { AuthContext } from '../../../Context/AuthContext/AuthProvider'

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { signInWithGoogle } = useContext(AuthContext)

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email
                }
                // Get JWT Token
                fetch('https://haircat-salon.vercel.app/api/hairbox/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => {
                    // Local Storage is the easiest but not the best place to share JWT Token
                    localStorage.setItem('hairboxToken', data.data)
                    navigate(from, { replace: true })
                })
            })
            .catch(error => {
                toast.error(error.message, { autoClose: 500 })
            })
    }

    return (
        <div className='flex justify-center items-center gap-4 mb-b-50'>
            <div className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-not-allowed'>
                <img src={ facebook } alt="" />
            </div>  
            <div className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-not-allowed'>
                <img src={ linkedin } alt="" />
            </div>  
            <div onClick={handleGoogleSignin} className='w-14 h-14 rounded-full bg-[#F5F5F8] flex items-center justify-center cursor-pointer'>
                <img src={ google } alt="" />
            </div>     
        </div>
    )
}

export default SocialLogin