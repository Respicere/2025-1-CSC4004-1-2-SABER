import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function VerificationCamera() {
    const { id: verificationId } = useParams();
    const navigate = useNavigate();

    const [photoUrl, setPhotoUrl] = useState("");
    const [comment, setComment] = useState("");
    const [showModal, setShowModal] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        startCamera();
        return () => {
            // 컴포넌트 언마운트 시 카메라 스트림 정리
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            alert("카메라 권한이 필요합니다.");
        }
    };

    const takePhoto = () => {
        if (!videoRef.current || !canvasRef.current) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // 캔버스에서 사진 미리보기용 URL 생성
        const dataUrl = canvas.toDataURL("image/jpeg");
        setPhotoUrl(dataUrl);
        setShowModal(true); // 모달 표시
    };

    const retakePhoto = () => {
        setShowModal(false);
        setPhotoUrl("");
        // 카메라는 계속 실행 중이므로 다시 촬영 가능
    };

    const uploadPhoto = async () => {
        if (!canvasRef.current) return;
        setUploading(true);

        canvasRef.current.toBlob(async (blob) => {
            if (!blob) {
                alert("사진 변환 실패");
                setUploading(false);
                return;
            }

            const formData = new FormData();
            formData.append("file", new File([blob], "photo.jpg", { type: "image/jpeg" }));

            try {
                // 1) S3 업로드 API 호출
                const uploadResponse = await fetch("http://localhost:8080/api/files/upload", {
                    method: "POST",
                    body: formData,
                });

                if (!uploadResponse.ok) throw new Error("업로드 실패");

                const s3Url = await uploadResponse.text();

                // 2) 인증 제출 API 호출 (comment 포함)
                const submitResponse = await fetch(`http://localhost:8080/api/verifications/${verificationId}/submit`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fileUrl: s3Url,
                        comment: comment,
                    }),
                });

                if (!submitResponse.ok) throw new Error("제출 실패");

                alert("사진 제출 성공!");
                setShowModal(false);
                navigate("/seller/verification-start");
            } catch (error) {
                alert(error.message);
            } finally {
                setUploading(false);
            }
        }, "image/jpeg");
    };

    return (
        <div className="seller-camera-container">
            <h2 className="title">인증 사진 제출</h2>

            <button className="cameraButton" onClick={startCamera}>
                카메라 시작
            </button>

            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ width: 300, marginTop: 10, borderRadius: 8, backgroundColor: "#000" }}
            />

            <br />

            <button onClick={takePhoto} className="cameraButton">
                사진 촬영
            </button>

            <canvas ref={canvasRef} style={{ display: "none" }} />

            {/* 사진 미리보기 모달 */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <h3 style={{ marginBottom: '15px' }}>촬영된 사진</h3>
                        
                        {photoUrl && (
                            <img 
                                src={photoUrl} 
                                alt="Captured" 
                                className="modal-image"
                            />
                        )}
                        
                        <textarea
                            placeholder="인증에 대한 코멘트를 입력하세요"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            rows={3}
                            className="textBox"
                        />
                        
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <button
                                onClick={retakePhoto}
                                className="cameraButton"
                            >
                                다시 촬영
                            </button>
                            
                            <button
                                onClick={uploadPhoto}
                                disabled={uploading}
                                className="captureButton"
                            >
                                {uploading ? "업로드 중..." : "업로드 및 제출"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VerificationCamera;