// 3
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Buyers.css';
import logoImage from '../assets/logo.png';
import { fetchCategories, fetchDefaultVerifications, setCategory } from '../api';

function CategoryScreen({ onCategorySelected }) {
  const [selectedId, setSelectedId] = useState('');
  const [categories, setCategories] = useState([]);
  const [verifications, setVerifications] = useState([]);
  const navigate = useNavigate();

  const goToVerificationSettingScreen = () => {
    navigate('/verification-setting');
  };

  useEffect(() => {
    if (selectedId) {
        fetchDefaultVerifications(selectedId).then(res => setVerifications(res.data));
    } else {
        setVerifications([]);
    }
  }, [selectedId]);

  useEffect(() => {
    fetchCategories().then(res => setCategories(res.data));
  }, []);
  
  const goToHome = () => {
    navigate('/');
  };

  const handleSelect = async () => {
    if (!selectedId) return;

    try {
        const res = await setCategory(selectedId);
        const verificationId = res.data; // 인증 링크 ID 반환
        onCategorySelected(verificationId);
    } catch (error) {
        console.error('카테고리 설정 실패', error);
    }
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

      <div className="progress-bar-container"></div>

      <div className="buyer-info">
        <div className="profile-placeholder"></div>
        <div className="buyer-text">
          <div className="buyer-title">구매자</div>
          <div className="buyer-subtitle">구매자용 중고거래 실물인증 서비스</div>
        </div>
      </div>

      <div className="category-section">
        <label className="category-label" htmlFor="itemSelect">선택 품목</label>
        <select 
          className="category-select"
          onChange={e => setSelectedId(e.target.value)} value={selectedId || ''}>
                <option value="" disabled>카테고리 선택</option>
                {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
        </select>
      </div>

      <div className="requirement-box">
        카테고리별 기본 인증사항 1
        <div className="dots">...</div>
      </div>

      <button className="next-button" onClick={() => {
        handleSelect();
        goToVerificationSettingScreen();}} disabled={!selectedId}>다음</button>
      {verifications.length > 0 && (
        <>
            <h3>기본 인증 방식</h3>
            <ul>
                {verifications.map((v, idx) => (
                    <li key={idx}>{v.verificationContent}</li>
                ))}
            </ul>
        </>
      )}
    </div>
  );
}

export default CategoryScreen;