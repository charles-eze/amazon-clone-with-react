import React from 'react';
import { NavLink as Link } from "react-router-dom";

function Product({ title, image, imagealt, linkTitle }) {
    return (
        <div className=' bg-white lg:py-2 py-0.5 px-1.5 lg:px-5'>
            <div className='lg:py-3 py-1.5 md:text-sm lg:text-xl text-gray-800 font-bold'
                style={{fontSize: 8}}>
                <p>{title}</p>
            </div>
            <img 
            className='lg:pb-1 object-cover lg:h-72 md:h-64 w-full h-28'
            src={image}
            alt={imagealt} />
            <div className='lg:py-3 py-0'>
                <Link
                className='text-blue-500 hover:underline md:text-xs lg:text-sm'
                style={{fontSize: 7}}
                to='/products' >{linkTitle}</Link>
            </div>
            
        </div>
    )
}

export default Product;
