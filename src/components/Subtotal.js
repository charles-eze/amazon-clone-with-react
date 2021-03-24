import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';
import { getBasketTotal, itemOrItems } from '../reducer';
import { useStateValue } from '../StateProvider';

function Subtotal() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();

   

    return (
        <div className='flex flex-col md:mt-2 lg:mt-0 md:mr-2 lg:mr-0 justify-between w-11/12 md:w-80 h-32 p-5 bg-purple-50 border rounded-sm'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p className='text-gray-900 font-sans text-sm md:text-base'>
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
                    onClick={!user ? e => history.push('/login') : e => history.push('/payment')}
                    className='border md:h-7 text-xs py-1 mt-3 border-solid hover:bg-yellow-300 text-black md:text-sm focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm'>
                Proceed to Checkout</button>     
        </div>
    );
}

export default Subtotal;
