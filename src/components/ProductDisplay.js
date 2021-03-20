import React from 'react';
import Footer from './Footer';
import ProductFiveItems from './ProductFiveItems';

function ProductDisplay() {
    return (
        <div className='flex justify-center relative bg-gray-200'>
            <div className=' homecontainer object-cover '>
                <img
                    className=' w-full relative'
                    style={{z: -1}}
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'
                    alt='Amazon banner 1' />
            
                <div className='relative mx-auto justify-center -mt-64'>
                    <div className='grid grid-cols-2 z-10 mx-1.5'>
                        <ProductFiveItems
                            title={'Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black'}
                            image='https://m.media-amazon.com/images/I/81QpkIctqPL._AC_UL320_.jpg'
                            imageAlt='Black TV'
                            price={166.99}
                            rating={4}  />
                        <ProductFiveItems
                            title={'Sceptre 20" 1600x900 75Hz Ultra Thin LED Monitor 2x HDMI VGA Built-in Speakers, Machine Black Wide Viewing Angle 170°'}
                            image='https://m.media-amazon.com/images/I/617S7xFO58L._AC_UL320_.jpg'
                            imageAlt='LED Monitor'
                            price={79.97}
                            rating={5} />    
                    </div>
                    <div className='grid grid-cols-3 z-10 mx-1.5'>
                        <ProductFiveItems 
                            title={'Webcam with Microphone for Desktop, 1080P HD USB Computer Cameras with Privacy Shutter and Webcam Tripod°'}
                            image='https://m.media-amazon.com/images/I/71vPDq1rWDL._AC_UL320_.jpg'
                            imageAlt='tripod webcam'
                            price={34.99}
                            rating={3}/>
                        <ProductFiveItems 
                            title={'SAMSUNG LC24F396FHNXZA 23.5" FHD Curved LED-Lit FreeSync Monitor'}
                            image='https://m.media-amazon.com/images/I/91ubktnbNVL._AC_UL320_.jpg'
                            imageAlt='Samsung Monitor'
                            price={129.98}
                            rating={5}/>
                        <ProductFiveItems 
                            title={'ELEGOO UNO Project Super Starter Kit with Tutorial and UNO R3 Compatible with Arduino IDE'}
                            image='https://m.media-amazon.com/images/I/81itBMd1hzL._AC_UL320_.jpg'
                            imageAlt='LED Monitor'
                            price={39.86}
                            rating={2} />  
                    </div>
                    <div className='grid grid-cols-2 z-10 mx-1.5'>
                        <ProductFiveItems 
                            title={'RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light'}
                            image='https://m.media-amazon.com/images/I/61lnzTv2a0L._AC_UL320_.jpg'
                            imageAlt='headphone'
                            price={24.95}
                            rating={4} />
                        <ProductFiveItems 
                            title={'OtterBox DEFENDER SERIES Case for iPad 8th & 7th Gen (10.2" Display - 2020 & 2019 version) - BLACK'}
                            image='https://m.media-amazon.com/images/I/51hF+sX2BWL._AC_UL320_.jpg'
                            imageAlt='Ipad'
                            price={40.99}
                            rating={5} />
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
            </div>
        </div>
    )
}

export default ProductDisplay;
