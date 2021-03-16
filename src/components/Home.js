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
                <div className='bg-gray-200 h-full'></div>       
                <div className='bg-gray-200 h-72'></div>       
            </div>
            <div className='flex flex-col justify-center z-50 relative h-36 items-center bg-white lg:-top-3.5 -mt-3.5 top-20 md:top-40'>
                <div className='border-b w-full relative border-gray-300 pt-4'></div>
                <div className=' pt-5 relative -mb-3 '>
                    <button 
                        className='py-1 px-1.5 text-sm text-gray-900 border border-yellow-600 focus:outline-none cursor-pointer focus:ring-1 focus:ring-red-300 rounded font-normal bg-yellow-300 hover:bg-yellow-400 '>Sign in to see personalized recommendations</button>
                </div>
            </div>
            <div className='relative -top-0 z-50 flex items-center hover:bg-gray-500 justify-center bg-gray-700 h-3.5 md:h-12 text-white'>
                <a
                    href='#top' className='text-sm '>Back to top</a>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
