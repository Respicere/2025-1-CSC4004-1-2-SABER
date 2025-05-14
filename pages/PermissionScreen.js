//5
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
  margin-bottom: 30px;
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

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
`;

const PermissionItem = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

const PermissionLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const PermissionText = styled.h3`
  font-size: 16px;
  color: #333;
  text-align: left;
`;

const PermissionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const PermissionButton = styled.button`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  cursor: pointer;

  &.granted {
    background-color: #eee;
  }
`;

const PermissionDescription = styled.p`
  font-size: 12px;
  color: #666;
  text-align: left;
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
  width: 30%;
  border-radius: 4px;
  transition: width 0.3s ease;
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
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

function PermissionScreen() {
  const navigate = useNavigate();

  const [permissions, setPermissions] = useState({
    push: false,
    camera: false,
  });

  const allGranted = Object.values(permissions).every(Boolean);

  const handleGrant = (type) => {
    setPermissions((prev) => ({ ...prev, [type]: true }));
  };

  const goToVerificationLinkGeneratedScreen = () => {
    if (allGranted) navigate('/verification-link-generated');
  };

  return (
    <Container>
      <Header>
        <Logo onClick={() => navigate('/')}>SABER</Logo>
        <MenuIcon>☰</MenuIcon>
      </Header>

      <ProgressBarContainer>
        <ProgressBar percentage={33} />
      </ProgressBarContainer>

      <BuyerInfo>
        <ProfilePlaceholder />
        <BuyerText>
          <BuyerTitle>구매자</BuyerTitle>
          <BuyerSubtitle>구매자용 중고거래 실물인증 서비스</BuyerSubtitle>
        </BuyerText>
      </BuyerInfo>

      <SectionTitle>이용약관 동의</SectionTitle>

      <PermissionItem>
        <PermissionLabel>
          <PermissionText>푸시 알림 권한</PermissionText>
          <PermissionButtons>
            <PermissionButton
              className={permissions.push ? 'granted' : ''}
              onClick={() => handleGrant('push')}
            >
              허용
            </PermissionButton>
          </PermissionButtons>
        </PermissionLabel>
        <PermissionDescription>거래 정보 및 업데이트를 받기 위해 필요합니다.</PermissionDescription>
      </PermissionItem>

      <PermissionItem>
        <PermissionLabel>
          <PermissionText>카메라 권한</PermissionText>
          <PermissionButtons>
            <PermissionButton
              className={permissions.camera ? 'granted' : ''}
              onClick={() => handleGrant('camera')}
            >
              허용
            </PermissionButton>
          </PermissionButtons>
        </PermissionLabel>
        <PermissionDescription>판매 물품 사진 촬영을 위해 필요합니다.</PermissionDescription>
      </PermissionItem>

      <NextButton onClick={goToVerificationLinkGeneratedScreen} disabled={!allGranted}>
        다음
      </NextButton>
    </Container>
  );
}

export default PermissionScreen;
