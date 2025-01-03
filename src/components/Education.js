import React, { Component, useEffect, useRef } from 'react';
import './styles/Education.css';

const educationData = {
    header: "Formacion Academica",
    education: [
        {
            title: "Agosto 2021 - Actualidad",
            cardTitle: "Independiente",
            cardSubtitle: "Autodidacta",
            cardDetailedText: "Cursos Online / Presencial",
            icon: {
                src: "images/education/nerv.png"
            }
        },
        {
            title: "Octubre 2014 - Marzo 2021",
            cardTitle: "Universidad Nacional de Chimborazo",
            cardSubtitle: "Ingeniero en Sistemas y Computacion",
            cardDetailedText: "Riobamba-Ecuador, 2021",
            icon: {
                src: "images/education/unach.png"
            }
        },
        {
            "title": "Agosto 2013",
            "cardTitle": "Colegio Exp. Cap. Edmundo Chiriboga",
            "cardSubtitle": "Bachiller en Ciencias Fisico-Matematico",
            "cardDetailedText": "Riobamba-Ecuador, 2013",
            "icon": {
                "src": "images/education/chiriboga.png"
            }
        },
        {
            "title": "Junio 2007",
            "cardTitle": "Unidad Educativa Cristiana VERBO",
            "cardSubtitle": "Estudiante en Ciencias Basicas",
            "cardDetailedText": "Riobamba-Ecuador, 2007",
            "icon": {
                "src": "images/education/verbo.png"
            }
        }
    ]
};

const EducationTimeline = ({ education }) => {
    const containersRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            containersRef.current.forEach((container, index) => {
                const rect = container.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    container.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="timeline">
            {education.map((event, index) => (
                <div
                    key={index}
                    className={`container ${index % 2 === 0 ? 'left' : 'right'}`}
                    style={{ '--index': index + 1 }} // Aquí se pasa el índice como variable CSS
                    ref={el => containersRef.current[index] = el}
                >
                    <div className="content">
                        <h2>{event.cardSubtitle}</h2>
                        <h4>{event.cardTitle}</h4>
                        <p>{event.cardDetailedText}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export class Education extends Component {
    render() {
        return (
            <div>
                <h2 style={{ color: 'white', textAlign: 'center' }}>{educationData.header}</h2>
                <EducationTimeline education={educationData.education} />
            </div>
        );
    }
}

export default Education;
