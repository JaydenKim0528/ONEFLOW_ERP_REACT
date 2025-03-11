import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slice/user"; // Redux에서 사용자 정보를 저장
import api from "../../api/axiosInstance";
import "../../styles/editUser.css";

const EditUserPage = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user); // Redux에서 로그인된 사용자 정보 가져오기

    const [formData, setFormData] = useState({});
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await api.get("/validate", { withCredentials: true });

                if (response.data && response.data.user) {
                    dispatch(setUser(response.data.user)); // Redux에 사용자 정보 저장
                    setFormData(response.data.user);
                } else {
                    throw new Error("사용자 정보를 불러오지 못했습니다.");
                }
            } catch (err) {
                console.error("🔥 사용자 정보 불러오기 실패:", err);
                setError("사용자 정보를 불러오지 못했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, [dispatch]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedData = new FormData();
        updatedData.append("userData", JSON.stringify(formData));

        if (imageFile) {
            updatedData.append("imageFile", imageFile);
        }

        try {
            await api.post(`/update-user`, updatedData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true
            });
            setSuccessMessage("사용자 정보가 성공적으로 수정되었습니다.");
        } catch (error) {
            console.error("🔥 사용자 정보 수정 실패:", error);
            setError("사용자 정보 수정에 실패했습니다.");
        }
    };

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="edit-user-container">
            <h2 className="edit-user-container-title">직원 정보 수정</h2>
            {successMessage && <p className="success">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="edit-user-form">
                <div className="edit-user-layout">
                    <div className="edit-user-input-list">
                        <div className="edit-user-input-columns">
                            <label className="edit-user-input-label">회사명</label>
                            <input type="text" name="company" value={formData.company || ""} onChange={handleChange} disabled />
                        </div>
                        <div className="edit-user-input-columns">
                            <label className="edit-user-input-label">부서명</label>
                            <input type="text" name="userDepartment" value={formData.userDepartment || ""} onChange={handleChange} disabled />
                        </div>
                        <div className="edit-user-input-columns">
                            <label className="edit-user-input-label">계정명</label>
                            <input type="text" name="userId" value={formData.userId || ""} onChange={handleChange} disabled />
                        </div>
                        <div className="edit-user-input-columns">
                            <label className="edit-user-input-label">직급명</label>
                            <input type="text" name="userPosition" value={formData.userPosition || ""} onChange={handleChange} />
                        </div>
                        <div className="edit-user-input-columns">
                            <label className="edit-user-input-label">이름</label>
                            <input type="text" name="userName" value={formData.userName || ""} onChange={handleChange} />
                        </div>
                        <div className="edit-user-input-columns">
                            <label className="edit-user-input-label">이메일</label>
                            <input type="email" name="userEmail" value={formData.userEmail || ""} onChange={handleChange} />
                        </div>
                        <div className="edit-user-input-columns">
                            <label className="edit-user-input-label">연락처</label>
                            <input type="text" name="userPhone" value={formData.userPhone || ""} onChange={handleChange} />
                        </div>
                        <div className="edit-user-input-columns">
                            <label className="edit-user-input-label">권한</label>
                            <select name="userRole" value={formData.userRole || ""} onChange={handleChange}>
                                <option value="EMPLOYEE">EMPLOYEE</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                    </div>
                    <div className="edit-user-employee-image">
                        <div className="image-preview-container">
                            {formData.profileImage ? (
                                <img src={`http://localhost:8080${formData.profileImage}`} alt="미리보기" className="image-preview" />
                            ) : (
                                <div className="empty-image"></div>
                            )}
                        </div>
                        <input type="file" id="imageFile" accept="image/*" onChange={handleFileChange} />
                    </div>
                </div>
                <button type="submit" className="edit-user-submit-button">수정 완료</button>
            </form>
        </div>
    );
};

export default EditUserPage;
