// 7
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Buyers.css';
import logoImage from '../assets/logo.png';

function WaitingScreen() {
  const navigate = useNavigate();
  const verificationLink = `${window.location.origin}/seller/start`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(verificationLink);
    alert('링크가 복사되었습니다.');
  };

  const goToHome = () => {
    navigate('/');
  };

  const Next = () => {
    navigate('/buyer/complete');
  };

  return (
    <div className="container">
      <div className="header-medium">
        <div className="logo-with-text" onClick={goToHome}>
          <img src={logoImage} alt="SABER Logo" className="logo-image" />
          <div className="logo-text">SABER</div>
        </div>
        <div className="menu-icon-small">☰</div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar-67"></div>
      </div>

      <div className="buyer-info">
        <div className="profile-placeholder"></div>
        <div className="buyer-text">
          <div className="buyer-title">구매자</div>
          <div className="buyer-subtitle">구매자용 중고거래 실물인증 서비스</div>
        </div>
      </div>

      <h2 className="title-medium">판매자 인증 진행중</h2>
      <p className="subtitle-small">잠시만 기다려주세요</p>

      <div className="link-container">
        <p className="link-text">{verificationLink}</p>
        <div className="copy-icon" onClick={handleCopyClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8v-2h11v2zm0-4H8v-2h11v2zm0-4H8V7h11v2z"/>
          </svg>
        </div>
      </div>

      <div className="waiting-button" onClick={Next}>판매자가 인증을 진행하고 있습니다</div>
    </div>
  );
}

export default WaitingScreen;