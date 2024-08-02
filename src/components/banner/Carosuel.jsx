// import React from 'react''
import Card from './Card'
import data from './data.js'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Carosuel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel responsive={responsive} swipeable={true} className='my-12 md:w-[60%] m-auto'>
            {
                data.map((item, idx) => <Card key={idx} {...item} />)
            }
        </Carousel>
    )
}

export default Carosuel
