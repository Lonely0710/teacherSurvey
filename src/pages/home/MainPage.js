import React from 'react';
import './MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTrophy, faUsers, faBell, faChalkboardTeacher, faUserShield, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';  // 引入 useLocation

const MainPage = () => {
    const location = useLocation();  // 获取当前的路径

    return (
        <div className="main-container">
            {/* 侧边栏 */}
            <nav className="sidebar">
                <div className="sidebar-header">
                    <h2>
                        <FontAwesomeIcon icon={faChalkboardTeacher} className="menu-icon" /> 调研平台
                    </h2>
                </div>
                <ul className="sidebar-menu">
                    <li className={location.pathname === "/" || location.pathname === "/home" ? "active" : ""}>
                        <a href="/home">
                            <FontAwesomeIcon icon={faHome} className="menu-icon_1" /> 首页
                        </a>
                    </li>
                    <li className={location.pathname === "/awards" ? "active" : ""}>
                        <a href="/awards">
                            <FontAwesomeIcon icon={faTrophy} className="menu-icon_2" /> 获奖信息
                        </a>
                    </li>
                    <li className={location.pathname === "/users" ? "active" : ""}>
                        <a href="/users">
                            <FontAwesomeIcon icon={faUsers} className="menu-icon_3" /> 用户管理
                        </a>
                    </li>
                    <li className={location.pathname === "/notifications" ? "active" : ""}>
                        <a href="/notifications">
                            <FontAwesomeIcon icon={faBell} className="menu-icon_4" /> 通知
                        </a>
                    </li>
                </ul>
            </nav>

            {/* 主内容 */}
            <main className="main-content">
                <header>
                    <h1>欢迎来到交大教师获奖调研平台</h1>
                </header>
                <section>
                    <p>请选择对应身份登陆平台进行对应操作。</p>
                    <div className="dashboard-cards">
                        {/* 教师登录模块 */}
                        <div className="card">
                            <h3><FontAwesomeIcon icon={faChalkboardTeacher} /> 教师入口</h3>
                            <p>教师信息登记</p>
                            <a href="/login">
                                <button>教师登录</button>
                            </a>
                        </div>

                        {/* 管理员登录模块 */}
                        <div className="card">
                            <h3><FontAwesomeIcon icon={faUserShield} /> 管理员入口</h3>
                            <p>用户管理、导库操作</p>
                            <a href="/login">
                                <button>管理员登录</button>
                            </a>
                        </div>

                        {/* 查询模块 */}
                        <div className="card">
                            <h3><FontAwesomeIcon icon={faSearch} /> 查询</h3>
                            <p>查看日志和管理功能</p>
                            <a href="/admin">
                                <button>进入查询</button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* 浮动按钮 */}
            <button className="floating-button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
};

export default MainPage;