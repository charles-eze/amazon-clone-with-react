import React from 'react';
import Product from './Product';

function ProductOne() {
    return (
        <div>
            <section className='flex relative z-50 lg:top-60 top-20 md:top-40 px-5 '>
                <div className='relative'>
                    <div className='grid md:grid-cols-4 grid-cols-3 md:gap5 gap-4'>
                        <Product                                
                            title='Beauty picks'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg'
                            imagealt='Beauty Products'
                            link=''
                            linkTitle='Shop now' />
                        <Product
                            title='Get fit at home'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'
                            imagealt='Get fit at home'
                            link=''
                            linkTitle='Explore now' />
                        <Product
                            title='Shop top categories'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg'
                            imagealt='Shop top categories'
                            link=''
                            linkTitle='See more' />
                        <div className=' '>
                            <div className='pt-5 bg-white px-5'>
                                <p className='ml-1 text-xl font-bold text-gray-900'>Sign in for the best experience</p>
                                <div className='pt-4 pb-7'>
                                    <button 
                                    className='py-1 px-20 ml-1.5 text-sm text-gray-900 border border-yellow-700 focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded font-medium bg-yellow-300 hover:bg-yellow-400'>Sign in securely</button>
                                </div>
                            </div>
                            <div className=''>
                                <img 
                                    className='mt-4 pl-2'
                                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg'
                                    alt='We deliver worldwide' />
                            </div>                                   
                        </div>
                        <Product                                
                            title='AmazonBasics'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
                            imagealt='AmazonBasics'
                            link=''
                            linkTitle='See more' />
                        <Product
                            title='Shop by Category'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'
                            imagealt='Get fit at home'
                            link=''
                            linkTitle='Shop now' />
                        <Product
                            title='Computers & Accessories'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'
                            imagealt='Computers and Accessories'
                            link=''
                            linkTitle='Shop now' />
                        <Product
                            title='Find your ideal TV'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'
                            imagealt='Find your ideal TV'
                            link=''
                            linkTitle='See more' />
                        <div className='md:hidden'>
                            <Product
                                title='Shop top categories'
                                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg'
                                imagealt='Shop top categories'
                                link=''
                                linkTitle='See more' />
                        </div>
                    </div>
                </div>    
            </section>
        </div>
    );
};

export default ProductOne;
