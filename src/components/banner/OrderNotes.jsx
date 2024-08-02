// import React from 'react'

const OrderNotes = () => {
    return (
        <section className="flex flex-1 p-6 outline outline-2 outline-[#cccccc] rounded-3xl bg-[#f5f5b4] gap-7" >
            <div className="w-full">
                <h1 className="text-xl font-medium font-archivo text-[#1a541d]">Order Notes</h1>
                <div className="flex justify-between mt-10 ">
                    <p>-</p>
                    <button className="bg-[#1a541d] rounded-full px-3  text-white">Edit</button>
                </div>
            </div>
        </section>
    )
}

export default OrderNotes
