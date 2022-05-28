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
import { VscJson } from "react-icons/vsc";
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
              "Geekbuying.com" is leading E-Commerce website for smart electronics gadgets. Built on HTML, CSS, JavaScript for front end and Localstorage on backend. It's a team project completed executed in 5 days.
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
              Big Basket is one of the largest online grocery delivery service in India. Big Basket provides the convenience of finding all of customer needs from daily household items to other grocery items at a single platform. It is a key driver in revolutionizing the online grocery market in India.
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
                First indivisual project Built on HTML, CSS, JavaScript for front end and youtube API for showing the videos. 
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
              <h2>Google Stopwatch</h2>
              <p>
                Mini project of a Google Stopwatch game built using ReactJS. Features : Button for Resetting The Timer , start and Puse .
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
                  alt="Unsplash Image Search"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Omdb Movie App</h2>
              <p>
                You can use this app to search your favourite movies. Built to learn APIs and use them in the project.
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
