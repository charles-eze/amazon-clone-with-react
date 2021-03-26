import React from 'react';
import { useStateValue } from '../StateProvider';
import Fade from 'react-reveal/Fade';
import CurrencyFormat from 'react-currency-format';

function CheckoutProduct({id, image, title, price, rating, hideButton }) {
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
            <div className='flex my-5 mb-5 '>
                <img 
                    src={image}
                    className='object-contain h-28 w-24 md:h-44 md:w-44 transition duration-700 ease-out transform hover:-translate-y-1 hover:scale-75 ' />
                <div className='md:pl-7 pl-3'>
                    <p className='text-xs md:text-sm font-bold md:w-72 lg:w-96 pr-5 md:pr-0'>
                        {title} {id}
                    </p>
                    <p>
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
                    </p>
                    <div className='flex text-sm md:text-base'>
                        {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
                    </div>
                    {!hideButton && (
                    <button 
                        className='text-gray-900 border px-3 py-0.5  border-solid mt-2.5 hover:bg-yellow-300 text-xs md:text-sm focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm'
                        style={{background: '#f0c14b', borderColor: '#a88734 #9c7e31 #846a29',}}
                        onClick={removeFromBasket}
                        >Remove from Basket</button>
                    )}
                </div>
                
            </div>
        </Fade>
        </>
    )
}

export default CheckoutProduct;
