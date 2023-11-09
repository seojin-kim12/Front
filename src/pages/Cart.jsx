import axios from 'axios';
import { Container } from '../styles/global';
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import back from '../assets/back.png'
import logo from '../assets/logo_detail.png'
import cart from '../assets/cart.png'
import choco from '../assets/초코소라빵.png'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'
import line from '../assets/line.png'


function Cart() {
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

                <List>
                    <p className='storename'>파리바게트</p>
                    <img src={line} alt="" />
                    {nums.map((num, index) => (
                        <div className='items' key={index}>
                            <div>
                                <img className='photo' src={choco} alt="" />
                                <h3>초코소라빵</h3>
                                <div className='priceNum'>
                                    <p>1,500원</p>
                                    <Amount>
                                        <img className='minus' src={minus} alt="" onClick={() => handleMinusClick(index)} />
                                        <p>{num}</p>
                                        <img src={plus} alt="" onClick={() => handlePlusClick(index)} />
                                    </Amount>
                                </div>
                            </div>
                            <img src={line} alt="" />
                        </div>
                    ))}
                </List>
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
};
export default Cart;


const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;

    img {
        margin-left: 3rem;
        margin-right: 3rem;
    }

    .cart {
        width: 35px;
        height: 35px;
        padding-top: 0.6rem;
    }
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    padding: 0.5rem;
    background-color: #fff7f0;
    width: 390px;

    .storename {
        text-align: left;
        padding-left: 2rem;
        font-size: 1.1rem;
        margin: 0.5rem 0;
    }

    .items {
        display: flex;
        flex-direction: column;
    }

    div {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 0.5rem;
            margin-right: 4rem;
            font-size: 15px;
            font-weight: 500;
        }
    }

    img {
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }

    .photo {
        width: 90px;
        height: 90px;
    }

    .priceNum {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
            margin: 0;
            margin-left: 1rem;
            margin-right: 1rem;
            font-weight: 600;
        }
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
    padding-top: 0.18rem;

    p {
        font-size: 1rem;
    }

    img {
        width: 10px;
        height: 10px;
        padding: 0.5rem 0.5rem;
        margin: 0;
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