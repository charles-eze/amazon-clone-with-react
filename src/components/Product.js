import React from 'react';

function Product({ title, image, link, imagealt, linkTitle }) {
    return (
        <div className='product bg-white p-3'>
            <div className='product-info'>
                <p>{title}</p>
            </div>
            <img 
            src={image}
            alt={imagealt} />
            <a
            href={link} >{linkTitle}</a>
            
        </div>
    )
}

export default Product;
