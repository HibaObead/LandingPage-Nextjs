import React from 'react'
type PriceCardProps = {
    time: string,
    price: string
}
const PriceCard = ({ price, time }: PriceCardProps) => {
    return (
        <div className='bg-white shadow-lg p-8 relative border-t-4 border-rose-300'>
            {/* Heading */}
            <h1 className='text-xl font-bold text-sky-500'>
                {time} Membership
            </h1>
            <p className='mt-4 font-mediumv text-gray-600'>
                provides exclusive access to premium content, special discounts, and personalized benefits, ensuring a seamless and rewarding experience.
            </p>
            {/* Price */}
            <div className='mt-8'>
                <div className='text-gray-700 text-lg font-semibold'>
                    <span className='text-4xl font-bold text-black'>${price}</span> / Month
                </div>
            </div>
            {/* Button Section */}
            <div className='mt-12'>
                <a href="#_" className="px-10 py-2.5 text-base font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
                    Upgrade Now                </a>
            </div>
        </div>
    )
}

export default PriceCard