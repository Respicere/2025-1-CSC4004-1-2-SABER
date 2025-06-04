import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Buyers.css';
import logoImage from '../assets/logo.png';

export default function VerificationSettingScreen() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [initialAdditionalRequirement, setInitialAdditionalRequirement] = useState('');
  const [dynamicRequirements, setDynamicRequirements] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigate = useNavigate();

  // The '다음' button should be disabled if no method is selected
  // and also if verificationId is null (as per your original isDisabled logic, though it's already implicitly handled if submission depends on verificationId)
  const isNextButtonDisabled = selectedMethod === null;

  const handleTimeSelect = (time) => {
    setSelectedTime(time === selectedTime ? null : time);
  };

  // 첫 번째(고정된) 입력 필드의 값 변경 핸들러
  const handleInitialAdditionalRequirementChange = (event) => {
    setInitialAdditionalRequirement(event.target.value);
  };

  // 동적으로 추가된 입력 필드의 값 변경 핸들러
  const handleDynamicRequirementChange = (id, event) => {
    setDynamicRequirements(
      dynamicRequirements.map((req) =>
        req.id === id ? { ...req, value: event.target.value } : req
      )
    );
  };

  // '추가' 버튼 클릭 핸들러
  const handleAddRequirement = () => {
    // 새로운 입력 필드를 추가할 때마다 고유한 ID를 부여합니다.
    const newId = Date.now(); // 간단한 고유 ID 생성 (실제 앱에서는 더 견고한 ID 생성 방식 사용)
    setDynamicRequirements([...dynamicRequirements, { id: newId, value: '' }]);
  };

  // 동적으로 추가된 입력 필드 삭제 핸들러 (선택 사항)
  const handleRemoveRequirement = (id) => {
    setDynamicRequirements(dynamicRequirements.filter((req) => req.id !== id));
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method === selectedMethod ? null : method);
  };

  const goToPermissionScreen = () => {
    const allRequirements = [];
    if (initialAdditionalRequirement.trim() !== '') {
      allRequirements.push(initialAdditionalRequirement.trim());
    }
    dynamicRequirements.forEach(req => {
      if (req.value.trim() !== '') {
        allRequirements.push(req.value.trim());
      }
    });
    console.log("모든 인증 요구사항:", allRequirements);

    navigate('/permission');
  };

  const goToHome = () => {
    navigate('/');
  };

  const handleSubmit = async () => {
    const timeLimit = selectedTime === '기타' ? null : selectedTime.replace('분', '');

    const allRequirements = [];
    if (initialAdditionalRequirement.trim() !== '') {
      allRequirements.push(initialAdditionalRequirement.trim());
    }
    dynamicRequirements.forEach(req => {
      if (req.value.trim() !== '') {
        allRequirements.push(req.value.trim());
      }
    });
    const customRequests = allRequirements.join(', ');

    const verificationMethod = selectedMethod === '사진 촬영' ? 1
        : selectedMethod === '동영상 촬영' ? 2
            : null;

    alert('상세 설정 완료');
  };

  

  return (
    <div className="container">
      <div className="header-small">
        <div className="logo-with-text" onClick={goToHome}>
          <img src={logoImage} alt="SABER Logo" className="logo-image" />
          <div className="logo-text">SABER</div>
        </div>
        <div className="menu-icon-small">☰</div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar-17"></div>
      </div>

      <div className="buyer-info">
        <div className="profile-placeholder"></div>
        <div className="buyer-text">
          <div className="buyer-title">구매자</div>
          <div className="buyer-subtitle">구매자용 중고거래 실물인증 서비스</div>
        </div>
      </div>

      <div className="verification-method-section">
        <label className="verification-method-label">인증 제한 시간 설정</label>
        <div className="verification-button-container">
          {['3분', '5분', '7분', '10분', '기타'].map((time) => (
            <button
              key={time}
              className={`time-button ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="additional-requirement-section">
        <label className="additional-requirement-label">개별 인증 요구사항 추가</label>
        <label className="additional-requirement-label">
          카테고리별 기본 인증사항을 제외한 추가 인증 요구사항을 입력하세요.
        </label>
        <input
          className="additional-requirement-input"
          type="text"
          placeholder="예: 물품 전체 사진, 하자 부분 촬영"
          value={initialAdditionalRequirement}
          onChange={handleInitialAdditionalRequirementChange}
        />
        {dynamicRequirements.map((req, index) => (
          <div key={req.id} className="dynamic-requirement-input-wrapper">
            <input
              className="additional-requirement-input"
              type="text"
              placeholder={`추가 요구사항 ${index + 1}`}
              value={req.value}
              onChange={(e) => handleDynamicRequirementChange(req.id, e)}
            />
            <button className="remove-requirement-button" onClick={() => handleRemoveRequirement(req.id)}>
              X
            </button>
          </div>
        ))}

        <button className="add-button" onClick={handleAddRequirement}>+ 추가</button>
      </div>

      <div className="verification-method-section">
        <label className="verification-method-label">인증 방식</label>
          <div className="verification-button-container">
            {['사진 촬영', '동영상 촬영'].map((method) => (
              <button
                key={method}
                className={`${selectedMethod === method ? 'selected' : ''}`}
                onClick={() => handleMethodSelect(method)}
              >
                {method}
              </button>
            ))}
          </div>

          <ul className="selected-method-display">
            {selectedMethod && (
              <li>{selectedMethod}</li>
            )}
          </ul>
      </div>

      {/* Update the disabled prop for the "다음" button */}
      <button className="next-button" disabled={isNextButtonDisabled} onClick={() => {
        handleSubmit();
        goToPermissionScreen();
      }}>다음</button>
    </div>
  );
}