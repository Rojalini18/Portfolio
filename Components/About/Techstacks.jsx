import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript , SiTypescript} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML 5</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS 3</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Node JS</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express JS</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React JS</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>Mongo DB</h5>
          </div>
          <div>
            <SiMaterialui />
            <h5>Material UI</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>
          {/* <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div> */}
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
