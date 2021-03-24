import React from 'react';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='flex bg-white lg:p-5 '
              style={{height: 'max-content'}}>
            <div className='checkout-left'>
                <img className='w-auto md:p-2 lg:p-0 md:w-96 lg:w-full object-cover h-10 lg:h-16 mb-2.5'
                     src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                     alt='Checkout Banner' />
                <div className='md:hidden ml-2'>
                <Subtotal />
                </div>
            
                <div>
                    <h3 className='lg:mr-2.5 py-2.5 pl-5 lg:pl-14 text-sm md:text-base lg:text-lg font-bold text-yellow-500'>{user ? `Hello, ${user?.email}` : 'You must be logged in to complete checkout.' }</h3>
                    <h2 className='lg:mr-2.5 py-2.5 pl-5 lg:pl-14 border-b border-gray-300 font-bold text-xl font-sans'>
                        Your Shopping Basket
                    </h2>
                    <div className='pl-3 md:pl-14 mb-20'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item?.id}
                                title={item?.title}
                                image={item?.image}
                                price={item?.price}
                                rating={item?.rating} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout;
