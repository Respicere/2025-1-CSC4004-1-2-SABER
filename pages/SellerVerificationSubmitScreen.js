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

const Description = styled.p`
  font-size: 14px;
  color: #777;
  text-align: center;
`;

const NextButton = styled.button`
  margin-top: 40px;
  background-color: transparent;
  border: 1px solid #aaa;
  color: #666;
  padding: 10px 24px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`;

function SellerVerificationSubmitScreen() {
  const navigate = useNavigate();

  const goToNext = () => {
    navigate('/seller/verification-additional-info');
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

      <SellerInfo>
        <ProfilePlaceholder />
        <SellerText>
          <SellerTitle>판매자</SellerTitle>
          <SellerSubtitle>판매자용 중고거래 실물인증 서비스</SellerSubtitle>
        </SellerText>
      </SellerInfo>

      <Message>촬영이 완료되었습니다</Message>
      <Description>
        구매자가 인증 내역을 검토중입니다. 제출 후
        <br />
        인증완료 또는 재인증을 위해 대기해주세요.
      </Description>

      <NextButton onClick={goToNext}>다음</NextButton>
    </Container>
  );
}

export default SellerVerificationSubmitScreen;