import React, { useState } from 'react';
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

const PermissionItem = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  display: block;
  margin-bottom: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ selected }) => (selected ? '#eee' : '#fff')};
  cursor: pointer;
`;

const NextButton = styled.button`
  margin-top: auto;
  background-color: #333;
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

function SellerPermissionScreen() {
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState({ push: null, camera: null });

  const goToStart = () => {
    navigate('/seller/start');
  };

  const handleSelect = (type, value) => {
    setPermissions((prev) => ({ ...prev, [type]: value }));
  };

  const allGranted = permissions.push === true && permissions.camera === true;

  const goToNext = () => {
    if (permissions.push === false || permissions.camera === false) {
      navigate('/seller/denied');
    } else if (allGranted) {
      navigate('/seller/verification-start');
    }
  };

  return (
    <Container>
      <Header>
        <Logo onClick={goToStart}>SABER</Logo>
        <MenuIcon>☰</MenuIcon>
      </Header>

      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>

      <SellerInfo>
        <ProfilePlaceholder />
        <SellerText>
          <SellerTitle>판매자</SellerTitle>
          <SellerSubtitle>판매자용 중고거래 실물인증 서비스</SellerSubtitle>
        </SellerText>
      </SellerInfo>

      <Title>이용약관 동의</Title>

      <PermissionItem>
        <Label>푸시알림 권한</Label>
        <ButtonGroup>
          <Button
            selected={permissions.push === true}
            onClick={() => handleSelect('push', true)}
          >허용</Button>
          <Button
            selected={permissions.push === false}
            onClick={() => handleSelect('push', false)}
          >거부</Button>
        </ButtonGroup>
      </PermissionItem>

      <PermissionItem>
        <Label>카메라 권한</Label>
        <ButtonGroup>
          <Button
            selected={permissions.camera === true}
            onClick={() => handleSelect('camera', true)}
          >허용</Button>
          <Button
            selected={permissions.camera === false}
            onClick={() => handleSelect('camera', false)}
          >거부</Button>
        </ButtonGroup>
      </PermissionItem>

      <NextButton onClick={goToNext} disabled={permissions.push === null || permissions.camera === null}>
        다음
      </NextButton>
    </Container>
  );
}

export default SellerPermissionScreen;