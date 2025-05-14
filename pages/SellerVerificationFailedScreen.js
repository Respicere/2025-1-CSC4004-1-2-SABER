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

const SellerInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0 30px;
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

const Message = styled.h2`
  font-size: 18px;
  color: #5561c0;
  margin: 40px 0 10px;
  text-align: center;
`;

const MainButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 14px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  margin-top: 60px;
`;

function SellerVerificationSuccessScreen() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/seller/start');
  };

  return (
    <Container>
      <Header>
        <Logo>SABER</Logo>
        <MenuIcon>☰</MenuIcon>
      </Header>

      <SellerInfo>
        <ProfilePlaceholder />
        <SellerText>
          <SellerTitle>판매자</SellerTitle>
          <SellerSubtitle>판매자용 중고거래 실물인증 서비스</SellerSubtitle>
        </SellerText>
      </SellerInfo>

      <Message>인증에 실패하였습니다</Message>

      <MainButton onClick={handleGoHome}>메인 화면</MainButton>
    </Container>
  );
}

export default SellerVerificationSuccessScreen;