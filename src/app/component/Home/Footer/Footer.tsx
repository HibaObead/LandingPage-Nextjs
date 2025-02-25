import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4'>
                {/* 1st Part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Solution</h1>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>EnterPrice</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>By Work Flow </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>By Team</p>
                </div>
                {/* 2nd Part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Company</h1>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About Us</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>News & Press </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Our Customer</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Leadership</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
                </div>
                {/* 3rd Part */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-bold'>Resources</h1>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blog</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Webiner & Events </p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Pocast</p>
                    <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>E-book & Guides</p>
                </div>
                {/* 4th Part */}
                <div>
                    <h1 className='text-lg font-bold'>Contact Us</h1>
                    <div className='mt-6'>
                        <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                        <h1 className='text-base font-bold text-blue-950 mt-1'>+0123 456789123</h1>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-sm text-gray-600'>Our Email</h1>
                        <h1 className='text-base font-bold text-blue-950 mt-1'>hibaobead0@gmail.com</h1>
                    </div>
                </div>
            </div>
            {/* bottom Part */}
            <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex justify-between flex-col md:flex-row items-center text-gray-600 text-sm'>
                <p className='text-center md:text-left'>Copyright 2025 Hiba Obead . All rights reserved</p>
                <div className='flex space-x-4 items-center mt-4 md:mt-0'>
                    <span>Social : </span>
                    <span className='text-gray-500 hover:text-gray-800'><FaFacebook /></span>
                    <span className='text-gray-500 hover:text-gray-800'><FaTwitter /></span>
                    <span className='text-gray-500 hover:text-gray-800'><FaLinkedin /></span>

                </div>
            </div>
        </div>
    )
}

export default Footer