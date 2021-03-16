import React from 'react';

function Footer() {
    return (
        <footer className='pt-10 relative -top-0 z-50 flex-col bg-gray-800 text-white'>
            <section className='grid grid-cols-4 pl-44 pr-32 gap-12'>
                <article className='flex flex-col'>
                    <p className='text-base font-bold'>Get to Know Us</p>
                    <a href='' 
                        className='text-sm py-1'>Careers</a>
                    <a href='' 
                        className='text-sm py-1'>Blog</a>
                    <a href='' 
                        className='text-sm py-1'>About Amazon</a>
                    <a href='' 
                        className='text-sm py-1'>Sustainability</a>
                    <a href='' 
                        className='text-sm py-1'>Investor Relations</a>
                    <a href='' 
                        className='text-sm py-1'>Amazon Devices</a>
                    <a href='' 
                        className='text-sm py-1'>Amazon Tours</a>
                </article>
                <article className='flex flex-col pr-12'>
                    <p className='text-base font-bold' >Make Money with Us</p>
                    <a href='' 
                        className='text-sm py-1'>Sell products on Amazon</a>
                    <a href='' 
                        className='text-sm py-1'>Sell apps on Amazon</a>
                    <a href='' 
                        className='text-sm py-1'>Become an Affiliate</a>
                    <a href='' 
                        className='text-sm py-1'>Advertise Your Products</a>
                    <a href='' 
                        className='text-sm py-1'>Self-Publish with Us</a>
                    <a href='' 
                        className='text-sm py-1'>Host an Amazon Hub</a>
                    <a href='' 
                        className='text-sm py-1'>See More Make Money with Us</a>
                </article>
                <article className='flex flex-col'>
                    <p className='text-base font-bold'>Amazon Payment Products</p>
                    <a href='' 
                        className='text-sm py-1'>Amazon Business Card</a>
                    <a href='' 
                        className='text-sm py-1'>Shop with Points</a>
                    <a href='' 
                        className='text-sm py-1'>Reload Your Balance</a>
                    <a href='' 
                        className='text-sm py-1'>Amazon Currency Converter</a>
                </article>
                <article className='flex flex-col pr-20'>
                    <p className='text-base font-bold'>Let Us Help You</p>
                    <a href='' 
                        className='text-sm py-1'>Amazon and COVID-19</a>
                    <a href='' 
                        className='text-sm py-1'>Your Account</a>
                    <a href='' 
                        className='text-sm py-1'>Your Orders</a>
                    <a href='' 
                        className='text-sm py-1'>{'Shipping Rates & Policies'}</a>
                    <a href='' 
                        className='text-sm py-1'>{'Returns & Replacements'}</a>
                    <a href='' 
                        className='text-sm py-1'>Manage Your Content and Devices</a>
                    <a href='' 
                        className='text-sm py-1'>Amazon Assistant</a>
                    <a href='' 
                        className='text-sm py-1'>Help</a>
                </article>
            </section>
            <div className='border-b w-full relative border-gray-50 p-5'></div>
            <div className='justify-center items-center relative flex py-6' >
                <img 
                    className='w-20 -ml-5 items-center pt-4'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='Amazon footer logo'/>
                <p className='pl-12'>©️ {new Date().getFullYear()}, Amazon-Clone Developed By Charles Eze</p>
            </div>
        </footer>
    )
};

export default Footer;
