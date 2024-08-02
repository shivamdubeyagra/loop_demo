// import React from 'react'
import banner from '../../assets/91.jpg'
import cans from '../../assets/cans.png'

const Banner = () => {
    return (
        <section className='relative w-full'>
            <div>
                <img src={banner} alt="banner" className='w-full h-[15rem] md:h-[20rem] lg:h-[25rem] blur-custom' />
            </div>
            <div className='absolute w-full text-center top-12 left-1/2 transform -translate-x-1/2 md:top-10 lg:top-5'>
                <p className='text-4xl mb-4 md:text-4xl lg:text-5xl font-archivo text-white'>Loop Wellness Club</p>
                <p className='text-7xl md:text-6xl lg:text-8xl font-jomhuria text-white m-2'>Welcome, Abel</p>
            </div>
            <div className='absolute hidden md:block top-[9rem] left-1/2 transform -translate-x-1/2 md:top-36 lg:top-40'>
                <img src={cans} alt="cans" className='w-full md:w-[200px] lg:w-[300px]' />
            </div>
        </section>
    )
}

export default Banner
