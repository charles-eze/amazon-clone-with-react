import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../axios';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import { getBasketTotal, itemOrItems } from '../reducer';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { db } from '../firebase';


function PaymentPage() {
    const [{ basket, user }, dispatch] = useStateValue(); 
    const history = useHistory();  

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] =useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //This code allows us to generate the client secret and also changes it when the basket changes
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            }); //Use axios to make requests either POST, GET
             setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>>', clientSecret)

    const handleSubmit = async (event) => {
            //stripe actions here
            event.preventDefault();
            setProcessing(true);
        
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(({ paymentIntent }) => { //The PaymentIntent is destructured from the returned response. It is the payment confirmation.
               
                db
                    .collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id)
                    .set({
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created
                    })

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: 'EMPTY_BASKET'
                })

                history.replace('/orders')
            })
    };

    const handleChange = event => {
        //This function will listen for changes in the CardElement and display
        // the errors that will occur while the user types in their card
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    };

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
                       
                        <form 
                            style={{maxWidth: 400}}
                            onSubmit={handleSubmit}>
                            <CardElement 
                                onChange={handleChange}/>
                                
                            <div className=''>
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3 className='text-lg font-medium pt-3 pb-4'>Order Total: 
                                            <span className='text-lg text-normal'> {value}</span>
                                        </h3>
                            
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}/>

                                <div className='flex justify-center '>
                                    <button 
                                        style={{background: '#f0c14b', borderColor: '#a88734 #9c7e31 #846a29',}}
                                        className='border md:h-7 w-6/12 text-xs py-1 mt-3 font-medium border-solid hover:bg-yellow-300 text-black md:text-sm focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm'
                                        disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p className='font-medium text-gray-600'><i className="fa fa-circle-o-notch fa-spin font-normal text-gray-400 mr-1" style={{fontSize:18}}></i>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>
                            </div> 
                            {/*The code below will throw an error on the screen when the card has issues */}
                            {error && <div>{error}</div>}
                           
                        </form>
                        

                    </div>

                </div>

            </div> 
        </div>
    )
}

export default PaymentPage;
