import { IoPricetagsOutline } from "react-icons/io5";

const Product = () => {
    return (
        <section className="flex flex-1 p-5 outline outline-1 outline-[#1a541d] rounded-2xl bg-[#f5f5b4] gap-7" >
            <div className="relative">
                <div className="bg-white w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] outline outline-3 outline-[#cccccc] rounded-lg"></div>
                <p className="bg-[#F3DF5D] rounded-full outline outline-1 outline-[#cccccc] text-center absolute bottom-[1rem] md:bottom-[4.1rem] xl:bottom-[0rem] w-[6rem] lg:w-[8rem] md:w-[6rem]">6</p>
            </div>
            <div className="flex flex-col w-full font-archivo text-[#1a541d]">
                <div className="font-archivo text-[#1a541d]">
                    <h1 className="md:text-xl font-medium">Ageless Loop - Face cream</h1>
                    <div className="flex items-center gap-2 leading-tight text-sm"><IoPricetagsOutline /><p>Subscription discount (15%)</p></div>
                </div>
                <div className="flex justify-between mt-14 md:mt-16 ">
                    <p>$19.65 <span className="line-through ml-1">$23.00</span></p>
                    <button className="bg-[#1a541d] rounded-full px-3  text-white">Edit</button>
                </div>
            </div>
        </section>
    )
}

export default Product
