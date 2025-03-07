import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function DashboardPage() {
    return (
        <div className="Dashboard-container">
            <div className="Dashboard-project-list">
                <div className="Dashboard-project-title">
                    <span>Project List</span>
                    <Link to="/project">+</Link>
                </div>
                <div className="Dashboard-project-workList">
                    <ul>
                        <li>Project Source Loding</li>
                    </ul>
                </div>
            </div>
            <div className="Dashboard-calrendar">

            </div>
            <div className="Dashboard-sales-list">
                <div className="Dashboard-sales-title">
                    <span>Sales List</span>
                    <Link to="/transaction">+</Link>
                </div>
                <div className="Dashboard-project-workList">
                    <ul>
                        <li>Sales Source Loding</li>
                    </ul>
                </div>
            </div>
            <div className="Dashboard-Inventory-graph">

            </div>
        </div>
    );
}

export default DashboardPage;
