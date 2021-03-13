import React from 'react';

function Product({ title, image, link, imagealt, linkTitle }) {
    return (
        <div className=' bg-white py-2 px-5'>
            <div className='py-3 text-xl text-gray-900 font-bold'>
                <p>{title}</p>
            </div>
            <img 
            className='pb-1 md:object-fill md:h-72 '
            src={image}
            alt={imagealt} />
            <div className='py-3'>
                <a
                className='text-blue-500 hover:underline text-sm'
                href={link} >{linkTitle}</a>
            </div>
            
        </div>
    )
}

export default Product;
