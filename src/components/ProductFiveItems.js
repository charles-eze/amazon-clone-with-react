import React from 'react';
import { useStateValue } from '../StateProvider';

function ProductFiveItems({id, title, image, price, rating, imageAlt}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the items into the dataLayer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='flex flex-col bg-white text-base font-sans z-10 md:items-center md:justify-end m-1 px-1.5 pt-2 md:m-2.5 md:p-5 '>
            <div className='md:h-24 md:mb-4 h-12 md:text-base leading-tight '
                style={{fontSize: 9}}>
                <p className=''>{title} {id}</p>
                <p className='mt-1 md:mt-1.5'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
                    
                </div>
            </div>
            <div className='h-1/2'>
                <img
                    className='w-full h-full md:max-h-56 object-contain md:mb-4 mt-7'
                    src={image}                
                    alt={imageAlt} />
            </div>
            <div className='h-2.5 mt-10 '>
                <button onClick={addToBasket}
                            style={{background: '#f0c14b', borderColor: '#a88734 #9c7e31 #846a29', fontSize: 8}}
                            className='border md:px-3 w-full border-solid mt-2.5 hover:bg-yellow-300 text-gray-900 md:text-sm focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm' 
                            >Add to Basket
                </button>
            </div>
        </div>
    )
}

export default ProductFiveItems;
