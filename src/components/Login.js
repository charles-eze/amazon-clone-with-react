import React, { useState } from 'react';
import { NavLink as Link, useHistory } from "react-router-dom";
import { auth } from '../firebase';

function Login() {
    const history = useHistory(); //Allows us to programatically change the url
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault(); //Prevents the page from refreshing!!
        
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    };

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //Create new user with email and password
                //console.log(auth); use to check debugger if account object isCreated.
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    };

    return (
        <div className='flex flex-col items-center bg-white h-screen font-sans'>
            <Link to='/' exact>
                <img 
                    className='my-5 object-contain w-24 mx-auto'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png'
                    alt='Amazon Logo' />
            </Link>
            <div className='w-72 md:w-96 xl:w-1/4  flex flex-col border rounded-sm border-gray-300 border-solid p-6 '
                style={{height: 'fit-content'}}>
                <h1 className='font-normal mb-5 text-3xl'>Sign-In</h1>
                <form className='cursor-pointer'>
                    <h5 className='mb-1.5 text-base font-semibold'>E-mail</h5>
                    <input 
                        type='text' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='h-8 mb-2.5 bg-white w-full border-gray-400 border border-solid focus:outline-none cursor-pointer focus:ring-1 focus:ring-yellow-500 rounded-sm'
                        />

                    <h5 className='mb-1.5 text-base font-semibold'>Password</h5>
                    <input 
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='h-8 mb-2.5 bg-white w-full border-gray-400 border border-solid focus:outline-none cursor-pointer focus:ring-1 focus:ring-yellow-500 rounded-sm' />

                    <button
                        type='submit'
                        onClick={signIn}
                        style={{background: '#f0c14b', borderColor: '#a88734 #9c7e31 #846a29',}}
                        className='border border-solid w-full font-semibold py-1 mt-2.5 hover:bg-yellow-300 text-gray-900 text-sm focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm'>
                            Sign In</button>
                </form>
                <p className='mt-4 text-sm text-gray-700'>
                    {`By continuing, you agree to the Amazon clone's `} 
                    <a
                        href='http://example.com/'
                        className='text-blue-600 hover:text-yellow-600 hover:underline'>Conditions of Use</a> {' and '}
                    <a
                        href='http://example.com/'
                        className='text-blue-600 hover:text-yellow-600 hover:underline'>Privacy Notice</a>.
                </p>
            </div>
            <div className='w-72 md:w-96 xl:w-1/4 relative flex flex-col border-t border-gray-300 border-solid mt-8 '></div>
            <p className='text-gray-600 text-xs px-1.5 relative flex justify-center -mt-2.5 font-semibold bg-white'>New to Amazon?</p>
            <div className='w-72 md:w-96 xl:w-1/4 mt-1.5'>
                <button 
                    onClick={register}
                    className='border border-solid w-full font-semibold py-1 mt-2.5 bg-gray-200 border-gray-400 hover:bg-gray-300 text-gray-900 text-sm focus:outline-none cursor-pointer focus:ring-1 focus:ring-yellow-500 rounded-sm'>Create your Amazon account</button>
            </div>
            <div className='border-t border-gray-300 border-solid mt-5 w-9/12 border-opacity-50'></div>
            <div className='text-xs mt-3 pb-24 w-72 md:w-96 xl:w-1/4'>
                <a
                    href='http://example.com/'
                    className='pr-5 text-blue-600 hover:text-yellow-600 hover:underline'>Conditions of Use</a>
                <a
                    href='http://example.com/'
                    className='pr-5 text-blue-600 hover:text-yellow-600 hover:underline'>Privacy Notice</a>
                <a
                    href='http://example.com/'
                    className='pr-4 text-blue-600 hover:text-yellow-600 hover:underline'>Help</a>
                <p className='mt-3.5 text-gray-600'>© 2021, Amazon  Clone, Developed By Charles Eze 💓</p>
            </div>
        </div>
    )
}

export default Login;
