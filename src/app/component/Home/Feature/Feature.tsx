import React from 'react'
import { GoWorkflow } from 'react-icons/go'
import { LuPen } from 'react-icons/lu'
import { MdAccessAlarm, MdOutlineTouchApp } from 'react-icons/md'
import Image from 'next/image'
const Feature = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-100'>
            <div>
                <h1 className='text-center text-2xl font-bold text-blue-950'>
                    Key Features Of The Product
                </h1>
                <p className='mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>
                    Our Product stans out with its high performance ,
                    delivering blazing-fast speeds and seamless multi-tasking.
                </p>
            </div>
            {/* main grid */}
            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
                {/* inner grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                    {/* 1st box */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center"
                        className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            {/* icon */}
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                                <MdOutlineTouchApp className='w-6 h-6 text-pink-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-gray-700'>
                                App Integration
                            </h1>

                        </div>
                        {/* description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                            App integration enables seamless communication between different applications,
                            enhancing functionality and user experience. It streamlines data exchange.
                        </p>
                    </div>
                    {/* 2nd box */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100"
                        className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            {/* icon */}
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                                <GoWorkflow className='w-6 h-6 text-pink-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-gray-700'>
                                Workflow Builder
                            </h1>

                        </div>
                        {/* description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                            Workflow Builder is a tool that allows users to create, automate,and

                            manage workflows efficiently,streamlining processes without requiring complex coding.


                        </p>
                    </div>
                    {/* 3rd box */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200"
                        className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            {/* icon */}
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                                <LuPen className='w-6 h-6 text-pink-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-gray-700'>
                                Problem Solution
                            </h1>
                        </div>
                        {/* description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                            Problem Solution approach identifies an issue and provides clear,actionable way to resolve it. It involves analyzing the root cause,brainstorming solutions.
                        </p>
                    </div>
                    {/* 4th box */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300"
                        className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            {/* icon */}
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                                <MdAccessAlarm className='w-6 h-6 text-pink-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-gray-700'>
                                Lifetime Access
                            </h1>
                        </div>
                        {/* description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                            Lifetime access means you can use a product, service, or course indefinitely without recurring fees. It ensures unlimited availability, updates, and benefits for a one-time purchase.
                        </p>
                    </div>
                </div>
                {/* image section */}
                <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                    <Image src="/images/f1.png" alt="feature" width={700} height={700} />
                </div>
            </div>
        </div>
    )
}

export default Feature