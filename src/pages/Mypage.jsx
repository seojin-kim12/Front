import axios from "axios";
import { Container } from "../styles/global";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import back from "../assets/back.png";
import account from "../assets/account.svg";

const Back = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  cursor: pointer;

  img {
    margin-left: -320px;
    margin-top: -12px;
    width: 20px;
    height: 25px;
  }
`;

const Logo = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;

  img {
    margin-left: 2.7rem;
    margin-right: 2.7rem;
    width: 8.8rem;
    height: 4.8rem;
  }
`;

const Box = styled.div`
  position: relative;
  margin-top: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 360px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const Profile = styled.div`
  img {
    width: 60px;
    margin-left: -240px;
    margin-top: 20px;
  }
`;

const Name = styled.div`
  color: #ff9633;
  font-size: 25px;
  font-weight: 650;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: -62px;
  margin-left: 100px;
  text-align: left;
`;

const Phone = styled.div`
  font-size: 15px;
  margin-top: 4px;
  margin-left: 102px;
  text-align: left;
`;

function Mypage() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Back onClick={handleHomeClick}>
          <img src={back} alt="back" />
        </Back>
        <Logo>
          <img src={logo} alt="Bver" />
        </Logo>
        <Box>
          <Profile>
            <img src={account} />
          </Profile>
          <Name>김서진</Name>
          <Phone>010-1111-2222</Phone>
        </Box>
      </Container>
    </motion.div>
  );
}
export default Mypage;
