import React, { useState } from 'react';

const SurveyPage = () => {
    const [surveyData, setSurveyData] = useState({
        award: '',
        training: '',
        research: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSurveyData({ ...surveyData, [name]: value });
    };

    const handleSubmit = () => {
        // 模拟提交调研数据
        alert('调研信息已提交');
    };

    return (
        <div className="survey-page">
            <h2>调研信息填写</h2>
            <div>
                <label>获奖情况：</label>
                <input
                    type="text"
                    name="award"
                    value={surveyData.award}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>培训经历：</label>
                <input
                    type="text"
                    name="training"
                    value={surveyData.training}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>科研情况：</label>
                <input
                    type="text"
                    name="research"
                    value={surveyData.research}
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleSubmit}>提交</button>
        </div>
    );
};

export default SurveyPage;