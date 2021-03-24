import React from 'react';
import { Link } from 'react-router-dom';
import { itemOrItems } from '../reducer';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';

function PaymentPage() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='bg-white font-sans '>
            <div className='payment_container'>
                <h1 className='text-2xl text-center p-2.5 font-medium bg-gray-100 border-b border-gray-300 border-solid '>
                    Checkout <Link className='text-purple-600' to='/checkout'>({basket?.length} {itemOrItems(basket)})</Link>
                </h1>
                <div className='flex p-5 mx-0 my-5 border-b border-gray-300 border-solid'>
                    <div className='text-lg font-medium'
                        style={{flex: 0.2}}>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'
                         style={{flex: 0.8}}>
                        <p>{user?.email}</p>
                        <p>No 2 Rayxxon Street</p>
                        <p>Lagos,  Nigeria.</p>
                    </div>
                </div>
                <div className='flex p-5 mx-0 my-5 border-b border-gray-300 border-solid'>
                    <div className='text-lg font-medium'
                         style={{flex: 0.2}}>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items -mt-3'
                         style={{flex: 0.8}}>
                        {basket.map(item => (
                             <CheckoutProduct 
                                key={item?.id}
                                title={item?.title}
                                image={item?.image}
                                price={item?.price}
                                rating={item?.rating} />
                        ))}
                    </div>
                </div>
                <div className='flex p-5 mx-0 my-5 border-b border-gray-300 border-solid'>
                    <div className='text-lg font-medium'
                         style={{flex: 0.2}}>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment-details'
                         style={{flex: 0.8}}>

                    </div>

                </div>

            </div> 
        </div>
    )
}

export default PaymentPage;
