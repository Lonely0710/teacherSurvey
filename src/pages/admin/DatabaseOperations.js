import React from 'react';
import './DatabaseOperations.css'; // 引入对应的样式文件

const DatabaseOperations = () => {
    const handleImport = () => {
        alert('导入数据库操作');
    };

    const handleExport = () => {
        alert('导出数据库操作');
    };

    return (
        <div className="database-container">
            <h2>导库操作</h2>
            <div className="database-buttons">
                <button onClick={handleImport}>导入数据库</button>
                <button onClick={handleExport}>导出数据</button>
            </div>
        </div>
    );
};

export default DatabaseOperations;