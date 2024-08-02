
const Card = ({ image, new_price, old_price, name }) => {
    return (
        <section className='font-archivo text-[#1a541b]'>
            <div className='flex justify-center items-center h-[10rem] w-[9rem] bg-[#c4e9ff] outline outline-2 outline-[#cccccc] rounded-lg'>
                <img src={image} alt="" className='w-[3.5rem]' />
            </div>
            <p className='mt-1'>{name}</p>
            <p className='mt-2'>${new_price} <span className='line-through ml-2'>${old_price}</span></p>
        </section>
    );
}

export default Card;
