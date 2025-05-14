//4
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
  width: 20%;
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

const TimeSettingSection = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const TimeSettingLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  display: block;
`;

const TimeButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const TimeButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  cursor: pointer;

  &.selected {
    background-color: #eee;
  }
`;

const AdditionalRequirementSection = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const AdditionalRequirementLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  display: block;
`;

const AdditionalRequirementInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  margin-bottom: 10px;

  &::placeholder {
    color: #999;
  }
`;

const VerificationMethodSection = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const VerificationMethodLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  display: block;
`;

const VerificationButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const VerificationButton = styled.button`
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  cursor: pointer;

  &.selected {
    background-color: #eee;
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 15px;
  border: 1px dashed #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #666;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
`;

const RequirementListSection = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const RequirementItem = styled.div`
  background-color: #eee;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
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

function VerificationSettingScreen() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [additionalRequirement, setAdditionalRequirement] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [requirements, setRequirements] = useState([]);
  const navigate = useNavigate();

  const handleTimeSelect = (time) => {
    setSelectedTime(time === selectedTime ? null : time);
  };

  const handleAdditionalRequirementChange = (event) => {
    setAdditionalRequirement(event.target.value);
  };

  const handleAddRequirement = () => {
    if (additionalRequirement.trim() !== '') {
      setRequirements([...requirements, additionalRequirement]);
      setAdditionalRequirement('');
    }
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method === selectedMethod ? null : method);
  };

  const goToPermissionScreen = () => {
    navigate('/permission');
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

      <TimeSettingSection>
        <TimeSettingLabel>인증 제한 시간 설정</TimeSettingLabel>
        <TimeButtonContainer>
          {['3분', '5분', '7분', '10분', '기타'].map((time) => (
            <TimeButton
              key={time}
              className={selectedTime === time ? 'selected' : ''}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </TimeButton>
          ))}
        </TimeButtonContainer>
      </TimeSettingSection>

      <AdditionalRequirementSection>
        <AdditionalRequirementLabel>개별 인증 요구사항 추가</AdditionalRequirementLabel>
        <AdditionalRequirementLabel>
          카테고리별 기본 인증사항을 제외한 추가 인증 요구사항을 입력하세요.
        </AdditionalRequirementLabel>
        <AdditionalRequirementInput
          type="text"
          placeholder="예: 물품 전체 사진, 하자 부분 촬영"
          value={additionalRequirement}
          onChange={handleAdditionalRequirementChange}
        />
        <AddButton onClick={handleAddRequirement}>+ 추가</AddButton>
      </AdditionalRequirementSection>

      <RequirementListSection>
        {requirements.map((req, index) => (
          <RequirementItem key={index}>{req}</RequirementItem>
        ))}
      </RequirementListSection>

      <VerificationMethodSection>
        <VerificationMethodLabel>인증 방식</VerificationMethodLabel>
        <VerificationButtonContainer>
          {['사진 촬영', '동영상 촬영'].map((method) => (
            <VerificationButton
              key={method}
              className={selectedMethod === method ? 'selected' : ''}
              onClick={() => handleMethodSelect(method)}
            >
              {method}
            </VerificationButton>
          ))}
        </VerificationButtonContainer>
        <RequirementItem>전원을 켠 후 디스플레이 사진</RequirementItem>
        <RequirementItem>제품 전체 외관 동영상</RequirementItem>
      </VerificationMethodSection>

      <NextButton onClick={goToPermissionScreen}>다음</NextButton>
    </Container>
  );
}

export default VerificationSettingScreen;