import axios from 'axios';
import { Container } from '../styles/global';
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";

function Home() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <Link to={'/signup'}>회원가입</Link>
            </Container>
        </motion.div>
    );
};
export default Home;