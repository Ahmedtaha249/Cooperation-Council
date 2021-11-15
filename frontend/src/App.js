import React, { useState, createContext } from "react";
import Home from "./components/home/Home";
import Table from "./components/ui/table";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import logOut from "./components/logout/logOut";
import Navigation from "../src/components/navigation/Navigation";
import About from "./components/about/About";
import "./App.css";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import Attractions from "../src/components/ui/attractions";
import Cities from "../src/components/ui/cities";
import Footer from "../src/components/footer/footer";
import { UpdateFlightBooking } from "./components/updateFlightBooking/UpdateFlightBooking";
import Contact from "./components/contact/Contact";
import SideBar from "./components/sidebar";
import { MyBooking } from "./components/myBooking/MyBooking";

export const userSign = createContext();

export const userContext = createContext();
const App = () => {
  const [adult, setAdult] = useState();
  const [flights, setflights] = useState();
  let { path } = useRouteMatch();
  const [token, setToken] = useState();
  const state = { token, setToken };
  const [email, setEmail] = useState("");
  const [book, setBook] = useState();
  const [password, setPassword] = useState("");
  return (
    <div className="App-s">
      <div className="App">
        <Route
          path={`/myBooking`}
          render={() => (
            <MyBooking
              flights={flights}
              state={state}
              book={book}
              adult={adult}
            />
          )} ///
        />
        <Switch>
          <userContext.Provider value={state}>
            <Navigation />

            <div className="navPlus" />
            <Route
              path={`/Update`}
              render={() => (
                <UpdateFlightBooking value={flights} state={token} />
              )}
            />

            <userSign.Provider
              value={{ email, password, setEmail, setPassword }}
            >
              
              <Route path={`/signUp`} component={SignUp} />
            
              <Route path={`/login`} component={Login} />

              <Route path={`/logout`} component={logOut} />
            </userSign.Provider>

            <Route path={`/contact`} component={Contact} />
            <Route path={`/about`} component={About} />
            <Route
              path={`/home`}
              render={() => <Home setvalue={setflights} setadult={setAdult} />}
            />
            <Route
              path={`/Table`}
              render={() => (
                <Table
                  value={flights}
                  state={state}
                  adult={adult}
                  setBook={setBook}
                /> //
              )}
            />
            <Route exact path={"/"} component={Cities}></Route>
            <Route exact path={"/"} component={Attractions}></Route>
            <Route exact path={"/"} component={SideBar}></Route>
          </userContext.Provider>
        </Switch>

        <Footer />
      </div>
    </div>
  );
};
export default App;
