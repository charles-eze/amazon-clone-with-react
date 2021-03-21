import React from 'react';
import { NavLink as Link } from "react-router-dom";

function Footer() {
    return (
        <footer className='md:pt-10 font-sans pt-4 relative -top-0 z-50 flex-col bg-gray-800 text-white'>
            <section className='grid grid-cols-4 pl-2 pr-1 md:pl-5 md:pr-5 xl:pl-44 xl:pr-32 gap-1 lg :gap-12'>
                <article className='md:text-xs lg:text-sm flex flex-col'
                        style={{fontSize: 5}}>
                    <p className='md:text-sm lg:text-base font-bold'
                        style={{fontSize: 6}}>Get to Know Us</p>
                    <a href='' 
                        className='md:py-1 py-0.5'>Careers</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Blog</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>About Amazon</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Sustainability</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Investor Relations</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Amazon Devices</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Amazon Tours</a>
                </article>
                <article className='flex flex-col pr-7 lg:pr-12 -ml-1 md:-ml-4 lg:-ml-0 md:text-xs lg:text-sm'
                        style={{fontSize: 5}}>
                    <p className='md:text-sm lg:text-base font-bold' 
                        style={{fontSize: 6}}>Make Money with Us</p>
                    <a href='' 
                        className='md:py-1 py-0.5'>Sell products on Amazon</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Sell apps on Amazon</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Become an Affiliate</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Advertise Your Products</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Self-Publish with Us</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Host an Amazon Hub</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>See More Make Money with Us</a>
                </article>
                <article className='flex flex-col -ml-3 lg:-ml-0 md:text-xs lg:text-sm'
                        style={{fontSize: 5}}>
                    <p className='md:text-sm lg:text-base font-bold'
                        style={{fontSize: 6}}>Amazon Payment Products</p>
                    <a href='' 
                        className='md:py-1 py-0.5'>Amazon Business Card</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Shop with Points</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Reload Your Balance</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Amazon Currency Converter</a>
                </article>
                <article className='flex flex-col lg:pr-20 pr-5 md:text-xs lg:text-sm'
                        style={{fontSize: 5}}>
                    <p className='md:text-xs lg:text-base font-bold'
                        style={{fontSize: 6}}>Let Us Help You</p>
                    <a href='' 
                        className='md:py-1 py-0.5'>Amazon and COVID-19</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Your Account</a>
                    <a href='' 
                        className='md:text-sm py-1'>Your Orders</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>{'Shipping Rates & Policies'}</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>{'Returns & Replacements'}</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Manage Your Content and Devices</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Amazon Assistant</a>
                    <a href='' 
                        className='md:py-1 py-0.5'>Help</a>
                </article>
            </section>
            <div className='border-b w-full relative border-gray-50 p-5'></div>
            <Link className='justify-center items-center relative flex py-6' to='/' exact>
                <img 
                    className='md:w-20 w-10 -ml-5 items-center pt-1.5 md:pt-4'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='Amazon footer logo'/>
                <p className='pl-12 md:text-base'
                    style={{fontSize: 7}}>©️ {new Date().getFullYear()}, Amazon-Clone Developed By Charles Eze</p>
            </Link>
        </footer>
    )
};

export default Footer;
