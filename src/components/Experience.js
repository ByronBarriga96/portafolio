import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import EndPointsExp from './constants/EndPointsExp';
import './styles/Experience.css';
import Education from './Education';
const Experience = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000); // Simulando carga de datos
    }, []);

    return (
        <div>
            <div className="experience-container">
                <h2 className="experience-header" style={{ color: 'white' }}>{EndPointsExp.experiences.header}</h2>
                <VerticalTimeline lineColor="#fff">
                    {EndPointsExp.experiences.experiences.map((exp, index) => (
                        <VerticalTimelineElement
                            key={exp.id || index}  // Mejor uso de 'key'
                            date={exp.dateText}
                            iconStyle={{
                                background: '#1e88e5',
                                color: '#fff',
                                width: '60px',
                                height: '60px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            contentStyle={{
                                background: '#333',
                                color: '#fff',
                                border: 'none',
                            }}
                            contentArrowStyle={{ borderRight: '7px solid #333' }}
                            dateClassName="timeline-date"
                            icon={loading ? <div className="spinner" /> : null}
                            dateStyle={{
                                fontSize: '5rem',
                                fontWeight: 'bold',
                                color: '#fff',
                                marginBottom: '10px',
                            }}
                        >
                            <h3 className="experience-title">{exp.title}</h3>
                            <h4 className="experience-subtitle">{exp.subtitle}</h4>
                            <p className="work-type">{exp.workType}</p>
                            <ul>
                                {exp.workDescription.map((desc, i) => (
                                    <li key={i}>
                                        <h4 className="work-description">{desc}</h4>
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
            <Education></Education>
        </div>
    );
};

export default Experience;
