import React from "react";
import Skill from "./Skill";
import psqlStiker from "../assets/image/postgresql-icon.svg";
import typescriptStiker from "../assets/image/typescript-programming-language.svg";
import javascriptStiker from "../assets/image/javascript-logo-svg-vector.svg";
import csticker from "../assets/image/skills/c.png";
import phpSticker from "../assets/image/skills/php.png";
import javaSticker from "../assets/image/skills/java.png";
import mysqlSticker from "../assets/image/skills/mysql.png";
import sqlserverSticker from "../assets/image/skills/sqlserver.png";
import netSticker from "../assets/image/skills/net.png";
import laravelSticker from "../assets/image/skills/laravel.png";
import javasfSticker from "../assets/image/skills/jsf.png";
import angularSticker from "../assets/image/skills/angular.png";
import reactnativeSticker from "../assets/image/skills/react-native.png";
import ionicSticker from "../assets/image/skills/ionic.png";
import flutterSticker from "../assets/image/skills/flutter.png";
import vstudioSticker from "../assets/image/skills/vstudio.png";
import vscodeSticker from "../assets/image/skills/vcode.png";
import sublimeSticker from "../assets/image/skills/sublime-text.png";
import netbeansSticker from "../assets/image/skills/netbeans.png";
import postmanSticker from "../assets/image/skills/postman.png";
import insomniaSticker from "../assets/image/skills/insomnia.png";
import dockerSticker from "../assets/image/skills/docker.png";
import androidSticker from "../assets/image/skills/android-studio.png";
import expogoSticker from "../assets/image/skills/expo-go.png";
import githubSticker from "../assets/image/skills/github.png";
import powerbiSticker from "../assets/image/skills/powerbi.png";
import symfonySticker from "../assets/image/skills/symfony.png";
import xamarinSticker from "../assets/image/skills/xamarin.png";
import azureSticker from "../assets/image/skills/azure.png";
import googlecSticker from "../assets/image/skills/google-clud.png";
import officeSticker from "../assets/image/skills/office.png";
import digitalocean from "../assets/image/skills/digitalocean.png";
import xaampSticker from "../assets/image/skills/xaamp.png";
import wampSticker from "../assets/image/skills/wamp.png";
import htmlStiker from "../assets/image/html.png";
import cssStiker from "../assets/image/css-logo.png";
import reactStiker from "../assets/image/react-logo22.png";
import gitStiker from "../assets/image/git-logo2.png";
import nodeStiker from "../assets/image/nodejs-icon-logo-svg-vector.svg";
import mongodbtStiker from "../assets/image/mongo.png";
import bootstrapStiker from "../assets/image/bootstrap-5-1.svg";
import vueStiker from "../assets/image/vue-js-1.svg";
import nestStiker from "../assets/image/nestjs.svg";
import kamateraSticker from "../assets/image/skills/kamateracloud.png";
import cypressSticker from "../assets/image/skills/cypress.png";
import apexSticker from "../assets/image/skills/apexchart.png";
const Skills = () => {
  return (
    <section className="s-resume target-section">
      <div className="row s-resume__section ">
        <div className="column  tab-12">
          <h3 id="skills" className="section-header">
            Habilidades
          </h3>
          <h2 className="section-header-allcaps">Lenguajes / Base de Datos</h2>
        </div>
        <div className="column large-10 tab-12">
          <div className="resume-block">
            <ul className="skill-bars-fat skill-grid">
              <Skill skill="C#" src={csticker} title="C#" alt="C#-logo" />
              <Skill skill="PHP" src={phpSticker} title="PHP" alt="php-logo" />
              <Skill
                skill="Java"
                src={javaSticker}
                title="Java"
                alt="java-logo"
              />
              <Skill
                skill="HTML"
                src={htmlStiker}
                title="HTML"
                alt="html-logo"
              />
              <Skill skill="CSS" src={cssStiker} title="CSS" alt="css-logo" />
              <Skill
                skill="JavaScript"
                src={javascriptStiker}
                title="JavaScript"
                alt="javascript-logo"
              />
              <Skill
                skill="TypeScript"
                src={typescriptStiker}
                title="TypeScript"
                alt="typescript-logo"
              />
              <Skill
                skill="MySQL"
                src={mysqlSticker}
                title="MySQL"
                alt="mysql-logo"
              />
              <Skill
                skill="SqlServer"
                src={sqlserverSticker}
                title="SqlServer"
                alt="sqlserver-logo"
              />
              <Skill
                skill="Postgresql"
                src={psqlStiker}
                title="PostgreSQL"
                alt="psql-logo"
              />
              <Skill
                skill="MongoDB"
                src={mongodbtStiker}
                title="MongoDB"
                alt="mongodb-leaf-logo"
              />
            </ul>
          </div>
        </div>
        <div className="column  tab-12">
          <h2 className="section-header-allcaps">Frameworks / Tecnologías</h2>
        </div>
        <div className="column large-10 tab-12">
          <div className="resume-block">
            <ul className="skill-bars-fat skill-grid">
              <Skill
                skill=".Net"
                src={netSticker}
                title=".Net"
                alt="net-logo"
              />
              <Skill
                skill="laravel"
                src={laravelSticker}
                title="Laravel"
                alt="laravel-logo"
              />
              <Skill
                skill="symfony"
                src={symfonySticker}
                title="Symfony"
                alt="symfony-logo"
              />
              <Skill
                skill="JavaSF"
                src={javasfSticker}
                title="JavaSF"
                alt="jsf-logo"
              />
              <Skill
                skill="React"
                src={reactStiker}
                title="React Js - React Native"
                alt="react-logo"
              />
              <Skill
                skill="Angular"
                src={angularSticker}
                title="Angular"
                alt="angular-logo"
              />
              <Skill
                skill="R.Native"
                src={reactnativeSticker}
                title="R.Native"
                alt="reactnative-logo"
              />
              <Skill
                skill="Flutter"
                src={flutterSticker}
                title="Flutter"
                alt="flutter-logo"
              />
              <Skill
                skill="Ionic"
                src={ionicSticker}
                title="Ionic"
                alt="ionic-logo"
              />
              <Skill
                skill="xamarin"
                src={xamarinSticker}
                title="Xamarin"
                alt="xamarin-logo"
              />
              <Skill
                skill="Node"
                src={nodeStiker}
                title="Node Js"
                alt="node-logo"
              />
              <Skill
                skill="Vue"
                src={vueStiker}
                title="Vue Js"
                alt="vue-logo"
              />
              <Skill
                skill="Nest"
                src={nestStiker}
                title="Nest Js"
                alt="nest-logo"
              />
            </ul>
          </div>
        </div>
        <div className="column  tab-12">
          <h2 className="section-header-allcaps">Herramientas</h2>
        </div>
        <div className="column large-10 tab-12">
          <div className="resume-block">
            <ul className="skill-bars-fat skill-grid">
              <Skill
                skill="VStudio"
                src={vstudioSticker}
                title="VStudio"
                alt="vstudio-logo"
              />
              <Skill
                skill="VSCode"
                src={vscodeSticker}
                title="VSCode"
                alt="vscode-logo"
              />
              <Skill
                skill="Sublime"
                src={sublimeSticker}
                title="Sublime"
                alt="sublime-logo"
              />
              <Skill
                skill="NetBeans"
                src={netbeansSticker}
                title="NetBeans"
                alt="netbeans-logo"
              />
              <Skill
                skill="Postman"
                src={postmanSticker}
                title="Postman"
                alt="postman-logo"
              />
              <Skill
                skill="Insomnia"
                src={insomniaSticker}
                title="Insomnia"
                alt="insomnia-logo"
              />
              <Skill
                skill="A.Studio"
                src={androidSticker}
                title="A.Studio"
                alt="android-logo"
              />
              <Skill
                skill="ExpoGo"
                src={expogoSticker}
                title="ExpoGo"
                alt="expogo-logo"
              />
              <Skill
                skill="Docker"
                src={dockerSticker}
                title="Docker"
                alt="docker-logo"
              />
              <Skill
                skill="PowerBI"
                src={powerbiSticker}
                title="PowerBI"
                alt="powerbi-logo"
              />
              <Skill
                skill="GitHub"
                src={githubSticker}
                title="GitHub"
                alt="github-logo"
              />
              <Skill skill="Git" src={gitStiker} title="Git" alt="git-logo" />
              <Skill
                skill="bootstrap"
                src={bootstrapStiker}
                title="Bootstrap"
                alt="bootstrap-logo"
              />
              <Skill
                skill="azure"
                src={azureSticker}
                title="Azure"
                alt="azure-logo"
              />
              <Skill
                skill="Kamatera"
                src={kamateraSticker}
                title="Kamatera"
                alt="kamatera-cloud-logo"
              />

              <Skill
                skill="Cypress"
                src={cypressSticker}
                title="Cypress"
                alt="cypres-logo"
              />
              <Skill
                skill="ApexChart"
                src={apexSticker}
                title="Apexchart"
                alt="apexchart-logo"
              />
              <Skill
                skill="Xaamp"
                src={xaampSticker}
                title="Xaamp"
                alt="xaamp-logo"
              />
              <Skill
                skill="Wamp"
                src={wampSticker}
                title="Wamp"
                alt="Wamp-logo"
              />
              <Skill
                skill="Oficce"
                src={officeSticker}
                title="Oficce"
                alt="office-logo"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
