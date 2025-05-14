import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
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

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

const StepList = styled.ol`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  padding-left: 20px;
  line-height: 1.8;
`;

const Description = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 40px;
  text-align: center;
`;

const ConfirmButton = styled.button`
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

function SellerUsageGuideScreen() {
  const navigate = useNavigate();

  const goToStart = () => {
    navigate('/seller/start');
  };

  return (
    <Container>
      <Header>
        <Logo onClick={goToStart}>SABER</Logo>
        <MenuIcon>☰</MenuIcon>
      </Header>

      <Title>사용 방법 소개</Title>

      <StepList>
        <li>구매자가 보낸 인증 링크 접속</li>
        <li>카메라 접근 권한 허용</li>
        <li>지정된 항목에 맞춰 실물 촬영</li>
        <li>촬영 완료 후 인증 제출</li>
        <li>인증 결과 구매자에게 자동 전송</li>
      </StepList>

      <Description>서비스 상세정보, 설명, 개발 목적 등</Description>

      <ConfirmButton onClick={goToStart}>확인</ConfirmButton>
    </Container>
  );
}

export default SellerUsageGuideScreen;