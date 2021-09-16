import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { userContext } from "../../App";

import "../navigation/navigation.css";
const Navigation = () => {
  let { path, url } = useRouteMatch();
  const user = useContext(userContext);
  return (
    <div>
      {!user.token ? (
        <div className="nav">
          <label className="logo"> <span className="span_1">tra</span><span className="span_2">vel</span><span className="span_3">eo</span></label>
          <Link to={`${url}/about`} className="about">
            About
          </Link>
          <Link to={`${url}/contact`} className="contac">
            Contact
          </Link>
          <Link to={`${url}/signUp`} className="sign">
            signUp
          </Link>
          <Link to={`${url}/login`} className="log">
            Login
          </Link>
        </div>
      ) : (
        <div className="nav">
             <label className="logo">  <span className="span_1">tra</span><span className="span_2">vel</span><span className="span_3">eo</span></label>
          <Link to={`${url}/home`} className="nav-home">home</Link>
          <Link to={`${url}/Table`} className="nav-table">Table</Link>
          <Link to={`${url}/Update`} className="nav-update">update</Link>
        </div>
      )}
    </div>
  );
};
export default Navigation;
