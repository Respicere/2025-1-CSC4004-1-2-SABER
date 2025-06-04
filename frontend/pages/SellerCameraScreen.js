import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #000;
  padding: 20px;
  box-sizing: border-box;
`;

const Video = styled.video`
  width: 100%;
  max-height: 80vh;
  border-radius: 10px;
  object-fit: cover;
`;

const CaptureButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #fff;
  background-color: transparent;
  margin-top: 20px;
  cursor: pointer;
`;

const Label = styled.div`
  color: #fff;
  font-size: 16px;
  margin-top: 10px;
`;

function SellerCameraScreen() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      } catch (err) {
        console.error('카메라 접근 오류:', err);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const image = canvas.toDataURL('image/png');
      localStorage.setItem('capturedImage', image);
      navigate('/seller/verification-complete');
    }
  };

  return (
    <Container>
      <Video ref={videoRef} autoPlay playsInline />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <CaptureButton onClick={handleCapture} />
      <Label>사진 촬영</Label>
    </Container>
  );
}

export default SellerCameraScreen;