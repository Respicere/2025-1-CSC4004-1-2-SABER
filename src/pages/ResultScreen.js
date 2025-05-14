//9
import React, { useEffect, useState } from 'react';
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

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
  color: #333;
  align-self: flex-start;
`;

const MediaBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  margin-bottom: 10px;
`;

const SlideIndicator = styled.div`
  width: 40px;
  height: 4px;
  background-color: #ccc;
  border-radius: 2px;
  margin: 10px 0;
`;

const RequirementButton = styled.button`
  background-color: #eee;
  border: none;
  border-radius: 6px;
  padding: 10px;
  font-size: 14px;
  width: 100%;
  margin-bottom: 30px;
  cursor: pointer;
`;

const FeedbackContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const FeedbackLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const EmojiButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const EmojiButton = styled.button`
  flex: 1;
  padding: 12px;
  background-color: ${(props) => (props.selected ? '#dfe9ff' : '#fff')};
  border: 2px solid ${(props) => (props.selected ? '#5561c0' : '#ccc')};
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#5561c0' : '#333')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;

const DoneButton = styled.button`
  margin-top: 40px;
  background-color: transparent;
  border: 1px solid #aaa;
  color: #666;
  padding: 10px 24px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`;

function ResultScreen() {
  const navigate = useNavigate();
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const goToHome = () => {
    navigate('/');
  };

  const handleDone = () => {
    console.log('선택된 피드백:', selectedFeedback);
    navigate('/end');
  };

  // ✅ 캡처/녹화 감지
  useEffect(() => {
  const handleSecurityRisk = () => {
    navigate('/capture-warning');
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      handleSecurityRisk();
    }
  };

  const handleBlur = () => {
    handleSecurityRisk();
  };

  window.addEventListener('blur', handleBlur);
  document.addEventListener('visibilitychange', handleVisibilityChange);

  return () => {
    window.removeEventListener('blur', handleBlur);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}, [navigate]);

  return (
    <Container>
      <Header>
        <Logo onClick={goToHome}>SABER</Logo>
        <MenuIcon>☰</MenuIcon>
      </Header>

      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>

      <Title>인증 결과 확인</Title>

      <MediaBox>사진/동영상</MediaBox>
      <SlideIndicator />

      <RequirementButton>인증 요구사항</RequirementButton>

      <FeedbackContainer>
        <FeedbackLabel>항목 인증 만족도</FeedbackLabel>
        <EmojiButtons>
          <EmojiButton
            selected={selectedFeedback === 'satisfied'}
            onClick={() => setSelectedFeedback('satisfied')}
          >
            😊 만족
          </EmojiButton>
          <EmojiButton
            selected={selectedFeedback === 'unsatisfied'}
            onClick={() => setSelectedFeedback('unsatisfied')}
          >
            😕 불만족
          </EmojiButton>
        </EmojiButtons>
      </FeedbackContainer>

      <DoneButton onClick={handleDone}>완료</DoneButton>
    </Container>
  );
}

export default ResultScreen;