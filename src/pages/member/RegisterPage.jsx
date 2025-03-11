import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo, setImageFile, setPreview, setMessage, resetForm } from "../../redux/slice/member/register";
import api from "../../api/axiosInstance";
import "../../styles/register.css"

const RegisterPage = () => {
    const dispatch = useDispatch();
    const { formData, imageFile, preview, message } = useSelector((state) => state.register || {});

    if (!formData) {
        return <div>Loading...</div>;
    }

    const handleChange = (e) => {
        dispatch(setUserInfo({ name: e.target.name, value: e.target.value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        dispatch(setImageFile(file));

        const reader = new FileReader();
        reader.onloadend = () => {
            dispatch(setPreview(reader.result));
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
    
        const jsonData = JSON.stringify(formData);
        data.append("userData", jsonData);
    
        if (imageFile) {
            data.append("imageFile", imageFile);
        }
    
        try {
            await api.post("/register", data, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            dispatch(setMessage("직원등록이 성공적으로 완료되었습니다!"));
            dispatch(resetForm());
        } catch (error) {
            console.error("직원등록 요청 실패:", error);
            dispatch(setMessage("직원등록 실패: " + (error.response?.data?.message || "서버 오류")));
        }
    };

    return (
        <div className="register-container">
            <h2 className="register-container-title">직원등록</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit} className="register-form">
                <div className="register-layout">
                    <div className="register-input-list">
                        <div className="register-input-columns">
                            <label htmlFor="company" className="register-input-label">회사명</label>
                            <input type="text" id="company" name="company" placeholder="회사" value={formData.company} onChange={handleChange} required />
                        </div>
                        <div className="register-input-columns">
                            <label htmlFor="userDepartment" className="register-input-label">부서명</label>
                            <input type="text" id="userDepartment" name="userDepartment" placeholder="부서" value={formData.userDepartment} onChange={handleChange} required />
                        </div>
                        <div className="register-input-columns">
                            <label htmlFor="userId" className="register-input-label">계정명</label>
                            <input type="text" id="userId" name="userId" placeholder="아이디" value={formData.userId} onChange={handleChange} required />
                        </div>
                        <div className="register-input-columns">
                            <label htmlFor="userPosition" className="register-input-label">직급명</label>
                            <input type="text" id="userPosition" name="userPosition" placeholder="직급" value={formData.userPosition} onChange={handleChange} required />
                        </div>
                        <div className="register-input-columns">
                            <label htmlFor="password" className="register-input-label">비밀번호</label>
                            <input type="password" id="password" name="password" placeholder="비밀번호" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div className="register-input-columns">
                            <label htmlFor="userName" className="register-input-label">이름</label>
                            <input type="text" id="userName" name="userName" placeholder="이름" value={formData.userName} onChange={handleChange} required />
                        </div>
                        <div className="register-input-columns">
                            <label htmlFor="userEmail" className="register-input-label">이메일</label>
                            <input type="email" id="userEmail" name="userEmail" placeholder="이메일" value={formData.userEmail} onChange={handleChange} required />
                        </div>
                        <div className="register-input-columns">
                            <label htmlFor="userPhone" className="register-input-label">연락처</label>
                            <input type="text" id="userPhone" name="userPhone" placeholder="연락처" value={formData.userPhone} onChange={handleChange} required />
                        </div>
                        <div className="register-input-columns">
                            <label htmlFor="userRole" className="register-input-label">권한</label>
                            <select id="userRole" name="userRole" value={formData.userRole} onChange={handleChange} required>
                                <option value="">권한 선택</option>
                                <option value="EMPLOYEE">EMPLOYEE</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                    </div>
                    <div className="register-employee-image">
                        <div className="image-preview-container">
                            {preview ? (
                                <img src={preview} alt="미리보기" className="image-preview" />
                            ) : (
                                <div className="empty-image"></div>
                            )}
                        </div>
                        <input type="file" id="imageFile" accept="image/*" onChange={handleFileChange} required />
                    </div>
                </div>
                <button type="submit" className="register-submit-button">직원등록</button>
            </form>
        </div>
    );
};

export default RegisterPage;
