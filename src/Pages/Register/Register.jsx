import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setJWTAuthToken } from '../../api/jwtAuth'
import { AuthContext } from '../../Context/AuthContext/AuthProvider'
import useSetTitle from '../../hooks/useSetTitle'
import SocialLogin from '../Share/SocialLogin/SocialLogin'

const Register = () => {
    useSetTitle('Register')
    const navigate = useNavigate()
    const { createUser, updateUserProfile, setLoading } = useContext(AuthContext)

    const handleUserCreate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user
                setJWTAuthToken(user)
                navigate('/')
                handleUpdateUser(name, photoURL)
                toast.success('User Created Successfully!', { autoClose: 500 })
            })
            .catch(error => {
                toast.error(error.message, { autoClose: 500 })
            })

    }

    const handleUpdateUser = (name, photoURL) => {
        updateUserProfile({ displayName: name, photoURL: photoURL })
            .then(() => {
                setLoading(false)
            })
            .catch(error => {
                toast.error(error.message, { autoClose: 500 })
            })
    }

    return (
        <div className='container mx-auto px-[15px] lg:px-0 my-20'>
            <div className='md:max-w-lg mx-auto'>
                <div className='border border-[#D0D0D0] rounded-rounded-10 p-12 md:p-20'>
                    <h3 className='text-theme-body text-center text-4xl font-semibold leading-10 mb-b-50'>Sign Up</h3>
                    <form onSubmit={handleUserCreate} action="">
                        <div className='mb-b-30'>
                            <label className="text-theme-body text-lg leading-leading-21 font-semibold" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="mt-5 w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default"
                                type="text"
                                name="name"
                                placeholder='Your Name'
                            />
                        </div>
                        <div className='mb-b-30'>
                            <label className="text-theme-body text-lg leading-leading-21 font-semibold" htmlFor="photoURL">
                                Photo URL
                            </label>
                            <input
                                className="mt-5 w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default"
                                type="text"
                                name="photoURL"
                                defaultValue={'https://placeimg.com/192/192/people'}
                                placeholder='Photo URL'
                            />
                        </div>
                        <div className='mb-b-30'>
                            <label className="text-theme-body text-lg leading-leading-21 font-semibold" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="mt-5 w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default"
                                type="email"
                                name="email"
                                placeholder='Your Email'
                            />
                        </div>
                        <div className='mb-b-30'>
                            <label className="text-theme-body text-lg leading-leading-21 font-semibold" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="mt-5 w-full rounded-rounded-10 py-4 px-6 text-theme-dark placeholder-[#A2A2A2] font-normal text-base leading-leading-30 border focus:outline-1 focus:outline-theme-default"
                                type="password"
                                name="password"
                                placeholder='Your Password'
                            />
                        </div>
                        <div className='mb-b-30'>
                            <button
                                className="block w-full py-4 text-xl leading-leading-30 font-semibold text-white bg-theme-default rounded-rounded-10"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p className='text-center text-theme-body text-lg leading-leading-21 font-medium mb-b-30'>Or Sign Up With</p>
                    <SocialLogin />
                    <p className='text-lg font-normal text-theme-text text-center leading-leading-21'>
                        Have an account? <Link to='/login' className='font-semibold text-theme-default'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register