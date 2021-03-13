import React from 'react';
import ProductThree from './ProductThree';

function ProductThreeList() {
    return (
        <>
        <div className='bg-white flex relative z-50 lg:top-60 top-20 md:top-40 px-6 pt-5 mt-5 mx-5 '>
            <span className='text-gray-700 text-xl font-semibold pr-5'>Top Beauty & Personal Care products</span>
            <span>
                <a
                    className='text-blue-500 hover:underline text-sm'
                    href=''>
                    Shop now
                </a>
            </span>
        </div>
        <div className='bg-white flex relative z-50 lg:top-60 top-20 md:top-40 px-6 mx-5 overflow-x-auto flex-nowrap'>
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
