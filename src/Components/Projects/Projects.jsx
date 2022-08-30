import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import modesens from "../../Assets/Requird-image/modesens.png";
import favbag from "../../Assets/Requird-image/favbag.png";
import bbasket from "../../Assets/Requird-image/bbasket.png";
import geek from "../../Assets/Requird-image/geek.png";
import monster from "../../Assets/Requird-image/monster.png";
import tmetric from "../../Assets/Requird-image/tmetric.png";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        {/* geek buying clone */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={geek} alt="Geekbuying.com" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Geekbuying</h2>
              <p>
                Geekbuying is leading E-Commerce electronic website for smart
                electronics gadgets. Built on HTML, CSS, JavaScript for front
                end and localstorage on backend. It's a team project completed
                executed in 5 days.
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
                  href="https://github.com/Rojalini18/Geekbuying-Clone"
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
        {/* big basket clone */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={bbasket} alt="bigbasket-clone" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Bigbasket</h2>
              <p>
                Big Basket is one of the largest online grocery delivery service
                in India. Big Basket provides the convenience of finding all of
                customer needs from daily household items to other grocery items
                at a single platform. Built on HTML, CSS, JavaScript for front
                end and localstorage for backend.
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
                  href="https://github.com/Rojalini18/Big-Basket"
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
        {/* fab bag clone */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={favbag} alt="fabbag clone" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Fab-bag</h2>
              <p>
                Fab Bag is India's largest beauty subscription service. Receive
                amazing sample/full-size products at least twice the price you
                pay in a delightful bag every month. Built on HTML, CSS, React &
                Redux for front-end and localstorage on backend. It's a team
                project completed executed in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <FaReact />
                <SiRedux/>
              </div>
              <div>
                <a
                  href="https://peppy-frangipane-9fee86.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rojalini18/Fab-Bag-Clone"
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
        {/* modesens clone */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={modesens} alt="modesens clone" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>
                {" "}
                <main>Modesens</main>
              </h2>
              <p>
                ModeSens is an American retail technology company providing
                men's, women's and children's apparel and accessories. Built on
                HTML, CSS, React & Redux for front-end and localstorage on
                backend. It's a team project completed executed in 5 days.
              </p>
              <div>
                
                <SiHtml5 />
                <DiCss3 />
                <FaReact />
                <SiRedux/>
              </div>
              <div>
                <a
                  href="https://modesens-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rojalini18/Modesens-Clone"
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
        {/* monster india clone */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={monster} alt="monster" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Monster-India</h2>
              <p>
                Monster India, India’s leading online career and recruitment
                resource with its cutting edge technology provides relevant
                profiles to employers and relevant jobs to jobseekers. Built on
                HTML, CSS, React & Redux for front-end and localstorage on
                backend. It's a team project completed executed in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <FaReact />
                <SiRedux/>
              </div>
              <div>
                <a
                  href="https://stellular-kleicha-361f06.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rojalini18/Monster-India-Clone"
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
        {/* tmetric clone */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={tmetric} alt="tmetric" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>T-metric</h2>
              <p>
                T-metric is a time tracking software which provides time
                tracking service for freelancers and small business owners who
                want to optimize their business processes and increase personal
                productivity. Built on HTML, CSS, React & Redux for front-end
                and Nodejs, ExpressJs & MongoDB on backend. It's a team project
                completed executed in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://creative-biscotti-30bdf4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rojalini18/T-metric-Clone"
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
