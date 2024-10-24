import React from 'react';
import { Avatar } from '@douyinfe/semi-ui';
import { IconUser, IconShield } from '@douyinfe/semi-icons';
import './UserManagement.css';

const UserManagement = () => {
    const users = [
        { account: 'user1', name: '李四', role: '教师', avatarBg: 'light-blue' },
        { account: 'user2', name: '张三', role: '教师', avatarBg: 'grey' },
        { account: 'admin', name: '王五', role: '管理员', avatarBg: 'red' },
    ];

    const renderRoleIcon = (role) => {
        if (role === '教师') {
            return <IconUser style={{ color: 'green', marginRight: 8 }} />;
        }
        return <IconShield style={{ color: 'red', marginRight: 8 }} />;
    };

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
                            <td>
                                <Avatar size="small" color={user.avatarBg} style={{ marginRight: 8 }}>
                                    {user.name[0]}
                                </Avatar>
                                {user.name}
                            </td>
                            <td>
                                {renderRoleIcon(user.role)}
                                {user.role}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-container">
                <button className="small-button">添加用户</button>
                <button className="small-button">删除用户</button>
            </div>
        </div>
    );
};

export default UserManagement;