import React from 'react'
import PriceCard from './PriceCard'

const Pricing = () => {
    return (
        <div className='bg-gray-100 pt-16 pb-16'>
            <h1 className='text-center text-2xl font-bold text-blue-950'>
                Choose The Plan That&apos;s Right For You
            </h1>
            <p className='mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto'>
                Select the perfect plan that fits your needs and budget. Enjoy flexible options tailored just for you!
            </p>
            <div className='w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-center">
                    {/* PriceCard1 */}
                    <PriceCard time="3 Month" price="39.99" />
                </div>
                <div data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-center">
                    {/* PriceCard2 */}
                    <PriceCard time="12 Month" price="19.99" />
                </div>
                <div data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-center">
                    {/* PriceCard3 */}
                    <PriceCard time="Life time" price="9.99" />
                </div>
            </div>
        </div>
    )
}

export default Pricing