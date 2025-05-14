import React, { useState } from 'react';
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

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  align-self: flex-start;
  margin-bottom: 5px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: #666;
  align-self: flex-start;
  margin-bottom: 20px;
`;

const Input = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  margin-bottom: 30px;

  &::placeholder {
    color: #aaa;
  }
`;

const NextButton = styled.button`
  background-color: transparent;
  color: #666;
  border: 1px solid #aaa;
  padding: 10px 24px;
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
`;

function SellerVerificationAdditionalInfoScreen() {
  const [additionalInfo, setAdditionalInfo] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/seller/verification-success');
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

      <Title>인증 관련 추가 내용</Title>
      <SubTitle>구매자에게 도움이 되거나 참고할 만한 정보를 기입해 주세요.</SubTitle>

      <Input
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
        placeholder="예: 빛 반사로 인한 색감의 차이가 있을 수 있음."
      />

      <NextButton onClick={handleNext}>다음</NextButton>
    </Container>
  );
}

export default SellerVerificationAdditionalInfoScreen;