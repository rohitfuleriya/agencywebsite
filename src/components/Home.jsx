import React from 'react'
import { Carousel } from 'flowbite-react'
import banner1 from '/src/assets/banner1.svg'
const Home = () => {
    return (
        <div className='bg-neutralSilver' id='home'>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
                <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between ">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        {/* hero text  */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lesson and insights <span className='text-brandPrimary'>from 8 years</span></h1>
                            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between ">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        {/* hero text  */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Let's Learn and Earn<span className='text-brandPrimary'>In 4 Months</span></h1>
                            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between ">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        {/* hero text  */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lesson and insights <span className='text-brandPrimary'>from 8 years</span></h1>
                            <p className='text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Home
