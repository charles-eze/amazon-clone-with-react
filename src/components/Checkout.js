import React from 'react';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className='flex bg-white p-5 '
              style={{height: 'max-content'}}>
            <div className='checkout-left'>
                <img className='w-full h-16 mb-2.5'
                     src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                     alt='Checkout Banner' />
                <div>
                    <h2 className='mr-2.5 p-2.5 border-b border-gray-300'>
                        Your Shopping Basket
                    </h2>
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout;
