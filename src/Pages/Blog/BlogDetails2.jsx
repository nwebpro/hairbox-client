import React from 'react';
import jwt from '../../assets/image/jwt.jpg'
import howDoseWork from '../../assets/image/howDoseWork.png'
import useSetTitle from '../../hooks/useSetTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const BlogDetails2 = () => {
    useSetTitle('What is JWT, and how does it work')
    return (
        <div className='px-[15px] md:px-0 mx-auto container py-20'>
            <div className='w-full lg:max-w-3xl mx-auto'>
                <PhotoProvider>
                    <PhotoView src={ jwt }>
                        <img src={ jwt } alt="" className='w-full' data-aos='fade-up' data-aos-duration='1000' />
                    </PhotoView>
                </PhotoProvider>
                <h1 className='text-3xl font-bold text-theme-dark my-5' data-aos='fade-up' data-aos-duration='1000'>What is JWT, and how does it work</h1>
                <div className='mb-5' data-aos='fade-up' data-aos-duration='1000'>
                    <h2 className='text-2xl font-bold text-theme-dark mb-2'>What is JWT</h2>
                    <p className='text-base text-theme-body mb-3 leading-7'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.</p>
                    <p className='text-base text-theme-body leading-7 mb-3'>It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</p>
                    <p className='text-base text-theme-body leading-7 mb-3'>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.</p>
                    <p className='text-base text-theme-body leading-7'>JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
                </div>
                <div className='mb-5' data-aos='fade-up' data-aos-duration='1000'>
                    <h2 className='text-2xl font-bold text-theme-dark mb-2'>How dose it works</h2>
                    <p className='text-base text-theme-body leading-7'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                    <PhotoProvider>
                        <PhotoView src={ howDoseWork }>
                            <img src={ howDoseWork } className='w-full' alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <ul className='mt-5 pl-10 list-disc'>
                        <li>User sign-in using username and password or google/facebook.</li>
                        <li>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                        <li>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                        <li>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails2;