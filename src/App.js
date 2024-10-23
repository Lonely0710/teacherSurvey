import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/home/LoginPage';
import UserInfoPage from './pages/user/UserInfoPage';
import AdminPage from './pages/admin/AdminPage';
import PasswordChangePage from './pages/home/PasswordChangePage';
import SurveyPage from './pages/user/SurveyPage';
import MainPage from './pages/home/MainPage';  // 导入 MainPage 组件
import './App.css'; // 引入全局样式文件
import LogSearch from './pages/admin/LogSearch';
import UserManagement from './pages/admin/UserManagement';
import DatabaseOperations from './pages/admin/DatabaseOperations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />  {/* 将 / 指向 MainPage */}
        <Route path="/login" element={<LoginPage />} />  {/* LoginPage 新路径 */}
        <Route path="/user-info" element={<UserInfoPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/change-password" element={<PasswordChangePage />} />
        <Route path="/survey" element={<SurveyPage />} />
      </Routes>
      <Routes>
        <Route path="/admin/*" element={<AdminPage />}>
          <Route path="logs" element={<LogSearch />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="database" element={<DatabaseOperations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;