import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Oneflow-ERP-Logo.png";
import "../../styles/SideNavigation.css";

function SideNavigation({ user }) {
    return (
    <div className="SideNavigation-container">
        <div className="SideNavigation-logo-box">
            <img src={logo} alt="Logo" className="SideNavigation-logo" />
        </div>

        <nav className="SideNavigation-menu">
            <ul className="SideNavigation-menu-list">
                <li><Link to="/dashboard" className="SideNavigation-menu-item">DashBoard</Link></li>
                <li><Link to="/project" className="SideNavigation-menu-item">Project</Link></li>
                <li><Link to="/management" className="SideNavigation-menu-item">Management</Link></li>
                <li><Link to="/inventory" className="SideNavigation-menu-item">Inventory</Link></li>
                <li><Link to="/transaction" className="SideNavigation-menu-item">Transaction</Link></li>
                <li><Link to="/register" className="SideNavigation-menu-item">Register</Link></li>
            </ul>
        </nav>

        <div className="SideNavigation-user-info">
            <div className="SideNavigation-user-image"></div>
            <p className="SideNavigation-user-name">[{user?.position}] {user?.userName}</p>
            <p className="SideNavigation-user-company">Company: {user?.company}</p>
            <p className="SideNavigation-user-department">Department: {user?.department}</p>
        </div>
    </div>
    );
}

export default SideNavigation;
