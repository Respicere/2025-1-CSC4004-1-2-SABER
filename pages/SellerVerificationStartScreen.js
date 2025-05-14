import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: #f7f7f7;
  height: 100vh;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

const MenuIcon = styled.div`
  font-size: 20px;
  color: #666;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ddd;
  margin: 10px 0 20px;
  border-radius: 4px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #4caf50;
  width: 10%;
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const SellerInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 10px;
  width: 100%;
`;

const ProfilePlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 10px;
`;

const SellerText = styled.div`
  display: flex;
  flex-direction: column;
`;

const SellerTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

const SellerSubtitle = styled.div`
  font-size: 12px;
  color: #999;
`;

const TimerText = styled.p`
  font-size: 18px;
  color: red;
  margin-top: 10px;
`;

const PhotoVideoNotice = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  color: #333;
`;

const NoticeContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const NoticeTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const NoticeText = styled.p`
  font-size: 14px;
  color: #666;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 40px;
`;

function SellerVerificationStartScreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/seller/camera');
  };

  const goToStart = () => {
    navigate('/seller/start');
  };

  return (
    <Container>
      <Header>
        <Logo onClick={goToStart}>SABER</Logo>
        <MenuIcon>☰</MenuIcon>
      </Header>

      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>

      <SellerInfo>
        <ProfilePlaceholder />
        <SellerText>
          <SellerTitle>판매자</SellerTitle>
          <SellerSubtitle>판매자용 중고거래 실물인증 서비스</SellerSubtitle>
        </SellerText>
      </SellerInfo>

      <TimerText>인증 제한시간: 10:00</TimerText>

      <PhotoVideoNotice>
        3종류의 사진촬영 및 2종류의 영상인증이 필요합니다.
      </PhotoVideoNotice>

      <NoticeContainer>
        <NoticeTitle>유의사항</NoticeTitle>
        <NoticeText>
          인증 시작 후 중단시 인증이 무효화됩니다.
          <br />
          백그라운드로 이동 시 인증이 중단됩니다.
          <br />
          촬영은 1회만 가능합니다.
          <br />
          제한시간 내에 인증이 완료되어야 합니다.
        </NoticeText>
      </NoticeContainer>

      <Button onClick={handleStart}>인증 시작</Button>
    </Container>
  );
}

export default SellerVerificationStartScreen;