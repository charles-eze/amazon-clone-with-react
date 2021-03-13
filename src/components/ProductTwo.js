import React from 'react';

function ProductTwo({image, imagealt, link}) {
    return (
        <div className=' bg-white pt-2 pr-3.5 pb-7 '>
            <a href={link}>
                <img 
                className=''
                src={image}
                alt={imagealt}
                href={link} />
            </a>
        </div>
    )
}

export default ProductTwo;
