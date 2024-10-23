import React, { useState } from 'react';
import './PasswordChangePage.css'; // 引入样式文件

const PasswordChangePage = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangePassword = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('请填写所有字段');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('新密码和确认密码不匹配');
            return;
        }
        // 模拟密码修改请求
        alert('密码已成功修改');
        // 在这里可以添加密码修改逻辑
    };

    return (
        <div className="password-change-container">
            <h1 className="main-title">修改密码</h1> {/* 大标题 */}

            <div className="password-change-page">
                {error && <p className="error">{error}</p>}
                <input
                    type="password"
                    placeholder="当前密码"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="新密码"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="确认新密码"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button onClick={handleChangePassword}>提交</button>
            </div>
        </div>
    );
};

export default PasswordChangePage;