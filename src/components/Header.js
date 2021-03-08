import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='h-16 flex items-center sticky top-0 header_maindiv bg-black'>
            <img 
                className='w-24 object-contain mt-4 mx-5 my-0'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='Amazon logo'
                 />
            <div className='flex flex-1 items-center rounded-3xl'>
                <input 
                    className='h-10 p-2.5 border-none w-full'
                    type="text" />
                <div className='px-2 pt-1.5 bg-yellow-500 h-10 rounded-r'>
                    <SearchIcon style={{ fontSize: 30 }} />
                </div>
            </div>
            <div className='header-nav'>
                <div className='header-option'>
                    <span className='header-option1' >Hello Guest</span>
                    <span className='header-option2' >Sign in</span>
                </div>
                <div className='header-option'>
                    <span>Returns</span>
                    <span>{'&'} Orders</span>
                </div>
                <div className='header-option'>
                    <span>Your</span>
                    <span>Prime</span>
                </div>
            </div>
            
        </div>
    )
}

export default Header
