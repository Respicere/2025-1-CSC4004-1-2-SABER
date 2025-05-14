//1
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

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 30px 0;

  &:hover {
    background-color: #eee;
  }
`;

const ImagePlaceholder = styled.div`
  background-color: #ddd;
  width: 100%;
  max-width: 300px;
  height: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 20px;
`;

function StartScreen() {
  const navigate = useNavigate();

  const goToNoticeScreen = () => {
    navigate('/precaution');
  };

  return (
    <Container>
      <Header>
        <Logo>SABER</Logo>
        <MenuIcon>&#9776;</MenuIcon>
      </Header>
      <Title>실시간 거래 인증 서비스 SABER</Title>
      <SubTitle>서비스 설명, 소개</SubTitle>
      <SubTitle>실시간으로 거래 물품을</SubTitle>
      <SubTitle>인증할 수 있는 서비스</SubTitle>
      <Button onClick={goToNoticeScreen}>안전하게 인증 후 구매하기</Button>
      <ImagePlaceholder>이미지 자리</ImagePlaceholder>
    </Container>
  );
}

export default StartScreen;