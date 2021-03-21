import React from 'react';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='flex bg-white p-5'
              style={{height: 'max-content'}}>
            <div className='checkout-left'>
                <img className='w-full h-16 mb-2.5'
                     src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                     alt='Checkout Banner' />
                <div>
                    <h2 className='mr-2.5 py-2.5 pl-14 border-b border-gray-300 font-bold text-xl font-sans'>
                        Your Shopping Basket
                    </h2>
                    <div className='pl-14'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} />
                        
                        ))}
                    </div>
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout;
