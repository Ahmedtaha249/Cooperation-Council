import React, { useState, createContext } from "react";
import { Home } from "./components/home/Home";
import Table from "./components/ui/table";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Navigation from "../src/components/navigation/Navigation";
import About from "./components/about/About";
import "./App.css";
import { Route, useRouteMatch, Switch, useHistory } from "react-router-dom";
import Weather from "../src/components/ui/weather";
import Attractions from "../src/components/ui/attractions";
import Cities from "../src/components/ui/cities";
import Footer from "../src/components/footer/footer";
import { UpdateFlightBooking } from "./components/updateFlightBooking/UpdateFlightBooking";
import Contact from "./components/contact/Contact";

export const userContext = createContext();
const App = () => {
  const [value, setvalue] = useState();
  const [values, setvalues] = useState();
  let { path, url } = useRouteMatch();
  const [token, setToken] = useState();
  const state = { token, setToken };
  return (
    <div className="App">
      <Route
        path={`${path}/Update`}
        render={() => <UpdateFlightBooking value={values} state={state} />}
      />
      <Switch>
        <userContext.Provider value={state}>
          <Navigation />
          <Route path={`${path}/signUp`} component={SignUp} />
          <Route path={`${path}/login`} component={Login} />
          <Route path={`${path}/contact`} component={Contact} />
          <Route path={`${path}/About`} component={About} />
          <Route
            path={`${path}/home`}
            render={() => <Home setvalue={setvalues} />}
          />
          <Route
            path={`${path}/Table`}
            render={() => <Table value={values} state={state} />}
          />
        </userContext.Provider>
      </Switch>
      <Route path={`${path}/mainPage`} component={Weather}></Route>
      <Route path={`${path}/mainPage`} component={Cities}></Route>
      <Route path={`${path}/mainPage`} component={Attractions}></Route>
      <Route path={`${path}/mainPage`} component={Footer}></Route>
    </div>
  );
};
export default App;
