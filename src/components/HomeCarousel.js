import React from 'react'
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';



function HomeCarousel() {

    const height='100px';

    const Container = styled.div`
        z-index: -1
        position: relative;
        overflow: hidden;
    `;

        const Arrow = styled.div`
            left: 324px;
            text-shadow: 1px 1px 1px #fff;
            z-index: 100;
            line-height: ${height};
            box-sizing: border-box;
            text-align: center;
            position: absolute;
            color: #696969;
            display: flex
            top: 0;
            width: 10%;
            font-size: 3em;
            font-weight: 70;
            cursor: pointer;
            user-select: none;
            ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
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
                <Slide left>
                    <div className='relative'>
                        <img
                            className=''
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg'
                            alt='Amazon banner 1' />
                    </div>
                </Slide>
                <Slide left>
                    <div className=''>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
                            alt='Amazon banner 2' />
                    </div>
                </Slide>
                <Slide left>
                    <div className=''>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'
                            alt='Amazon banner 3' />
                    </div>
                </Slide>
                <Slide left>
                    <div className=''>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg'
                            alt='Amazon banner 4' />
                    </div>
                </Slide>
                <Slide left>
                    <div className=''>
                        <img
                            className='image-six'
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg'
                            alt='Amazon banner 5' />
                    </div>
                </Slide>
                <Slide left>
                    <div className=''>
                        <img
                            className='image-six'
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg'
                            alt='Amazon banner 5' />
                    </div>
                </Slide>
            </Carousel>
    )
}

export default HomeCarousel;
