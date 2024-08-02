// import React from 'react'
import clouds from '../../assets/clouds-sky-vertical-shot.jpg'
const Sky = () => {
    return (
        <section className='relative rounded-2xl m-2 my-10'>
            <img src={clouds} alt="clouds" className='w-[82.3rem] rounded-2xl md:h-[14rem] object-cover' />
            <div className='absolute top-5 flex flex-col items-center md:items-start lg:items-start '>
                <h1 className='font-jomhuria text-white text-6xl md:pl-[2.5rem]'>Try something new!</h1>
                <p className='font-archivo text-white text-xl text-center leading-relaxed md:pl-[2.5rem] lg:pl-[2.5rem]'>Rehydrate and replenish with our newly launched elctrolytes</p>
            </div>
            <button className='absolute bg-[#E5FFA5] text-lg bottom-8 left-[30%] md:left-[2.5rem] lg:left-10 px-3 py-1 rounded-full font-archivo'>See all products</button>
        </section>
    )
}

export default Sky
