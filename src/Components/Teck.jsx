import React from "react";
import html from "../Logos/html-5.png";
import css from "../Logos/css-3.png";
import reacticon from "../Logos/reactjs.png";
import javascript from "../Logos/javascript.png";
import mongodb from "../Logos/mongodb.png";
import node from "../Logos/node-js.png";
import express from "../Logos/express.png";
import redux from "../Logos/redux.png";
import typescript from "../Logos/typescript.png";
import chakraui from "../Logos/chakra-ui.png";
import postman from "../Logos/postman.png";

import git from "../Logos/git.png";
import "../Styles/Teck.css";
const logos = [
  { i: html, t: "HTML" },
  { i: css, t: "CSS" },
  { i: javascript, t: "Javascript" },
  { i: reacticon, t: "ReactJS" },
  { i: mongodb, t: "MongoDB" },
  { i: node, t: "NodeJS" },
  { i: express, t: "ExpressJS" },
  { i: redux, t: "Redux" },
  { i: typescript, t: "Typescript" },
  { i: chakraui, t: "ChakraUI" },
  { i: git, t: "Git" },
  { i: postman, t: "Postman" },
];

export default function Teck() {
  return (
    <div id="teck">
      <h1 className="headingTeck">Technologies I've worked on</h1>
      <hr className="lineTeck" />
      <div className="iconsContainer">
        {logos.map((el) => (
          <div key={el.i} className="box">
            <img className="icon" src={el.i} alt="iconss" />
            <p className="title">{el.t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
