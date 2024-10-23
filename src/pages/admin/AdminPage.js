import React, { useState } from 'react';
import './AdminPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faUsers, faDatabase, faArrowLeft, faTools } from '@fortawesome/free-solid-svg-icons';

// 引入模块组件
import LogSearch from './LogSearch';
import UserManagement from './UserManagement';
import DatabaseOperations from './DatabaseOperations';

const AdminPage = () => {
    const [selectedModule, setSelectedModule] = useState(null); // 控制选中的模块

    const handleBack = () => {
        setSelectedModule(null); // 点击返回，显示主界面
    };

    return (
        <div className="admin-container">
            {/* 侧边栏 */}
            <nav className="sidebar">
                <div className="sidebar-header">
                    <h2>
                        <FontAwesomeIcon icon={faTools} className="menu-icon" /> 管理后台
                    </h2>
                </div>
                <ul className="sidebar-menu">
                    <li className={selectedModule === "logs" ? "active" : ""}>
                        <button onClick={() => setSelectedModule("logs")}>
                            <FontAwesomeIcon icon={faFileAlt} className="menu-icon1" /> 日志查询
                        </button>
                    </li>
                    <li className={selectedModule === "users" ? "active" : ""}>
                        <button onClick={() => setSelectedModule("users")}>
                            <FontAwesomeIcon icon={faUsers} className="menu-icon2" /> 用户管理
                        </button>
                    </li>
                    <li className={selectedModule === "database" ? "active" : ""}>
                        <button onClick={() => setSelectedModule("database")}>
                            <FontAwesomeIcon icon={faDatabase} className="menu-icon3" /> 导库操作
                        </button>
                    </li>
                    <li>
                        <button onClick={handleBack}>
                            <FontAwesomeIcon icon={faArrowLeft} className="menu-icon4" /> 返回
                            {/* 点击返回按钮 */}
                        </button>
                    </li>
                </ul>
            </nav>

            {/* 主内容 */}
            <main className="main-content">
                {selectedModule === null ? (
                    <div className="main-dashboard">
                        <h1>欢迎来到管理员后台</h1>
                        <p>请选择左侧菜单中的功能模块进行操作。</p>
                    </div>
                ) : selectedModule === "logs" ? (
                    <LogSearch />
                ) : selectedModule === "users" ? (
                    <UserManagement />
                ) : selectedModule === "database" ? (
                    <DatabaseOperations />
                ) : null}
            </main>
        </div>
    );
};

export default AdminPage;