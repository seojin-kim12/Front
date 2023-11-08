import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "../styles/global";
import logo from "../assets/logo.png";
import account from "../assets/account.svg";
import bread from "../assets/bread.jpg";
import bv from "../assets/bv.png";

const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -250px;

  img {
    width: 8.8rem;
    height: 4.8rem;
  }
`;

// const Write = styled.div`
//   margin-left: 8rem;
//   margin-top: -35px;
//   font-size: 0.9rem;
//   font-weight: 650;
//   color: #ff8c00;

//   p1 {
//     cursor: pointer;
//     margin-right: 2px;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
//   p2 {
//     cursor: pointer;
//     margin-left: -8px;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
//   p3 {
//     cursor: pointer;
//     margin-right: 10px;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

const HomeImg = styled.div`
  position: relative;
  left: 155px;
  top: -55px;
  img {
    width: 38px;
    cursor: pointer;
  }
`;

const Adver = styled.div`
  width: 100%;
  margin-top: -37px;

  #adv1 {
    background-color: #ff8c00;
    width: 100%;
    height: 150px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    p1 {
      position: relative;
      left: -70px;
      top: 20px;
      color: #fff;
      font-size: 30px;
      font-weight: 650;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    p2 {
      position: relative;
      left: -55px;
      top: 30px;
      color: #fff;
      font-size: 15px;
      font-weight: 650;
    }
  }

  #adv2 {
    background-color: #8b4513;
    width: 100%;
    height: 150px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    p1 {
      position: relative;
      left: -70px;
      top: 20px;
      color: #ffa500;
      font-size: 30px;
      font-weight: 650;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    p2 {
      position: relative;
      left: -100px;
      top: 30px;
      color: #fff;
      font-size: 15px;
      font-weight: 650;
    }
    p3 {
      position: relative;
      left: -95px;
      top: 33px;
      color: #fff;
      font-size: 15px;
      font-weight: 650;
    }
  }

  #adv3 {
    background-color: #f4a460;
    width: 100%;
    height: 150px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    p1 {
      position: relative;
      left: -80px;
      top: 20px;
      color: #8b4513;
      font-size: 30px;
      font-weight: 650;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
    p2 {
      position: relative;
      left: -58px;
      top: 30px;
      color: #5a2d0c;
      font-size: 15px;
      font-weight: 650;
    }
    p3 {
      position: relative;
      left: -113px;
      top: 33px;
      color: #5a2d0c;
      font-size: 15px;
      font-weight: 650;
    }
  }
`;

const Town = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-left: -255px;
  margin-top: 20px;
  margin-bottom: 0px;
`;

const PostBox = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  height: 80px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const PostImg = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 10px 5px 5px 10px;
  overflow: hidden;
`;

const ScrollBox = styled.div`
  width: 360px;
  height: 255px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    /* WebKit 브라우저의 스크롤바를 숨김 */
    width: 0;
    background: transparent;
  }
  padding-bottom: 20px;
`;

const Name = styled.div`
  position: relative;
  top: -70px;
  left: 95px;
  color: #ff7b00;
  font-family: SUIT;
  font-size: 23px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

const Address = styled.div`
  position: relative;
  top: -65px;
  left: 95px;
  color: black;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  text-align: left;
`;
// 찜한 가게
const HeartTown = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-left: -245px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const HeartBox = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  width: 150px;
  height: 200px;
  border-radius: 10px;
  margin-left: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const HeartImg = styled.div`
  position: relative;
  width: 150px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
`;

const HeartBoxs = styled.div`
  display: flex; // 이 부분을 추가하여 가로로 정렬
  overflow-x: auto; // 가로 스크롤을 활성화합니다.
  width: 100%;
  height: 100%;
  //   border: 1px solid #000;
  &::-webkit-scrollbar {
    /* WebKit 브라우저의 스크롤바를 숨김 */
    width: 0;
    background: transparent;
  }
`;

const HeartName = styled.div`
  position: relative;
  top: -50px;
  left: 4px;
  color: white;
  font-family: SUIT;
  font-size: 21px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;
//하단 바
const BottomBar = styled.div`
  background-color: rgba(255, 140, 0, 0.8);
  height: 75px;
  width: 100%;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.2); /* Use a negative margin-top to create the shadow effect on the bottom bar. */
  margin-top: auto; /* Push the bar to the bottom using auto margin. */
`;

const BottomName = styled.div`
  margin-top: -5px;
  margin-left: -265px;
  img {
    width: 100px;
  }
`;

const Content = styled.div`
  position: relative;
  margin-top: -60px;
  margin-left: 70px;
  color: #fff;
  font-size: 20px;
  font-weight: 650;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Content2 = styled.div`
  position: relative;
  margin-top: 5px;
  margin-left: 50px;
  color: #fff;
  font-size: 13px;
`;

function Home() {
  const navigate = useNavigate();
  const advertisements = [
    {
      id: "adv1",
      title: "오늘의 제빵소",
      description: "3만원 이상 구매 시 3000원 할인",
    },
    {
      id: "adv2",
      title: "외계인 방앗간",
      description: "2023 수능 선물은",
      extraDescription: "외계인 방앗간에서!!",
    },
    {
      id: "adv3",
      title: "모어 댄 밀크",
      description: "신선한 우유와 버터를 사용하여",
      extraDescription: "풍미 가득한 빵",
    },
  ];

  const [currentAdvIndex, setCurrentAdvIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdvIndex(
        (prevIndex) => (prevIndex + 1) % advertisements.length
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentAdvertisement = advertisements[currentAdvIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Top>
          <img src={logo} alt="Bver" />
        </Top>
        {/* <Write>
          <p1 onClick={handleSignupClick}>회원가입</p1>
          <p3>/</p3>
          <p2 onClick={handleLoginClick}>로그인</p2>
        </Write> */}
        <HomeImg>
          <Link to="/Mypage">
            <img src={account} alt="account" />
          </Link>
        </HomeImg>
        <Adver>
          <div id={currentAdvertisement.id}>
            <p1>{currentAdvertisement.title}</p1>
            <br />
            <p2>{currentAdvertisement.description}</p2>
            {currentAdvertisement.extraDescription && (
              <>
                <br />
                <p3>{currentAdvertisement.extraDescription}</p3>
              </>
            )}
          </div>
        </Adver>
        <Town>우리 동네 빵집</Town>
        <ScrollBox>
          <PostBox>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name>오늘의 제빵소</Name>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
          </PostBox>
          <PostBox>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name>오늘의 제빵소</Name>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
          </PostBox>
          <PostBox>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name>오늘의 제빵소</Name>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
          </PostBox>
          <PostBox>
            <PostImg>
              <img
                //   src={`${process.env.PUBLIC_URL}/images/imgupload_post1.svg`}
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </PostImg>
            <Name>오늘의 제빵소</Name>
            <Address>경기도 구리시 벌말로 128번길 13</Address>
          </PostBox>
        </ScrollBox>
        <HeartTown>내가 찜한 가게</HeartTown>
        <HeartBoxs>
          <HeartBox>
            <HeartImg>
              <img
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </HeartImg>
            <HeartName>오늘의 제빵소</HeartName>
          </HeartBox>
          <HeartBox>
            <HeartImg>
              <img
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </HeartImg>
            <HeartName>오늘의 제빵소</HeartName>
          </HeartBox>
          <HeartBox>
            <HeartImg>
              <img
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </HeartImg>
            <HeartName>오늘의 제빵소</HeartName>
          </HeartBox>
          <HeartBox>
            <HeartImg>
              <img
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </HeartImg>
            <HeartName>오늘의 제빵소</HeartName>
          </HeartBox>
          <HeartBox>
            <HeartImg>
              <img
                src={bread}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // 이미지 크기와 픽셀 사용 방식 설정
              />
            </HeartImg>
            <HeartName>오늘의 제빵소</HeartName>
          </HeartBox>
        </HeartBoxs>
        <BottomBar>
          <BottomName>
            <img src={bv} />
          </BottomName>
          <Content>우리가 왜 사용해야할까?</Content>
          <Content2>그 해답은 클릭하여 확인해 주세요</Content2>
        </BottomBar>
      </Container>
    </motion.div>
  );
}

export default Home;
