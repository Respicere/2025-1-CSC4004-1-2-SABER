import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Sellers.css';
import logoImage from '../assets/logo.png';

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
    <div className="container">
      <div className="header">
        <div className="logo-with-text" onClick={goToStart}>
          <img src={logoImage} alt="SABER Logo" className="logo-image" />
          <div className="logo-text">SABER</div>
        </div>
        <div className="menuIcon">☰</div>
      </div>

      <div className="sellerInfo">
        <div className="profilePlaceholder" />
        <div className="sellerText">
          <div className="sellerTitle">판매자</div>
          <div className="sellerSubtitle">판매자용 중고거래 실물인증 서비스</div>
        </div>
      </div>

      <h1 className="title">이용약관 동의</h1>

      <div className="permissionItem">
        <label className="label">푸시알림 권한</label>
        <div className="permissionButtonGroup">
          <button
            className={`permissionButton ${permissions.push === true ? 'permissionButtonSelected' : 'permissionButtonUnselected'}`}
            onClick={() => handleSelect('push', true)}
          >허용</button>
          <button
            className={`permissionButton ${permissions.push === false ? 'permissionButtonSelected' : 'permissionButtonUnselected'}`}
            onClick={() => handleSelect('push', false)}
          >거부</button>
        </div>
      </div>

      <div className="permissionItem">
        <label className="label">카메라 권한</label>
        <div className="permissionButtonGroup">
          <button
            className={`permissionButton ${permissions.camera === true ? 'permissionButtonSelected' : 'permissionButtonUnselected'}`}
            onClick={() => handleSelect('camera', true)}
          >허용</button>
          <button
            className={`permissionButton ${permissions.camera === false ? 'permissionButtonSelected' : 'permissionButtonUnselected'}`}
            onClick={() => handleSelect('camera', false)}
          >거부</button>
        </div>
      </div>

      <button
        className="nextButton"
        onClick={goToNext}
        disabled={permissions.push === null || permissions.camera === null}
      >
        다음
      </button>
    </div>
  );
}

export default SellerPermissionScreen;