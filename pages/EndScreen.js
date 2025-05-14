//10
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
  justify-content: space-between;
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

const Message = styled.div`
  color: #5561c0;
  font-size: 16px;
  font-weight: bold;
  margin: 60px 0 20px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  background-color: ${(props) => (props.black ? '#000' : '#fff')};
  color: ${(props) => (props.black ? '#fff' : '#333')};
  border: ${(props) => (props.black ? 'none' : '1px solid #aaa')};
  padding: 14px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 12px;
  cursor: pointer;
`;

function EndScreen() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/seller/camera'); // 재인증 시작
  };

  const handleAdditional = () => {
    navigate('/seller/verification-additional-info'); // 추가 인증
  };

  const handleClose = () => {
    window.close(); // 탭 닫기 시도
  };

  const goToMain = () => {
    navigate('/'); // 메인 화면
  };

  return (
    <Container>
      <div style={{ width: '100%' }}>
        <Header>
          <Logo onClick={goToMain}>SABER</Logo>
          <MenuIcon>☰</MenuIcon>
        </Header>

        <BuyerInfo>
          <ProfilePlaceholder />
          <BuyerText>
            <BuyerTitle>구매자</BuyerTitle>
            <BuyerSubtitle>구매자를 돕기 위한 실물인증 서비스</BuyerSubtitle>
          </BuyerText>
        </BuyerInfo>

        <Message>인증이 완료되었습니다</Message>

        <Button onClick={handleRetry}>재인증: 미흡한 부분에 대한 재인증</Button>
        <Button onClick={handleAdditional}>추가인증: 추가로 궁금한 점에 대한 추가인증</Button>
        <Button onClick={handleClose}>탭 닫기</Button>
        <Button black onClick={goToMain}>메인 화면</Button>
      </div>
    </Container>
  );
}

export default EndScreen;