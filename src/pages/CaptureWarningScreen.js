import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  background-color: #fff8f0;
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

const WarningIcon = styled.div`
  font-size: 60px;
  margin-top: 80px;
  color: #ff9800;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 20px 0 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #777;
  text-align: center;
  margin-bottom: 40px;
`;

const ConfirmButton = styled.button`
  margin-top: 40px;
  background-color: transparent;
  border: 1px solid #aaa;
  color: #666;
  padding: 10px 24px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`;

function CaptureWarningScreen() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/'); // 원하는 경로로 수정 가능 (예: '/result')
  };

  return (
    <Container>
      <Header>
        <Logo onClick={() => navigate('/')}>SABER</Logo>
        <MenuIcon>☰</MenuIcon>
      </Header>

      <div style={{ textAlign: 'center' }}>
        <WarningIcon>⚠️</WarningIcon>
        <Title>화면 캡쳐 및 녹화가 불가능합니다</Title>
        <Description>보안을 위해 캡처 및 녹화 기능은 제한됩니다</Description>
      </div>

      <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
    </Container>
  );
}

export default CaptureWarningScreen;