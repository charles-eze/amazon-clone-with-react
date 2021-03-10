import React from 'react';
import HomeCarousel from './HomeCarousel';
import Product from './Product';

function Home() {
    return (
        <div className='bg-gray-200'>
            <div className='inline-block bg-gray-200'>
                <HomeCarousel />
            </div>
            <section className='flex relative z-50 lg:top-14 md:top-0 px-6'>
                <div className='relative'>
                    <div className='grid md:grid-cols-4 grid-cols-3 md:gap-8 gap-4'>
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
                        <div className='bg-white p-3'>
                            <div className='product-info'>
                                <p>Sign in for the best experience</p>
                            </div>
                            <button>Sign in securely</button>
                            <img 
                                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg'
                                alt='We deliver worldwide' />                                   
                        </div>
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
                        <Product
                            title='Shop top categories'
                            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg'
                            imagealt='Shop top categories'
                            link=''
                            linkTitle='See more' />
                    </div>
                    <div>


                    </div>
                </div>
                <div>
                
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </section>
        
            
        </div>
    )
}

export default Home;
