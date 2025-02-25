import React from 'react'
import Image from 'next/image'
import BoxText from '../../Helper/BoxText'
const About = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] m-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                {/* ImageSection */}
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <Image src="/images/about.png" alt="about" width={600} height={600} />
                </div>
                {/* TextSection */}
                <div>
                    <BoxText >About Us</BoxText>
                    <h1 className='text-2xl font-bold sm:text-3xl text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]'>
                        Everything You Need To Grow Your Business
                    </h1>
                    <p className='text-gray-700 mt-3 leading-relaxed text-sm sm:text-base'>
                        Growing a business requires the right tools, strategies, and support.
                        At TechDev, we are dedicated to helping businesses of all
                        sizes achieve success. Whether you need innovative solutions, expert
                        guidance, or efficient processes, we provide everything necessary to
                        scale and thrive.
                    </p>
                    <button className='mt-5 text-[#f68967] font-bold pb-1 border-b-2 border-[#f68967] '>
                        Learn More &#8594;
                    </button>
                    <div className='mt-8 border-l-2 border-gray-200'>
                        <div className='ml-6'>
                            <p className='text-gray-700 font-medium'>
                                &quot; The many integrations that can be linked
                                really help me see data from other tools I also use.  &quot;
                            </p>
                            <div className='flex items-center mt-6 space-x-6'>
                                <Image src="/images/u1.jpg" alt='user ' width={40} height={40} className='rounded-full' />
                                <div>
                                    <p className='font-medium'>Jessica Doe</p>
                                    <p className='text-gray-700 text-sm'>Web Devloper @TechDev</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About