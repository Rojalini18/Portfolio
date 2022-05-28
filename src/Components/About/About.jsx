import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Rojalini Das</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        A passionate Front-end Web Developer and a JavaScript enthusiast who loves to create smart and highly polished
        interfaces for the web. Looking forward to joining a team as a front-end developer where I will have
        opportunities to utilize my experience in projects and learn in
        global work environments.
         {/* I am equipped with a variety of technologies and tools to help me build the best
          possible product. */}
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Rojalini18"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:rojalini08das@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+917683928012"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/rojalini-das-11564a1a0/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/11AWqI1dqP5Ds3jjvA-K9K7eRQFM-EJth/view?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
          <a
            href="https://www.facebook.com/rozalinee.rozy"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.google.co.in/maps/place/Bhubaneswar,+Odisha/@20.3011504,85.6803649,11z/data=!3m1!4b1!4m5!3m4!1s0x3a1909d2d5170aa5:0xfc580e2b68b33fa8!8m2!3d20.2960587!4d85.8245398?hl=en"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
