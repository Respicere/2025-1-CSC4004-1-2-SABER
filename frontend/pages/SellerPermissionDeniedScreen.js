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

const Title = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
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

const MainButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
  width: 100%;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: 1px solid #aaa;
  color: #666;
  padding: 12px 30px;
  border-radius: 24px;
  font-size: 14px;
  cursor: pointer;
`;

function SellerPermissionDeniedScreen() {
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
      <SellerInfo>
        <ProfilePlaceholder />
        <SellerText>
          <SellerTitle>판매자</SellerTitle>
          <SellerSubtitle>판매자용 중고거래 실물인증 서비스</SellerSubtitle>
        </SellerText>
      </SellerInfo>
      <Title>약관 및 외부 권한 허용이 필요합니다</Title>
      <MainButton onClick={() => navigate('/seller/start')}>메인 화면</MainButton>
      <BackButton onClick={() => navigate('/seller/permission')}>이전</BackButton>
    </Container>
  );
}

export default SellerPermissionDeniedScreen;