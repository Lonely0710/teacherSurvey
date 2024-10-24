import React, { useState } from 'react';
import './UserInfoPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faArrowLeft, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

// 引入模块组件
import PersonalInfo from './PersonalInfo';
import ProjectSubmission from './ProjectSubmission';

const UserInfoPage = () => {
    const [selectedModule, setSelectedModule] = useState(null); // 控制选中的模块

    const handleBack = () => {
        setSelectedModule(null); // 点击返回，显示主界面
    };

    return (
        <div className="user-container">
            {/* 侧边栏 */}
            <nav className="sidebar">
                <div className="sidebar-header">
                    <h2>
                        <FontAwesomeIcon icon={faChalkboardTeacher} className="menu-icon" /> 教师信息平台
                    </h2>
                </div>
                <ul className="sidebar-menu">
                    <li className={selectedModule === "personalInfo" ? "active" : ""}>
                        <button onClick={() => setSelectedModule("personalInfo")}>
                            <FontAwesomeIcon icon={faUser} className="menu-icon1" /> 个人信息
                        </button>
                    </li>
                    <li className={selectedModule === "project" ? "active" : ""}>
                        <button onClick={() => setSelectedModule("project")}>
                            <FontAwesomeIcon icon={faClipboardList} className="menu-icon2" /> 项目提交
                        </button>
                    </li>
                    <li>
                        <button onClick={handleBack}>
                            <FontAwesomeIcon icon={faArrowLeft} className="menu-icon3" /> 返回
                        </button>
                    </li>
                </ul>
            </nav>

            {/* 主内容 */}
            <main className="main-content">
                {selectedModule === null ? (
                    <div className="main-dashboard">
                        <h1>欢迎来到用户信息平台</h1>
                        <p>请选择左侧菜单中的功能模块进行操作。</p>
                    </div>
                ) : selectedModule === "personalInfo" ? (
                    <PersonalInfo />
                ) : selectedModule === "project" ? (
                    <ProjectSubmission />
                ) : null}
            </main>
        </div>
    );
};

export default UserInfoPage;