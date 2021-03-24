import React from 'react';
import Footer from './Footer';
import ProductFiveItems from './ProductFiveItems';

function ProductDisplay() {
    return (
        <div className='flex justify-center relative bg-gray-200'>
            <div className=' object-cover '>
                <img
                    className=' w-full relative'
                    style={{z: -1}}
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'
                    alt='Amazon banner 1' />
            
                <div className='relative lg:mx-auto justify-center -mt-12 md:-mt-24 lg:-mt-40 xl:-mt-64 '>
                    <div className='grid grid-cols-2 z-10 mx-1 lg:mx-1.5'>
                        <ProductFiveItems
                            id={7023}
                            title={'Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black'}
                            image='https://m.media-amazon.com/images/I/81QpkIctqPL._AC_UL320_.jpg'
                            imageAlt='Black TV'
                            price={166.99}
                            rating={4}  />
                        <ProductFiveItems
                            id={9045}
                            title={'Sceptre 20" 1600x900 75Hz Ultra Thin LED Monitor 2x HDMI VGA Built-in Speakers, Machine Black Wide Viewing Angle 170°'}
                            image='https://m.media-amazon.com/images/I/617S7xFO58L._AC_UL320_.jpg'
                            imageAlt='LED Monitor'
                            price={79.97}
                            rating={5} />    
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-2 z-10 mx-1 lg:mx-1.5'>
                        <ProductFiveItems
                            id={8563} 
                            title={'Webcam with Microphone for Desktop, 1080P HD USB Computer Cameras with Privacy Shutter and Webcam Tripod°'}
                            image='https://m.media-amazon.com/images/I/71vPDq1rWDL._AC_UL320_.jpg'
                            imageAlt='tripod webcam'
                            price={34.99}
                            rating={3}/>
                        <ProductFiveItems
                            id={3087} 
                            title={'SAMSUNG LC24F396FHNXZA 23.5" FHD Curved LED-Lit FreeSync Monitor'}
                            image='https://m.media-amazon.com/images/I/91ubktnbNVL._AC_UL320_.jpg'
                            imageAlt='Samsung Monitor'
                            price={129.98}
                            rating={5}/>
                        <ProductFiveItems 
                            id={'0064'}
                            title={'ELEGOO UNO Project Super Starter Kit with Tutorial and UNO R3 Compatible with Arduino IDE'}
                            image='https://m.media-amazon.com/images/I/81itBMd1hzL._AC_UL320_.jpg'
                            imageAlt='LED Monitor'
                            price={39.86}
                            rating={2} /> 
                        <ProductFiveItems
                            id={6823}
                            title={'HP OfficeJet Pro 6978 All-in-1 Wireless Printer, HP Instant Ink, Works with Alexa (T0F29A)'}
                            image='https://m.media-amazon.com/images/I/711wDPzdjvL._AC_UL320_.jpg'
                            imageAlt='Wireless printer'
                            price={69.54}
                            rating={3} />
                        <ProductFiveItems 
                            id={1398}
                            title={'Acer Swift 3 Thin & Light Laptop, 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core with Radeon Graphics, 8GB'}
                            image='https://m.media-amazon.com/images/I/71W5ZdS+sEL._AC_UL320_.jpg'
                            imageAlt='Acer swift'
                            price={1765.34}
                            rating={5} /> 
                        <ProductFiveItems 
                            id={'0064'}
                            title={'Fujitsu ScanSnap iX1600 Versatile Cloud Enabled Document Scanner for Mac or PC, Black'}
                            image='https://m.media-amazon.com/images/I/71u7Psu+y7L._AC_UL320_.jpg'
                            imageAlt='Lenovo tab'
                            price={986.87}
                            rating={4} />   
                    </div>
                    <div className='grid grid-cols-2 z-10 mx-1 lg:mx-1.5 '>
                        <ProductFiveItems
                            id={1423} 
                            title={'HP 902, 3 Ink Cartridges, Cyan, Magenta, Yellow, T6L86AN, T6L90AN, T6L94AN'}
                            image='https://m.media-amazon.com/images/I/71AYsw9snZL._AC_UL320_.jpg'
                            imageAlt='Catridge'
                            price={24.95}
                            rating={3} />
                        <ProductFiveItems
                            id={5662} 
                            title={'HP VH240a 23.8-Inch Full HD 1080p IPS LED Monitor with Built-In Speakers and VESA Mounting, Rotating Portrait'}
                            image='https://m.media-amazon.com/images/I/71trhuzbhML._AC_UL320_.jpg'
                            imageAlt='TV'
                            price={876.44}
                            rating={5} />
                    </div>
                </div>
                <div className='relative lg:-top-0 z-50 flex items-center hover:bg-gray-500 justify-center bg-gray-700 h-5 md:h-12 text-white'>
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
