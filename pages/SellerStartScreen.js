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

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const MenuIcon = styled.div`
  font-size: 24px;
  color: #666;
`;

const ButtonGroup = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background-color: #eee;
  }
`;

function SellerStartScreen() {
  const navigate = useNavigate();

  const goToPermission = () => {
    navigate('/seller/permission');
  };

  const goToGuide = () => {
    navigate('/seller/guide');
  };

  return (
    <Container>
      <Header>
        <Logo>SABER</Logo>
        <MenuIcon>&#9776;</MenuIcon>
      </Header>
      <Title>실시간 거래 인증 서비스 SABER</Title>
      <ButtonGroup>
        <Button onClick={goToGuide}>서비스 설명 및 사용법</Button>
        <Button onClick={goToPermission}>판매 인증 시작</Button>
      </ButtonGroup>
    </Container>
  );
}

export default SellerStartScreen;