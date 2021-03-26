import React from 'react';
import CurrencyFormat from 'react-currency-format';
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
        <div className='flex flex-col bg-white text-base font-sans z-10 lg:items-center lg:justify-end m-1 px-1.5 pt-2 md:m-2.5 lg:p-5 md:p-3 '>
            <div className='lg:h-24 lg:mb-4 h-12 md:text-base leading-tight md:leading-snug '
                style={{fontSize: 9}}>
                <p className=''>{title} {id}</p>
                <div className='mt-1 md:mt-1.5'>
                    <CurrencyFormat 
                        renderText={(value, prefix) => (
                            <h5>
                                <small>{prefix}</small>
                                <strong>{value}</strong>
                            </h5>
                        )}
                        decimalScale={2}
                        value={price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₦'}/>
                </div>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
                    
                </div>
            </div>
           
            <img
                className=' h-28 md:h-64 w-full lg:h-72 object-contain mt-7 md:mt-20'
                src={image}                
                alt={imageAlt} />
            
            <div className='h-10 md:h-14 mt-3 md:mt-7 mb-3 mx-6 md:mx-11'>
                <button onClick={addToBasket}
                            style={{background: '#f0c14b', borderColor: '#a88734 #9c7e31 #846a29', fontSize: 10}}
                            className='border lg:px-12 w-full md:py-1 border-solid mt-2.5 hover:bg-yellow-300 text-gray-900 md:text-sm focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm' 
                            >Add to Basket
                </button>
            </div>
        </div>
    )
}

export default ProductFiveItems;
