import React, { useState } from 'react';
import './LogSearch.css'; // 请确保有相应的 CSS 文件

const LogSearch = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [actionType, setActionType] = useState('');

    const handleSearch = () => {
        // 这里添加搜索逻辑
        console.log(`开始日期: ${startDate}, 结束日期: ${endDate}, 操作类型: ${actionType}`);
    };

    return (
        <div className="log-search-container">
            <h2>日志查询</h2>
            <div className="search-filters">
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <select value={actionType} onChange={(e) => setActionType(e.target.value)}>
                    <option value="">选择操作类型</option>
                    <option value="添加用户">添加用户</option>
                    <option value="删除用户">删除用户</option>
                    <option value="修改用户">修改用户</option>
                    {/* 添加更多操作类型 */}
                </select>
                <button onClick={handleSearch}>搜索</button>
            </div>
            {/* 添加显示日志的表格或内容 */}
        </div>
    );
};

export default LogSearch;