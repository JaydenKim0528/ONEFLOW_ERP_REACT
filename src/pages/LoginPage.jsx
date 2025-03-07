import React, { useState } from "react";
import api from "../api/axiosInstance";
import "../styles/Login.css";
import logo from '../assets/Oneflow-ERP-Logo.png'

function LoginPage() {
    const [company, setCompany] = useState("");
    const [userDepartment, setUserDepartment] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/login", {
                company,
                userDepartment,
                userId,
                password,
            });

            console.log("로그인 성공:", response.data);

            localStorage.setItem("user", JSON.stringify(response.data));

            window.location.href = "/dashboard";

        } catch (error) {
            console.error("로그인 실패:", error.response ? error.response.data : error.message);
            alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.");
        }
    };


    return (
        <div className="Login-container">
            <div className="Login-box">
                <img src={logo} className="Login-top-image"></img>
                <form onSubmit={handleSubmit} className="Login-form">
                    <div className="Login-input-left">
                        <div className="Login-input-box">
                            <div className="Login-input-group">
                                <label htmlFor="company">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="회사 코드를 입력하세요"
                                    required
                                />
                            </div>
                        </div>
                        <div className="Login-input-box">
                            <div className="Login-input-group">
                                <label htmlFor="Group">Department</label>
                                <input
                                    type="text"
                                    id="Group"
                                    value={userDepartment}
                                    onChange={(e) => setUserDepartment(e.target.value)}
                                    placeholder="부서 코드를 입력하세요"
                                    required
                                />
                            </div>
                        </div>
                        <div className="Login-input-box">
                            <div className="Login-input-group">
                                <label htmlFor="userId">User ID</label>
                                <input
                                    type="text"
                                    id="userId"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    placeholder="아이디를 입력하세요"
                                    required
                                />
                            </div>
                        </div>
                        <div className="Login-input-box">
                            <div className="Login-input-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="비밀번호를 입력하세요"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="Login-btn-group">
                        <button type="submit" className="Login-login-btn">Login</button>
                        <button type="button" className="Login-cancel-btn">Cencle</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
