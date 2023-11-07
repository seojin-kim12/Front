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
    height: 26rem;
    padding: 1rem 1.5rem;
    border-radius: 1.8rem;
    box-shadow: 0 5px 18px -7px #c9c9c9;
    font-weight: 600;

    p {
        text-align: left;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        font-weight: 650;
    }

    input {
        width: 16.5rem;
        height: 2rem;
        border-radius: 0.5rem;
        border: 1px solid #444444;
        background-color: #fcf9f8;
        padding-left: 0.5rem;
        opacity: 0.6;
    }

    button {
        margin-top: 0.6rem;
        width: 5rem;
        height: 1.5rem;
        border-radius: 0.7rem;
        border: 0.5px solid #6d6d6d;
        font-size: 0.8rem;
        font-weight: 500;
        background-color: #fffaf9;
    }
`

const Button = styled.button`
    margin-top: 1.5rem;
    width: 17rem;
    height: 2.5rem;
    font-size: 1.2rem;
    font-weight: 550;
    border-radius: 0.8rem;
    border: 1px solid #a5a5a5;
    background-color: #e08644;
    box-shadow: 0 5px 18px -7px #838383;
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
                    <button>중복확인</button>
                    <p>아이디</p>
                    <input type="text" value={id} placeholder='아이디를 입력해주세요.' />
                    <p>비밀번호</p>
                    <input type="passward" value={password} placeholder='비밀번호를 입력해주세요.' />
                    <p>비밀번호 확인</p>
                    <input type="passward" value={rePassword} placeholder='비밀번호를 한 번 더 입력해주세요.' />
                </Input>
                <Button>회원가입</Button>
            </Container>
        </motion.div>
    );
};
export default Signup;                   