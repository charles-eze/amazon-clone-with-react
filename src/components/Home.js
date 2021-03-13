import React from 'react';
import HomeCarousel from './HomeCarousel';
import ProductOne from './ProductOne';
import ProductThreeList from './ProductThreeList';
import ProductTwoList from './ProductTwoList';


function Home() {
    return (
        <div className='bg-gray-200 relative'>          
            <HomeCarousel />
            <ProductOne />
            <ProductTwoList />
            <ProductThreeList />
            
            <div className='bg-gray-200 h-screen'></div>
          
            
        
            
        </div>
    );
};

export default Home;
