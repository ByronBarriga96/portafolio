import React, { useEffect } from "react";
import Skills from "./Skills";
import userPhoto from "../assets/image/profile.png";
import "./styles/About.css";

const About = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <React.Fragment>
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src={userPhoto} alt="user avatar" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h1 className="about-me">
              <span className="about-description font-500">Acerca de Mí</span>
            </h1>
            <div>
              <p className="about-description" style={{ textAlign: "justify" }}>
                Mucho gusto en conocerte, te saluda Byron Barriga Ingeniero en
                Sistemas y Computacion
              </p>

              <p className="about-description" style={{ textAlign: "justify" }}>
                Soy desarollador Full Stack con mas de 3 años de experiencia
                laboral y me apasiona mi trabajo y tengo una fuente constante de
                motivación que me impulsa a dar lo mejor de mí. He participado
                en proyectos de mediano y largo alcance, con varias tecnologías
                y lenguajes de programación como son .Net Framework 4.8 y Core
                8, Laravel, React, Angular, React Native y Flutter para la parte
                movil, Power BI, SQL Server, PostgreSQL y MongoDB para bases de
                datos, con Unix y Cypress para pruebas unitarias y de
                integracion, siempre buscando la mejor solución para el cliente
                y el usuario final, trabajando bajo principios SOLID y patrones
                de programacion como CQRS para microservicios y MCV para
                garantizar un código limpio y mantenible.
              </p>
              <p className="about-description" style={{ textAlign: "justify" }}>
                La comunicación y el trabajo en equipo es para mí esencial para
                poder crecer como desarrollador y persona. Soy metódico,
                organizado, dusciplinado y siempre busco nuevos retos y me
                adapto a los cambios, estoy abierto a aprender nuevas
                tecnologías y lenguajes.
              </p>
              <p
                className="about-description"
                style={{ color: "rgb(14, 153, 203)" }}
              >
                <span style={{ fontWeight: "bold" }}>TECNOLOGIAS: </span>
              </p>

              <p
                className="about-description"
                style={{
                  fontWeight: "bold",
                  textAlign: "justify",
                  color: "rgb(231, 233, 235)",
                }}
              >
                C#, Java, PHP ,HTML, CSS, JavaScript, TypeScript, MySQL, SQL
                Server, PostgreSQL, MongoDB, .Net Framework 4.8 y Core 8,
                Laravel, Symfony, Java Sprint Faces, React, Angular, React
                Native, Flutter, Ionic, Xamarin, NodeJS, VueJS, Docker, ExpoGO,
                Azure, Cypress, Postman, Power BI, GitHub,Git.
              </p>
            </div>
            <hr size="8px" color="white" />
            <h2 className="about-me">
              <span className="about-description font-500">
                ¿Qué puedo hacer?
              </span>
            </h2>
            <br />
            <h3 className="about-me center font-500">Front-End</h3>
            <p className="about-description" style={{ textAlign: "justify" }}>
              Como desarrollador frontend, tengo experiencia en el manejo de
              HTML y CSS, además del manejo de frameworks y liberías,
              especialmente React JS/Native y Angular. He trabajado en proyectos
              de escala mediana y grandes, implementando soluciones de código
              eficientes, trabajado con arquitecturas de software escalables y
              fácilmente mantenibles.
            </p>
            <br />
            <h3 className="about-me center font-500">Back-End</h3>
            <p className="about-description" style={{ textAlign: "justify" }}>
              He trabajado en proyectos de backend con tecnologías como .Net
              tanto en Framework 4.8 como en Core 8, además de Laravel y Symfony
              en PHP, Java Sprint Faces en Java y NodeJS en JavaScript. He
              trabajado en la implementación de microservicios usando el patron
              CQRS, arquitecturas de software escalables y fácilmente
              mantenibles. He trabajado en la implementación de APIs REST y
              SOAP, además de la implementación de bases de datos relacionales y
              no relacionales.
            </p>
            <p className="about-description" style={{ textAlign: "justify" }}>
              He participado en proyectos de mediana y gran escala, desde su
              conceptualización hasta su implementación final. Durante este
              proceso, he tenido la oportunidad de aprender continuamente cómo
              colaborar con los clientes para desarrollar el producto que
              desean, superando cualquier desafío que pueda surgir. Mi
              experiencia incluye el desarrollo de aplicaciones web y móviles,
              donde aplico las mejores prácticas de programación, creando código
              limpio, comprensible y fácil de mantener, con un enfoque constante
              en optimizar el rendimiento del producto final al máximo.
            </p>
          </div>
        </div>
      </section>
      <Skills />
    </React.Fragment>
  );
};

export default About;
