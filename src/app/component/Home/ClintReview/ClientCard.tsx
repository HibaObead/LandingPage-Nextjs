import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
type ClientCardProps = {
    image: string;
    name: string;
    rating: string;
}
const ClientCard = ({ image, name, rating }: ClientCardProps) => {
    return (
        <div className='bg-white shadow-md p-8 rounded-lg sm:flex items-center space-y-4 sm:space-y-0 space-x-6'>
            {/* Image   */}
            <div>
                <Image src={image} alt={name} width={350} height={350} className='rounded-lg' />
            </div>
            {/* Content */}
            <div>
                <h1 className='text-lg font-bold text-blue-950'>
                    {name}
                </h1>
                <div className='flex items-center space-x-3'>
                    <p className='text-2xl font-bold text-orange-500'>{rating}</p>
                    <div className='flex items-center'>
                        <FaStar className='text-yellow-600 w-4 h-4' />
                        <FaStar className='text-yellow-600 w-4 h-4' />
                        <FaStar className='text-yellow-600 w-4 h-4' />
                        <FaStar className='text-yellow-600 w-4 h-4' />
                        <BsStarHalf className='text-yellow-600 w-4 h-4' />
                    </div>
                </div>
                <p className='text-gray-700 mt-2 text-base font-medium'>
                    &quot;Here’s my personal feedback and insights based on my experience, highlighting what worked well and areas for improvement.&quot;
                </p>
            </div>
        </div>
    )
}

export default ClientCard