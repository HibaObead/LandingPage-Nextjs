import React from 'react'
import BoxText from '../../Helper/BoxText'
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import { IoColorPaletteOutline } from 'react-icons/io5'

const Services = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto'>
                <BoxText>Ouer Services</BoxText>
                {/* heading */}
                <h1 className='mt-4 text-2xl md:text-3xl font-bold text-gray-800 '>
                    Our Services Made For You?
                </h1>
                {/* descripotion */}
                <p className='mt-4 text-gray-600 w-full sm:w-[80%] md:w-[70%] xl:w-[50%] lg:e-[60%]'>
                    Our services are tailored to meet your unique needs, ensuring a seamless and personalized experience.
                </p>

                {/* Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8  items-center gap-y-12 mt-16'>
                    {/* 1st Serv */}
                    <div data-aos="fade-righr" data-aos-anchor-placement="top-center"
                        className='flex items-center space-x-5'>
                        {/* icons */}
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                            <FaRocket className=' text-orange-400 w-6 h-6' />
                        </div>
                        {/* text section */}
                        <div>
                            <p className='text-lg font-bold text-gray-700'>
                                Start Up
                            </p>
                            <p className='text-gray-600 text-sm'>
                                Our Startup Service provides expert guidance and essential tools to help launch and grow your business successfully.
                            </p>
                        </div>
                    </div>
                    {/* 2nd Serv */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100"
                        className='flex items-center space-x-5'>
                        {/* icons */}
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                            <FaBriefcase className=' text-orange-400 w-6 h-6' />
                        </div>
                        {/* text section */}
                        <div>
                            <p className='text-lg font-bold text-gray-700'>
                                Bussiness
                            </p>
                            <p className='text-gray-600 text-sm'>
                                Our business services are designed to optimize operations,
                                and drive growth with tailored solutions for your success.                            </p>
                        </div>
                    </div>
                    {/* 3rd Serv */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200"
                        className='flex items-center space-x-5'>
                        {/* icons */}
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                            <FaShoppingCart className=' text-orange-400 w-6 h-6' />
                        </div>
                        {/* text section */}
                        <div>
                            <p className='text-lg font-bold text-gray-700'>
                                E-commerce
                            </p>
                            <p className='text-gray-600 text-sm'>
                                We provide seamless e-commerce solutions for secure
                                payments,smooth shopping,and efficient management.
                            </p>
                        </div>
                    </div>
                    {/* 4th Serv */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300"
                        className='flex items-center space-x-5'>
                        {/* icons */}
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                            <MdOutlineDesignServices className=' text-orange-400 w-6 h-6' />
                        </div>
                        {/* text section */}
                        <div>
                            <p className='text-lg font-bold text-gray-700'>
                                Digital Design
                            </p>
                            <p className='text-gray-600 text-sm'>
                                focus on creating visually appealing and user-friendly digital experiences, including graphics,and branding solutions.                            </p>
                        </div>
                    </div>
                    {/* 5th Serv */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="400"
                        className='flex items-center space-x-5'>
                        {/* icons */}
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                            <IoColorPaletteOutline className=' text-orange-400 w-6 h-6' />
                        </div>
                        {/* text section */}
                        <div>
                            <p className='text-lg font-bold text-gray-700'>
                                Unlimited Color                            </p>
                            <p className='text-gray-600 text-sm'>
                                lets you customize designs with endless color options, ensuring a perfect match for your brand or style.                            </p>
                        </div>
                    </div>
                    {/* 6th Serv */}
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="500"
                        className='flex items-center space-x-5'>
                        {/* icons */}
                        <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                            <FaChess className=' text-orange-400 w-6 h-6' />
                        </div>
                        {/* text section */}
                        <div>
                            <p className='text-lg font-bold text-gray-700'>
                                Strategy Solution
                            </p>
                            <p className='text-gray-600 text-sm'>
                                helps businesses develop effective plans to achieve their goals, optimize performance, and drive long-term success.                            </p>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Services
