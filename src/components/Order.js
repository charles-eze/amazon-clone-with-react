import React from 'react';
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {

    return (
        <div className='md:p-10 mb-4 mx-5 my-0 relative bg-white border border-solid border-gray-200'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className='absolute top-10 right-5'>
                <small>
                    Payment ID: {order.id}
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
                    <h3 className='text-right font-medium'>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={''}/>
            
        </div>
    )
}

export default Order;
