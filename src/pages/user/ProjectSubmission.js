import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature, faClipboard, faUpload, faPaperPlane, faInfoCircle, faPenFancy, faClock, faFileAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import './ProjectSubmission.css';

const ProjectSubmission = () => {
    const [project, setProject] = useState({
        title: '',
        description: '',
    });
    const [file, setFile] = useState(null);
    const [submissions, setSubmissions] = useState([]); // 保存提交的历史记录

    const handleProjectChange = (e) => {
        const { name, value } = e.target;
        setProject({
            ...project,
            [name]: value,
        });
    };

    const handleFileUpload = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = () => {
        // 保存提交的项目到记录中
        const newSubmission = {
            title: project.title,
            description: project.description,
            fileName: file ? file.name : '无文件',
            time: new Date().toLocaleString(),
        };
        setSubmissions([...submissions, newSubmission]); // 添加新的提交到历史记录
        setProject({ title: '', description: '' }); // 重置表单
        setFile(null); // 重置文件上传
    };

    return (
        <div className="info-container">
            <div className="project-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                {/* 左侧项目提交表单 */}
                <div className="project-section" style={{ width: '45%', backgroundColor: '#f9f9f9', borderRadius: '10px', padding: '20px' }}>
                    <h3 style={{ marginBottom: '20px' }}><FontAwesomeIcon icon={faClipboard} /> 项目提交</h3>
                    <form className="project-form">
                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label htmlFor="title" style={{ fontWeight: 'bold' }}>
                                <FontAwesomeIcon icon={faFileSignature} /> 项目标题:
                            </label>
                            <input
                                type="text"
                                id="projectTitle"
                                name="title"
                                value={project.title}
                                onChange={handleProjectChange}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    marginTop: '5px',
                                }}
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label htmlFor="description" style={{ fontWeight: 'bold' }}>
                                <FontAwesomeIcon icon={faInfoCircle} /> 项目描述:
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={project.description}
                                onChange={handleProjectChange}
                                style={{
                                    width: '100%',        // 保持100%的宽度
                                    height: '150px',     // 固定高度为150px
                                    padding: '8px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    marginTop: '5px',
                                    resize: 'none',      // 禁用用户手动调整大小
                                }}
                            ></textarea>
                        </div>

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label htmlFor="file" style={{ fontWeight: 'bold' }}>
                                <FontAwesomeIcon icon={faUpload} /> 文件上传:
                            </label>
                            <input
                                type="file"
                                id="file"
                                onChange={handleFileUpload}
                                style={{
                                    marginTop: '5px',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            style={{
                                display: 'inline-block',
                                padding: '10px 20px',
                                backgroundColor: '#4CAF50',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            <FontAwesomeIcon icon={faPaperPlane} /> 提交
                        </button>
                    </form>
                </div>

                {/* 右侧提交记录时间轴 */}
                <div className="submission-history" style={{ width: '45%' }}>
                    <h3 style={{ marginBottom: '20px' }}>
                        <FontAwesomeIcon icon={faHistory} style={{ marginRight: '10px', color: '#FF5722' }} />
                        提交记录
                    </h3>
                    <ul className="timeline" style={{ listStyleType: 'none', padding: 0 }}>
                        {submissions.map((submission, index) => (
                            <li key={index} className="timeline-item" style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                    <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px', color: '#6c757d' }} />
                                    <strong>{submission.time}</strong>
                                </div>
                                <div style={{ padding: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                    {/* 第一行：项目标题，添加项目icon */}
                                    <h3 style={{ margin: '0 0 5px 0' }}>
                                        <FontAwesomeIcon icon={faClipboard} style={{ marginRight: '10px', color: '#4CAF50' }} />
                                        {submission.title}
                                    </h3>

                                    {/* 第二行：项目描述，添加手写icon */}
                                    <h5 style={{ margin: '0 0 5px 0' }}>
                                        <FontAwesomeIcon icon={faPenFancy} style={{ marginRight: '10px', color: '#FF9800' }} />
                                        {submission.description}
                                    </h5>

                                    {/* 第三行：文件名，添加文件icon */}
                                    <h4 style={{ margin: 0 }}>
                                        <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '10px', color: '#2196F3' }} />
                                        <strong>文件:</strong> {submission.fileName}
                                    </h4>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectSubmission;