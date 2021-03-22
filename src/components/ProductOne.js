import React from 'react';
import Product from './Product';
import { NavLink as Link } from "react-router-dom";

function ProductOne() {
    return (
        <div>
            <section className='flex relative z-50 xl:top-60 lg:top-48 top-20 md:top-40 px-1.5 md:px-2.5 lg:px-5 '>
                <div className='relative'>
                    <div className='grid xl:grid-cols-4 grid-cols-3 md:gap-2.5 lg:gap-5 gap-1.5'>
                        <Product                                
                            title='Beauty picks'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg'
                            imagealt='Beauty Products'
                            linkTitle='Shop now' />
                        <Product
                            title='Get fit at home'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'
                            imagealt='Get fit at home'
                            linkTitle='Explore now' />
                        <Product
                            title='Shop top categories'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg'
                            imagealt='Shop top categories'
                            linkTitle='See more' />
                        <div className=' '>
                            <div className='lg:pt-5 pt-2  bg-white  px-0.5 md:px-2.5 lg:px-5'>
                                <p className='ml-1 md:text-sm lg:text-xl pr-6 lg:pr-0 font-bold text-gray-900'
                                    style={{fontSize: 8}}>Sign in for the best experience</p>
                                <Link to='/login' className='lg:pt-4 pt-2.5 md:pt-3.5 px-1 pb-3 md:pb-4 lg:pb-7'>
                                    <button 
                                    className='md:py-1 py-0.5 lg:px-20 flex justify-center w-full lg:ml-1.5 md:text-sm text-gray-900 border border-yellow-500 focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm md:rounded font-medium bg-yellow-300 hover:bg-yellow-400'
                                    style={{fontSize: 6}}>Sign in securely</button>
                                </Link>
                            </div>
                            <div className=''>
                                <img 
                                    className='lg:mt-4 mt-1.5 md:mt-2.5 object-fill md:object-cover h-24 md:h-auto w-full pl-1 md:pl-2 '
                                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg'
                                    alt='We deliver worldwide' />
                            </div>                                   
                        </div>
                        <Product                                
                            title='AmazonBasics'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
                            imagealt='AmazonBasics'
                            linkTitle='See more' />
                        <Product
                            title='Shop by Category'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'
                            imagealt='Get fit at home'
                            linkTitle='Shop now' />
                        <Product
                            title='Computers & Accessories'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'
                            imagealt='Computers and Accessories'
                            linkTitle='Shop now' />
                        <Product
                            title='Find your ideal TV'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'
                            imagealt='Find your ideal TV'
                            linkTitle='See more' />
                        <div className='xl:hidden '>
                            <Product
                                title='Shop top categories'
                                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg'
                                imagealt='Shop top categories'
                                linkTitle='See more' />
                        </div>
                    </div>
                </div>    
            </section>
        </div>
    );
};

export default ProductOne;
