import axios from 'axios';
import { Container } from '../styles/global';
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import back from '../assets/back.png'
import logo from '../assets/logo_detail.png'
import cart from '../assets/cart.png'
import heart from '../assets/heart.png'
import emptyheart from '../assets/emptyheart.png'
import arrow from '../assets/arrow.png'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'
// import banner from '../assets/detailbanner.png'
// import storelogo from '../assets/storelogo.svg'
// import choco from '../assets/초코소라빵.png'

function Detail() {
    // 수량 및 로컬저장
    const [nums, setNums] = useState([]);

    const updateQuantity = (index, newQuantity) => {
        const newNums = [...nums];
        newNums[index] = newQuantity;
        setNums(newNums);
    };

    useEffect(() => {
        if (data && data.menu_list) {
            const updatedItems = data.menu_list.map((menu, index) => {
                return {
                    store_name: data.store_name,
                    menu_img: menu.menu_img,
                    menu_name: menu.menu_name,
                    quantity: nums[index],
                    price: menu.price,
                };
            });

            // 수량이 0인 아이템 제거
            const filteredItems = updatedItems.filter(item => item.quantity > 0);

            // 로컬 스토리지에 저장할 때 store_id를 키로 사용
            localStorage.setItem(`selectedItems_${store_id}`, JSON.stringify(filteredItems));
        }
    }, [nums]);

    const handleMinusClick = (index) => {
        if (nums[index] > 0) {
            updateQuantity(index, nums[index] - 1);
        }
    };

    const handlePlusClick = (index) => {
        updateQuantity(index, nums[index] + 1);
    };


    // 모달
    const [modalOpen, setModalOpen] = useState(false);
    const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const modalBackground = useRef();

    // 예약시간
    const [selectedTime, setSelectedTime] = useState('');
    const handleReservation = () => {
        setModalOpen(false);
        setConfirmationModalOpen(true);
    };

    // 데이터 변수
    const [data, setData] = useState(null);
    const [liked, setLiked] = useState();
    const { store_id } = useParams();

    // 데이터 GET
    useEffect(() => {
        axios.get(`http://13.124.196.200:8081/api/bakery/${store_id}`)
            .then((response) => {
                console.log(response.data)
                // nums가 초기화되지 않았을 때만 초기화
                if (!nums.length) {
                    // 모든 빵의 개수를 0으로 초기화된 배열로 설정
                    const initialNums = Array(response.data.result.menu_list.length).fill(0);
                    setNums(initialNums);
                }
                setLiked(response.data.result.is_liked);
                setData(response.data.result);
            })
            .catch((error) => {
                if (error.response) {
                    // 서버가 응답한 상태 코드가 2xx 범위를 벗어난 경우
                    console.error('Server responded with a non-2xx status', error.response.data);
                } else if (error.request) {
                    // 요청은 보냈지만 응답을 받지 못한 경우
                    console.error('No response received from the server', error.request);
                } else {
                    // 요청을 보내기 전에 발생한 오류
                    console.error('Error before sending the request', error.message);
                }
            });
    }, []);

    const handleLikeClick = () => {
        setLiked((prevLiked) => !prevLiked);
    };

    // 예약 post
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     axios
    //         .post('http://13.124.196.200:8081/api/reservations', {
    //             userId: ,
    //             storeId: bakeryId,
    //             breadId: ,
    //             breadType: ,
    //             quantity: ,
    //             pickUpTime: selectedTime 
    //         })
    //         .then((response) => {
    //             navigate('/');
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <Header>
                    <img src={back} alt="back" />
                    <Link to={'/'}><img src={logo} alt="Bver" /></Link>
                    <Link to={'/cart'}><img className='cart' src={cart} alt="cart" /></Link>
                </Header>

                <Banner>
                    {data && <img src={data.store_img} alt={data.store_name} />}
                </Banner>

                <StoreInfo>
                    {data && (
                        <>
                            <div>
                                <img src={data.store_logo} alt={data.store_name} />
                                <span>{data.store_name}</span>
                                {liked
                                    ? <img className='heart' src={heart} alt="heart" onClick={handleLikeClick} />
                                    : <img className='emptyheart' src={emptyheart} alt="emptyheart" onClick={handleLikeClick} />
                                }
                            </div>
                            <p>운영시간: {data.open_time}</p>
                            <p>주소: {data.location}</p>
                        </>
                    )}
                </StoreInfo>

                <Breads>
                    {data && data.menu_list && data.menu_list.map((menu, index) => (
                        <Bread key={index}>
                            <img src={menu.menu_img} alt={menu.menu_name} />
                            <p>{menu.menu_name}</p>
                            <p className='num'>남은 수량: {menu.quantity}개</p>
                            <div>
                                <span>{menu.price}원</span>
                                <img className='arrow' src={arrow} alt="" />
                                <span>{menu.discounted_price}원</span>
                            </div>
                            <Amount>
                                <img className='minus' src={minus} alt="" onClick={() => handleMinusClick(index)} />
                                <p>{nums[index]}</p>
                                <img src={plus} alt="" onClick={() => handlePlusClick(index)} />
                            </Amount>
                        </Bread>
                    ))}
                </Breads>

                <Reservation onClick={() => setModalOpen(true)}>예약하기</Reservation>

                {modalOpen && (
                    <Modal>
                        <div>
                            <Link to={'/'}><button className='close' onClick={() => setModalOpen(false)}>X</button></Link>
                            <h3>예약시간</h3>
                            <select
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                            >
                                <option value="10">10분 후</option>
                                <option value="20">20분 후</option>
                                <option value="30">30분 후</option>
                            </select>
                            <button className='reservation' onClick={handleReservation}>예약하기</button>
                        </div>
                    </Modal>
                )}

                {confirmationModalOpen && (
                    <ConfirmModal>
                        <div>
                            <h3>예약 완료</h3>
                            <p>예약이 성공적으로 완료되었습니다!</p>
                            <Link to={'/'}>
                                <button className='close' onClick={() => setConfirmationModalOpen(false)}>확인</button>
                            </Link>
                        </div>
                    </ConfirmModal>
                )}

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
        height: 200px;
        padding: 5px;
        border-radius: 0.5rem;
    }

    h3 {
        margin: 0;
        margin-bottom: 1rem;
    }

    .close {
        cursor: pointer;
        margin-left: 14.5rem;
        font-size: 0.7rem;
        color: #e08644;
        background-color: #fff9f5;
        border: none;
    }

    select {
        margin-top: 0.7rem;
        width: 8rem;
        height: 2rem;
        border-radius: 0.5rem;
        font-size: 15px;
    }

    .reservation {
        margin: 2rem;
        margin-bottom: 3rem;
        width: 6rem;
        height: 1.8rem;
        font-size: 0.8rem;
        font-weight: 550;
        border-radius: 0.8rem;
        border: 1px solid #a5a5a5;
        background-color: #e08644;
        box-shadow: 0 5px 18px -7px #838383;
    }
`

const ConfirmModal = styled.div`
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
        height: 200px;
        padding: 5px;
        border-radius: 0.5rem;
    }

    h3 {
        margin: 0;
        margin-top: 2rem;
    }

    p {
        margin-top: 2rem;
        margin-bottom: 1.5rem;
    }

    button {
        margin: 1rem;
        margin-bottom: 1rem;
        width: 4rem;
        height: 1.8rem;
        font-size: 0.8rem;
        font-weight: 550;
        border-radius: 0.8rem;
        border: 1px solid #a5a5a5;
        background-color: #e08644;
        box-shadow: 0 5px 18px -7px #838383;
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
    height: 11rem;
    margin: 0;
    margin-top: 1rem;

    img{
        width: 100%;
        height: 11rem;
        object-fit: cover;
        margin: 0;
    }
`
const StoreInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    //background-color: #fff9f5;
    padding-bottom: 1rem;
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

    .heart, .emptyheart {
        width: 24px;
        height: 24px;
        align-items: center;
        margin-left: 0.55rem;
        margin-bottom: 0.2rem;
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
        width: 7.3rem;
        height: 7rem;
        border-radius: 0.5rem;
        margin-bottom: 0.6rem;
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
        margin-top: 0.3rem;
        margin-bottom: 0.1rem;
    }

    span {
        font-size: 0.8rem;
        font-weight: 600;
        margin: 0 0.4rem;
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
        margin: 0;
        margin-bottom: 0.2rem;
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