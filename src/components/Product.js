import React from 'react';

function Product({ title, image, link, imagealt, linkTitle }) {
    return (
        <div className='product bg-white py-2 px-5'>
            <div className='product-info py-3'>
                <p>{title}</p>
            </div>
            <img 
            className='pb-1 object-fill h-72  '
            src={image}
            alt={imagealt} />
            <div className='py-3'>
                <a
                className='text-blue-500'
                href={link} >{linkTitle}</a>
            </div>
            
        </div>
    )
}

export default Product;
