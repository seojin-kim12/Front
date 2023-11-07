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
    margin-top: 2rem;

    img {
        margin-left: 2.7rem;
        margin-right: 2.7rem;
    }
`

function Cart() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <Header>
                    <img src={back} alt="back" />
                    <img src={logo} alt="Bver" />
                    <img src={cart} alt="cart" />
                </Header>
            </Container>
        </motion.div>
    );
};
export default Cart;