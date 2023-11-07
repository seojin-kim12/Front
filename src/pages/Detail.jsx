import axios from 'axios';
import { Container } from '../styles/global';
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import back from '../assets/back.png'
import logo from '../assets/logo_detail.png'
import cart from '../assets/cart.png'
import banner from '../assets/detailbanner.png'
import storelogo from '../assets/storelogo.svg'
import heart from '../assets/heart.png'
import choco from '../assets/초코소라빵.png'
import arrow from '../assets/arrow.png'


const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;

    img {
        margin-left: 2.7rem;
        margin-right: 2.7rem;
    }
`

const Banner = styled.div`
    width: 100%;
    margin: 0;
    margin-top: 0.7rem;
`
const StoreInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    //background-color: #fff9f5;
    margin-bottom: 0.5rem;

    p {
        text-align: left;
        width: 20.5rem;
        margin: 0;
        margin-top: 0.7rem;
        font-size: 0.8rem;
        font-weight: 545;
        margin-bottom: 1rem;
        color: #3d3d3d;
        padding-left: 2rem;
    }

    div {
        display: flex;
        padding-left: 2rem;
        padding-top: 1rem;
        justify-content: flex-start;
        align-items: center;
        span {
            margin-left: 0.5rem;
            font-size: 1.3rem;
            font-weight: 650;
        }

        img {
            width: 3rem;
            height: 3rem;
        }
    }

    .heart {
        width: 24px;
        height: 24px;
        align-items: center;
        margin-left: 0.55rem;
        margin-bottom: 0.3rem;
}
`

const Breads = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Bread = styled.div`
    background-color: #fff9f5;
    width: 9.5rem;
    height: 13.5rem;
    margin: 1rem 1rem;
    padding: 1rem 0;
    border-radius: 1rem;

    img {
        width: 9rem;
        height: 8.7rem;
    }

    p {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .num {
        font-size: 0.7rem;
        margin-bottom: 0.7rem;
    }

    .arrow {
        width: 13.5px;
        height: 6px;
    }

    span {
        font-weight: 600;
        margin: 0 0.2rem;
    }
`

function Detail() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <Header>
                    <img src={back} alt="back" />
                    <Link to={'/'}><img src={logo} alt="Bver" /></Link>
                    <Link to={'/cart'}><img src={cart} alt="cart" /></Link>
                </Header>
                <Banner>
                    <img src={banner} alt="banners" />
                </Banner>
                <StoreInfo>
                    <div>
                        <img src={storelogo} alt="파바" />
                        <span>파리바게트</span>
                        <img className='heart' src={heart} alt="heart" />
                    </div>
                    <p>서울특별시 강북구 수유동 381-2 1층 1, 2호(수유동, 정암빌딩)</p>
                </StoreInfo>
                <Breads>
                    <Bread>
                        <img src={choco} alt="bread" />
                        <p>초코소라빵</p>
                        <p className='num'>남은 수량:2개</p>
                        <span>2,000원</span>
                        <img className='arrow' src={arrow} alt="" />
                        <span>1,500원</span>
                    </Bread>
                    <Bread>
                        <img src={choco} alt="bread" />
                        <p>초코소라빵</p>
                        <p className='num'>남은 수량:2개</p>
                        <span>2,000원</span>
                        <img className='arrow' src={arrow} alt="" />
                        <span>1,500원</span>
                    </Bread>
                    <Bread>
                        <img src={choco} alt="bread" />
                        <p>초코소라빵</p>
                        <p className='num'>남은 수량:2개</p>
                        <span>2,000원</span>
                        <img className='arrow' src={arrow} alt="" />
                        <span>1,500원</span>
                    </Bread>
                    <Bread>
                        <img src={choco} alt="bread" />
                        <p>초코소라빵</p>
                        <p className='num'>남은 수량:2개</p>
                        <span>2,000원</span>
                        <img className='arrow' src={arrow} alt="" />
                        <span>1,500원</span>
                    </Bread>
                </Breads>
            </Container>
        </motion.div>
    );
};
export default Detail;