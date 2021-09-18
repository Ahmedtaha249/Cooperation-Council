import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { userContext } from "../../App";
import { CgLogIn } from "react-icons/cg";
import { BiUserPlus } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";
import "../navigation/navigation.css";
import { GiPlanePilot } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import { ImTable2 } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";

import { HiOutlineUserGroup } from "react-icons/hi";
const Navigation = () => {
  let {  url } = useRouteMatch();
  const user = useContext(userContext);
  return (
    <div className="nav_div">
      {!user.token ? (
        <div className="nav">
          <label
            style={{
              fontSize: "20px",
              textAlign: "center",
              paddingLeft: "12px",
            }}
          >
            <span style={{ color: "rgb(19,145,210)" }}>Tre</span>
            <span style={{ color: "rgb(252,158,21)" }}>val</span>
            <GiPlanePilot style={{ fontSize: "3vw", color: "white" }} />
            <span style={{ color: "rgb(227,64,61)" }}>eo</span>
          </label>
          <Link to={`/about`} className="about">
            <HiOutlineUserGroup
              style={{ fontSize: "1.1vw", verticalAlign: "middle" }}
            />
            About
          </Link>
          <Link to={`/contact`} className="contac">
            <MdContactPhone
              style={{ fontSize: "1.1vw", verticalAlign: "middle" }}
            />
            Contact us
          </Link>
          <Link to={`/signUp`} className="sign">
            <BiUserPlus
              style={{ fontSize: "1.1vw", verticalAlign: "middle" }}
            />
            signUp
          </Link>
          <Link to={`/login`} className="log">
            <CgLogIn style={{ fontSize: "1.1vw", verticalAlign: "middle" }} />
            Login
          </Link>
          <Link to={`/`} className="main-nav">
            <AiOutlineHome style={{ fontSize: "1.1vw" }} />
            Main
          </Link>
        </div>
      ) : (
        <div className="nav">
          <label
            style={{
              fontSize: "20px",
              textAlign: "center",
              paddingBottom: "6px",
              paddingLeft: "12px",
            }}
          >
            <span style={{ color: "rgb(19,145,210)" }}>Tre</span>

            <span style={{ color: "rgb(252,158,21)" }}>val</span>
            <GiPlanePilot style={{ fontSize: "3vw", color: "white" }} />
            <span style={{ color: "rgb(227,64,61)" }}>eo</span>
          </label>

          <Link to={`/logout`} className="logout_nav">
            {" "}
            <BiLogOut
              style={{ fontSize: "1.1vw", verticalAlign: "middle" }}
            />{" "}
            LogOut
          </Link>
          <Link to={`/home`} className="home_nav">
            <FaHome style={{ fontSize: "1.1vw", verticalAlign: "middle" }} />
            Home
          </Link>
          <Link to={`/myBooking`} className="myBooking_nav">
            <ImAddressBook
              style={{ fontSize: "1.1vw", verticalAlign: "middle" }}
            />
            Mybooking
          </Link>
        </div>
      )}
    </div>
  );
};
export default Navigation;
