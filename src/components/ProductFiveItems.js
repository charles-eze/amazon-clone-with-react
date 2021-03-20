import React from 'react';
import { NavLink as Link } from "react-router-dom";

function ProductFiveItems({title, image, price, rating, imageAlt}) {
    return (
        <div className='flex flex-col bg-white text-base font-sans z-10 items-center justify-end m-2.5 p-5 '>
            <div className='h-24 mb-4'>
                <p>{title}</p>
                <p className='mt-1.5'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
                    
                </div>
            </div>
            <img
                className='w-full max-h-56 object-contain mb-4 mt-7'
                src={image}                
                alt={imageAlt} />
            <button>
                    <Link
                        to='/checkout'
                        style={{background: '#f0c14b', borderColor: '#a88734 #9c7e31 #846a29',}}
                        className='border px-3 border-solid mt-2.5 hover:bg-yellow-300 text-black text-sm focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm' 
                        >Add to Basket
                </Link>
            </button>
        </div>
    )
}

export default ProductFiveItems;
