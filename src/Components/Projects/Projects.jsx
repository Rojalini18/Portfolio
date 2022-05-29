import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import youtube from "../../Assets/Requird-image/you.png"
import stop from "../../Assets/Requird-image/stop.png"
import bbasket from "../../Assets/Requird-image/bbasket.png"
import geek from "../../Assets/Requird-image/geek.png"
import movie from "../../Assets/Requird-image/movie.png"



export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={geek}
                  alt="Geekbuying.com"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Geekbuying-clone</h2>
              <p>
              Geekbuying is leading E-Commerce electronic website for smart electronics gadgets. Built on HTML, CSS, 
              JavaScript for front end and localstorage on backend. It's a team project completed executed in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="  https://spontaneous-mandazi-279e9e.netlify.app/index.html
                  "
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/gautam6023/Unit-2-Project--Clone-of-geekbuying.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={bbasket}
                  alt="Pluralsight-clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Bigbasket-clone</h2>
              <p>
              Big Basket is one of the largest online grocery delivery service in India. Big Basket provides the 
              convenience of finding all of customer needs from daily household items to other grocery 
              items at a single platform. Built on HTML, CSS, 
              JavaScript for front end and localstorage for backend.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://bigbasket-clone26.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/callmeabhi1997/Big-Basket"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={youtube}
                  alt="Youtube clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Youtube-clone </h2>
              <p>
                Clone of youtube made by me, where user can watch and search videos. Built on HTML, CSS, JavaScript
                for front end and youtube API for showing the videos. 
              </p>
              <div>
              <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://graceful-faloodeh-d77fc4.netlify.app//"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                  See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rojalini18/Youtube"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={stop}
                  alt="Google Stopwatch"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Google Timer</h2>
              <p>
                Mini project of Google Timer & Stopwatch made by me. Built on ReactJS. Features : Button for resetting
                start and pause the timer.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://cheery-chaja-8ac839.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rojalini18/Google-Timer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={movie}
                  alt="Omdb movie application"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Omdb Movie App</h2>
              <p>
              Mini project of Omdb movie application made by me. Built on HTML, CSS, JavaScript for front end and 
              omdb API for showing searched movies. 
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://ubiquitous-sawine-4b9946.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rojalini18/Movie-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
