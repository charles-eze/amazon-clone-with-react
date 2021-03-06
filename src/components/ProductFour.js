import React from 'react';
import Product from './Product';

function ProductFour() {
    return (
        <div>
            <section className='flex relative z-50 lg:top-48 xl:top-60 top-20 md:top-40 md:mt-2.5 lg:mt-5 xl:-mt-0 md:px-2.5 lg:px-5 px-1.5 '>
                <div className='relative'>
                    <div className='grid xl:grid-cols-4 grid-cols-3 md:gap-2.5 lg:gap-5 gap-1.5 mt-1.5 md:mt-0'>
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
                        <div className='hidden xl:flex'>
                            <Product                                
                                title='AmazonBasics'
                                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
                                imagealt='AmazonBasics'
                                link=''
                                linkTitle='See more' />
                        </div>
                        
                    </div>
                </div>    
            </section>
        </div>
    );
};

export default ProductFour;
