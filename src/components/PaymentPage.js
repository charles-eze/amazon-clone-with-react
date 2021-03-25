import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import { getBasketTotal, itemOrItems } from '../reducer';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlutterWave from './FlutterWave';

function PaymentPage() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='bg-white font-sans '>
            <div className='payment_container'>
                <h1 className='text-lg md:text-2xl text-center p-2.5 font-medium bg-gray-100 border-b border-gray-300 border-solid '>
                    Checkout <Link className='text-purple-600' to='/checkout'>({basket?.length} {itemOrItems(basket)})</Link>
                </h1>
                <div className='md:flex px-5 py-2 md:p-5 mx-0 md:my-5 border-b border-gray-300 border-solid'>
                    <div className='text-lg font-medium mb-4 md:mb-0'
                        style={{flex: 0.2}}>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='md:ml-7 lg:ml-0'
                         style={{flex: 0.8}}>
                        <p>{user?.email}</p>
                        <p>No 2 Rayxxon Street</p>
                        <p>Lagos,  Nigeria.</p>
                    </div>
                </div>
                <div className='md:flex px-5 py-2 md:p-5 mx-0 md:my-5 border-b border-gray-300 border-solid'>
                    <div className='text-lg font-medium mb-4 md:mb-0'
                         style={{flex: 0.2}}>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='md:ml-7 lg:ml-0 -mt-3'
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
                <div className='md:flex px-5 py-2 md:p-5 mx-0 md:my-5 border-b border-gray-300 border-solid'>
                    <div className='text-lg font-medium mb-4 md:mb-0'
                         style={{flex: 0.2}}>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='mb-11 md:ml-7 lg:ml-0'
                         style={{flex: 0.8}}>
                        <div className='lg:-mt-6 mb-3.5'>
                            <CurrencyFormat 
                                renderText={(value) => (
                                    <h3 className='text-lg font-medium'>Order Total: 
                                        <span className='text-lg text-normal'> {value}</span>
                                    </h3>
                        
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'₦'}/>
                        </div> 
                        <FlutterWave />

                    </div>

                </div>

            </div> 
        </div>
    )
}

export default PaymentPage;
