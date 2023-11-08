import axios from 'axios';
import { Container } from '../styles/global';
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import back from '../assets/back.png'
import logo from '../assets/logo_detail.png'
import cart from '../assets/cart.png'

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

function Cart() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <Header>
                    <img src={back} alt="back" />
                    <Link to={'/'}><img src={logo} alt="Bver" /></Link>
                    <Link to={'/cart'}><img className='cart' src={cart} alt="cart" /></Link>
                </Header>
            </Container>
        </motion.div>
    );
};
export default Cart;