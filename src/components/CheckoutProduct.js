import React from 'react';
import { useStateValue } from '../StateProvider';
import Fade from 'react-reveal/Fade';

function CheckoutProduct({ image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            title: title,
        })
        
    };

    return (
        <>
        <Fade right>
            <div className='flex my-5 '>
                <img 
                    src={image}
                    className='object-contain h-44 w-44 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-75 ' />
                <div className='pl-7'>
                    <p className='text-sm font-bold w-96'>
                        {title}
                    </p>
                    <p className='checkoutproduct_price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='flex'>
                        {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
                    </div>
                    <button 
                        className='text-gray-900 border px-3 border-solid mt-2.5 hover:bg-yellow-300 text-sm focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm'
                        style={{background: '#f0c14b', borderColor: '#a88734 #9c7e31 #846a29',}}
                        onClick={removeFromBasket}
                        >Remove from Basket</button>

                </div>
                
            </div>
        </Fade>
        </>
    )
}

export default CheckoutProduct;
