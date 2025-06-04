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
  width: 100%;
  margin: 20px 0;
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
  font-size: 16px;
`;

const SellerSubtitle = styled.div`
  font-size: 12px;
  color: #666;
`;

const TimerBox = styled.div`
  background-color: #eee;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  align-self: flex-start;
  margin: 10px 0 5px;
`;

const StatusBox = styled.div`
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #ccc;
  padding: 10px 0;
`;

const StatusRow = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 14px;
`;

const Emoji = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

const CertificationBox = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  padding: 16px;
  border-radius: 10px;
  margin: 20px 0 10px;
  text-align: center;
  font-weight: bold;
`;

const CaptureButton = styled.button`
  background-color: #000;
  color: #fff;
  width: 100%;
  padding: 14px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const DoneButton = styled.button`
  background-color: transparent;
  border: 1px solid #aaa;
  color: #666;
  padding: 10px 24px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`;

function SellerVerificationCompleteScreen() {
  const navigate = useNavigate();

  const goToStart = () => {
    navigate('/seller/start');
  };

  const handleStartCapture = () => {
    navigate('/seller/camera');
  };

  const handleComplete = () => {
    navigate('/seller/submit');
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
          <SellerSubtitle>판매자를 돕는 실물인증 서비스</SellerSubtitle>
        </SellerText>
      </SellerInfo>

      <SectionTitle>남은시간</SectionTitle>
      <TimerBox>8:55</TimerBox>

      <SectionTitle>진행 현황</SectionTitle>
      <StatusBox>
        <StatusRow>
          <Emoji>😊</Emoji> 인증 완료 - 5개 항목 중 2개
        </StatusRow>
        <StatusRow>
          <Emoji>⏱️</Emoji> 인증 대기 - 5개 항목 중 3개
        </StatusRow>
      </StatusBox>

      <SectionTitle>다음 인증</SectionTitle>
      <CertificationBox>전원을 킨 후 디스플레이에 사진</CertificationBox>

      <CaptureButton onClick={handleStartCapture}>촬영 시작</CaptureButton>
      <DoneButton onClick={handleComplete}>완료</DoneButton>
    </Container>
  );
}

export default SellerVerificationCompleteScreen;