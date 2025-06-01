import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SellerVerificationStart() {
    const [pendingIds, setPendingIds] = useState([]);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true); // ✅ 로딩 상태 추가
    const navigate = useNavigate();

    useEffect(() => {
        const verificationLinkId = localStorage.getItem("sessionId");

        if (!verificationLinkId) {
            console.error("로컬스토리지에 verificationLinkId가 없습니다.");
            return;
        }

        axios
            .get(`http://localhost:8080/api/saber/link/${verificationLinkId}/pending-verification-ids`)
            .then((res) => {
                setPendingIds(res.data);
            })
            .catch((err) => {
                console.error("ID 불러오기 실패", err);
            })
            .finally(() => {
                setIsLoading(false); // ✅ 데이터 로딩 완료
            });
    }, []);

    // ✅ 데이터 로딩 후 pendingIds가 비어있으면 5초 후 이동
    useEffect(() => {
        if (!isLoading && pendingIds.length === 0) {
            const timeoutId = setTimeout(() => {
                navigate('/seller/submit');
            }, 5000);
            return () => clearTimeout(timeoutId); // cleanup
        }
    }, [pendingIds, isLoading, navigate]);

    const startVerification = (id) => {
        axios
            .post(`http://localhost:8080/api/verification/${id}/start`)
            .then(() => {
                navigate(`/verifications/${id}/camera`);
            })
            .catch((err) => {
                console.error("인증 시작 실패", err);
            });
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-xl font-bold mb-4">인증 요청 목록</h1>

            {isLoading && <p>인증 요청을 불러오는 중입니다...</p>}

            {!isLoading && pendingIds.length === 0 && (
                <p>모든 인증이 완료되었습니다. 5초 후 제출 페이지로 이동합니다.</p>
            )}

            <ul className="space-y-2">
                {pendingIds.map((id) => (
                    <li key={id}>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={() => startVerification(id)}
                        >
                            인증 시작 (ID: {id})
                        </button>
                    </li>
                ))}
            </ul>

            {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
        </div>
    );
}

export default SellerVerificationStart;