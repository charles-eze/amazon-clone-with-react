import React from 'react';
import { NavLink as Link } from "react-router-dom";
import ProductTwo from './ProductTwo';


function ProductTwoList() {
    return (
        <>
        <div className='flex bg-white pt-2 text-center md:pt-5 relative z-50 lg:top-48 xl:top-60 top-20 md:top-40 px-1.5 md:px-2.5 lg:px-6 mt-1.5 md:mt-2.5 lg:mt-5 md:mx-2.5 lg:mx-5 mx-1.5 '>
            <span className='text-gray-700 md:text-xl font-semibold pr-3 md:pr-5'
                style={{fontSize: 9}}>Discover Amazon</span>
            <span className='-mt-2 md:mt-1'>
                <Link
                    className='text-blue-500 hover:underline md:text-sm'
                    to='/products'
                    style={{fontSize: 7}}>
                    Click to learn more
                </Link>
            </span>
        </div>
        <div className='bg-white flex relative z-50 lg:top-48 xl:top-60 top-20 md:top-40 md:px-2.5 lg:px-6 px-1.5 mx-1.5 md:mx-2.5 lg:mx-5 overflow-x-auto flex-nowrap'>
            <div className='flex -mr-3 flex-2'>
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png'
                    imagealt='Shop in 8 languages'/>
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg'
                    imagealt='Shop in 8 languages'/>
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg'
                    imagealt='Shop in 8 languages'/>
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg'
                    imagealt='Shop in 8 languages'/>
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg'
                    imagealt='Shop in 8 languages'/>
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                    imagealt='Shop in 8 languages'/>
                <div className='lg:hidden'>
                    <ProductTwo
                        image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                        imagealt='Shop in 8 languages'/>
                </div>
            </div>   
        </div>
        </>
    )
}

export default ProductTwoList;
