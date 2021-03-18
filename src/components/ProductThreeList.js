import React from 'react';
import ProductThree from './ProductThree';

function ProductThreeList() {
    return (
        <>
        <div className='bg-white flex relative z-50 lg:top-48 xl:top-60 top-20 md:top-40 md:pt-2.5 lg:pt-5 pt-2 px-1.5 md:px-2.5 lg:px-6 mt-1.5 md:mt-2.5 lg:mt-5 md:mx-2.5 lg:mx-5 mx-1.5  '>
            <span className='text-gray-700 md:text-xl font-semibold pr-3 md:pr-5'
                style={{fontSize: 9}}>Top Beauty & Personal Care products</span>
            <span className='-mt-2 md:mt-1'>
                <a
                    className='text-blue-500 hover:underline md:text-sm'
                    href=''
                    style={{fontSize: 7}}>
                    Shop now
                </a>
            </span>
        </div>
        <div className='bg-white flex relative z-50 lg:top-48 xl:top-60 top-20 md:top-40  md:px-2.5 lg:px-6 px-1.5 mx-1.5 md:mx-2.5 lg:mx-5 overflow-x-auto flex-nowrap'>
            <div className='flex -mr-3 flex-2'>
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/41Z7qvCN+UL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/41yn8u3qJPL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/51+8z0H7zGL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/51tyP0EgjUL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/41RNHlao-eL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/51MQYQ+9lxL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/51BQ1hohpJL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/51BQ1hohpJL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/51EJjGyLVpL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/41PeVR6BHtL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/414HE5yOdoL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/31l214ak+LL._AC_SY200_.jpg'
                    link='' />
                <ProductThree 
                    image='https://m.media-amazon.com/images/I/51WEIiwofyL._AC_SY200_.jpg'
                    link='' />
            </div>
        </div>
        </>

        
        
    )
}

export default ProductThreeList
