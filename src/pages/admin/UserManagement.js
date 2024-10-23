import React from 'react';
import './UserManagement.css'; // 引入对应的样式文件

const UserManagement = () => {
    const users = [
        { account: 'user1', name: '李四', role: '教师' },
        { account: 'user2', name: '张三', role: '教师' },
        { account: 'admin', name: '王五', role: '管理员' },
    ];

    return (
        <div className="users-container">
            <h2>用户批量管理</h2>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>账号</th>
                        <th>姓名</th>
                        <th>身份</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.account}</td>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-container">
                <button>添加用户</button>
                <button>删除用户</button>
            </div>
        </div>
    );
};

export default UserManagement;