import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='h-5 md:h-14 w-full flex items-center sticky justify-between bg-black'>
            <div className='flex object-fill w-9 md:w-32 md:pt-2 md:px-2.5 md:ml-3 md:mr-7 lg:border-black lg:border lg:hover:border-white'>
                <img
                    className='p-0.5'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='Amazon logo' />
            </div>
            <div className='flex h-3 md:h-10 w-48 md:w-96 lg:w-3/6 xl:w-7/12 md:items-center '>
                <input 
                    type='text'
                    className='relative md:w-full md:h-9 w-full rounded-sm border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent ' />
                <SearchIcon 
                        className='bg-yellow-500  md:text-4xl search-icon relative rounded-r-sm right-3 md:right-9'
                        style={{fontSize: 12}} />
            </div>
            <div className='flex text-white -left-24 md:-left-0'>
                <div className='flex flex-col pt-0.5 md:pt-0 pr-2 md:pr-0 lg:pr-2 lg:ml-2.5 lg:px-3 lg:pb-0.5 lg:border border-black hover:border-white'>
                    <span className='md:text-xs md:pt-2 -mb-0.5' style={{fontSize: 4}} >Hello, Sign in</span>
                    <span className='md:text-sm md:font-bold' style={{fontSize: 6, fontWeight: 700}} >Account</span>
                </div>
                <div className='flex flex-col pr-2 pt-0.5 md:pt-0 md:ml-2.5 md:px-1 lg:px-3 lg:pb-0.5 lg:border border-black hover:border-white'>
                    <span className='md:text-xs -mb-0.5 md:pt-2' style={{fontSize: 4}} >Returns</span>
                    <span className='md:text-sm md:font-bold' style={{fontSize: 6, fontWeight: 700}}>{'&'} Orders</span>
                </div>
                <div className='flex pr-1.5 items-center md:ml-2.5 md:px-0.5 lg:px-3 lg:py-0 md:mr-3 lg:border border-black hover:border-white'>
                    <ShoppingBasketIcon className='md:text-2xl' style={{fontSize: 10}}/>
                    <span className='md:text-sm md:font-bold md:mr-2.5' style={{fontSize: 6, fontWeight: 700}}>0</span>

                </div>

            </div>
            
            
        </div>
    )
}

export default Header
