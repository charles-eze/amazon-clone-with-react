import React from 'react';
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {

    return (
        <div className='p-5 md:p-10 mb-4 mx-3 md:mx-5 my-0 relative bg-white border border-solid border-gray-200'>
            <h2 className='font-medium text-base md:text-xl'>Order</h2>
            <p className='text-sm md:text-base'>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className='md:absolute md:top-10 md:right-5'>
                <small>
                    <strong>Payment ID:</strong> {order.id}
                </small>
            </p>
            {order.data.basket?.map(item => (
                 <CheckoutProduct
                    id={item?.id}
                    title={item?.title}
                    image={item?.image}
                    price={item?.price}
                    rating={item?.rating}
                    hideButton />
            ))}
             <CurrencyFormat 
                renderText={(value) => (   
                    <h3 className='text-right text-sm md:text-lg font-medium'><strong>Order Total:</strong> {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}/>
            
        </div>
    )
}

export default Order;
