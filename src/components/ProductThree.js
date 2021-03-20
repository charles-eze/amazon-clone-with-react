import React from 'react';
import { NavLink as Link } from "react-router-dom";

function ProductThree({image, imagealt}) {
    return (
         <div className=' bg-white pt-1 pr-1 pb-3 md:pt-2 md:pr-3.5 md:pb-7 '>
            <Link to='/products'>
                <img 
                className='md:h-auto h-20'
                src={image}
                alt={imagealt}
                to='/products' />
            </Link>
        </div>
    )
}

export default ProductThree;
