import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { userContext } from "../../App";
const LogOut = () => {
  const history = useHistory();
  const backUser = useContext(userContext);
  localStorage.clear();
  backUser.setToken("");
  history.push("/login");
  return <div></div>;
};
export default LogOut;
