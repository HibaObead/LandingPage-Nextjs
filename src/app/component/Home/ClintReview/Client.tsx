import React from 'react'
import ClientCard from './ClientCard'

const Client = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-100'>
            {/* Heading */}
            <h1 className='text-2xl text-center font-bold text-blue-900'>
                What Our Happy Client Say
            </h1>
            {/* SubHeading */}
            <p className='mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%] '>
                Hear from our happy clients who have experienced exceptional service and outstanding results with us!
            </p>
            {/* Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto'>
                {/* 1st client */}
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    < ClientCard image="/images/u1.jpg" name="Jessica Doe" rating="4.7" />
                </div>
                {/* 2nd client */}
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    < ClientCard image="/images/u2.jpg" name="John Dev" rating="4.5" />
                </div>
                {/* 3rd client */}
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    < ClientCard image="/images/u3.jpg" name="Sasuke Uchiha" rating="4.3" />
                </div>
                {/* 4th client */}
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    < ClientCard image="/images/u4.jpg" name="Boruto Uzumaki" rating="4.9" />
                </div>
            </div>
        </div>
    )
}

export default Client
