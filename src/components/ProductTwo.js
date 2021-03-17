import React from 'react';

function ProductTwo({image, imagealt, link}) {
    return (
        <div className=' bg-white md:pt-2 pt-1 pr-1 pb-3 md:pr-3.5 md:pb-7 '>
            <a href={link}>
                <img 
                className='md:h-auto h-20'
                src={image}
                alt={imagealt}
                href={link} />
            </a>
        </div>
    )
}

export default ProductTwo;
