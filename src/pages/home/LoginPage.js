import React, { useState } from 'react';
import './LoginPage.css';  // 引入样式文件
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // 引入定位图标
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'; // 引入用户和锁的图标


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            setError('请输入用户名和密码');
            return;
        }
        // 模拟登录请求
        if (username === 'admin' && password === 'iamadmin') {
            window.location.href = '/admin';
        } else if (username === 'teacher' && password === 'iamteacher') {
            window.location.href = '/user-info';
        } else {
            setError('用户名或密码错误');
        }
    };

    // 添加处理回车键的函数
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <div className="login-container">
            <h1 className="main-title">教师获奖调研平台</h1> {/* 大标题 */}
            <p className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> 北京交通大学</p> {/* 定位信息 */}

            <div className="login-page">
                <h2>登录系统</h2>
                {error && <p className="error">{error}</p>}
                <div className="input-group">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input
                        type="text"
                        placeholder="用户名"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyPress={handleKeyPress} // 监听键盘事件
                    />
                </div>

                <div className="input-group">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input
                        type="password"
                        placeholder="密码"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={handleKeyPress} // 监听键盘事件
                    />
                </div>
                <button onClick={handleLogin}>登录</button>

                {/* 修改密码选项 */}
                <p className="password-reset">
                    <a href="/change-password">修改密码</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;