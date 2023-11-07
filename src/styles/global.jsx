import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import lineseed from '../font/LINESeedKR-Rg.ttf'

export const Container = styled.div`
    @font-face {
        font-family: 'lineseed';
        src: local('lineseed'), local('lineseed');
        font-style: normal;
        src: url(${lineseed}) format('truetype');
    }

    font-family: lineseed;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    text-align: center;
    background: linear-gradient(to bottom, #fff4ed, #ffd9b3);
    background-size: cover;
    -ms-overflow-style: none;
    scrollbar-width: none;
    align-items: center;
    overflow-x: hidden;


    @media (hover: hover) {
        width: 390px;
        margin: 0 auto;
    }

    &::-webkit-scrollbar {
        display: none;
    }
    
    .body {
        min-height: calc(100vh - 145px);
        .scrollbox {
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }
        }
    }
`;
