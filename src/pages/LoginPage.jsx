import React, { useState } from "react";
import "../styles/Login.css";
import logo from '../assets/Oneflow-ERP-Logo.png'

function LoginPage() {
    const [company, setCompany] = useState("");
    const [Group, setGroup] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User ID:", userId);
    console.log("Password:", password);
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
                                    value={Group}
                                    onChange={(e) => setGroup(e.target.value)}
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
