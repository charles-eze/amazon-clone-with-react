import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal, itemOrItems } from '../reducer';
import { useStateValue } from '../StateProvider';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

   

    return (
        <div className='flex flex-col justify-between w-80 h-32 p-5 bg-purple-50 border rounded-sm'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p className='text-gray-900 font-sans'>
                            Subtotal ({basket?.length} {itemOrItems(basket)}): <strong>{value}</strong>
                        </p>
                        <small className='flex items-center'>
                            <input className='m-1.5' type='checkbox' />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            /> 
            <button style={{background: '#f0c14b', borderColor: '#a88734 #9c7e31 #846a29',}}
                    className='border h-7 py-1 mt-3 border-solid hover:bg-yellow-300 text-black text-sm focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm'>Proceed to Checkout</button>     
        </div>
    );
}

export default Subtotal;
