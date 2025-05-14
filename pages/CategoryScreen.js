//3
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

const CategorySection = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const CategoryLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  display: block;
`;

const CategorySelect = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const CategoryOption = styled.option`
  font-size: 14px;
`;

const RequirementBox = styled.div`
  background-color: #eee;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  color: #555;
  font-size: 16px;
  margin-bottom: 50px;
`;

const Dots = styled.div`
  color: #ccc;
  font-size: 20px;
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

function CategoryScreen() {
  const [selectedItem, setSelectedItem] = useState('');
  const navigate = useNavigate();

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const goToVerificationSettingScreen = () => {
    navigate('/verification-setting');
  };

  const goToHome = () => {
    navigate('/');
  };

  const items = ['전자기기', '의류', '잡화', '도서', '기타'];

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

      <CategorySection>
        <CategoryLabel htmlFor="itemSelect">선택 품목</CategoryLabel>
        <CategorySelect
          id="itemSelect"
          value={selectedItem}
          onChange={handleItemChange}
        >
          <CategoryOption value="" disabled>
            품목을 선택하세요
          </CategoryOption>
          {items.map((item) => (
            <CategoryOption key={item} value={item}>
              {item}
            </CategoryOption>
          ))}
        </CategorySelect>
      </CategorySection>

      <RequirementBox>
        카테고리별 기본 인증사항 1
        <Dots>...</Dots>
      </RequirementBox>

      <NextButton onClick={goToVerificationSettingScreen}>다음</NextButton>
    </Container>
  );
}

export default CategoryScreen;