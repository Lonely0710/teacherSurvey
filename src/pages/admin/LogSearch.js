import React, { useState, useEffect } from 'react';
import { Table, Avatar, Tag } from '@douyinfe/semi-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserMinus, faUserEdit } from '@fortawesome/free-solid-svg-icons'; // 引入FontAwesome图标
import * as dateFns from 'date-fns';
import './LogSearch.css'; // 请确保有相应的 CSS 文件

const pageSize = 5;

// 操作类型与图标和颜色的映射
const actionStyles = {
    '添加用户': { icon: <FontAwesomeIcon icon={faUserPlus} />, color: 'blue' },
    '删除用户': { icon: <FontAwesomeIcon icon={faUserMinus} />, color: 'red' },
    '修改用户': { icon: <FontAwesomeIcon icon={faUserEdit} />, color: 'orange' },
};

// 示例数据
const sampleData = [
    { id: 1, date: '2024-10-01', action: '添加用户', executor: '张三' },
    { id: 2, date: '2024-10-02', action: '删除用户', executor: '李四' },
    { id: 3, date: '2024-10-03', action: '修改用户', executor: '王五' },
    { id: 4, date: '2024-10-04', action: '添加用户', executor: '赵六' },
    { id: 5, date: '2024-10-05', action: '删除用户', executor: '张三' },
];

const columns = [
    {
        title: '日期',
        dataIndex: 'date',
        render: value => dateFns.format(new Date(value), 'yyyy-MM-dd'),
    },
    {
        title: '操作类型',
        dataIndex: 'action',
        render: text => {
            const { icon, color } = actionStyles[text] || {};
            return (
                <Tag color={color} style={{ userSelect: 'text' }}>
                    {icon} {text}
                </Tag>
            );
        },
    },
    {
        title: '执行人',
        dataIndex: 'executor',
        render: text => {
            // 为每个执行人分配不同的颜色
            const colors = {
                '张三': 'lightblue',
                '李四': 'lightgreen',
                '王五': 'lightcoral',
                '赵六': 'lightgoldenrodyellow',
            };
            return (
                <div>
                    <Avatar
                        size="small"
                        style={{ marginRight: 8, backgroundColor: colors[text] || 'gray' }} // 默认颜色为灰色
                    >
                        {text.charAt(0)}
                    </Avatar>
                    {text}
                </div>
            );
        },
    },
];

const LogSearch = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [actionType, setActionType] = useState('');

    const handleSearch = () => {
        setLoading(true);
        setCurrentPage(1); // 重置为第一页
        const filteredLogs = sampleData.filter(log => {
            const logDate = new Date(log.date);
            const start = new Date(startDate);
            const end = new Date(endDate);
            return (
                (!startDate || logDate >= start) &&
                (!endDate || logDate <= end) &&
                (!actionType || log.action === actionType)
            );
        });
        setLogs(filteredLogs);
        setLoading(false);
    };

    useEffect(() => {
        handleSearch(); // 每次日志变化时重新搜索
    }, [startDate, endDate, actionType]);

    return (
        <div className="log-search-container">
            <h2>日志查询</h2>
            <div className="search-filters">
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="date-input"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="date-input"
                />
                <select value={actionType} onChange={(e) => setActionType(e.target.value)} className="action-select">
                    <option value="">选择操作类型</option>
                    <option value="添加用户">添加用户</option>
                    <option value="删除用户">删除用户</option>
                    <option value="修改用户">修改用户</option>
                </select>
                <button onClick={handleSearch}>搜索</button>
            </div>
            <div className="log-results">
                <Table
                    columns={columns}
                    dataSource={logs}
                    pagination={{
                        pageSize,
                        total: logs.length,
                        onPageChange: (page) => setCurrentPage(page),
                    }}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default LogSearch;