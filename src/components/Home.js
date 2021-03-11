import React from 'react';
import HomeCarousel from './HomeCarousel';
import ProductOne from './ProductOne';


function Home() {
    return (
        <div className='bg-gray-200 relative'>          
            <HomeCarousel />
            <ProductOne />
            
            <div className='bg-gray-200 h-screen'></div>
          
            
        
            
        </div>
    );
};

export default Home;
