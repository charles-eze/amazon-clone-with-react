import React from 'react';
import HomeCarousel from './HomeCarousel';
import ProductOne from './ProductOne';
import ProductThreeList from './ProductThreeList';
import ProductTwoList from './ProductTwoList';
import ProductFour from './ProductFour';
import Footer from './Footer';


function Home() {
    return (
        <>
            <div className='bg-gray-200 relative'>          
                <HomeCarousel />
                <ProductOne />
                <ProductTwoList />
                <ProductThreeList />
                <ProductFour />
                <div className='bg-gray-200 lg:h-full h-28'></div>       
                <div className='bg-gray-200 lg:h-60 xl:h-72 md:h-16'></div>       
            </div>
            <div className='flex flex-col justify-center z-50 relative lg:h-36 md:h-28 h-20 items-center bg-white lg:-top-3.5 md:-mt-0.5 lg:-mt-3.5 -mt-6  md:-top-1'>
                <div className='border-b w-full relative border-gray-300 md:pt-4 pt-2.5'></div>
                <div className=' md:pt-5 pt-1 relative md:-mb-3 '>
                    <button 
                        className='md:py-1 py-0.5 md:px-1.5 px-1 md:text-xs lg:text-sm text-gray-900 border border-yellow-500 focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded-sm md:rounded font-normal bg-yellow-300 hover:bg-yellow-400 '
                        style={{fontSize: 6}}>Sign in to see personalized recommendations</button>
                </div>
            </div>
            <div className='relative -top-0 z-50 flex items-center hover:bg-gray-500 justify-center bg-gray-700 h-5 md:h-12 text-white'>
                <a
                    href='#top' className='md:text-xs lg:text-sm '
                    style={{fontSize: 6}}>Back to top</a>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
