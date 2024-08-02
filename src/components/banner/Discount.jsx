
const Discount = () => {
    return (
        <section className="flex flex-1 p-6 outline outline-2 outline-[#cccccc] rounded-3xl bg-[#f5f5b4] gap-7" >
            <div className="w-full">
                <h1 className="text-xl font-medium font-archivo text-[#1a541d]">Discount code</h1>
                <div className="flex justify-between mt-10  ">
                    <input type="text" placeholder="Discount code" className="outline outline-2 rounded-full p-1
                 placeholder:text-black w-[88%] placeholder:p-2" />
                    <button className="bg-[#1a541d] rounded-full px-3 ml-2 md:ml-0 text-white">Appy</button>
                </div>
            </div>
        </section>
    )
}

export default Discount
