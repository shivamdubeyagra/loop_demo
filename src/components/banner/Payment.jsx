// import React from 'react'

const Payment = () => {
    return (
        <section className="flex flex-1 p-6 outline outline-[#cccccc] outline-2 rounded-3xl bg-[#f5f5b4] gap-7">
            <div className="w-full">
                <h1 className="text-xl font-medium font-archivo text-[#1a541d]">Payment details</h1>
                <address className="font-archivo text-[#1a541d] not-italic">
                    <p>Visa ending in 4242</p>
                    <p>Expire 2/29</p>
                    <p className="text-xs mt-2">Last updated on, May 5,2023</p>
                </address>
                <div className="flex justify-start mt-2">
                    <button className="bg-[#1a541d] rounded-full px-3 mr-2 text-white">Update</button>
                    <button className="rounded-3xl px-2 py-1 outline outline-1 text-[#1a541d] hover:bg-[#1a541d] hover:text-white">Change</button>
                </div>
            </div>
        </section>
    )
}

export default Payment
