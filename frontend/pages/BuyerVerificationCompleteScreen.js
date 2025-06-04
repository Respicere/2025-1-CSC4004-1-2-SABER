//8
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
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: auto;
`;

function BuyerVerificationCompleteScreen() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/result');
  };

  const goToHome = () => {
    navigate('/');
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

        <Message>
          판매자가 인증을 완료했습니다<br />
        </Message>

        <Description>
        <br />
        다음 화면으로 이동하여 결과를 확인하세요
      </Description>

      <NextButton onClick={handleNext}>다음</NextButton>
    </Container>
  );
}

export default BuyerVerificationCompleteScreen;