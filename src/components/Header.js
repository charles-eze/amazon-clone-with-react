import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='h-16 flex items-center sticky top-0 header_maindiv bg-black'>
            <img 
                className='w-28 object-contain mt-1 mr-5 ml-3  pl-1 pr-2 pt-4 border border-black hover:border-white'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='Amazon logo'
                 />
            <div className='flex flex-1 items-center rounded-3xl'>
                <input 
                    className='h-10 p-2.5 w-full relative border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent'
                    type="text" />
                <div className='px-2 pt-1.5 absolute z-50 float-right bg-yellow-500 h-10 rounded-r'>
                    <SearchIcon style={{ fontSize: 30 }} />
                </div>
            </div>
            <div className='flex'>
                <div className='text-white flex ml-2.5 flex-col px-3 py-2 border border-black hover:border-white'>
                    <span className='text-xs' >Hello Guest</span>
                    <span className='text-sm font-bold' >Sign in</span>
                </div>
                <div className='text-white flex flex-col px-3 py-2 border border-black hover:border-white'>
                    <span className='text-xs' >Returns</span>
                    <span className='text-sm font-bold'>{'&'} Orders</span>
                </div>
                <div className='text-white flex flex-col  px-3 py-2 border border-black hover:border-white'>
                    <span className='text-xs' >Your</span>
                    <span className='text-sm font-bold'>Prime</span>
                </div>
                <div className='flex items-center text-white px-3 py-2 border border-black hover:border-white'>
                    <ShoppingBasketIcon />
                    <span className='text-sm font-bold mx-2.5'>0</span>
                </div>
            </div>
            
        </div>
    )
}

export default Header
