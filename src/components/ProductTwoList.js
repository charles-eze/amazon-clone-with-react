import React from 'react';
import ProductTwo from './ProductTwo';


function ProductTwoList() {
    return (
        <div className='overflow-x-auto bg-white relative z-50 lg:top-60 top-20 md:top-40 px-6 mt-5 mx-5 '>
            <div className='flex pt-5 items-center'>
                <span className='text-gray-700 text-xl font-semibold pr-5'>Discover Amazon</span>
                <span>
                    <a
                        className='text-blue-500 hover:underline text-sm'
                        href=''>
                        Click to learn more
                    </a>
                </span>
            </div>
            <div className='flex -mr-3'>
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png'
                    imagealt='Shop in 8 languages'
                    link='' />
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg'
                    imagealt='Shop in 8 languages'
                    link='' />
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg'
                    imagealt='Shop in 8 languages'
                    link=''/>
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg'
                    imagealt='Shop in 8 languages'
                    link='' />
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg'
                    imagealt='Shop in 8 languages'
                    link=''/>
                <ProductTwo
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg'
                    imagealt='Shop in 8 languages'
                    link=''/>
            </div>   
                
        </div>
    )
}

export default ProductTwoList;
