import React from 'react';
import { NavLink as Link } from "react-router-dom";

function HeaderTwo() {
    return (
        <div className='relative flex items-center justify-between bg-gray-800 h-3.5 md:h-10 text-white'>
            <div className='flex relative ml-2 md:pb-0 md:ml-6 '>
                <div className='pr-2 md:pr-3.5 lg:px-2 md:pt-0.5 xl:border border-transparent hover:border-white'>
                    <Link 
                        to='/products'
                        className='md:text-xs lg:text-sm md:font-semibold'
                        style={{fontSize: 5, fontWeight: 600}}>All</Link>
                </div>
                <div className='pr-2 md:pr-3.5  lg:px-2 md:pt-0.5 xl:border border-transparent hover:border-white'>
                    <Link  
                        to='/products'
                        className='md:py-1 md:text-xs lg:text-sm '
                        style={{fontSize: 5, fontWeight: 600}}>Today's Deals</Link>
                </div>
                <div className='pr-2 md:pr-3.5 lg:px-2 md:pt-0.5 xl:border border-transparent hover:border-white'>
                    <Link  
                        to='/products'
                        className='md:py-1 md:text-xs lg:text-sm '
                        style={{fontSize: 5, fontWeight: 600}}>Customer Service</Link>
                </div>
                <div className='pr-2 md:pr-3.5 lg:px-2 md:pt-0.5 xl:border border-transparent hover:border-white'>
                    <Link  
                        to='/products'
                        className='md:py-1 md:text-xs lg:text-sm '
                        style={{fontSize: 5, fontWeight: 600}}>Gift Cards</Link>
                </div>
                <div className='pr-2 md:pr-3.5 lg:px-2 md:pt-0.5 xl:border border-transparent hover:border-white'>
                    <Link  
                        to='/products'
                        className='md:py-1 md:text-xs lg:text-sm '
                        style={{fontSize: 5, fontWeight: 600}}>Sell</Link>
                </div>
                <div className='pr-2 pb-2.5 md:pr-3.5 md:pt-0.5 lg:px-2 xl:border border-transparent hover:border-white'>
                    <Link  
                        to='/products'
                        className='md:py-1 md:text-xs lg:text-sm '
                        style={{fontSize: 5, fontWeight: 600}}>Registry</Link>
                </div>
            </div>
            <div>
                <div className='md:mr-3 mr-1.5 lg:px-2 pb-2.5 md:font-bold xl:border border-transparent hover:border-white'>
                    <a 
                        className='md:py-1 md:text-xs lg:text-sm '
                        style={{fontSize: 5, fontWeight: 700}}
                        href='https://github.com/charles-eze/amazon-clone-with-react'
                        target='_blank'
                        rel='noreferrer'>Amazon's response to COVID-19</a>
                </div>
            </div>       
        </div>
    )
}

export default HeaderTwo;
