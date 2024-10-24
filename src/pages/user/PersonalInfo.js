import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser, faGraduationCap, faPhone, faCalendar, faCamera, faSave, faInfoCircle, faClipboard, faSchool, faScroll, faUserTie, faClock, faUserGraduate, faUserAstronaut, faBook
    
} from '@fortawesome/free-solid-svg-icons';
import './PersonalInfo.css'; // 引入样式

const schoolList = [
    '清华大学',
    '北京大学',
    '北京交通大学',
    '复旦大学',
    '上海交通大学',
    '浙江大学',
    '武汉大学',
    '南京大学',
    '西安交通大学',
    // 可以添加更多学校...
];

const PersonalInfo = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        title: '',
        contact: '',
        hireDate: '',
        education: [], // 存储教育经历的数组
    });

    const [photo, setPhoto] = useState(null);
    const [filteredSchools, setFilteredSchools] = useState(schoolList);
    const [educationInfo, setEducationInfo] = useState({ degree: '', school: '', studyStart: '', studyEnd: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });

        // 如果是学校名称，更新过滤的学校列表
        if (name === 'school') {
            const filtered = schoolList.filter(school => school.includes(value));
            setFilteredSchools(filtered);
        }
    };

    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setEducationInfo({
            ...educationInfo,
            [name]: value,
        });
    };

    const handlePhotoUpload = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleAddEducation = () => {
        const { degree, school, studyStart, studyEnd } = educationInfo;

        if (!degree || !school || !studyStart || !studyEnd) {
            alert('请填写完整的教育经历信息');
            return;
        }

        const newEducation = { degree, school, period: `${studyStart} 至 ${studyEnd}`, startDate: new Date(studyStart) };

        // 将新的教育经历添加到 userInfo.education 数组中并按 startDate 排序
        const updatedEducation = [...userInfo.education, newEducation].sort((a, b) => a.startDate - b.startDate);

        setUserInfo({
            ...userInfo,
            education: updatedEducation,
        });

        // 重置教育经历输入框
        setEducationInfo({ degree: '', school: '', studyStart: '', studyEnd: '' });
    };

    const handleDeleteEducation = () => {
        // 删除最后一条教育经历
        if (userInfo.education.length > 0) {
            const updatedEducation = userInfo.education.slice(0, -1);
            setUserInfo({
                ...userInfo,
                education: updatedEducation
            });
        } else {
            alert('没有教育经历可以删除');
        }
    };

    const handleSave = () => {
        // 输入验证
        const { name, title, contact, hireDate, education } = userInfo;
        if (!name || !title || !contact || !hireDate || education.length === 0) {
            alert('请填写所有字段');
            return;
        }

        // 模拟保存逻辑，真实应用中可以调用 API 或其他保存方式
        console.log('个人信息已保存:', userInfo, photo);
        alert('个人信息已保存！');
    };

    return (
        <div className="info-container">
            <div className="info-section">
                <h3><FontAwesomeIcon icon={faClipboard} /> 个人信息上传</h3>
                <form className="info-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name"><FontAwesomeIcon icon={faUser} /> 姓名:</label>
                            <input type="text" id="name" name="name" value={userInfo.name} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title"><FontAwesomeIcon icon={faUserTie} /> 职称:</label>
                            <select id="title" name="title" value={userInfo.title} onChange={handleInputChange}>
                                <option value="">请选择职称</option>
                                <option value="教授">教授</option>
                                <option value="副教授">副教授</option>
                                <option value="讲师">讲师</option>
                                <option value="助教">助教</option>
                                <option value="研究员">研究员</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="contact"><FontAwesomeIcon icon={faPhone} /> 联系方式:</label>
                            <input type="text" id="contact" name="contact" value={userInfo.contact} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hireDate"><FontAwesomeIcon icon={faCalendar} /> 入职年份:</label>
                            <select id="hireDate" name="hireDate" value={userInfo.hireDate} onChange={handleInputChange}>
                                <option value="">请选择入职年份</option>
                                {Array.from({ length: 10 }, (_, i) => {
                                    const year = new Date().getFullYear() - i;
                                    return <option key={year} value={year}>{year}</option>;
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="education"><FontAwesomeIcon icon={faSchool} /> 教育经历:</label>
                            <div className="education-fields">
                                <input
                                    type="text"
                                    placeholder="学校"
                                    name="school"
                                    value={educationInfo.school}
                                    onChange={handleEducationChange}
                                    list="school-options"
                                    className="education-input"
                                />
                                <datalist id="school-options">
                                    {filteredSchools.map((school, index) => (
                                        <option key={index} value={school} />
                                    ))}
                                </datalist>

                                <select
                                    name="degree"
                                    value={educationInfo.degree}
                                    onChange={handleEducationChange}
                                    className="education-select"
                                >
                                    <option value="">选择学位</option>
                                    <option value="本科">本科</option>
                                    <option value="硕士">硕士</option>
                                    <option value="博士">博士</option>
                                </select>
                            </div>

                            <div className="date-fields">
                                <label className="date-label">
                                    <FontAwesomeIcon icon={faScroll} /> 入学
                                </label>
                                <input
                                    type="date"
                                    name="studyStart"
                                    value={educationInfo.studyStart}
                                    onChange={handleEducationChange}
                                    className="date-input"
                                />

                                <label className="date-label">
                                    <FontAwesomeIcon icon={faGraduationCap} /> 毕业
                                </label>
                                <input
                                    type="date"
                                    name="studyEnd"
                                    value={educationInfo.studyEnd}
                                    onChange={handleEducationChange}
                                    className="date-input"
                                />
                            </div>

                            <div className="button-group">
                                <button type="button" onClick={handleAddEducation} className="add-button">添加</button>
                                <button type="button" onClick={handleDeleteEducation} className="delete-button">删除</button>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="photo"><FontAwesomeIcon icon={faCamera} /> 上传照片:</label>
                            <input type="file" id="photo" onChange={handlePhotoUpload} />
                        </div>
                    </div>

                    <div className="form-row">
                        <button type="button" onClick={handleSave} className="save-button">
                            <FontAwesomeIcon icon={faSave} /> 保存
                        </button>
                    </div>
                </form>
            </div>

            <div className="preview-section">
                <h3><FontAwesomeIcon icon={faInfoCircle} /> 个人信息预览</h3>
                <div className="preview-content">
                    <div className="preview-photo">
                        {photo ? (
                            <img src={URL.createObjectURL(photo)} alt="个人照片" />
                        ) : (
                            <div className="placeholder">头像预览</div>
                        )}
                    </div>
                    <div className="preview-details">
                        <p>
                            <span role="img" aria-label="姓名">👤</span>
                            <strong>姓名:</strong> <span className="name-spacing"></span>{userInfo.name || <span className="placeholder-text">未填写</span>}
                        </p>
                        <p>
                            <span role="img" aria-label="职称">🎓</span>
                            <strong>职称:</strong> <span className="name-spacing"></span>{userInfo.title || <span className="placeholder-text">未选择</span>}
                        </p>
                        <p>
                            <span role="img" aria-label="联系方式">📞</span>
                            <strong>联系方式:</strong> <span className="name-spacing"></span>{userInfo.contact || <span className="placeholder-text">未填写</span>}
                        </p>
                        <p>
                            <span role="img" aria-label="入职年份">📅</span>
                            <strong>入职年份:</strong> <span className="name-spacing"></span>{userInfo.hireDate || <span className="placeholder-text">未选择</span>}
                        </p>
                        <p>
                            <span role="img" aria-label="教育经历">📚</span>
                            <strong>教育经历:</strong>
                        </p>
                        <table className="education-table">
                            <thead>
                                <tr>
                                    <th><FontAwesomeIcon icon={faGraduationCap} /> 学位</th>
                                    <th><FontAwesomeIcon icon={faSchool} /> 学校</th>
                                    <th><FontAwesomeIcon icon={faClock} /> 学习时段</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userInfo.education.length > 0 ? (
                                    userInfo.education.map((edu, index) => (
                                        <tr key={index}>
                                            <td>
                                                {edu.degree === "本科" && <FontAwesomeIcon icon={faUserGraduate} />}
                                                {edu.degree === "硕士" && <FontAwesomeIcon icon={faBook} />}
                                                {edu.degree === "博士" && <FontAwesomeIcon icon={faUserAstronaut} />}
                                                {` ${edu.degree}`}
                                            </td>
                                            <td>{edu.school}</td>
                                            <td>{edu.period}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3">未填写教育经历</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;