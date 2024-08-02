// import React from 'react'
import logo from '../../assets/pro.png'
const Offers = () => {
    return (
        <section className="bg-[#f3df5d] w-[95%] outline outline-1 outline-[#1a541d] rounded-3xl p-3 md:p-6 m-2 my-16">
            <div className="font-jomhuria text-[3rem] text-center md:text-[10rem] font-semibold text-[#1a541d]  ">
                <h1>Wellness Bonus</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-xl md:text-2xl lg:text-3xl text-[#1a541d] gap-5">
                <div className='flex gap-3 items-center'>
                    <img src={logo} alt="" className='outline outline-1 text-[#1a541d] object-cover w-[55px] rounded-full p-1' />
                    <a href="#" className='hover:underline' >Free Consultaion expert</a>
                </div>
                <div className='flex gap-3 items-center'>
                    <img src={logo} alt="" className='outline outline-1 text-[#1a541d] object-cover w-[55px] rounded-full p-1' />
                    <a href="#" className='hover:underline'>Free Consultaion expert</a>
                </div>
                <div className='flex gap-3 items-center'>
                    <img src={logo} alt="" className='outline outline-1 text-[#1a541d] object-cover w-[55px] rounded-full p-1' />
                    <a href="#" className='hover:underline'>Free Consultaion expert</a>
                </div>
                <div className='flex gap-3 items-center'>
                    <img src={logo} alt="" className='outline outline-1 text-[#1a541d] object-cover w-[55px] rounded-full p-1' />
                    <a href="#" className='hover:underline'>Free Consultaion expert</a>
                </div>
                <div className='flex gap-3 items-center'>
                    <img src={logo} alt="" className='outline outline-1 text-[#1a541d] object-cover w-[55px] rounded-full p-1' />
                    <a href="#" className='hover:underline'>Free Consultaion expert</a>
                </div>
                <div className='flex gap-3 items-center'>
                    <img src={logo} alt="" className='outline outline-1 text-[#1a541d] object-cover w-[55px] rounded-full p-1' />
                    <a href="#" className='hover:underline'>Free Consultaion expert</a>
                </div>
            </div>
        </section>
    )
}

export default Offers
