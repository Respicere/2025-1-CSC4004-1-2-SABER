//2
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
  margin-bottom: 60px;
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

const NoticeText = styled.div`
  color: #555;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 40px;
  white-space: pre-line; /* 텍스트 내의 줄바꿈을 유지합니다. */
`;

const Button = styled.button`
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 15px 40px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

function PrecautionScreen() {
  const navigate = useNavigate();

  const goToNoticeScreen = () => {
    navigate('/category');
  };

  return (
    <Container>
      <Header>
        <Logo>SABER</Logo>
        <MenuIcon>&#9776;</MenuIcon>
      </Header>
      <NoticeText>
        주의사항: 상호간 제품 보유 여부 및 하자를 확인하기 위한 서비스,
        {"\n"}
        제품의 정상적인 거래, 배송 보장을
        {"\n"}
        하지 않음
      </NoticeText>
      <Button onClick={goToNoticeScreen}>구매 인증 등록 시작</Button>
    </Container>
  );
}

export default PrecautionScreen;