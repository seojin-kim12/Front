import axios from 'axios';
import { Container } from '../styles/global';
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
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
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'

function Detail() {
    // 수량 
    const [nums, setNums] = useState([0, 0, 0, 0]);

    const handleMinusClick = (index) => {
        if (nums[index] > 0) {
            const newNums = [...nums];
            newNums[index] = nums[index] - 1;
            setNums(newNums);
        }
    };

    const handlePlusClick = (index) => {
        const newNums = [...nums];
        newNums[index] = nums[index] + 1;
        setNums(newNums);
    };

    // 모달
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <Header>
                    <img src={back} alt="back" />
                    <Link to={'/'}><img src={logo} alt="Bver" /></Link>
                    <Link to={'/cart'}><img className='cart' src={cart} alt="cart" /></Link>
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
                    <p>운영시간 : 매일 오전 10:00 ~ 오후 9:00</p>
                    <p>서울특별시 강북구 수유동 381-2 1층 1, 2호(수유동, 정암빌딩)</p>
                </StoreInfo>

                <Breads>
                    {nums.map((num, index) => (
                        <Bread key={index}>
                            <img src={choco} alt="bread" />
                            <p>초코소라빵</p>
                            <p className='num'>남은 수량: 2개</p>
                            <div>
                                <span>2,000원</span>
                                <img className='arrow' src={arrow} alt="" />
                                <span>1,500원</span>
                            </div>
                            <Amount>
                                <img className='minus' src={minus} alt="" onClick={() => handleMinusClick(index)} />
                                <p>{num}</p>
                                <img src={plus} alt="" onClick={() => handlePlusClick(index)} />
                            </Amount>
                        </Bread>
                    ))}
                </Breads>

                <Reservation onClick={() => setModalOpen(true)}>예약하기</Reservation>

                {
                    modalOpen &&
                    <Modal ref={modalBackground} onClick={e => {
                        if (e.target === modalBackground.current) {
                            setModalOpen(false);
                        }
                    }}>
                        <div>
                            <Link to={'/'}><button onClick={() => setModalOpen(false)}>X</button></Link>
                            <h3>예약 완료</h3>
                            <p className='time'>15분 후</p>
                            <p>매장에 방문해주시길 바랍니다.</p>
                        </div>
                    </Modal>
                }

            </Container>
        </motion.div>
    );
}

export default Detail;

const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);

    div {
        background-color: #fff9f5;
        width: 250px;
        height: 150px;
        padding: 5px;
        border-radius: 0.5rem;
    }

    h3 {
        margin: 0;
        margin-bottom: 1rem;
    }

    .time {
        font-size: 1.5rem;
        font-weight: 600;
    }

    p {
        margin: 0.5rem 0;
    }

    button {
        cursor: pointer;
        margin-left: 14.5rem;
        font-size: 0.7rem;
        color: #e08644;
        background-color: #fff9f5;
        border: none;
    }
`

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;

    img {
        padding-left: 3rem;
        padding-right: 3rem;
    }

    .cart {
        width: 35px;
        height: 35px;
        padding-top: 0.6rem;
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
        margin-top: 0.3rem;
        font-size: 0.8rem;
        font-weight: 545;
        color: #3d3d3d;
        padding-left: 2rem;
    }

    div {
        display: flex;
        padding-left: 2rem;
        padding-top: 1rem;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 0.5rem;
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
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 0.8rem;
`

const Bread = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff9f5;
    width: 9.5rem;
    height: 14rem;
    margin: 0.4rem 0.7rem;
    padding: 0.8rem 0;
    border-radius: 1rem;

    img {
        width: 8.3rem;
        height: 8rem;
    }

    p {
        margin: 0;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .num {
        font-size: 0.6rem;
        margin-top: 0.2rem;
        margin-bottom: 0.5rem;
    }

    .arrow {
        width: 13.5px;
        height: 6px;
    }

    span {
        font-size: 0.8rem;
        font-weight: 600;
        margin: 0 0.2rem;
    }
`

const Amount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #a5a5a5;
    border-radius: 1rem;
    width: 7rem;
    height: 1.4rem;
    margin-top: 0.5rem;
    padding-top: 0.3rem;

    p {
        font-size: 1rem;
    }

    img {
        width: 10px;
        height: 10px;
        padding: 0.5rem 1.5rem;
    }

    .minus{
        width: 12px;
        height: 1px;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
`

const Reservation = styled.button`
    margin: 2rem;
    margin-bottom: 3rem;
    width: 17rem;
    height: 2.5rem;
    font-size: 1.2rem;
    font-weight: 550;
    border-radius: 0.8rem;
    border: 1px solid #a5a5a5;
    background-color: #e08644;
    box-shadow: 0 5px 18px -7px #838383;
`