import React from 'react';

function ProductThree({image, imagealt, link}) {
    return (
         <div className=' bg-white pt-1 pr-1 pb-3 md:pt-2 md:pr-3.5 md:pb-7 '>
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

export default ProductThree;
