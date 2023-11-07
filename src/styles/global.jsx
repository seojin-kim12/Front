import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled.div`
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
    font-family: Roboto;
    overflow-x: hidden;

    @media (hover: hover) {
        width: 100%;
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