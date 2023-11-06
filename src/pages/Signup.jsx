import axios from 'axios';
import { Container } from '../styles/global';
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import logo from '../assets/logo.png'

const Top = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-top: 5rem;
    margin-left: 0.5rem;

    img {
        width: 8.8rem;
        height: 4.8rem;
    }

    p {
        margin: 0;
        padding-left: 1rem;
        font-size: 1.5rem;
        font-weight: 650;
    }
`

const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    background-color: #fffaf7;
    width: 17.5rem;
    height: 24rem;
    padding: 1rem 1.5rem;
    border-radius: 1.8rem;
    box-shadow: 0 5px 18px -7px #c9c9c9;

    p {
        text-align: left;
        margin-top: 1.3rem;
        margin-bottom: 0.5rem;
    }
`

function Signup() {
    const navigate = useNavigate();

    const [nickname, setNickname] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <Top>
                    <img src={logo} alt="Bver" />
                    <p>회원가입</p>
                </Top>
                <Input>
                    <p>닉네임</p>
                    <input type="text" value={nickname} placeholder='닉네임을 입력해주세요.' />
                    <p>아이디</p>
                    <input type="text" value={id} placeholder='아이디를 입력해주세요.' />
                    <p>아이디</p>
                    <input type="passward" value={password} placeholder='비밀번호를 입력해주세요.' />
                    <p>아이디</p>
                    <input type="passward" value={rePassword} placeholder='비밀번호를 한 번 더 입력해주세요.' />
                </Input>
            </Container>
        </motion.div>
    );
};
export default Signup;                   