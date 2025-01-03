import React, { useEffect } from "react";
import logoGithub from "../assets/image/github (3).png";
import logoLinkedin from "../assets/image/linkedin.png";
import logoTwitter from "../assets/image/1220365_whatsapp_chat_communication_message_phone_icon.png";
import HeroButton from "./HeroButton";
import HeroSocial from "./HeroSocial";
import "./styles/Hero.css";
const linkedinLink = "https://www.linkedin.com/in/byron-alfredo-barriga-rivera-31294a210/";
const gihubLink = "https://github.com/ByronBarriga96";
const twitterLink = "https://api.whatsapp.com/send/?phone=593983587969&text=&app_absent=0";

const Hero = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    handleScrollToTop()
  }, [])


  return (
    <section id="hero" className="s-hero target-section">
      <div className="s-hero__bg rellax" data-rellax-speed={-7} />
      <div className="row s-hero__content">
        <div className="column">
          <div className="s-hero__content-about">
            <h1>
              <span className="font-500">Byron Barriga</span>
            </h1>
            <h3>
              <span>Desarollador Full Stack</span>
              <br />
              <span>.Net Framework / Core | PHP | ReactJS | Angular | SQL Server | PostgreSQL | React Native | Flutter | Power BI | SCRUM | SOLID | Microservices</span>
            </h3>
            <div className="s-hero__content-social">
              <HeroSocial
                href={linkedinLink}
                src={logoLinkedin}
                alt="logo de linkedin"
                title="LinkedIn"
              />
              <HeroSocial
                href={gihubLink}
                src={logoGithub}
                alt="logo de github"
                title="Github"
              />
              <HeroSocial
                href={twitterLink}
                src={logoTwitter}
                alt="logo de telegram"
                title="Twitter"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="s-hero__scroll links">
        <HeroButton
          path="/contact"
          // text="Hire Me"
          text="Contáctame"
        />
        <HeroButton
          path="/portfolio"
          //text="Explore Me"
          text="Proyectos"
        />
      </div>
    </section>
  );
};

export default Hero;
