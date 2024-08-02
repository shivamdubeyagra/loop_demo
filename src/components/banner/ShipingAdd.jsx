// import React from 'react';

const ShippingAddress = () => {
    return (
        <section className="flex flex-1 p-6 outline outline-[#cccccc] outline-2 rounded-3xl bg-[#f5f5b4] gap-7">
            <div className="w-full">
                <h1 className="text-xl font-medium font-archivo text-[#1a541d]">Shipping address</h1>
                <address className="font-archivo text-[#1a541d] not-italic">
                    <p>Les</p>
                    <p>1100 Van Ness Avenue</p>
                    <p>San Francisco, California, 94109</p>
                    <p>United States</p>
                </address>
                <div className="flex justify-start mt-2">
                    <button className="bg-[#1a541d] rounded-full px-3 mr-2 text-white">Edit</button>
                    <button className="rounded-3xl px-2 py-1 outline outline-1 text-[#1a541d] hover:bg-[#1a541d] hover:text-white">Change delivery method</button>
                </div>
            </div>
        </section>
    );
};

export default ShippingAddress;
