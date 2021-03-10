import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='h-14 z-50 flex font-sans items-center md:sticky top-0 header_maindiv bg-black'>
            <img 
                className='md:w-28 w-20 object-contain mt-1 md:mr-5 md:ml-3  md:pl-1 md:pr-2 md:pt-3 md:border border-black hover:border-white'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='Amazon logo'
                 />
            <div className='flex flex-1 items-center '>
                <input 
                    className='h-10 md:p-2.5 rounded w-full md:ml-4 relative border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent'
                    type="text" />
                <div className='md:px-2 md:pt-1.5 absolute z-50 float-right bg-yellow-500 h-10 rounded-r'
                    style={{right: 272}}>
                    <SearchIcon style={{ fontSize: 30 }} />
                </div>
            </div>
            <div className='flex'>
                <div className='text-white flex md:ml-2.5 flex-col md:px-3 md:py-2 md:border border-black hover:border-white'>
                    <span className='text-xs' >Hello, Sign in</span>
                    <span className='text-sm font-bold' >Account</span>
                </div>
                <div className='text-white flex flex-col md:px-3 md:py-2 md:border border-black hover:border-white'>
                    <span className='text-xs' >Returns</span>
                    <span className='text-sm font-bold'>{'&'} Orders</span>
                </div>
                <div className='flex items-center text-white md:px-3 md:py-2 md:border text-xs md:text-base mr-1 border-black hover:border-white'>
                    <ShoppingBasketIcon />
                    <span className='text-sm font-bold md:mx-2.5'>0</span>
                </div>
            </div>
            
        </div>
    )
}

export default Header
