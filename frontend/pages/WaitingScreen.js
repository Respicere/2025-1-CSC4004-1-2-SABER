//7
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  background-color: #f7f7f7;
  height: 100vh;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
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
  width: 40%;
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const BuyerInfo = styled.div`
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

const BuyerText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BuyerTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

const BuyerSubtitle = styled.div`
  font-size: 12px;
  color: #999;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
`;

const LinkContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

const LinkText = styled.p`
  font-size: 14px;
  color: #555;
  margin-right: 10px;
  overflow-wrap: break-word;
`;

const CopyIcon = styled.div`
  font-size: 20px;
  color: #666;
  cursor: pointer;
`;

const WaitingButton = styled.div`
  background-color: #fff;
  border: 1px solid #333;
  color: #333;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: auto;
`;

function WaitingScreen() {
  const navigate = useNavigate();
  const verificationLink = `${window.location.origin}/seller/start`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(verificationLink);
    alert('링크가 복사되었습니다.');
  };

  const goToHome = () => {
    navigate('/');
  };

  const Next = () => {
    navigate('/buyer/complete');
  };

  return (
    <Container>
      <Header>
        <Logo onClick={goToHome}>SABER</Logo>
        <MenuIcon>☰</MenuIcon>
      </Header>

      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>

      <BuyerInfo>
        <ProfilePlaceholder />
        <BuyerText>
          <BuyerTitle>구매자</BuyerTitle>
          <BuyerSubtitle>구매자용 중고거래 실물인증 서비스</BuyerSubtitle>
        </BuyerText>
      </BuyerInfo>

      <Title>판매자 인증 진행중</Title>
      <SubTitle>잠시만 기다려주세요</SubTitle>

      <LinkContainer>
        <LinkText>{verificationLink}</LinkText>
        <CopyIcon onClick={handleCopyClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8v-2h11v2zm0-4H8v-2h11v2zm0-4H8V7h11v2z"/>
          </svg>
        </CopyIcon>
      </LinkContainer>

      <WaitingButton onClick={Next}>판매자가 인증을 진행하고 있습니다</WaitingButton>
    </Container>
  );
}

export default WaitingScreen;