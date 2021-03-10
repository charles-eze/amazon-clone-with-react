import React from 'react'
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';



function HomeCarousel() {

    const height='160px';

    const Container = styled.div`
        width: 100%;
        z-index: -1
        position: relative;
        overflow: hidden;
        height: ${height};
    `;

        const Arrow = styled.div`
            text-shadow: 1px 1px 1px #fff;
            z-index: 10;
            line-height: ${height};
            text-align: center;
            position: absolute;
            color: #696969;
            display: flex
            top: 0;
            width: 6%;
            font-size: 4em;
            font-weight: 100;
            cursor: pointer;
            user-select: none;
            ${props => props.right ? css`left: 94%; up:4%` : css`left: 0%; down: 96%;`}
        `;
        
    

    const CarouselUI = ({ position, handleClick, children }) => (
        <Container>
            {children}
            <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
            <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
        </Container>
    );
    const Carousel = makeCarousel(CarouselUI);

    return (
            <Carousel >
                <Slide right>
                    <div className='pt-14 relative'>
                        <img
                            className=''
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg'
                            alt='Amazon banner 1' />
                    </div>
                </Slide>
                <Slide right>
                    <div className='pt-14'>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
                            alt='Amazon banner 2' />
                    </div>
                </Slide>
                <Slide right>
                    <div className='pt-14'>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'
                            alt='Amazon banner 3' />
                    </div>
                </Slide>
                <Slide right>
                    <div className='pt-14'>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg'
                            alt='Amazon banner 4' />
                    </div>
                </Slide>
                <Slide right>
                    <div className='pt-14'>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg'
                            alt='Amazon banner 5' />
                    </div>
                </Slide>
            </Carousel>
    )
}

export default HomeCarousel;
