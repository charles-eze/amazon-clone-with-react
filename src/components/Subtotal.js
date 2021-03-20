import React from 'react';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    return (
        <div className='flex flex-col justify-between w-80 h-32 p-5 bg-purple-50 border rounded-sm'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className='flex items-center'>
                            <input className='m-1.5' type='checkbox' />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            /> 
            <button style={{background: '#f0c14b', borderColor: '#a88734 #9c7e31 #846a29',}}
                    className='border w-full h-7 mt-3 border-solid hover:bg-yellow-300 text-black text-sm focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm'>Proceed to checkout</button>     
        </div>
    );
}

export default Subtotal;
