import React from "react";
import "./footer.css";
import { GiPlanePilot } from "react-icons/gi";
import { Link, useRouteMatch } from "react-router-dom";

import {
  faFacebookF,
  faTwitterSquare,
  faLinkedin,
  faInstagram,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="footer_div">
      <div className="footer_icons">
        <FontAwesomeIcon style={{ fontSize: "3vw" }} icon={faFacebookF} />
        <FontAwesomeIcon style={{ fontSize: "3vw" }} icon={faTwitterSquare} />
        <FontAwesomeIcon style={{ fontSize: "3vw" }} icon={faLinkedin} />
        <FontAwesomeIcon style={{ fontSize: "3vw" }} icon={faInstagram} />
        <FontAwesomeIcon style={{ fontSize: "3vw" }} icon={faYoutubeSquare} />
      </div>
      <br />
      <br />
      <div className="footer_links">
        <ul>
          <li>
            <Link to={`/contact`}>Contact Us</Link>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Trevaleo Business Studio</a>
          </li>
          <a>Trevaleo Magazine</a>
          <li></li>
        </ul>
        <ul>
          <li>
            <a>Help</a>
          </li>
          <li>
            <a>Terms and conditions</a>
          </li>

          <li>
            <a>Legal information</a>
          </li>
        </ul>
      </div>
      <h1 style={{ fontSize: "20px" }}>
        <span style={{ color: "rgb(19,145,210)" }}>Tre</span>
        <span style={{ color: "rgb(252,158,21)" }}>val</span>
        <GiPlanePilot style={{ fontSize: "3vw" }} />
        <span style={{ color: "rgb(227,64,61)" }}>eo</span>
      </h1>
      <h6>Copyright 2021 trevaleo | All rights reserved.</h6>
    </div>
  );
};

export default Footer;
