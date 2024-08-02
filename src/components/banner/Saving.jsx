// import React from 'react'

const Saving = () => {
    return (
        <section className="font-archivo mx-3 my-2 md:flex md:justify-between">
            <h1 className="text-3xl md:text-xl lg:text-3xl my-4 text-[#1a541d] font-medium">Saving plan details</h1>
            <div className="flex gap-4">
                <button className="rounded-xl px-5  py-2 outline outline-1 text-[#1a541d] text-lg hover:bg-[#1a541d] hover:text-white">Upcoming orders</button>
                <button className="rounded-xl px-5 py-2 outline outline-1 text-[#1a541d] text-lg hover:bg-[#1a541d] hover:text-white">Order History</button>
            </div>
        </section>
    )
}

export default Saving
