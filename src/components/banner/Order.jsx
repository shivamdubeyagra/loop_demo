// import React from 'react'
import { RiLoopLeftFill } from "react-icons/ri";
import ban from '../../assets/ban.png'
const Order = () => {
    return (
        <section className="my-16">
            <img src={ban} alt="" className=" m-auto w-[80%] md:w-[90%]" />
            <div className="font-archivo text-[#1a541d] leading-snug m-10">
                <p className="text-lg font-semibold">#11850744027 <span className="bg-[#00d27e] ml-2 px-3 py-1 rounded-full font-normal">Active</span></p>
                <p className="text-lg font-semibold">$117.30<span className="font-normal"> + $0 shipping</span></p>
                <div className="flex items-center gap-2">
                    <RiLoopLeftFill />
                    <span>Delivery every 1 month</span>
                </div>
            </div>
            <section className="bg-[#f5f59e] p-8 pb-5 rounded-3xl m-2 font-archivo ">
                <div className="mb-6 md:flex">
                    <p className="text-2xl mb-2 text-[#1a541d] font-semibold">Upcoming order :</p>
                    <h1 className="text-2xl text-[#1a541d] md:ml-1 font-bold">October 1,2024</h1>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <button className="flex-1 bg-[#1a541d] rounded-3xl p-3 text-white text-lg">Order Now</button>
                    <button className="flex-1 rounded-3xl p-3 outline outline-1 text-[#1a541d] text-lg hover:bg-[#1a541d] hover:text-white">Skip</button>
                    <button className="flex-1 rounded-3xl p-3 outline outline-1 text-[#1a541d] text-lg hover:bg-[#1a541d] hover:text-white">Postpone</button>
                </div>
                <p className="text-[#1a541d] mt-5">Last order was charged on August 1, 2024</p>
            </section>
        </section>
    )
}

export default Order
