import React from 'react';
import HomeCarousel from './HomeCarousel';
import ProductOne from './ProductOne';
import ProductThreeList from './ProductThreeList';
import ProductTwoList from './ProductTwoList';
import ProductFour from './ProductFour';


function Home() {
    return (
        <>
            <div className='bg-gray-200 relative'>          
                <HomeCarousel />
                <ProductOne />
                <ProductTwoList />
                <ProductThreeList />
                <ProductFour />
                <div className='bg-gray-200 h-screen'></div>       
            </div>
            <div>
                <button>Sign in to see personalized recommendations</button>
            </div>
        </>
    );
};

export default Home;
